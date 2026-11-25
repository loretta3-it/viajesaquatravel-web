import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, ImageOff, Play } from 'lucide-react';

function isDirectVideo(item) {
  if (!item) return false;
  if (item.type === 'video') return true;
  return /\.(mp4|webm)(\?.*)?$/i.test(String(item.url || ''));
}

export default function MediaGallery({
  media = [],
  title = 'Galería multimedia',
  aspectClass = 'aspect-[16/10]',
}) {
  const safeMedia = Array.isArray(media)
    ? media.filter((item) => item && typeof item.url === 'string' && item.url.trim())
    : [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [failedUrls, setFailedUrls] = useState({});

  const total = safeMedia.length;
  const activeIndex = currentIndex >= total ? 0 : currentIndex;
  const activeItem = safeMedia[activeIndex];

  const handlePrev = useCallback(() => {
    if (total <= 1) return;
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const handleNext = useCallback(() => {
    if (total <= 1) return;
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  useEffect(() => {
    if (total <= 1) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'ArrowLeft') handlePrev();
      if (event.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [total, handlePrev, handleNext]);

  const markFailed = (url) => {
    setFailedUrls((prev) => (prev[url] ? prev : { ...prev, [url]: true }));
  };

  if (total === 0) {
    return (
      <div
        className={`w-full ${aspectClass} rounded-2xl bg-slate-100 border border-slate-200 flex flex-col items-center justify-center text-slate-400 p-6 text-center`}
      >
        <ImageOff className="w-8 h-8 mb-2" aria-hidden="true" />
        <span className="text-xs font-medium">Sin contenido multimedia disponible</span>
      </div>
    );
  }

  const activeIsVideo = isDirectVideo(activeItem);
  const activeFailed = Boolean(failedUrls[activeItem.url]);

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={title}
      className="w-full space-y-3"
    >
      <div className={`relative w-full ${aspectClass} rounded-2xl overflow-hidden bg-slate-900`}>
        {activeFailed ? (
          <div className="w-full h-full flex flex-col items-center justify-center bg-slate-800 text-slate-300 p-6 text-center">
            <ImageOff className="w-9 h-9 mb-2 text-slate-400" aria-hidden="true" />
            <p className="text-sm font-medium">No se pudo cargar este recurso</p>
            <p className="text-xs text-slate-400 mt-1">{activeItem.alt || title}</p>
          </div>
        ) : activeIsVideo ? (
          <video
            key={activeItem.url}
            src={activeItem.url}
            controls
            playsInline
            preload="metadata"
            onError={() => markFailed(activeItem.url)}
            className="w-full h-full object-contain bg-black"
          />
        ) : (
          <img
            src={activeItem.url}
            alt={activeItem.alt || `${title} - imagen ${activeIndex + 1}`}
            loading="lazy"
            onError={() => markFailed(activeItem.url)}
            className="w-full h-full object-cover object-center"
          />
        )}

        {total > 1 && (
          <>
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Elemento anterior"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-950/65 hover:bg-slate-950/90 text-white flex items-center justify-center backdrop-blur-sm transition cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <ChevronLeft className="w-5 h-5" aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Elemento siguiente"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-950/65 hover:bg-slate-950/90 text-white flex items-center justify-center backdrop-blur-sm transition cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <ChevronRight className="w-5 h-5" aria-hidden="true" />
            </button>

            <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-slate-950/75 text-white text-xs font-medium backdrop-blur-sm">
              {activeIndex + 1} / {total}
            </div>
          </>
        )}
      </div>

      {total > 1 && (
        <div
          className="flex items-center gap-2 overflow-x-auto pb-1 custom-scrollbar"
          role="tablist"
          aria-label="Miniaturas de galería"
        >
          {safeMedia.map((item, idx) => {
            const isSelected = idx === activeIndex;
            const itemIsVideo = isDirectVideo(item);
            const itemFailed = Boolean(failedUrls[item.url]);

            return (
              <button
                key={`${item.url}-${idx}`}
                type="button"
                role="tab"
                aria-selected={isSelected}
                aria-label={`Ver elemento ${idx + 1}`}
                onClick={() => setCurrentIndex(idx)}
                className={`relative shrink-0 w-20 h-14 rounded-xl overflow-hidden border-2 transition cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 ${
                  isSelected
                    ? 'border-slate-900 ring-2 ring-slate-900/20'
                    : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                {itemIsVideo ? (
                  <div className="w-full h-full bg-slate-900 text-white flex items-center justify-center">
                    <Play className="w-5 h-5" aria-hidden="true" />
                  </div>
                ) : itemFailed ? (
                  <div className="w-full h-full bg-slate-200 text-slate-500 flex items-center justify-center">
                    <ImageOff className="w-4 h-4" aria-hidden="true" />
                  </div>
                ) : (
                  <img
                    src={item.url}
                    alt={item.alt || `Miniatura ${idx + 1}`}
                    loading="lazy"
                    onError={() => markFailed(item.url)}
                    className="w-full h-full object-cover"
                  />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}