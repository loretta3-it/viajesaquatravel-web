import { useEffect, useState } from 'react';
import { collection, doc, onSnapshot, query, where } from 'firebase/firestore';
import { Heart, Sparkles, Users } from 'lucide-react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa6';
import { db } from '../config/firebase';
import { siteConfig } from '../config/siteConfig';
import PageHeader from '../components/layout/PageHeader';
import PackageCard from '../components/ui/PackageCard';
import ProductModal from '../components/ui/ProductModal';
import { normalizeProduct } from '../utils/normalizeProduct';
import { useSettings } from '../hooks/useSettings';
import { buildWhatsAppUrl } from '../utils/whatsapp';

const DEFAULT_PAGE_SETTINGS = siteConfig.seed?.settings?.aquawoman_page || {
  heroTitle: 'Aqua Woman Experience',
  heroSubtitle:
    'Retiros y viajes diseñados exclusivamente para mujeres que buscan bienestar, conexión genuina y aventuras memorables.',
  instagramUrl: '',
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
      : agency?.social?.instagram || '';

  return (
    <main className="bg-slate-50 min-h-[75vh] pb-20">
      <PageHeader
        title={pageSettings.heroTitle || 'Aqua Woman Experience'}
        subtitle={pageSettings.heroSubtitle}
        breadcrumbItems={[
          { label: 'Inicio', path: '/' },
          { label: 'Aqua Woman Experience' },
        ]}
      />

      {/* Banner inmersivo morado/dorado de identidad Aqua Woman */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4 relative z-10">
        <div className="rounded-3xl bg-gradient-to-br from-purple-950 via-purple-900 to-slate-950 text-white border border-amber-400/25 p-7 sm:p-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/15 border border-amber-300/30 text-amber-300 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Comunidad Femenina de Viajes y Bienestar</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Viaja acompañada, segura y en total sintonía
              </h2>

              <p className="text-sm sm:text-base text-purple-100/90 leading-relaxed max-w-2xl">
                Cada retiro Aqua Woman combina destinos inspiradores, bienestar, tiempo para ti y
                conexiones reales entre mujeres, con la logística y el respaldo completo de Viajes
                Aqua Travel.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={whatsappCommunityHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#1ebe5d] text-slate-950 font-semibold text-sm transition"
                >
                  <FaWhatsapp className="w-4 h-4" aria-hidden="true" />
                  <span>Unirme por WhatsApp</span>
                </a>

                {instagramHref && (
                  <a
                    href={instagramHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-amber-300/30 text-amber-200 font-semibold text-sm transition"
                  >
                    <FaInstagram className="w-4 h-4" aria-hidden="true" />
                    <span>Seguir en Instagram</span>
                  </a>
                )}
              </div>
            </div>

            <div className="lg:col-span-4 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-white/10 border border-white/10 p-4">
                <Users className="w-5 h-5 text-amber-300 mb-2" aria-hidden="true" />
                <p className="text-sm font-semibold text-white">Grupos Cuidados</p>
                <p className="text-xs text-purple-200 mt-1">Cupos limitados para mayor cercanía.</p>
              </div>
              <div className="rounded-2xl bg-white/10 border border-white/10 p-4">
                <Heart className="w-5 h-5 text-amber-300 mb-2" aria-hidden="true" />
                <p className="text-sm font-semibold text-white">Cero Estrés</p>
                <p className="text-xs text-purple-200 mt-1">Itinerarios curados de principio a fin.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catálogo multi-ficha de retiros publicados */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-purple-700">
              Experiencias Activas
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
              Próximos Retiros Aqua Woman
            </h2>
          </div>
          <p className="text-sm text-slate-600">
            Haz clic en cualquier experiencia para ver galería, itinerario e inclusiones.
          </p>
        </div>

        {loading && retreats.length === 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, idx) => (
              <div
                key={idx}
                className="h-96 rounded-3xl bg-white border border-slate-200 animate-pulse"
              />
            ))}
          </div>
        ) : retreats.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {retreats.map((retreat) => (
              <PackageCard
                key={retreat.id}
                product={retreat}
                onOpenModal={setSelectedRetreat}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl bg-white border border-purple-200/80 p-10 text-center max-w-2xl mx-auto">
            <Sparkles className="w-8 h-8 text-purple-700 mx-auto mb-3" aria-hidden="true" />
            <h3 className="text-lg font-bold text-slate-900">
              Nuevos retiros en preparación
            </h3>
            <p className="text-sm text-slate-600 mt-2">
              Estamos preparando nuestras próximas salidas Aqua Woman. Escríbenos por WhatsApp
              para recibir acceso prioritario antes de abrir cupos al público.
            </p>
            <a
              href={whatsappCommunityHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#1ebe5d] text-slate-950 font-semibold text-sm transition"
            >
              <FaWhatsapp className="w-4 h-4" aria-hidden="true" />
              <span>Entrar a la lista prioritaria</span>
            </a>
          </div>
        )}
      </section>

      {selectedRetreat && (
        <ProductModal
          product={selectedRetreat}
          onClose={() => setSelectedRetreat(null)}
        />
      )}
    </main>
  );
}