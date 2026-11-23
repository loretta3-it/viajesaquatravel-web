import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  XCircle, 
  ChevronLeft, 
  ChevronRight, 
  MapPin, 
  Tag 
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';

export default function ProductModal({ product, onClose, agencyNumber = "573043321590" }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!product) return null;

  // Resolución robusta de medios (Array 'media' > String 'image' > Placeholder)
  const mediaItems = product.media && product.media.length > 0 
    ? product.media 
    : product.image 
      ? [{ url: product.image, type: 'image' }] 
      : [{ url: 'https://via.placeholder.com/800x600?text=Aqua+Travel', type: 'image' }];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === mediaItems.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? mediaItems.length - 1 : prevIndex - 1));
  };

  // Generación del enlace de WhatsApp dinámico
  const whatsappMessage = product.whatsappMessage 
    || `Hola Viajes Aqua Travel, estoy interesado en el paquete "${product.title}". Me gustaría recibir más información.`;
  const whatsappUrl = `https://wa.me/${agencyNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white dark:bg-slate-900 rounded-2xl w-full max-w-4xl shadow-2xl flex flex-col max-h-[95vh] overflow-hidden relative">
        
        {/* Botón Flotante de Cerrar */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-black/50 text-white hover:bg-black/70 rounded-full backdrop-blur-md transition-colors"
          aria-label="Cerrar modal"
        >
          <X size={20} />
        </button>

        {/* Galería Multimedia (Carrusel) */}
        <div className="relative w-full h-64 md:h-96 bg-slate-100 dark:bg-slate-950 flex items-center justify-center overflow-hidden group">
          {mediaItems.map((item, index) => (
            <div 
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            >
              {item.type === 'video' ? (
                <video 
                  src={item.url} 
                  controls 
                  autoPlay 
                  muted 
                  loop 
                  className="w-full h-full object-cover"
                />
              ) : (
                <img 
                  src={item.url} 
                  alt={`${product.title} - Vista ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          ))}

          {/* Controles del Carrusel (Solo si hay más de 1 medio) */}
          {mediaItems.length > 1 && (
            <>
              <button 
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/30 hover:bg-white/50 text-black rounded-full backdrop-blur-md transition-all opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/30 hover:bg-white/50 text-black rounded-full backdrop-blur-md transition-all opacity-0 group-hover:opacity-100"
              >
                <ChevronRight size={24} />
              </button>
              
              {/* Indicadores (Dots) */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {mediaItems.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all shadow-sm ${idx === currentIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Contenido del Paquete */}
        <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar flex-1">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
                <MapPin size={14} />
                {product.businessLine || 'Destino Exclusivo'}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">
                {product.title}
              </h2>
            </div>
            
            <div className="flex flex-col md:items-end flex-shrink-0 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
              <span className="text-xs text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wider mb-1">Inversión desde</span>
              <div className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
                {product.discountPrice || product.price}
              </div>
              {product.originalPrice && (
                <div className="text-sm text-slate-400 line-through mt-1 flex items-center gap-1">
                  <Tag size={12} /> {product.originalPrice}
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Qué Incluye */}
            {product.includes && product.includes.length > 0 && (
              <div className="bg-emerald-50 dark:bg-emerald-900/10 rounded-2xl p-6 border border-emerald-100 dark:border-emerald-900/30">
                <h3 className="font-bold text-emerald-900 dark:text-emerald-400 mb-4 flex items-center gap-2">
                  <CheckCircle2 size={18} /> El plan incluye
                </h3>
                <ul className="space-y-3">
                  {product.includes.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-emerald-800 dark:text-emerald-200/80 leading-relaxed">
                      <span className="text-emerald-500 mt-1">•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Qué NO Incluye */}
            {product.notIncludes && product.notIncludes.length > 0 && (
              <div className="bg-rose-50 dark:bg-rose-900/10 rounded-2xl p-6 border border-rose-100 dark:border-rose-900/30">
                <h3 className="font-bold text-rose-900 dark:text-rose-400 mb-4 flex items-center gap-2">
                  <XCircle size={18} /> No incluye
                </h3>
                <ul className="space-y-3">
                  {product.notIncludes.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-rose-800 dark:text-rose-200/80 leading-relaxed">
                      <span className="text-rose-500 mt-1">•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Footer del Modal (Llamado a la Acción) */}
          <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500 dark:text-slate-400 text-center md:text-left">
              * Sujeto a disponibilidad y cambios sin previo aviso. Aplican T&C.
            </p>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1DA851] text-[#04210f] px-8 py-3.5 rounded-xl font-bold transition-all shadow-lg shadow-green-900/20"
            >
              <FaWhatsapp size={20} />
              Reservar por WhatsApp
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}