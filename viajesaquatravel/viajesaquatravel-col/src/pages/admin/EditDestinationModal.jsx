import React, { useState } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { useAuth } from '../../context/AuthContext';
import { logAdminAction } from '../../utils/auditLogger';
import { X, Save, Loader2, Image as ImageIcon } from 'lucide-react';

export default function EditDestinationModal({ destination, onClose }) {
  const { currentUser } = useAuth();
  const [isSaving, setIsSaving] = useState(false);
  
  // Resolución de la URL de imagen (prioriza la nueva estructura 'media', hace fallback a 'image')
  const initialImageUrl = destination.media?.[0]?.url || destination.image || '';

  // Transformamos arrays a texto multilínea para facilitar edición rápida
  const [formData, setFormData] = useState({
    title: destination.title || '',
    price: destination.price || '',
    includes: (destination.includes || []).join('\n'),
    notIncludes: (destination.notIncludes || []).join('\n'),
    imageUrl: initialImageUrl,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setIsSaving(true);

    try {
      const destRef = doc(db, 'destinations', destination.id);
      
      const updatedData = {
        title: formData.title,
        price: formData.price,
        includes: formData.includes.split('\n').map(item => item.trim()).filter(Boolean),
        notIncludes: formData.notIncludes.split('\n').map(item => item.trim()).filter(Boolean),
        // Migración a la nueva estructura conservando compatibilidad legacy
        media: [{ url: formData.imageUrl, type: 'image' }],
        image: formData.imageUrl 
      };

      await updateDoc(destRef, updatedData);

      // Auditar cambios
      await logAdminAction('UPDATE', 'destinations', destination.id, currentUser?.email, updatedData);

      onClose();
    } catch (error) {
      console.error("Error al guardar destino:", error);
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
            <h2 className="text-xl font-bold text-white">Editar Destino</h2>
            <p className="text-sm text-slate-400">ID: {destination.id}</p>
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
          <form id="edit-dest-form" onSubmit={handleSave} className="space-y-5">
            
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-1">Título del Paquete</label>
              <input 
                type="text" 
                name="title"
                required
                value={formData.title}
                onChange={handleChange}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">Precio a mostrar</label>
                <input 
                  type="text" 
                  name="price"
                  required
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="Ej. A consultar o 1.500 USD"
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-slate-400 mb-1">
                  <ImageIcon size={16} /> URL de la Imagen
                </label>
                <input 
                  type="url" 
                  name="imageUrl"
                  required
                  value={formData.imageUrl}
                  onChange={handleChange}
                  placeholder="https://..."
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">El plan incluye <span className="text-xs text-slate-500">(Uno por línea)</span></label>
                <textarea 
                  name="includes"
                  rows={5}
                  value={formData.includes}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">No incluye <span className="text-xs text-slate-500">(Uno por línea)</span></label>
                <textarea 
                  name="notIncludes"
                  rows={5}
                  value={formData.notIncludes}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>
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
            form="edit-dest-form"
            disabled={isSaving}
            className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-600/50 text-white text-sm font-bold rounded-lg transition-colors shadow-lg shadow-blue-900/20"
          >
            {isSaving ? <Loader2 className="animate-spin" size={18} /> : <Save size={18} />}
            Guardar Cambios
          </button>
        </div>

      </div>
    </div>
  );
}