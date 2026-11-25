import { useEffect, useState } from 'react';
import { collection, doc, onSnapshot, query, where } from 'firebase/firestore';
import { Heart, Leaf, Sparkles } from 'lucide-react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa6';
import { db } from '../config/firebase';
import { siteConfig } from '../config/siteConfig';
import Breadcrumb from '../components/ui/Breadcrumb';
import PackageCard from '../components/ui/PackageCard';
import ProductModal from '../components/ui/ProductModal';
import { normalizeProduct } from '../utils/normalizeProduct';
import { useSettings } from '../hooks/useSettings';
import { buildWhatsAppUrl } from '../utils/whatsapp';

const DEFAULT_PAGE_SETTINGS = siteConfig.seed?.settings?.aquawoman_page || {
  heroTitle: siteConfig.aquaWomanData?.heroTitle || 'Aqua Woman Experience',
  heroSubtitle:
    siteConfig.aquaWomanData?.heroSubtitle ||
    'Retiros y viajes diseñados exclusivamente para mujeres que buscan bienestar, conexión genuina y aventuras memorables.',
  instagramUrl: siteConfig.businessLines?.aquaWoman?.link || '',
};

const FALLBACK_RETREATS = (siteConfig.seed?.aquawoman_retreats || [])
  .filter((item) => item.status === 'published' && item.isActive !== false)
  .map((item) => normalizeProduct(item))
  .filter(Boolean)
  .sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0));

export default function AquaWoman() {
  const { agency } = useSettings();
  const [pageSettings, setPageSettings] = useState(DEFAULT_PAGE_SETTINGS);
  const [retreats, setRetreats] = useState(FALLBACK_RETREATS);
  const [selectedRetreat, setSelectedRetreat] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    const unsubSettings = onSnapshot(
      doc(db, 'settings', 'aquawoman_page'),
      (snap) => {
        if (snap.exists()) {
          setPageSettings({ ...DEFAULT_PAGE_SETTINGS, ...snap.data() });
        }
      },
      () => {
        setPageSettings(DEFAULT_PAGE_SETTINGS);
      }
    );

    const q = query(
      collection(db, 'aquawoman_retreats'),
      where('status', '==', 'published'),
      where('isActive', '==', true)
    );

    const unsubRetreats = onSnapshot(
      q,
      (snapshot) => {
        if (!snapshot.empty) {
          const items = snapshot.docs
            .map((docSnap) =>
              normalizeProduct({
                id: docSnap.id,
                ...docSnap.data(),
              })
            )
            .filter(Boolean)
            .sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0));
          setRetreats(items);
        } else {
          setRetreats(FALLBACK_RETREATS);
        }
        setLoading(false);
      },
      () => {
        setRetreats(FALLBACK_RETREATS);
        setLoading(false);
      }
    );

    return () => {
      unsubSettings();
      unsubRetreats();
    };
  }, []);

  const phone = agency?.whatsappNumber || agency?.phone;
  const whatsappCommunityHref = buildWhatsAppUrl(
    'Quiero recibir información sobre la comunidad Aqua Woman Experience y los próximos retiros disponibles.',
    phone
  );
  const instagramHref =
    typeof pageSettings.instagramUrl === 'string' && pageSettings.instagramUrl.trim()
      ? pageSettings.instagramUrl.trim()
      : siteConfig.businessLines?.aquaWoman?.link || agency?.social?.instagram || '';

  return (
    <div className="w-full bg-[#0B1220] text-slate-50 font-sans selection:bg-purple-500/40">
      {/* Hero Editorial Oscuro / Morado / Dorado */}
      <section className="relative min-h-[82vh] flex items-center justify-center overflow-hidden border-b border-purple-500/20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Aqua Woman Hero"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-purple-950/80 via-rose-950/60 to-[#0B1220]" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-12 flex flex-col items-center">
          <div className="mb-6">
            <Breadcrumb
              items={[
                { label: 'Inicio', path: '/' },
                { label: 'Aqua Woman', path: null },
              ]}
            />
          </div>

          <span className="inline-block py-1 px-4 rounded-full bg-amber-400/15 border border-amber-300/35 text-xs sm:text-sm font-semibold text-amber-300 mb-6 backdrop-blur-md uppercase tracking-[0.2em]">
            Experiencia Exclusiva
          </span>

          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight drop-shadow-lg">
            {pageSettings.heroTitle}
          </h1>

          <p className="text-lg md:text-2xl text-purple-100/90 mb-10 max-w-2xl mx-auto font-light drop-shadow-md">
            {pageSettings.heroSubtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#retiros"
              className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-full font-bold transition-all hover:scale-105 shadow-xl shadow-purple-900/40"
            >
              Descubrir los Retiros
            </a>

            {instagramHref && (
              <a
                href={instagramHref}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 flex items-center gap-2 bg-white/10 border border-amber-300/40 text-amber-200 rounded-full font-bold transition-all hover:bg-white/15 backdrop-blur-sm"
              >
                <FaInstagram size={20} aria-hidden="true" />
                <span>Comunidad</span>
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Propósito / Zero Mental Load */}
      <section className="py-20 px-4 max-w-5xl mx-auto text-center">
        <Heart
          className="w-12 h-12 text-rose-400 mx-auto mb-6 opacity-90"
          strokeWidth={1.5}
          aria-hidden="true"
        />
        <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
          Sabemos que lo sostienes todo. <br className="hidden md:block" /> Es momento de que te
          sostengan a ti.
        </h2>
        <p className="text-base md:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
          El &ldquo;Zero Mental Load&rdquo; no es un lujo, es una necesidad. Diseñamos viajes donde
          no tienes que planear, preocuparte ni cuidar de nadie más que de ti misma. Un espacio
          libre de juicios para reconectar con otras mujeres que, como tú, buscan un respiro
          profundo para sanar y volver a empezar.
        </p>
      </section>

      {/* Catálogo Multi-ficha V3 */}
      <section
        id="retiros"
        className="max-w-7xl mx-auto px-4 md:px-8 py-12 pb-20 border-t border-slate-800/80"
      >
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-amber-400 font-bold tracking-widest uppercase text-xs block mb-2">
              Próximas Experiencias
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-white">
              Retiros Aqua Woman Activos
            </h2>
          </div>
          <p className="text-sm text-slate-400">
            Selecciona una experiencia para ver la galería, el itinerario día a día y reservar tu
            cupo.
          </p>
        </div>

        {loading && retreats.length === 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-pulse">
            {[1, 2, 3].map((_, i) => (
              <div
                key={i}
                className="bg-slate-900 rounded-2xl h-[400px] border border-purple-500/20"
              />
            ))}
          </div>
        ) : retreats.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {retreats.map((retreat) => (
              <PackageCard
                key={retreat.id}
                product={retreat}
                onClick={setSelectedRetreat}
                onOpenModal={setSelectedRetreat}
                categoryName="Aqua Woman"
                categoryColor="bg-purple-500/20 text-purple-300 border-purple-500/30"
              />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl bg-slate-900 border border-purple-500/25 p-10 text-center max-w-2xl mx-auto">
            <Sparkles className="w-8 h-8 text-amber-400 mx-auto mb-3" aria-hidden="true" />
            <h3 className="text-xl font-bold text-white">Nuevos retiros en preparación</h3>
            <p className="text-sm text-slate-400 mt-2">
              Escríbenos por WhatsApp para recibir acceso prioritario antes de abrir cupos al
              público.
            </p>
            <a
              href={whatsappCommunityHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#1DA851] text-[#04210f] font-bold text-sm transition"
            >
              <FaWhatsapp size={18} aria-hidden="true" />
              <span>Entrar a la lista prioritaria</span>
            </a>
          </div>
        )}
      </section>

      <div className="bg-slate-900/70 py-10 text-center border-t border-slate-800">
        <Leaf className="w-7 h-7 text-rose-400/80 mx-auto mb-3" aria-hidden="true" />
        <p className="text-slate-400 text-sm">
          Aqua Woman es una experiencia respaldada por Viajes Aqua Travel.
        </p>
      </div>

      {selectedRetreat && (
        <ProductModal
          product={selectedRetreat}
          onClose={() => setSelectedRetreat(null)}
        />
      )}
    </div>
  );
}