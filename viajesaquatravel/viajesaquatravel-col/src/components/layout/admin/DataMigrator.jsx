import { useState } from 'react';
import {
  Timestamp,
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
} from 'firebase/firestore';
import { AlertTriangle, CheckCircle2, Database, Play, ShieldCheck } from 'lucide-react';
import { db } from "../../../config/firebase";
import { siteConfig } from "../../../config/siteConfig";
import { useAuth } from "../../../context/AuthContext";
import { validateDocument } from "../../../schemas/collections";
import { logAuditAction } from "../../../utils/auditLogger";
import { parsePrice } from "../../../utils/price";

function convertDatesToTimestamps(record) {
  const next = { ...record };
  for (const field of ['validFrom', 'validUntil']) {
    if (typeof next[field] === 'string' && next[field].trim()) {
      const parsed = new Date(next[field]);
      if (!Number.isNaN(parsed.getTime())) {
        next[field] = Timestamp.fromDate(parsed);
      }
    }
  }
  return next;
}

/**
 * Documentos V2 (sin `status`): se actualizan a V3 conservando las ediciones hechas en el CMS.
 * Solo se reescriben price/currency/priceLabel/originalPrice (string -> número), media, status e isActive;
 * del seed solo se agregan los campos que el documento aún no tiene.
 */
function buildLegacyUpgrade(existing, seedDoc) {
  const parsed = parsePrice(existing.discountPrice ?? existing.price, existing.currency || seedDoc.currency || 'COP');
  const original =
    existing.originalPrice !== undefined && existing.originalPrice !== null && existing.originalPrice !== ''
      ? parsePrice(existing.originalPrice, parsed.currency).price
      : null;
  const media =
    Array.isArray(existing.media) && existing.media.length > 0
      ? existing.media
      : existing.image
        ? [{ type: 'image', url: existing.image }]
        : seedDoc.media || [];

  const forced = {
    price: parsed.price,
    currency: parsed.currency,
    priceLabel: parsed.price === null ? parsed.priceLabel || 'A consultar' : '',
    ...(original !== null ? { originalPrice: original } : {}),
    media,
    status: 'published',
    isActive: typeof existing.isActive === 'boolean' ? existing.isActive : true,
  };
  const missing = Object.fromEntries(
    Object.entries(convertDatesToTimestamps(seedDoc)).filter(
      ([key]) => existing[key] === undefined && !(key in forced)
    )
  );
  return { ...missing, ...forced };
}

function fillMissing(existing, seedDoc) {
  return Object.fromEntries(Object.entries(seedDoc).filter(([key]) => existing[key] === undefined));
}

function buildMigrationPlan() {
  const { seed, agency } = siteConfig;
  const settingsDocs = [
    { id: 'agency', ...agency },
    seed.settings.promo_button,
    seed.settings.aquawoman_page,
    seed.settings.reviews,
  ].filter(Boolean);

  return [
    { collection: 'destinations', docs: seed.destinations || [] },
    { collection: 'offers', docs: seed.offers || [] },
    { collection: 'aquawoman_retreats', docs: seed.aquawoman_retreats || [] },
    { collection: 'services', docs: seed.services || [] },
    { collection: 'banners', docs: seed.banners || [] },
    { collection: 'settings', docs: settingsDocs },
  ];
}

export default function DataMigrator() {
  const { currentUser, isAdmin } = useAuth();
  const [forceOverwrite, setForceOverwrite] = useState(false);
  const [running, setRunning] = useState(false);
  const [report, setReport] = useState([]);
  const [summary, setSummary] = useState(null);

  const runMigration = async ({ dryRun }) => {
    if (!isAdmin || !currentUser?.email) return;

    setRunning(true);
    setReport([]);
    setSummary(null);

    const plan = buildMigrationPlan();
    const logs = [];
    let created = 0;
    let updated = 0;
    let skipped = 0;
    let invalid = 0;

    try {
      for (const group of plan) {
        let groupCreated = 0;
        let groupUpdated = 0;
        let groupSkipped = 0;

        for (const rawDoc of group.docs) {
          const validation = validateDocument(group.collection, rawDoc);
          if (!validation.valid) {
            invalid += 1;
            logs.push({
              level: 'error',
              message: `[INVALID] ${group.collection}/${rawDoc?.id || 'sin-id'}: ${validation.errors.join(' ')}`,
            });
            continue;
          }

          const ref = doc(db, group.collection, rawDoc.id);
          const snap = await getDoc(ref);
          const exists = snap.exists();

          const existing = exists ? snap.data() : null;
          const upgradeMode =
            exists && !forceOverwrite
              ? group.collection === 'settings'
                ? 'fill'
                : existing.status === undefined
                  ? 'legacy'
                  : null
              : null;

          if (exists && !forceOverwrite && !upgradeMode) {
            skipped += 1;
            groupSkipped += 1;
            logs.push({
              level: 'skip',
              message: `[OMITIDO] ${group.collection}/${rawDoc.id} ya existe (sin sobrescritura).`,
            });
            continue;
          }

          let payload;
          if (upgradeMode === 'legacy') {
            payload = { ...buildLegacyUpgrade(existing, rawDoc), updatedAt: serverTimestamp() };
            const merged = validateDocument(group.collection, { ...existing, ...payload, id: rawDoc.id });
            if (!merged.valid) {
              invalid += 1;
              logs.push({
                level: 'error',
                message: `[INVALID tras upgrade V2->V3] ${group.collection}/${rawDoc.id}: ${merged.errors.join(' ')}`,
              });
              continue;
            }
          } else if (upgradeMode === 'fill') {
            const missingFields = fillMissing(existing, rawDoc);
            if (Object.keys(missingFields).length === 0) {
              skipped += 1;
              groupSkipped += 1;
              logs.push({ level: 'skip', message: `[OMITIDO] ${group.collection}/${rawDoc.id} ya está completo.` });
              continue;
            }
            payload = { ...missingFields, updatedAt: serverTimestamp() };
          } else {
            payload = {
              ...convertDatesToTimestamps(rawDoc),
              updatedAt: serverTimestamp(),
              ...(exists ? {} : { createdAt: serverTimestamp() }),
            };
          }
          const verb = upgradeMode ? 'Actualizaría (upgrade)' : exists ? 'Sobrescribiría' : 'Crearía';

          if (dryRun) {
            if (exists) {
              updated += 1;
              groupUpdated += 1;
            } else {
              created += 1;
              groupCreated += 1;
            }
            logs.push({
              level: 'ok',
              message: `[DRY-RUN] ${verb} ${group.collection}/${rawDoc.id}`,
            });
          } else {
            await setDoc(ref, payload, { merge: Boolean(upgradeMode) });
            if (exists) {
              updated += 1;
              groupUpdated += 1;
            } else {
              created += 1;
              groupCreated += 1;
            }
            logs.push({
              level: 'ok',
              message: `[MIGRADO] ${exists ? 'Actualizado' : 'Creado'} ${group.collection}/${rawDoc.id}`,
            });
          }
        }

        if (!dryRun && (groupCreated > 0 || groupUpdated > 0)) {
          await logAuditAction({
            actionType: 'MIGRATE',
            collectionName: group.collection,
            documentId: `batch-${group.collection}`,
            adminEmail: currentUser.email,
            changes: {
              migrationSummary: {
                from: null,
                to: {
                  created: groupCreated,
                  updated: groupUpdated,
                  skipped: groupSkipped,
                  forceOverwrite,
                },
              },
            },
          });
        }
      }

      setSummary({ dryRun, created, updated, skipped, invalid });
      setReport(logs);
    } catch (error) {
      logs.push({
        level: 'error',
        message: `[ERROR FATAL] ${error.message}`,
      });
      setReport(logs);
    } finally {
      setRunning(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
      <div className="flex items-center gap-3 mb-4">
        <Database className="w-6 h-6 text-slate-900" />
        <div>
          <h1 className="text-xl font-semibold text-slate-900">
            Migrador de Datos V3 (Schema v{siteConfig.schemaVersion})
          </h1>
          <p className="text-sm text-slate-600">
            Valida contra esquema V3, protege ediciones existentes y registra auditoría MIGRATE.
          </p>
        </div>
      </div>

      {!isAdmin && (
        <div className="mb-4 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-sm flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 shrink-0" />
          <span>Debes tener el Custom Claim admin: true para ejecutar la migración.</span>
        </div>
      )}

      <label className="flex items-center gap-3 p-3 mb-5 rounded-xl bg-slate-50 border border-slate-200 cursor-pointer">
        <input
          type="checkbox"
          checked={forceOverwrite}
          onChange={(e) => setForceOverwrite(e.target.checked)}
          disabled={running || !isAdmin}
          className="w-4 h-4"
        />
        <span className="text-sm text-slate-700">
          <strong>Forzar sobrescritura:</strong> reemplaza documentos ya existentes en Firestore
          (desactivado por defecto para proteger ediciones del CMS).
        </span>
      </label>

      <div className="flex flex-wrap gap-3 mb-6">
        <button
          type="button"
          disabled={running || !isAdmin}
          onClick={() => runMigration({ dryRun: true })}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-800 text-sm font-medium hover:bg-slate-50 disabled:opacity-50"
        >
          <ShieldCheck className="w-4 h-4" />
          Simular (Dry-Run)
        </button>

        <button
          type="button"
          disabled={running || !isAdmin}
          onClick={() => runMigration({ dryRun: false })}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 disabled:opacity-50"
        >
          <Play className="w-4 h-4" />
          {running ? 'Ejecutando...' : 'Ejecutar Migración V3'}
        </button>
      </div>

      {summary && (
        <div className="mb-4 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-sm flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 shrink-0" />
          <span>
            {summary.dryRun ? 'Resultado Dry-Run' : 'Migración completada'} — Creados:{' '}
            <strong>{summary.created}</strong> | Actualizados:{' '}
            <strong>{summary.updated}</strong> | Omitidos:{' '}
            <strong>{summary.skipped}</strong> | Inválidos:{' '}
            <strong>{summary.invalid}</strong>
          </span>
        </div>
      )}

      {report.length > 0 && (
        <div className="max-h-80 overflow-y-auto rounded-xl bg-slate-950 text-slate-100 p-4 font-mono text-xs space-y-1">
          {report.map((entry, idx) => (
            <div
              key={idx}
              className={
                entry.level === 'error'
                  ? 'text-red-400'
                  : entry.level === 'skip'
                    ? 'text-amber-300'
                    : 'text-emerald-300'
              }
            >
              {entry.message}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}