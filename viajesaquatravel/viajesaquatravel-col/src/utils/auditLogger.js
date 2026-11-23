import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../config/firebase'; // Asegúrate de que la ruta apunte correctamente a firebase.js

/**
 * Registra las acciones administrativas en la colección audit_logs de Firestore para mantener trazabilidad.
 * 
 * @param {string} actionType - Tipo de acción (ej. 'CREATE', 'UPDATE', 'TOGGLE_STATUS', 'DELETE')
 * @param {string} collectionName - Colección afectada (ej. 'destinations', 'offers', 'settings')
 * @param {string} documentId - ID del documento modificado
 * @param {string} adminEmail - Correo del administrador responsable del cambio
 * @param {object|null} changes - (Opcional) Objeto con el detalle específico de los campos alterados
 */
export const logAdminAction = async (actionType, collectionName, documentId, adminEmail, changes = null) => {
  try {
    const auditRef = collection(db, 'audit_logs');
    
    // Estructura base del registro de auditoría
    const logData = {
      actionType,
      collection: collectionName,
      documentId,
      adminEmail,
      timestamp: serverTimestamp(),
    };

    // Solo adjuntamos 'changes' si existe y tiene contenido
    if (changes && Object.keys(changes).length > 0) {
      logData.changes = changes;
    }

    await addDoc(auditRef, logData);
    
    // Debugging opcional para el entorno de desarrollo
    console.log(`🛠️ DEBUG [AuditLog] - Acción '${actionType}' en '${collectionName}' registrada exitosamente.`);
    
  } catch (error) {
    // Manejo de error silencioso: Si falla el log, no queremos romper 
    // la experiencia del administrador, pero dejamos rastro en consola.
    console.error("❌ ERROR [AuditLog] - Fallo al registrar la acción:", error);
  }
};