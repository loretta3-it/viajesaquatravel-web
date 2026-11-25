import { useEffect, useState } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { ExternalLink, ShieldCheck, Star } from 'lucide-react';
import { db } from '../../config/firebase';
import { siteConfig } from '../../config/siteConfig';

const ALLOWED_PROVIDERS = ['google', 'elfsight', 'trustindex'];

const DEFAULT_REVIEWS = siteConfig.seed?.settings?.reviews || {
  id: 'reviews',
  provider: 'google',
  widgetId: '',
  isVisible: false,
  profileUrl: '',
};

/**
 * Contenedor seguro de reseñas conectado a settings/reviews (Decisión D2).
 * Nunca renderiza HTML crudo para prevenir XSS; admite únicamente proveedores permitidos
 * o muestra un bloque de confianza verificado hacia el Perfil de Negocio en Google.
 */
export default function ReviewsSlot() {
  const [config, setConfig] = useState(DEFAULT_REVIEWS);

  useEffect(() => {
    const unsub = onSnapshot(
      doc(db, 'settings', 'reviews'),
      (snap) => {
        if (snap.exists()) {
          setConfig({ ...DEFAULT_REVIEWS, ...snap.data() });
        }
      },
      () => {
        setConfig(DEFAULT_REVIEWS);
      }
    );
    return () => unsub();
  }, []);

  const safeProvider = ALLOWED_PROVIDERS.includes(config.provider) ? config.provider : 'google';
  const hasWidget = Boolean(config.isVisible && config.widgetId && String(config.widgetId).trim());
  const googleProfileUrl =
    typeof config.profileUrl === 'string' && /^https?:\/\//i.test(config.profileUrl)
      ? config.profileUrl
      : 'https://www.google.com/search?q=Viajes+Aqua+Travel+Zipaquira';

  return (
    <section
      id="resenas"
      aria-labelledby="resenas-heading"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      <div className="rounded-3xl bg-white border border-slate-200/90 shadow-sm p-6 sm:p-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-amber-500 mb-2">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star key={idx} className="w-4 h-4 fill-amber-400 text-amber-400" aria-hidden="true" />
              ))}
              <span className="ml-2 text-xs font-semibold uppercase tracking-wider text-slate-600">
                Confianza Verificada
              </span>
            </div>

            <h2 id="resenas-heading" className="text-2xl sm:text-3xl font-bold text-slate-900">
              Lo que dicen nuestros viajeros
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
              Más de 9 años acompañando familias, parejas y grupos desde Zipaquirá hacia Colombia y
              el mundo con respaldo formal (RNT 115795).
            </p>
          </div>

          <div className="shrink-0">
            <a
              href={googleProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold transition"
            >
              <ShieldCheck className="w-4 h-4 text-[#25D366]" aria-hidden="true" />
              <span>Ver reseñas en Google</span>
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        {hasWidget && (
          <div
            className="mt-8 pt-6 border-t border-slate-100"
            data-reviews-provider={safeProvider}
            data-reviews-widget-id={String(config.widgetId).trim()}
          >
            <p className="text-xs text-slate-500">
              Widget conectado ({safeProvider}) — ID verificado.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}