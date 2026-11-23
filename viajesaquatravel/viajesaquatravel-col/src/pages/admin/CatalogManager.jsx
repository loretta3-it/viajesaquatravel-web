import React, { useState, useEffect } from 'react';
import { collection, onSnapshot, doc, updateDoc, query } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { useAuth } from '../../context/AuthContext';
import { logAdminAction } from '../../utils/auditLogger';
import { AlertCircle, Map, Search, Edit2 } from 'lucide-react';
import EditDestinationModal from '../../pages/admin/EditDestinationModal.jsx';

export default function CatalogManager() {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingDestination, setEditingDestination] = useState(null);
  
  const { currentUser } = useAuth();

  useEffect(() => {
    const q = query(collection(db, 'destinations'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setDestinations(fetchedData);
      setLoading(false);
    }, (err) => {
      console.error("Error cargando catálogo:", err);
      setError("No se pudo cargar el catálogo. Verifica permisos.");
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const toggleDestinationStatus = async (destId, currentStatus) => {
    const newStatus = !currentStatus;
    try {
      const destRef = doc(db, 'destinations', destId);
      await updateDoc(destRef, { isActive: newStatus });
      
      // Registro de Auditoría
      await logAdminAction(
        'TOGGLE_STATUS', 
        'destinations', 
        destId, 
        currentUser?.email, 
        { isActive: newStatus }
      );
    } catch (err) {
      console.error("Error actualizando estado:", err);
      alert("No se pudo actualizar el estado del destino.");
    }
  };

  const filteredDestinations = destinations.filter(dest => 
    dest.title?.toLowerCase().includes(searchTerm.toLowerCase()) || 
    dest.businessLine?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto animate-in fade-in duration-500">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
            Gestor de Catálogo
          </h1>
          <p className="text-slate-400">Administra los destinos, precios y visibilidad pública.</p>
        </div>
        
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
          <input 
            type="text" 
            placeholder="Buscar por título o línea..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-900 border border-slate-800 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600"
          />
        </div>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-rose-900/20 border border-rose-500/30 rounded-xl flex items-start gap-3">
          <AlertCircle className="text-rose-500 w-5 h-5 flex-shrink-0 mt-0.5" />
          <p className="text-rose-300 text-sm">{error}</p>
        </div>
      )}

      {/* Tabla de Destinos */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-300">
            <thead className="bg-slate-950 border-b border-slate-800 text-slate-400 font-medium uppercase tracking-wider text-xs">
              <tr>
                <th className="px-6 py-4">Destino</th>
                <th className="px-6 py-4">Línea de Negocio</th>
                <th className="px-6 py-4">Precio Base</th>
                <th className="px-6 py-4 text-center">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/50">
              {loading ? (
                <tr>
                  <td colSpan="4" className="px-6 py-12 text-center">
                    <div className="animate-pulse flex flex-col items-center gap-3">
                      <div className="w-8 h-8 rounded-full border-2 border-slate-700 border-t-blue-500 animate-spin"></div>
                      <span className="text-slate-500">Sincronizando catálogo...</span>
                    </div>
                  </td>
                </tr>
              ) : filteredDestinations.length === 0 ? (
                <tr>
                  <td colSpan="4" className="px-6 py-12 text-center text-slate-500">
                    No se encontraron destinos.
                  </td>
                </tr>
              ) : (
                filteredDestinations.map((dest) => {
                  const imageUrl = dest.media?.[0]?.url || dest.image || "https://via.placeholder.com/150";
                  const isVisible = dest.isActive !== false; // true por defecto si es undefined

                  return (
                    <tr key={dest.id} className="hover:bg-slate-800/20 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-4">
                          <img 
                            src={imageUrl} 
                            alt={dest.title} 
                            className="w-12 h-12 rounded-lg object-cover border border-slate-700"
                          />
                          <div>
                            <div className="font-bold text-white mb-0.5">{dest.title}</div>
                            <div className="text-xs text-slate-500 flex items-center gap-1">
                              ID: {dest.id}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-2.5 py-1 bg-slate-800 border border-slate-700 rounded-md text-xs font-medium text-slate-300">
                          {dest.businessLine}
                        </span>
                      </td>
                      <td className="px-6 py-4 font-mono font-medium text-slate-200">
                        {dest.price}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-center gap-4">
                          {/* Botón Editar */}
                          <button
                            onClick={() => setEditingDestination(dest)}
                            className="p-2 text-slate-400 hover:text-blue-400 hover:bg-blue-400/10 rounded-lg transition-colors"
                            title="Editar destino"
                          >
                            <Edit2 size={18} />
                          </button>
                          
                          {/* Toggle Switch */}
                          <div className="flex flex-col items-center gap-1">
                            <button
                              type="button"
                              onClick={() => toggleDestinationStatus(dest.id, isVisible)}
                              className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                                isVisible ? 'bg-[#25D366]' : 'bg-slate-700'
                              }`}
                              role="switch"
                              aria-checked={isVisible}
                            >
                              <span className="sr-only">Toggle Destino</span>
                              <span
                                aria-hidden="true"
                                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                                  isVisible ? 'translate-x-5' : 'translate-x-0'
                                }`}
                              />
                            </button>
                            <span className={`text-[10px] uppercase font-bold tracking-wider ${isVisible ? 'text-[#25D366]' : 'text-slate-500'}`}>
                              {isVisible ? 'Público' : 'Oculto'}
                            </span>
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {editingDestination && (
        <EditDestinationModal 
          destination={editingDestination} 
          onClose={() => setEditingDestination(null)} 
        />
      )}
    </div>
  );
}