import React, { useEffect } from 'react';
import { X, CheckCircle2, XCircle, Info } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import { siteConfig } from '../../config/siteConfig';

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";

export default function ProductModal({ product, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!product) return null;

  const getWhatsAppLink = () => {
    const msg = `${siteConfig.agency.defaultMessage}el paquete: ${product.title}. Me gustaría recibir cotización y detalles adicionales.`;
    return `https://wa.me/${siteConfig.agency.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4 overflow-y-auto"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-8 flex flex-col max-h-[90vh]">
        {/* Header / Image */}
        <div className="relative h-64 md:h-80 w-full flex-shrink-0">
          <img 
            src={product.image} 
            alt={product.title} 
            onError={(e) => { e.target.src = FALLBACK_IMAGE; }}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-slate-900/50 hover:bg-slate-800 backdrop-blur-md text-white p-2 rounded-full transition-colors border border-slate-700"
          >
            <X size={24} />
          </button>
          <div className="absolute bottom-6 left-6 right-6">
            <span className="inline-block px-3 py-1 mb-3 rounded-full text-xs font-semibold border backdrop-blur-md bg-slate-800/80 text-slate-300 border-slate-600">
              {siteConfig.businessLines[product.businessLine].name}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{product.title}</h2>
            <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">
              {product.price.includes('consultar') ? product.price : `Desde $${product.price} COP`}
            </p>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Includes */}
            <div className="bg-slate-950/50 rounded-xl p-6 border border-slate-800">
              <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
                <CheckCircle2 className="text-emerald-500" size={20} />
                El Plan Incluye
              </h3>
              <ul className="space-y-3">
                {product.includes?.map((item, idx) => (
                  <li key={idx} className="text-slate-300 text-sm flex items-start gap-2">
                    <span className="text-emerald-500 mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not Includes */}
            <div className="bg-slate-950/50 rounded-xl p-6 border border-slate-800">
              <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
                <XCircle className="text-rose-500" size={20} />
                No Incluye
              </h3>
              <ul className="space-y-3">
                {product.notIncludes?.map((item, idx) => (
                  <li key={idx} className="text-slate-400 text-sm flex items-start gap-2">
                    <span className="text-rose-500 mt-0.5">×</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Important Notes */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-3">
              <Info className="text-blue-400" size={20} />
              Notas Importantes
            </h3>
            <div className="bg-blue-950/20 border border-blue-900/50 rounded-xl p-4">
              <ul className="space-y-2">
                {product.importantNotes?.map((note, idx) => (
                  <li key={idx} className="text-slate-300 text-sm flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA Action */}
          <div className="pt-6 border-t border-slate-800 flex justify-end">
            <a 
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1DA851] text-white px-8 py-4 rounded-xl font-bold transition-transform hover:-translate-y-1 shadow-lg shadow-green-900/20 text-lg"
            >
              <FaWhatsapp size={24} />
              Cotizar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}