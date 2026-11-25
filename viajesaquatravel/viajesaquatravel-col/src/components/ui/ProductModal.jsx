import { useEffect } from 'react';
import {
  Calendar,
  CheckCircle2,
  Clock,
  Info,
  MapPin,
  Sparkles,
  X,
  XCircle,
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import MediaGallery from './MediaGallery';
import { useSettings } from '../../hooks/useSettings';
import { formatPrice } from '../../utils/price';
import { normalizeProduct } from '../../utils/normalizeProduct';
import { buildWhatsAppUrl } from '../../utils/whatsapp';

export default function ProductModal({ product, onClose }) {
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

  const phone = agency?.whatsappNumber || agency?.phone;
  const whatsappMessage =
    normalized.whatsappMessage ||
    `Quiero recibir información y cotización sobre "${normalized.title}".`;
  const whatsappHref = buildWhatsAppUrl(whatsappMessage, phone);

  const itinerary = Array.isArray(normalized.itinerary) ? normalized.itinerary : [];
  const includes = Array.isArray(normalized.includes) ? normalized.includes : [];
  const notIncludes = Array.isArray(normalized.notIncludes) ? normalized.notIncludes : [];
  const importantNotes = Array.isArray(normalized.importantNotes)
    ? normalized.importantNotes
    : [];
  const features = Array.isArray(normalized.features) ? normalized.features : [];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/75 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cabecera fija */}
        <div className="flex items-start justify-between gap-4 px-5 sm:px-7 py-4 border-b border-slate-200 bg-white">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mb-1">
              {normalized.destination && (
                <span className="inline-flex items-center gap-1 font-medium text-slate-700">
                  <MapPin className="w-3.5 h-3.5 text-slate-900" aria-hidden="true" />
                  {normalized.destination}
                </span>
              )}
              {normalized.duration && (
                <span className="inline-flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
                  {normalized.duration}
                </span>
              )}
              {normalized.spotsLabel && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-purple-100 text-purple-800 font-semibold">
                  <Sparkles className="w-3 h-3" aria-hidden="true" />
                  {normalized.spotsLabel}
                </span>
              )}
            </div>
            <h2
              id="product-modal-title"
              className="text-lg sm:text-2xl font-bold text-slate-900 tracking-tight truncate"
            >
              {normalized.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar ventana"
            className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Contenido desplazable */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-5 sm:p-7 space-y-6">
          <MediaGallery
            media={normalized.media}
            title={normalized.title}
            aspectClass="aspect-[16/9]"
          />

          {normalized.description && (
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {normalized.description}
            </p>
          )}

          {features.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {features.map((feat, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium"
                >
                  {feat}
                </span>
              ))}
            </div>
          )}

          {/* Itinerario (AquaWoman u otros con agenda diaria) */}
          {itinerary.length > 0 && (
            <div className="rounded-2xl bg-purple-50/70 border border-purple-200/70 p-5 space-y-4">
              <div className="flex items-center gap-2 text-purple-900 font-bold text-sm sm:text-base">
                <Calendar className="w-4 h-4 text-purple-700" aria-hidden="true" />
                <span>Itinerario de la experiencia</span>
              </div>
              <ol className="space-y-3">
                {itinerary.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="shrink-0 px-2.5 py-0.5 rounded-lg bg-purple-900 text-white text-xs font-semibold">
                      {step.day || `Día ${idx + 1}`}
                    </span>
                    <div className="text-sm">
                      <p className="font-semibold text-slate-900">{step.title}</p>
                      {step.desc && (
                        <p className="text-slate-600 mt-0.5 leading-relaxed">{step.desc}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* Incluye / No incluye */}
          {(includes.length > 0 || notIncludes.length > 0) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {includes.length > 0 && (
                <div className="rounded-2xl bg-emerald-50/60 border border-emerald-200/70 p-5">
                  <h3 className="text-sm font-bold text-slate-900 mb-3">Incluye</h3>
                  <ul className="space-y-2">
                    {includes.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle2
                          className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {notIncludes.length > 0 && (
                <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5">
                  <h3 className="text-sm font-bold text-slate-900 mb-3">No incluye</h3>
                  <ul className="space-y-2">
                    {notIncludes.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                        <XCircle
                          className="w-4 h-4 text-slate-400 shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
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
            <div className="rounded-2xl bg-amber-50 border border-amber-200/80 p-4 text-amber-900 text-xs sm:text-sm space-y-1.5">
              <div className="flex items-center gap-2 font-semibold">
                <Info className="w-4 h-4 text-amber-700 shrink-0" aria-hidden="true" />
                <span>Notas importantes</span>
              </div>
              <ul className="list-disc pl-5 space-y-1">
                {importantNotes.map((note, idx) => (
                  <li key={idx}>{note}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Pie de conversión fijo */}
        <div className="px-5 sm:px-7 py-4 border-t border-slate-200 bg-slate-50 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div>
            <span className="block text-xs text-slate-500 font-medium">Tarifa de referencia</span>
            <div className="flex items-baseline gap-2.5">
              <span className="text-xl sm:text-2xl font-bold text-slate-900">{priceText}</span>
              {originalPriceText && (
                <span className="text-sm text-slate-400 line-through">{originalPriceText}</span>
              )}
            </div>
          </div>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#1ebe5d] text-slate-950 font-semibold text-sm sm:text-base transition shadow-sm"
          >
            <FaWhatsapp className="w-5 h-5" aria-hidden="true" />
            <span>Cotizar por WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}