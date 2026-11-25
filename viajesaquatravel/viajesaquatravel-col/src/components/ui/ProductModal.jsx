import { useEffect } from 'react';
import {
  Calendar,
  CheckCircle2,
  Clock,
  Info,
  MapPin,
  Tag,
  X,
  XCircle,
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import MediaGallery from './MediaGallery';
import { useSettings } from '../../hooks/useSettings';
import { formatPrice } from '../../utils/price';
import { normalizeProduct } from '../../utils/normalizeProduct';
import { buildWhatsAppUrl } from '../../utils/whatsapp';

export default function ProductModal({ product, onClose, agencyNumber }) {
  const { agency } = useSettings();

  useEffect(() => {
    if (!product) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose?.();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  const normalized = normalizeProduct(product);
  const priceText = formatPrice(
    normalized.price,
    normalized.currency,
    normalized.priceLabel
  );
  const originalPriceText =
    normalized.originalPrice !== undefined && normalized.originalPrice !== null
      ? formatPrice(normalized.originalPrice, normalized.currency)
      : '';

  const phone = agencyNumber || agency?.whatsappNumber || agency?.phone;
  const whatsappMessage =
    normalized.whatsappMessage ||
    `Estoy interesado en el paquete "${normalized.title}". Me gustaría recibir más información.`;
  const whatsappUrl = buildWhatsAppUrl(whatsappMessage, phone);

  const itinerary = Array.isArray(normalized.itinerary) ? normalized.itinerary : [];
  const includes = Array.isArray(normalized.includes) ? normalized.includes : [];
  const notIncludes = Array.isArray(normalized.notIncludes) ? normalized.notIncludes : [];
  const importantNotes = Array.isArray(normalized.importantNotes)
    ? normalized.importantNotes
    : [];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-4xl shadow-2xl flex flex-col max-h-[95vh] overflow-hidden relative text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón Flotante de Cerrar */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-black/60 text-white hover:bg-black/85 rounded-full backdrop-blur-md transition-colors cursor-pointer"
          aria-label="Cerrar modal"
        >
          <X size={20} aria-hidden="true" />
        </button>

        {/* Contenido Desplazable */}
        <div className="p-5 sm:p-8 overflow-y-auto custom-scrollbar flex-1 space-y-6">
          <MediaGallery
            media={normalized.media}
            title={normalized.title}
            aspectClass="aspect-[16/9]"
          />

          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin size={14} aria-hidden="true" />
                  {normalized.destination || normalized.businessLine || 'Destino Exclusivo'}
                </span>
                {normalized.duration && (
                  <span className="inline-flex items-center gap-1 text-slate-400">
                    <Clock size={14} aria-hidden="true" />
                    {normalized.duration}
                  </span>
                )}
              </div>
              <h2
                id="product-modal-title"
                className="text-2xl md:text-3xl font-bold text-white"
              >
                {normalized.title}
              </h2>
            </div>

            <div className="flex flex-col md:items-end flex-shrink-0 bg-slate-800/60 p-4 rounded-xl border border-slate-700/70">
              <span className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">
                Inversión desde
              </span>
              <div className="text-2xl font-black text-white flex items-center gap-2">
                {priceText}
              </div>
              {originalPriceText && (
                <div className="text-sm text-slate-400 line-through mt-1 flex items-center gap-1">
                  <Tag size={12} aria-hidden="true" /> {originalPriceText}
                </div>
              )}
            </div>
          </div>

          {normalized.description && (
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {normalized.description}
            </p>
          )}

          {/* Itinerario (AquaWoman u otros con agenda diaria) */}
          {itinerary.length > 0 && (
            <div className="bg-purple-950/30 rounded-2xl p-6 border border-purple-500/25 space-y-4">
              <h3 className="font-bold text-purple-300 flex items-center gap-2">
                <Calendar size={18} aria-hidden="true" /> Itinerario de la experiencia
              </h3>
              <ol className="space-y-3">
                {itinerary.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="shrink-0 px-2.5 py-0.5 rounded-lg bg-purple-600/30 border border-purple-500/40 text-purple-200 text-xs font-bold">
                      {step.day || `Día ${idx + 1}`}
                    </span>
                    <div className="text-sm">
                      <p className="font-semibold text-white">{step.title}</p>
                      {step.desc && (
                        <p className="text-slate-300 mt-0.5 leading-relaxed">{step.desc}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* Incluye / No Incluye */}
          {(includes.length > 0 || notIncludes.length > 0) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {includes.length > 0 && (
                <div className="bg-emerald-900/15 rounded-2xl p-6 border border-emerald-800/40">
                  <h3 className="font-bold text-emerald-400 mb-4 flex items-center gap-2">
                    <CheckCircle2 size={18} aria-hidden="true" /> El plan incluye
                  </h3>
                  <ul className="space-y-3">
                    {includes.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-emerald-100/85 leading-relaxed"
                      >
                        <span className="text-emerald-400 mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {notIncludes.length > 0 && (
                <div className="bg-rose-900/15 rounded-2xl p-6 border border-rose-800/40">
                  <h3 className="font-bold text-rose-400 mb-4 flex items-center gap-2">
                    <XCircle size={18} aria-hidden="true" /> No incluye
                  </h3>
                  <ul className="space-y-3">
                    {notIncludes.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-rose-100/85 leading-relaxed"
                      >
                        <span className="text-rose-400 mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Notas importantes */}
          {importantNotes.length > 0 && (
            <div className="bg-amber-950/30 rounded-2xl p-5 border border-amber-500/25 text-amber-200/90 text-xs sm:text-sm space-y-2">
              <div className="flex items-center gap-2 font-bold text-amber-400">
                <Info size={16} aria-hidden="true" />
                <span>Notas importantes</span>
              </div>
              <ul className="list-disc pl-5 space-y-1">
                {importantNotes.map((note, idx) => (
                  <li key={idx}>{note}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Footer del Modal */}
          <div className="pt-6 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-400 text-center md:text-left">
              * Sujeto a disponibilidad y cambios sin previo aviso. Aplican T&amp;C.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1DA851] text-[#04210f] px-8 py-3.5 rounded-xl font-bold transition-all shadow-lg shadow-green-900/25"
            >
              <FaWhatsapp size={20} aria-hidden="true" />
              Reservar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}