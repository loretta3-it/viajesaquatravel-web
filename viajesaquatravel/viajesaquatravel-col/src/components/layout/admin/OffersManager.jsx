import React, { useState, useEffect } from 'react';
import { collection, onSnapshot, doc, updateDoc, query } from 'firebase/firestore';
import { db } from '../../../config/firebase';
import { AlertCircle, Tag, Search, Sparkles } from 'lucide-react';

export default function OffersManager() {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Suscripción en tiempo real a la colección de ofertas
  useEffect(() => {
    const q = query(collection(db, 'offers'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedOffers = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setOffers(fetchedOffers);
      setLoading(false);
    }, (err) => {
      console.error("Error cargando ofertas:", err);
      setError("No se pudieron cargar las ofertas. Verifica tus permisos.");
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Actualización directa a Firestore (Toggle)
  const toggleOfferStatus = async (offerId, currentStatus) => {
    try {
      const offerRef = doc(db, 'offers', offerId);
      await updateDoc(offerRef, {
        isActive: !currentStatus
      });
    } catch (err) {
      console.error("Error actualizando estado:", err);
      alert("No se pudo actualizar el estado de la oferta.");
    }
  };

  const filteredOffers = offers.filter(offer => 
    offer.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    offer.destination?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto animate-in fade-in duration-500">
      
      {/* Header del Módulo */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
            <Sparkles className="text-yellow-500" size={28} />
            Campaña Black Days
          </h1>
          <p className="text-slate-400">Gestiona el inventario y visibilidad de las ofertas promocionales.</p>
        </div>
        
        {/* Barra de búsqueda */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
          <input 
            type="text" 
            placeholder="Buscar destino u oferta..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-900 border border-slate-800 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all placeholder:text-slate-600"
          />
        </div>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-rose-900/20 border border-rose-500/30 rounded-xl flex items-start gap-3">
          <AlertCircle className="text-rose-500 w-5 h-5 flex-shrink-0 mt-0.5" />
          <p className="text-rose-300 text-sm">{error}</p>
        </div>
      )}

      {/* Tabla Estilo CRM LorettaHUB */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-300">
            <thead className="bg-slate-950 border-b border-slate-800 text-slate-400 font-medium uppercase tracking-wider text-xs">
              <tr>
                <th className="px-6 py-4">Oferta</th>
                <th className="px-6 py-4">Precio (Desc.)</th>
                <th className="px-6 py-4">Etiqueta</th>
                <th className="px-6 py-4">Expiración</th>
                <th className="px-6 py-4 text-center">Estado (Público)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/50">
              {loading ? (
                <tr>
                  <td colSpan="5" className="px-6 py-12 text-center">
                    <div className="animate-pulse flex flex-col items-center gap-3">
                      <div className="w-8 h-8 rounded-full border-2 border-slate-700 border-t-yellow-500 animate-spin"></div>
                      <span className="text-slate-500">Sincronizando inventario...</span>
                    </div>
                  </td>
                </tr>
              ) : filteredOffers.length === 0 ? (
                <tr>
                  <td colSpan="5" className="px-6 py-12 text-center text-slate-500">
                    No se encontraron ofertas coincidentes.
                  </td>
                </tr>
              ) : (
                filteredOffers.map((offer) => (
                  <tr key={offer.id} className="hover:bg-slate-800/20 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <img 
                          src={offer.image || "https://via.placeholder.com/150"} 
                          alt={offer.title} 
                          className="w-12 h-12 rounded-lg object-cover border border-slate-700"
                        />
                        <div>
                          <div className="font-bold text-white mb-0.5">{offer.title}</div>
                          <div className="text-xs text-slate-500 flex items-center gap-1">
                            <Tag size={12} /> {offer.id}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-mono font-medium text-slate-200">
                      {offer.discountPrice} {offer.currency}
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2.5 py-1 bg-slate-800 border border-slate-700 rounded-md text-xs font-medium text-slate-300">
                        {offer.campaignTag || "Ninguna"}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-xs text-slate-400">
                      {offer.validUntil ? new Date(offer.validUntil).toLocaleDateString() : 'N/A'}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex justify-center">
                        {/* Toggle Switch Component */}
                        <button
                          type="button"
                          onClick={() => toggleOfferStatus(offer.id, offer.isActive)}
                          className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                            offer.isActive ? 'bg-yellow-500' : 'bg-slate-700'
                          }`}
                          role="switch"
                          aria-checked={offer.isActive}
                        >
                          <span className="sr-only">Toggle Oferta</span>
                          <span
                            aria-hidden="true"
                            className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                              offer.isActive ? 'translate-x-5' : 'translate-x-0'
                            }`}
                          />
                        </button>
                      </div>
                      <div className="text-center mt-1">
                        <span className={`text-[10px] uppercase font-bold tracking-wider ${offer.isActive ? 'text-yellow-500' : 'text-slate-500'}`}>
                          {offer.isActive ? 'Activa' : 'Inactiva'}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}