import { ArrowRight, Camera, Clock, Film, MapPin, Tag } from 'lucide-react';
import { formatPrice } from '../../utils/price';
import { normalizeProduct } from '../../utils/normalizeProduct';

export default function PackageCard({
  product,
  onClick,
  onOpenModal,
  categoryName,
  categoryColor,
  isOffer = false,
}) {
  if (!product) return null;

  const normalized = normalizeProduct(product);
  const coverUrl = normalized.media?.[0]?.url || normalized.image || '';
  const mediaCount = Array.isArray(normalized.media) ? normalized.media.length : 0;
  const hasVideo =
    Array.isArray(normalized.media) && normalized.media.some((item) => item.type === 'video');

  const priceText = formatPrice(
    normalized.price,
    normalized.currency,
    normalized.priceLabel
  );
  const originalPriceText =
    normalized.originalPrice !== undefined && normalized.originalPrice !== null
      ? formatPrice(normalized.originalPrice, normalized.currency)
      : '';

  const handleOpen = () => {
    if (typeof onOpenModal === 'function') {
      onOpenModal(product);
    } else if (typeof onClick === 'function') {
      onClick(product);
    }
  };

  return (
    <article
      onClick={handleOpen}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleOpen();
        }
      }}
      className={`group bg-slate-900 rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col h-full cursor-pointer shadow-xl hover:-translate-y-1 ${
        isOffer
          ? 'border-yellow-500/30 hover:border-yellow-400/60 hover:shadow-yellow-900/20'
          : 'border-slate-800 hover:border-slate-600 hover:shadow-blue-950/30'
      }`}
    >
      {/* Imagen de portada + badges */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
        {coverUrl ? (
          <img
            src={coverUrl}
            alt={normalized.title}
            loading="lazy"
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-950" />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/20" />

        {/* Badge de categoría u oferta */}
        <div className="absolute top-3 left-3 flex flex-wrap items-center gap-2">
          {isOffer ? (
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-amber-400 text-slate-950 shadow-md">
              <Tag className="w-3 h-3" aria-hidden="true" />
              Oferta Especial
            </span>
          ) : categoryName ? (
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold border backdrop-blur-md ${
                categoryColor || 'bg-slate-800/80 text-slate-200 border-slate-700'
              }`}
            >
              {categoryName}
            </span>
          ) : null}
        </div>

        {/* Badge discreto multi-foto / video cuando media.length > 1 */}
        {mediaCount > 1 && (
          <div
            title={`${mediaCount} elementos en galería`}
            className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-950/75 border border-white/15 text-slate-100 text-xs font-semibold backdrop-blur-md"
          >
            {hasVideo ? (
              <Film className="w-3.5 h-3.5 text-amber-300" aria-hidden="true" />
            ) : (
              <Camera className="w-3.5 h-3.5 text-slate-200" aria-hidden="true" />
            )}
            <span>{mediaCount}</span>
          </div>
        )}

        {/* Duración */}
        {normalized.duration && (
          <div className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-950/75 border border-white/10 text-slate-200 text-xs font-medium backdrop-blur-md">
            <Clock className="w-3.5 h-3.5 text-blue-400" aria-hidden="true" />
            <span>{normalized.duration}</span>
          </div>
        )}
      </div>

      {/* Cuerpo de la tarjeta */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between gap-5">
        <div className="space-y-2.5">
          {normalized.destination && (
            <div className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" aria-hidden="true" />
              <span className="truncate">{normalized.destination}</span>
            </div>
          )}

          <h3 className="text-lg sm:text-xl font-bold text-white leading-snug group-hover:text-blue-300 transition-colors">
            {normalized.title}
          </h3>

          {normalized.description && (
            <p className="text-sm text-slate-400 line-clamp-2 leading-relaxed">
              {normalized.description}
            </p>
          )}
        </div>

        {/* Jerarquía de precio + CTA */}
        <div className="pt-4 border-t border-slate-800 flex items-end justify-between gap-3">
          <div>
            <span className="block text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
              Inversión desde
            </span>
            <div className="flex items-baseline gap-2 mt-0.5">
              <span className="text-lg sm:text-xl font-extrabold text-white">{priceText}</span>
              {originalPriceText && (
                <span className="text-xs text-slate-500 line-through">{originalPriceText}</span>
              )}
            </div>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleOpen();
            }}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-blue-600 text-white text-xs sm:text-sm font-semibold transition-colors shrink-0 cursor-pointer"
          >
            <span>Ver detalles</span>
            <ArrowRight
              className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </article>
  );
}