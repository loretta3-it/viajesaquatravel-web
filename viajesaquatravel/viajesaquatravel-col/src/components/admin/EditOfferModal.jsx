import React, { useState } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { useAuth } from '../../context/AuthContext';
import { logAdminAction } from '../../utils/auditLogger';
import { X, Save, Loader2, MessageCircle } from 'lucide-react';

export default function EditOfferModal({ offer, onClose }) {
  const { currentUser } = useAuth();
  const [isSaving, setIsSaving] = useState(false);
  
  const [formData, setFormData] = useState({
    title: offer.title || '',
    discountPrice: offer.discountPrice || '',
    originalPrice: offer.originalPrice || '',
    whatsappMessage: offer.whatsappMessage || '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setIsSaving(true);

    try {
      const offerRef = doc(db, 'offers', offer.id);
      
      const updatedData = {
        title: formData.title,
        discountPrice: formData.discountPrice,
        originalPrice: formData.originalPrice,
        whatsappMessage: formData.whatsappMessage,
      };

      await updateDoc(offerRef, updatedData);

      // Auditar cambios
      await logAdminAction('UPDATE', 'offers', offer.id, currentUser?.email, updatedData);

      onClose();
    } catch (error) {
      console.error("Error al guardar la oferta:", error);
      alert("Ocurrió un error al guardar los cambios.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-2xl shadow-2xl flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800">
          <div>
            <h2 className="text-xl font-bold text-white">Editar Oferta</h2>
            <p className="text-sm text-slate-400">ID: {offer.id}</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto custom-scrollbar">
          <form id="edit-offer-form" onSubmit={handleSave} className="space-y-5">
            
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-1">Título de la Oferta</label>
              <input 
                type="text" 
                name="title"
                required
                value={formData.title}
                onChange={handleChange}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">Precio Descuento (Visible)</label>
                <input 
                  type="text" 
                  name="discountPrice"
                  required
                  value={formData.discountPrice}
                  onChange={handleChange}
                  placeholder="Ej. 1.200 USD"
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">Precio Original (Tachado)</label>
                <input 
                  type="text" 
                  name="originalPrice"
                  value={formData.originalPrice}
                  onChange={handleChange}
                  placeholder="Ej. 1.500 USD"
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
                />
              </div>
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-slate-400 mb-1">
                <MessageCircle size={16} className="text-[#25D366]" />
                Mensaje predefinido de WhatsApp
              </label>
              <textarea 
                name="whatsappMessage"
                rows={3}
                value={formData.whatsappMessage}
                onChange={handleChange}
                placeholder="Ej. Hola AquaTravel, quiero reservar la oferta de Punta Cana..."
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#25D366] focus:ring-1 focus:ring-[#25D366]"
              />
            </div>

          </form>
        </div>

        {/* Modal Footer */}
        <div className="p-6 border-t border-slate-800 bg-slate-950/50 flex justify-end gap-3 rounded-b-2xl">
          <button 
            type="button" 
            onClick={onClose}
            className="px-5 py-2.5 text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            Cancelar
          </button>
          <button 
            type="submit" 
            form="edit-offer-form"
            disabled={isSaving}
            className="flex items-center gap-2 px-6 py-2.5 bg-yellow-600 hover:bg-yellow-500 disabled:bg-yellow-600/50 text-white text-sm font-bold rounded-lg transition-colors shadow-lg shadow-yellow-900/20"
          >
            {isSaving ? <Loader2 className="animate-spin" size={18} /> : <Save size={18} />}
            Guardar Cambios
          </button>
        </div>

      </div>
    </div>
  );
}