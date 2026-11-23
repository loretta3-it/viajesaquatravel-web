import React, { useState, useRef } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../../config/firebase';
import { useAuth } from '../../context/AuthContext';
import { logAdminAction } from '../../utils/auditLogger';
import { X, Save, Loader2, UploadCloud, Trash2, Plus, FileEdit } from 'lucide-react';

export default function EditDestinationModal({ destination, onClose }) {
  const { currentUser } = useAuth();
  const [isSaving, setIsSaving] = useState(false);
  const [uploadingIndex, setUploadingIndex] = useState(null);
  
  // Extraer medios iniciales, asegurando estructura robusta
  const initialMedia = destination.media && destination.media.length > 0 
    ? destination.media 
    : destination.image 
      ? [{ url: destination.image, type: 'image' }] 
      : [];

  const [formData, setFormData] = useState({
    title: destination.title || '',
    price: destination.price || '',
    includes: (destination.includes || []).join('\n'),
    notIncludes: (destination.notIncludes || []).join('\n'),
  });

  const [mediaList, setMediaList] = useState(initialMedia);

  const fileInputRefs = useRef({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleMediaChange = (index, field, value) => {
    const updatedMedia = [...mediaList];
    updatedMedia[index][field] = value;
    setMediaList(updatedMedia);
  };

  const addMediaItem = () => {
    setMediaList([...mediaList, { url: '', type: 'image' }]);
  };

  const removeMediaItem = (index) => {
    const updatedMedia = mediaList.filter((_, i) => i !== index);
    setMediaList(updatedMedia);
  };

  // Lógica de subida a Firebase Storage
  const handleFileUpload = async (e, index) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploadingIndex(index);
    try {
      const fileExtension = file.name.split('.').pop();
      const fileName = `destinations/${Date.now()}_${Math.random().toString(36).substring(7)}.${fileExtension}`;
      const storageRef = ref(storage, fileName);
      
      const snapshot = await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(snapshot.ref);

      const isVideo = file.type.startsWith('video/');
      
      const updatedMedia = [...mediaList];
      updatedMedia[index].url = downloadURL;
      updatedMedia[index].type = isVideo ? 'video' : 'image';
      setMediaList(updatedMedia);

    } catch (error) {
      console.error("Error subiendo archivo:", error);
      alert("Hubo un problema al subir el archivo.");
    } finally {
      setUploadingIndex(null);
    }
  };

  const handleSave = async (shouldPublish) => {
    setIsSaving(true);
    try {
      const destRef = doc(db, 'destinations', destination.id);
      
      const updatedData = {
        title: formData.title,
        price: formData.price,
        includes: formData.includes.split('\n').map(item => item.trim()).filter(Boolean),
        notIncludes: formData.notIncludes.split('\n').map(item => item.trim()).filter(Boolean),
        media: mediaList,
        isActive: shouldPublish
      };

      // Backward compatibility temporal para tarjetas legacy
      if (mediaList.length > 0) {
        updatedData.image = mediaList[0].url;
      }

      await updateDoc(destRef, updatedData);
      await logAdminAction(
        shouldPublish ? 'UPDATE_AND_PUBLISH' : 'UPDATE_DRAFT', 
        'destinations', 
        destination.id, 
        currentUser?.email, 
        updatedData
      );

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
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-3xl shadow-2xl flex flex-col max-h-[90vh]">
        
        <div className="flex items-center justify-between p-6 border-b border-slate-800">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <FileEdit size={22} className="text-blue-500"/> 
              Editar Destino
            </h2>
            <p className="text-sm text-slate-400">ID: {destination.id}</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6 overflow-y-auto custom-scrollbar flex-1">
          <div className="space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">Título del Paquete</label>
                <input 
                  type="text" name="title" required
                  value={formData.title} onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">Precio a mostrar</label>
                <input 
                  type="text" name="price" required
                  value={formData.price} onChange={handleChange}
                  placeholder="Ej. A consultar o 1.500 USD"
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Gestor Multimedia */}
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-white">Galería Multimedia</h3>
                <button 
                  type="button" 
                  onClick={addMediaItem}
                  className="flex items-center gap-1 text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-1.5 rounded-md transition-colors"
                >
                  <Plus size={14} /> Añadir Medio
                </button>
              </div>

              <div className="space-y-3">
                {mediaList.map((media, index) => (
                  <div key={index} className="flex flex-col md:flex-row gap-3 items-start md:items-center bg-slate-900 p-3 rounded-lg border border-slate-800">
                    <select
                      value={media.type}
                      onChange={(e) => handleMediaChange(index, 'type', e.target.value)}
                      className="bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-300 focus:outline-none focus:border-blue-500"
                    >
                      <option value="image">Imagen</option>
                      <option value="video">Video</option>
                    </select>

                    <div className="flex-1 w-full relative flex items-center gap-2">
                      <input 
                        type="url" 
                        value={media.url}
                        onChange={(e) => handleMediaChange(index, 'url', e.target.value)}
                        placeholder="Pega URL o carga un archivo..."
                        className="flex-1 w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
                      />
                      
                      {/* Subida de archivo oculta */}
                      <input
                        type="file"
                        accept="image/*,video/*"
                        className="hidden"
                        ref={el => fileInputRefs.current[index] = el}
                        onChange={(e) => handleFileUpload(e, index)}
                      />
                      
                      <button
                        type="button"
                        onClick={() => fileInputRefs.current[index]?.click()}
                        disabled={uploadingIndex === index}
                        className="bg-blue-600/20 text-blue-400 p-2 rounded-lg hover:bg-blue-600/30 transition-colors flex-shrink-0 disabled:opacity-50"
                        title="Subir archivo a Storage"
                      >
                        {uploadingIndex === index ? <Loader2 size={18} className="animate-spin"/> : <UploadCloud size={18} />}
                      </button>
                    </div>

                    <button 
                      type="button"
                      onClick={() => removeMediaItem(index)}
                      className="p-2 text-rose-400 hover:bg-rose-500/10 rounded-lg transition-colors flex-shrink-0"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))}
                {mediaList.length === 0 && (
                  <p className="text-xs text-slate-500 text-center py-4">No hay medios agregados. Usa "Añadir Medio" para comenzar.</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">El plan incluye</label>
                <textarea 
                  name="includes" rows={4} value={formData.includes} onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">No incluye</label>
                <textarea 
                  name="notIncludes" rows={4} value={formData.notIncludes} onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>

          </div>
        </div>

        {/* Modal Footer con Múltiples Acciones */}
        <div className="p-6 border-t border-slate-800 bg-slate-950/50 flex items-center justify-between rounded-b-2xl">
          <button 
            type="button" onClick={onClose}
            className="px-5 py-2.5 text-sm font-medium text-slate-400 hover:text-white transition-colors"
          >
            Cancelar
          </button>
          <div className="flex gap-3">
            <button 
              type="button" 
              onClick={() => handleSave(false)}
              disabled={isSaving}
              className="flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 disabled:opacity-50 text-slate-300 text-sm font-medium rounded-lg transition-colors border border-slate-700"
            >
              {isSaving ? <Loader2 className="animate-spin" size={16} /> : null}
              Guardar Borrador
            </button>
            <button 
              type="button"
              onClick={() => handleSave(true)}
              disabled={isSaving}
              className="flex items-center gap-2 px-6 py-2.5 bg-[#25D366] hover:bg-[#1DA851] disabled:opacity-50 text-black text-sm font-bold rounded-lg transition-colors shadow-lg shadow-green-900/20"
            >
              {isSaving ? <Loader2 className="animate-spin" size={18} /> : <Save size={18} />}
              Guardar y Publicar
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}