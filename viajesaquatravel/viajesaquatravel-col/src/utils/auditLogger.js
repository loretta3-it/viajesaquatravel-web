import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  writeBatch,
} from 'firebase/firestore';
import { db } from '../config/firebase';
import { AUDIT_ACTIONS } from '../schemas/collections';

const LEGACY_ACTION_MAP = {
  UPDATE_AND_PUBLISH: 'UPDATE',
  UPDATE_DRAFT: 'UPDATE',
};

function normalizeActionType(actionType) {
  const mapped = LEGACY_ACTION_MAP[actionType] || actionType;
  if (!AUDIT_ACTIONS.includes(mapped)) {
    throw new Error(
      `actionType inválido "${actionType}". Permitidos: ${AUDIT_ACTIONS.join(', ')}`
    );
  }
  return mapped;
}

/**
 * Calcula únicamente el diff { campo: { from, to } } entre dos versiones de un documento.
 */
export function computeDiff(previousData = {}, nextData = {}) {
  const prev = previousData || {};
  const next = nextData || {};
  const keys = new Set([...Object.keys(prev), ...Object.keys(next)]);
  const diff = {};

  for (const key of keys) {
    if (key === 'updatedAt' || key === 'createdAt') continue;
    const prevVal = prev[key] === undefined ? null : prev[key];
    const nextVal = next[key] === undefined ? null : next[key];
    if (JSON.stringify(prevVal) !== JSON.stringify(nextVal)) {
      diff[key] = { from: prevVal, to: nextVal };
    }
  }

  return diff;
}

/**
 * Registra un evento en audit_logs (API V3).
 */
export async function logAuditAction({
  actionType,
  collectionName,
  documentId,
  adminEmail,
  previousData = null,
  nextData = null,
  changes = null,
}) {
  const safeAction = normalizeActionType(actionType);

  const payload = {
    actionType: safeAction,
    collection: collectionName,
    documentId: String(documentId || ''),
    adminEmail: String(adminEmail || ''),
    timestamp: serverTimestamp(),
    changes: changes || computeDiff(previousData, nextData),
  };

  return addDoc(collection(db, 'audit_logs'), payload);
}

/**
 * Alias retrocompatible para módulos legacy (OffersManager, CatalogManager, EditOfferModal, EditDestinationModal).
 * - Firma de objeto: logAdminAction({ actionType, collectionName, documentId, adminEmail, ... })
 * - Firma posicional LEGACY (la que usan hoy los callers):
 *   logAdminAction(actionType, collectionName, documentId, adminEmail, changes)
 * Como el logger V2, en la ruta legacy un fallo de auditoría se registra en consola y NO interrumpe
 * la operación del administrador.
 */
export async function logAdminAction(firstArg, ...rest) {
  if (firstArg && typeof firstArg === 'object' && !Array.isArray(firstArg)) {
    return logAuditAction(firstArg);
  }

  const [collectionName, documentId, adminEmail, changes] = rest;
  try {
    return await logAuditAction({
      actionType: firstArg,
      collectionName,
      documentId,
      adminEmail,
      changes: changes && typeof changes === 'object' ? changes : {},
    });
  } catch (error) {
    console.error('[AuditLog] No se pudo registrar la acción:', error);
    return null;
  }
}

/**
 * Ejecuta una mutación de documento junto con su registro en audit_logs usando writeBatch.
 *
 * NOTA ARQUITECTÓNICA:
 * La atomicidad de escritura + log en cliente mediante writeBatch es una convención de aplicación;
 * las reglas de Firestore garantizan integridad por documento individual (adminEmail, timestamp y enum),
 * pero no pueden forzar transaccionalmente la creación simultánea de ambos documentos sin Cloud Functions.
 */
export async function commitWithAudit({
  actionType,
  collectionName,
  documentId,
  adminEmail,
  previousData = null,
  nextData = null,
  operation = 'set', // 'set' | 'update' | 'delete'
}) {
  const safeAction = normalizeActionType(actionType);

  const batch = writeBatch(db);
  const targetRef = doc(db, collectionName, documentId);

  if (operation === 'delete') {
    batch.delete(targetRef);
  } else if (operation === 'update') {
    batch.update(targetRef, {
      ...nextData,
      updatedAt: serverTimestamp(),
    });
  } else {
    batch.set(
      targetRef,
      {
        ...nextData,
        updatedAt: serverTimestamp(),
      },
      { merge: true }
    );
  }

  const auditRef = doc(collection(db, 'audit_logs'));
  batch.set(auditRef, {
    actionType: safeAction,
    collection: collectionName,
    documentId: String(documentId),
    adminEmail: String(adminEmail || ''),
    timestamp: serverTimestamp(),
    changes: computeDiff(previousData, nextData),
  });

  await batch.commit();
}