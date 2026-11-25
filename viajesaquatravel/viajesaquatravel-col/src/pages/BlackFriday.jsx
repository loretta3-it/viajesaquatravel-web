import { useEffect, useState } from 'react';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { Sparkles, Tag } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import { db } from '../config/firebase';
import { siteConfig } from '../config/siteConfig';
import PageHeader from '../components/layout/PageHeader';
import PackageCard from '../components/ui/PackageCard';
import ProductModal from '../components/ui/ProductModal';
import { normalizeProduct } from '../utils/normalizeProduct';
import { useSettings } from '../hooks/useSettings';
import { buildWhatsAppUrl } from '../utils/whatsapp';

function parseDateValue(value) {
  if (!value) return null;
  if (typeof value?.toDate === 'function') {
    return value.toDate();
  }
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

function isOfferValid(offer, nowMs) {
  const validUntilDate = parseDateValue(offer.validUntil);
  if (validUntilDate && validUntilDate.getTime() < nowMs) {
    return false;
  }
  const validFromDate = parseDateValue(offer.validFrom);
  if (validFromDate && validFromDate.getTime() > nowMs) {
    return false;
  }
  return true;
}

function prepareOffers(rawList) {
  const nowMs = Date.now();
  return (Array.isArray(rawList) ? rawList : [])
    .filter((item) => item && item.status === 'published' && item.isActive !== false)
    .filter((item) => isOfferValid(item, nowMs))
    .map((item) => normalizeProduct(item))
    .filter(Boolean)
    .sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0));
}

const FALLBACK_OFFERS = prepareOffers(siteConfig.seed?.offers || []);

export default function BlackFriday() {
  const { agency, promoButton } = useSettings();
  const [offers, setOffers] = useState(FALLBACK_OFFERS);
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(
      collection(db, 'offers'),
      where('status', '==', 'published'),
      where('isActive', '==', true)
    );

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        if (!snapshot.empty) {
          const rawDocs = snapshot.docs.map((docSnap) => ({
            id: docSnap.id,
            ...docSnap.data(),
          }));
          setOffers(prepareOffers(rawDocs));
        } else {
          setOffers(FALLBACK_OFFERS);
        }
        setLoading(false);
      },
      () => {
        setOffers(FALLBACK_OFFERS);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  const campaignTitle = promoButton?.label || 'Ofertas Especiales';
  const phone = agency?.whatsappNumber || agency?.phone;
  const whatsappHref = buildWhatsAppUrl(
    'Quiero consultar las ofertas y promociones vigentes en Viajes Aqua Travel.',
    phone
  );

  return (
    <main className="bg-slate-50 min-h-[70vh] pb-20">
      <PageHeader
        title={campaignTitle}
        subtitle="Tarifas promocionales por tiempo limitado con el respaldo y acompañamiento de Viajes Aqua Travel."
        breadcrumbItems={[
          { label: 'Inicio', path: '/' },
          { label: 'Ofertas Especiales', path: '/ofertas' },
        ]}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-600">
            <Tag className="w-4 h-4 text-[#25D366]" aria-hidden="true" />
            <span>
              {offers.length} {offers.length === 1 ? 'oferta vigente' : 'ofertas vigentes'}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-500">
            Las ofertas vencidas se ocultan automáticamente. Sujeto a disponibilidad aérea y
            hotelera.
          </p>
        </div>

        {loading && offers.length === 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, idx) => (
              <div
                key={idx}
                className="h-96 rounded-3xl bg-white border border-slate-200 animate-pulse"
              />
            ))}
          </div>
        ) : offers.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {offers.map((offer) => (
              <PackageCard
                key={offer.id}
                product={offer}
                onOpenModal={setSelectedOffer}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl bg-white border border-slate-200 p-10 text-center max-w-2xl mx-auto">
            <Sparkles className="w-8 h-8 text-slate-900 mx-auto mb-3" aria-hidden="true" />
            <h2 className="text-lg font-bold text-slate-900">
              No hay promociones activas en este momento
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Escríbenos por WhatsApp y te compartimos las tarifas especiales disponibles para tus
              fechas de viaje.
            </p>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#1ebe5d] text-slate-950 font-semibold text-sm transition"
            >
              <FaWhatsapp className="w-4 h-4" aria-hidden="true" />
              <span>Consultar promociones por WhatsApp</span>
            </a>
          </div>
        )}
      </section>

      {selectedOffer && (
        <ProductModal product={selectedOffer} onClose={() => setSelectedOffer(null)} />
      )}
    </main>
  );
}