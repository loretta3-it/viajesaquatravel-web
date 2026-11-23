import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { formatPrice } from '../../utils/price';

export default function HeroCarousel({ slides = [], onSelectSlide, onSelectProduct }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const safeSlides = Array.isArray(slides) ? slides : [];
  const total = safeSlides.length;

  useEffect(() => {
    if (total <= 1) return undefined;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 6000);
    return () => clearInterval(timer);
  }, [total]);

  if (total === 0) {
    return null;
  }

  const activeIndex = currentIndex >= total ? 0 : currentIndex;
  const activeSlide = safeSlides[activeIndex];

  // Hotfix compatibilidad V2/V3
  const slideImage = activeSlide?.media?.[0]?.url || activeSlide?.image || '';
  const slidePrice =
    activeSlide?.price !== undefined && activeSlide?.price !== null
      ? formatPrice(activeSlide.price, activeSlide.currency, activeSlide.priceLabel)
      : activeSlide?.priceLabel || '';

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const handleAction = () => {
    if (typeof onSelectSlide === 'function') {
      onSelectSlide(activeSlide);
    } else if (typeof onSelectProduct === 'function') {
      onSelectProduct(activeSlide);
    }
  };

  return (
    <section className="relative w-full h-[520px] md:h-[600px] overflow-hidden bg-slate-900">
      {slideImage ? (
        <img
          src={slideImage}
          alt={activeSlide?.title || 'Destino destacado Viajes Aqua Travel'}
          className="w-full h-full object-cover object-center transition-opacity duration-500"
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent" />

      <div className="absolute inset-0 flex items-end">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-14 md:pb-16">
          <div className="max-w-2xl text-white">
            {activeSlide?.destination && (
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-xs font-medium mb-3">
                <MapPin className="w-3.5 h-3.5" />
                <span>{activeSlide.destination}</span>
              </div>
            )}

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3">
              {activeSlide?.title || 'Viajes Aqua Travel'}
            </h1>

            {(activeSlide?.subtitle || activeSlide?.description) && (
              <p className="text-sm sm:text-base text-slate-200 mb-5 line-clamp-2">
                {activeSlide.subtitle || activeSlide.description}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-4">
              {slidePrice && (
                <span className="inline-flex items-center px-4 py-2 rounded-xl bg-white/15 backdrop-blur-sm text-white font-semibold text-sm sm:text-base">
                  Desde {slidePrice}
                </span>
              )}

              {(onSelectSlide || onSelectProduct) && (
                <button
                  type="button"
                  onClick={handleAction}
                  className="px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#1ebe5d] text-slate-950 font-semibold text-sm sm:text-base transition cursor-pointer"
                >
                  {activeSlide?.ctaLabel || 'Ver detalles'}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {total > 1 && (
        <>
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Slide anterior"
            className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-950/50 hover:bg-slate-950/80 text-white backdrop-blur-sm transition cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Slide siguiente"
            className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-950/50 hover:bg-slate-950/80 text-white backdrop-blur-sm transition cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2">
            {safeSlides.map((slide, idx) => (
              <button
                key={slide?.id || idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Ir al slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  idx === activeIndex ? 'w-8 bg-white' : 'w-2 bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}