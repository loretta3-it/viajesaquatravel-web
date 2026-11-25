import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { ArrowRight, HeartHandshake, PlaneTakeoff, ShieldCheck, Star } from 'lucide-react';
import { db } from '../config/firebase';
import { siteConfig } from '../config/siteConfig';
import HeroCarousel from '../components/ui/HeroCarousel';
import PackageCard from '../components/ui/PackageCard';
import ProductModal from '../components/ui/ProductModal';
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
  const [selectedProduct, setSelectedProduct] = useState(null);

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
      },
      () => {
        setDestinations(FALLBACK_DESTINATIONS);
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

  const slidesToRender = banners.length > 0 ? banners : destinations.slice(0, 3);

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

  const volumeDeals = destinations.filter((item) => item.businessLine === 'volume');
  const localDeals = destinations.filter((item) => item.businessLine === 'local');
  const marginDeals = destinations.filter((item) => item.businessLine === 'margin');

  return (
    <main className="bg-slate-50">
      <HeroCarousel slides={slidesToRender} onOpenModal={handleHeroAction} />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-start gap-3.5">
            <ShieldCheck className="w-6 h-6 text-slate-900 shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <h3 className="text-sm font-semibold text-slate-900">Agencia Formal RNT 115795</h3>
              <p className="text-xs text-slate-600 mt-1">
                Respaldo legal y más de 9 años de trayectoria desde Zipaquirá.
              </p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-start gap-3.5">
            <HeartHandshake
              className="w-6 h-6 text-slate-900 shrink-0 mt-0.5"
              aria-hidden="true"
            />
            <div>
              <h3 className="text-sm font-semibold text-slate-900">Asesoría Humana Real</h3>
              <p className="text-xs text-slate-600 mt-1">
                Acompañamiento personalizado antes, durante y después de tu viaje.
              </p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-start gap-3.5">
            <PlaneTakeoff className="w-6 h-6 text-slate-900 shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <h3 className="text-sm font-semibold text-slate-900">Destinos a la Medida</h3>
              <p className="text-xs text-slate-600 mt-1">
                Caribe, Colombia, Europa, Japón y experiencias exclusivas.
              </p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-start gap-3.5">
            <Star className="w-6 h-6 text-slate-900 shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <h3 className="text-sm font-semibold text-slate-900">Planes Transparentes</h3>
              <p className="text-xs text-slate-600 mt-1">
                Cotización clara y directa por WhatsApp sin fricción.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="destinos" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
        {volumeDeals.length > 0 && (
          <div>
            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                {siteConfig.businessLines?.volume?.name || 'Caribe y Américas'}
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                {siteConfig.businessLines?.volume?.desc ||
                  siteConfig.businessLines?.volume?.description}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {volumeDeals.map((product) => (
                <PackageCard
                  key={product.id}
                  product={product}
                  onOpenModal={setSelectedProduct}
                />
              ))}
            </div>
          </div>
        )}

        {localDeals.length > 0 && (
          <div>
            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                {siteConfig.businessLines?.local?.name || 'Destinos Nacionales'}
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                {siteConfig.businessLines?.local?.desc ||
                  siteConfig.businessLines?.local?.description}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {localDeals.map((product) => (
                <PackageCard
                  key={product.id}
                  product={product}
                  onOpenModal={setSelectedProduct}
                />
              ))}
            </div>
          </div>
        )}

        {marginDeals.length > 0 && (
          <div>
            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                {siteConfig.businessLines?.margin?.name || 'Grandes Viajes 2027'}
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                {siteConfig.businessLines?.margin?.desc ||
                  siteConfig.businessLines?.margin?.description}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {marginDeals.map((product) => (
                <PackageCard
                  key={product.id}
                  product={product}
                  onOpenModal={setSelectedProduct}
                />
              ))}
            </div>
          </div>
        )}
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-300">
              Comunidad Exclusiva
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold mt-2">Aqua Woman Experience</h2>
            <p className="text-sm sm:text-base text-slate-300 mt-2">
              Retiros y viajes diseñados exclusivamente para mujeres que buscan bienestar, conexión
              y aventuras memorables.
            </p>
          </div>
          <Link
            to="/aquawoman"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-950 font-semibold text-sm hover:bg-slate-100 transition shrink-0"
          >
            <span>Explorar Aqua Woman</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <ReviewsSlot />

      <section id="cotizar" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-20">
        <TripPlannerForm />
      </section>

      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </main>
  );
}