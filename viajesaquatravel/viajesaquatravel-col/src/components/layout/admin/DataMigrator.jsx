import React, { useState } from 'react';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { siteConfig } from '../../config/siteConfig';
import { ShieldCheck, AlertCircle, Loader2 } from 'lucide-react';

export default function DataMigrator() {
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [log, setLog] = useState([]);

  const addLog = (message) => {
    setLog(prev => [...prev, message]);
  };

  const handleMigration = async () => {
    setStatus('loading');
    setLog([]);
    addLog('Iniciando migración de datos a Firestore...');

    try {
      // 1. Colección settings -> Documento agency
      addLog('Migrando datos de la agencia (settings/agency)...');
      await setDoc(doc(db, 'settings', 'agency'), siteConfig.agency);
      addLog('✓ Datos de la agencia guardados con éxito.');

      // 2. Colección destinations -> Iterando siteConfig.catalog
      addLog(`Migrando ${siteConfig.catalog.length} destinos del catálogo...`);
      for (const item of siteConfig.catalog) {
        // Estructuramos el nuevo objeto mapeando 'image' a 'media'
        const destinationData = {
          ...item,
          media: [{ type: 'image', url: item.image }]
        };
        // Eliminamos la propiedad original 'image' para mantener limpia la BD
        delete destinationData.image;

        await setDoc(doc(db, 'destinations', item.id), destinationData);
      }
      addLog('✓ Destinos guardados con éxito.');

      // 3. Colección offers -> Iterando siteConfig.offers.deals
      if (siteConfig.offers && siteConfig.offers.deals) {
        addLog(`Migrando ${siteConfig.offers.deals.length} ofertas de campaña...`);
        for (const deal of siteConfig.offers.deals) {
          await setDoc(doc(db, 'offers', deal.id), deal);
        }
        addLog('✓ Ofertas guardadas con éxito.');
      } else {
        addLog('⚠ No se encontraron ofertas para migrar.');
      }

      setStatus('success');
      addLog('¡Migración completada exitosamente!');

    } catch (error) {
      console.error("Error en la migración:", error);
      setStatus('error');
      addLog(`❌ Error durante la migración: ${error.message}`);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-8 my-12 bg-slate-900 border border-slate-800 rounded-2xl shadow-xl text-slate-300">
      <div className="flex items-center gap-3 mb-6 border-b border-slate-800 pb-4">
        <ShieldCheck className="text-blue-500 w-8 h-8" />
        <h2 className="text-2xl font-bold text-white">Panel de Administración: Migración V2</h2>
      </div>

      <p className="mb-6 text-sm text-slate-400">
        Este script leerá el archivo estático <code className="bg-slate-800 px-1 rounded">siteConfig.js</code> y escribirá los datos en las colecciones correspondientes de Firestore. 
        <strong> Advertencia:</strong> Ejecutar este proceso sobrescribirá los documentos existentes que tengan el mismo ID.
      </p>

      <button
        onClick={handleMigration}
        disabled={status === 'loading'}
        className={`flex items-center justify-center gap-2 w-full py-4 rounded-xl font-bold text-white transition-all shadow-lg ${
          status === 'loading' 
            ? 'bg-blue-600/50 cursor-not-allowed' 
            : 'bg-blue-600 hover:bg-blue-500 shadow-blue-900/20'
        }`}
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="animate-spin" size={20} />
            Migrando datos...
          </>
        ) : (
          'Migrar Datos a Firestore'
        )}
      </button>

      {/* Log de Consola Visual */}
      {log.length > 0 && (
        <div className="mt-8 bg-slate-950 rounded-xl p-4 border border-slate-800 font-mono text-xs overflow-y-auto max-h-64">
          {log.map((msg, index) => (
            <div key={index} className={`py-1 ${msg.includes('❌') ? 'text-rose-400' : msg.includes('✓') ? 'text-emerald-400' : 'text-slate-400'}`}>
              &gt; {msg}
            </div>
          ))}
        </div>
      )}

      {status === 'success' && (
        <div className="mt-6 p-4 bg-emerald-900/20 border border-emerald-500/30 rounded-xl flex items-start gap-3">
          <ShieldCheck className="text-emerald-500 w-6 h-6 flex-shrink-0 mt-0.5" />
          <p className="text-emerald-300 text-sm">
            La migración a la base de datos se ha completado. Ahora puedes configurar AGT-001 y a los componentes del frontend para que consuman Firestore en lugar del archivo estático.
          </p>
        </div>
      )}

      {status === 'error' && (
        <div className="mt-6 p-4 bg-rose-900/20 border border-rose-500/30 rounded-xl flex items-start gap-3">
          <AlertCircle className="text-rose-500 w-6 h-6 flex-shrink-0 mt-0.5" />
          <p className="text-rose-300 text-sm">
            Hubo un error de escritura. Verifica que tus reglas de Firestore permitan la escritura (durante la fase de migración local) y que las variables de entorno estén correctamente inyectadas en tu archivo <code className="bg-rose-900/50 px-1 rounded">.env.local</code>.
          </p>
        </div>
      )}
    </div>
  );
}