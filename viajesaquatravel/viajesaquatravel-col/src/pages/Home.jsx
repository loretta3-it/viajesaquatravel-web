import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { ShieldCheck, Star, PlaneTakeoff, HeartHandshake } from 'lucide-react';
import { db } from '../config/firebase';
import { siteConfig } from '../config/siteConfig';
import ProductModal from '../components/ui/ProductModal';
import HeroCarousel from '../components/ui/HeroCarousel';
import PackageCard from '../components/ui/PackageCard';
import ReviewsSlot from '../components/ui/ReviewsSlot';
import TripPlannerForm from '../components/layout/TripPlannerForm';
import { normalizeProduct } from '../utils/normalizeProduct';
import { useSettings } from '../hooks/useSettings';
import { buildWhatsAppUrl } from '../utils/whatsapp';

const FALLBACK_DESTINATIONS = (siteConfig.seed?.destinations || siteConfig.catalog || [])
  .filter((item) => item && item.status !== 'draft' && item.isActive !== false)
  .map((item) => normalizeProduct(item))
  .filter(Boolean)
  .sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0));

const FALLBACK_BANNERS = (siteConfig.seed?.banners || [])
  .filter((item) => item && item.status === 'published' && item.isActive !== false)
  .sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0));

export default function Home() {
  const navigate = useNavigate();
  const { agency } = useSettings();
  const [destinations, setDestinations] = useState(FALLBACK_DESTINATIONS);
  const [banners, setBanners] = useState(FALLBACK_BANNERS);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeFilter, setActiveFilter] = useState('Todos');

  useEffect(() => {
    const destQuery = query(
      collection(db, 'destinations'),
      where('status', '==', 'published'),
      where('isActive', '==', true)
    );

    const unsubDestinations = onSnapshot(
      destQuery,
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
          setDestinations(items);
        } else {
          setDestinations(FALLBACK_DESTINATIONS);
        }
        setLoading(false);
      },
      () => {
        setDestinations(FALLBACK_DESTINATIONS);
        setLoading(false);
      }
    );

    const bannersQuery = query(
      collection(db, 'banners'),
      where('status', '==', 'published'),
      where('isActive', '==', true)
    );

    const unsubBanners = onSnapshot(
      bannersQuery,
      (snapshot) => {
        if (!snapshot.empty) {
          const items = snapshot.docs
            .map((docSnap) => ({
              id: docSnap.id,
              ...docSnap.data(),
            }))
            .sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0));
          setBanners(items);
        } else {
          setBanners(FALLBACK_BANNERS);
        }
      },
      () => {
        setBanners(FALLBACK_BANNERS);
      }
    );

    return () => {
      unsubDestinations();
      unsubBanners();
    };
  }, []);

  const heroSlides =
    banners.length > 0
      ? banners
      : destinations.filter((p) => p.id === 'mar-01' || p.id === 'vol-01' || p.id === 'mar-09');

  const slidesToRender = heroSlides.length > 0 ? heroSlides : destinations.slice(0, 3);

  const handleHeroAction = (slide) => {
    if (!slide) return;

    if (slide.ctaType === 'route' && slide.ctaTarget) {
      navigate(slide.ctaTarget);
      return;
    }

    if (slide.ctaType === 'whatsapp') {
      const phone = agency?.whatsappNumber || agency?.phone;
      const url = buildWhatsAppUrl(
        slide.ctaTarget || `Quiero información sobre ${slide.title}.`,
        phone
      );
      window.open(url, '_blank', 'noopener,noreferrer');
      return;
    }

    if (slide.ctaType === 'product' && typeof slide.ctaTarget === 'string') {
      const targetId = slide.ctaTarget.includes('/')
        ? slide.ctaTarget.split('/').pop()
        : slide.ctaTarget;
      const matched = destinations.find((item) => item.id === targetId);
      if (matched) {
        setSelectedProduct(matched);
        return;
      }
    }

    setSelectedProduct(slide);
  };

  const getCategoryColor = (lineId) => {
    const colors = {
      volume: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
      local: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
      southAmerica: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
      margin: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
      aquaWoman: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
    };
    return colors[lineId] || 'bg-slate-700 text-slate-300 border-slate-600';
  };

  const groupedBusinessLines = Object.keys(siteConfig.businessLines).filter(
    (key) => key !== 'aquaWoman'
  );
  const filterOptions = [
    { id: 'Todos', label: 'Todos los Destinos' },
    ...groupedBusinessLines.map((key) => ({
      id: key,
      label: siteConfig.businessLines[key].name,
    })),
  ];

  const visibleLines =
    activeFilter === 'Todos'
      ? groupedBusinessLines
      : groupedBusinessLines.filter((key) => key === activeFilter);

  const experienceYears = agency?.experienceYears || siteConfig.agency?.experienceYears || '9';
  const rnt = agency?.rnt || siteConfig.agency?.rnt || '115795';

  return (
    <div className="w-full">
      {/* Sticky Menu */}
      <div className="sticky top-20 z-40 bg-[#0B1220]/90 backdrop-blur-md border-b border-slate-800 py-3">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center gap-3 overflow-x-auto whitespace-nowrap [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {filterOptions.map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => {
                  setActiveFilter(option.id);
                  const catalogSection = document.getElementById('destinos');
                  if (catalogSection) {
                    const y =
                      catalogSection.getBoundingClientRect().top + window.pageYOffset - 140;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                }}
                className={`px-5 py-2 rounded-full font-semibold text-sm transition-all duration-300 cursor-pointer ${
                  activeFilter === option.id
                    ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,136,229,0.3)] border border-blue-500'
                    : 'bg-slate-800/50 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700/50'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <HeroCarousel slides={slidesToRender} onOpenModal={handleHeroAction} />

      <section className="relative z-20 -mt-16 max-w-7xl mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl backdrop-blur-md flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mb-4">
              <HeartHandshake className="text-blue-400" size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Asesoría Humana</h3>
            <p className="text-slate-400 text-sm">
              Acompañamiento 1 a 1. Nada de chatbots fríos; diseñamos tu viaje a medida.
            </p>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl backdrop-blur-md flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-[#25D366]/10 flex items-center justify-center mb-4">
              <ShieldCheck className="text-[#25D366]" size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Trayectoria y Respaldo</h3>
            <p className="text-slate-400 text-sm">
              {experienceYears} años de experiencia. RNT {rnt}.
            </p>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl backdrop-blur-md flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-amber-500/10 flex items-center justify-center mb-4">
              <PlaneTakeoff className="text-amber-400" size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Viajes 100% Seguros</h3>
            <p className="text-slate-400 text-sm">
              Operadores verificados y alianzas estratégicas para garantizar tranquilidad absoluta.
            </p>
          </div>
        </div>
      </section>

      {/* Catálogo Firestore con Skeleton Loader */}
      <section
        id="destinos"
        className="max-w-7xl mx-auto px-4 md:px-8 py-4 space-y-24 min-h-[50vh]"
      >
        {loading && destinations.length === 0 ? (
          <div className="animate-pulse space-y-24">
            {[1, 2].map((_, i) => (
              <div key={i}>
                <div className="h-8 bg-slate-800 w-48 rounded mb-4" />
                <div className="h-4 bg-slate-800 w-64 rounded mb-10" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[1, 2, 3].map((_, j) => (
                    <div key={j} className="bg-slate-800/50 rounded-2xl h-[400px]" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          visibleLines.map((lineKey) => {
            const lineData = siteConfig.businessLines[lineKey];
            const lineProducts = destinations.filter((p) => p.businessLine === lineKey);

            if (lineProducts.length === 0) return null;

            return (
              <div key={lineKey}>
                <div className="mb-10 border-b border-slate-800 pb-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                    {lineData.name}
                  </h2>
                  <p className="text-slate-400 text-lg">
                    {lineData.desc || lineData.description}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {lineProducts.map((product) => (
                    <PackageCard
                      key={product.id}
                      product={product}
                      onClick={setSelectedProduct}
                      onOpenModal={setSelectedProduct}
                      categoryName={lineData.name}
                      categoryColor={getCategoryColor(product.businessLine)}
                    />
                  ))}
                </div>
              </div>
            );
          })
        )}
      </section>

      <ReviewsSlot />

      <section id="cotizar" className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 shadow-xl flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-white mb-4">Diseña tu viaje a medida</h2>
            <p className="text-slate-400 mb-8">
              Déjanos tus datos básicos y un asesor estructurará una cotización exclusiva para ti.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
                  <Star className="text-blue-400" size={20} />
                </div>
                <p className="text-sm text-slate-300">Asignación de asesor prioritario</p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <TripPlannerForm />
          </div>
        </div>
      </section>

      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </div>
  );
}