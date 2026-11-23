#!/usr/bin/env node
/**
 * Asigna o revoca el Custom Claim { admin: true } en Firebase Auth (Decisión D5).
 *
 * REQUISITO DE SEGURIDAD:
 * La llave de cuenta de servicio JSON debe permanecer ESTRICTAMENTE FUERA del repositorio.
 *
 * Uso:
 *   GOOGLE_APPLICATION_CREDENTIALS=/ruta/segura/service-account.json node scripts/set-admin-claim.mjs --email admin@viajesaquatravel.com
 *   GOOGLE_APPLICATION_CREDENTIALS=/ruta/segura/service-account.json node scripts/set-admin-claim.mjs --email admin@viajesaquatravel.com --revoke
 */

import { readFileSync } from 'node:fs';
import { initializeApp, cert } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';

function parseArgs(argv) {
  const args = { email: '', uid: '', revoke: false };
  for (let i = 2; i < argv.length; i += 1) {
    const token = argv[i];
    if (token === '--email' && argv[i + 1]) {
      args.email = argv[i + 1].trim();
      i += 1;
    } else if (token === '--uid' && argv[i + 1]) {
      args.uid = argv[i + 1].trim();
      i += 1;
    } else if (token === '--revoke') {
      args.revoke = true;
    }
  }
  return args;
}

async function main() {
  const credPath = process.env.GOOGLE_APPLICATION_CREDENTIALS;
  if (!credPath) {
    console.error(
      'Error: define la variable de entorno GOOGLE_APPLICATION_CREDENTIALS apuntando a la llave JSON fuera del repositorio.'
    );
    process.exit(1);
  }

  const { email, uid, revoke } = parseArgs(process.argv);
  if (!email && !uid) {
    console.error('Uso: node scripts/set-admin-claim.mjs --email <correo> [--revoke]');
    process.exit(1);
  }

  const serviceAccount = JSON.parse(readFileSync(credPath, 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });

  const auth = getAuth();
  const userRecord = email ? await auth.getUserByEmail(email) : await auth.getUser(uid);
  const existingClaims = userRecord.customClaims || {};

  const nextClaims = revoke
    ? { ...existingClaims, admin: false }
    : { ...existingClaims, admin: true };

  await auth.setCustomUserClaims(userRecord.uid, nextClaims);

  console.log(
    `[OK] Usuario ${userRecord.email || userRecord.uid} actualizado -> admin: ${nextClaims.admin}`
  );
  console.log(
    'Nota: el usuario debe cerrar sesión y volver a iniciar sesión (o refrescar su ID token) para reflejar el nuevo claim.'
  );
}

main().catch((err) => {
  console.error('[ERROR] No se pudo actualizar el Custom Claim:', err.message);
  process.exit(1);
});