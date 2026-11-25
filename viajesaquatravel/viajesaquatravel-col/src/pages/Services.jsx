import { useEffect, useState } from 'react';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { ShieldCheck } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import { db } from '../config/firebase';
import { siteConfig } from '../config/siteConfig';
import PageHeader from '../components/layout/PageHeader';
import ServiceCard from '../components/ui/ServiceCard';
import { useSettings } from '../hooks/useSettings';
import { buildWhatsAppUrl } from '../utils/whatsapp';

const FALLBACK_SERVICES = (siteConfig.seed?.services || [])
  .filter((svc) => svc.status === 'published' && svc.isActive !== false)
  .sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0));

export default function Services() {
  const { agency } = useSettings();
  const [services, setServices] = useState(FALLBACK_SERVICES);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(
      collection(db, 'services'),
      where('status', '==', 'published'),
      where('isActive', '==', true)
    );

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        if (!snapshot.empty) {
          const items = snapshot.docs
            .map((docSnap) => ({
              id: docSnap.id,
              ...docSnap.data(),
            }))
            .sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0));
          setServices(items);
        } else {
          setServices(FALLBACK_SERVICES);
        }
        setLoading(false);
      },
      () => {
        setServices(FALLBACK_SERVICES);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  const phone = agency?.whatsappNumber || agency?.phone;
  const generalSupportHref = buildWhatsAppUrl(
    'Quiero recibir asesoría sobre los servicios adicionales para mi viaje (visas, asistencia médica o SIM internacional).',
    phone
  );

  return (
    <main className="bg-slate-50 min-h-[70vh] pb-20">
      <PageHeader
        title="Servicios Adicionales"
        subtitle="Complementa tu viaje con asesoría profesional en visas, asistencia médica integral y conectividad global sin roaming."
        breadcrumbItems={[
          { label: 'Inicio', path: '/' },
          { label: 'Servicios' },
        ]}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {loading && services.length === 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, idx) => (
              <div
                key={idx}
                className="h-96 rounded-3xl bg-white border border-slate-200 animate-pulse"
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        )}

        <div className="mt-14 rounded-3xl bg-slate-950 text-white p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#25D366]">
              <ShieldCheck className="w-4 h-4" aria-hidden="true" />
              <span>Asesoría Integral</span>
            </div>
            <h2 className="text-2xl font-bold mt-2">
              ¿Necesitas combinar varios servicios para tu viaje?
            </h2>
            <p className="text-sm text-slate-300 mt-2 leading-relaxed">
              Nuestro equipo verifica los requisitos migratorios y sanitarios de tu destino para
              que viajes sin contratiempos.
            </p>
          </div>

          <a
            href={generalSupportHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#1ebe5d] text-slate-950 font-semibold text-sm transition shrink-0"
          >
            <FaWhatsapp className="w-4 h-4" aria-hidden="true" />
            <span>Consultar por WhatsApp</span>
          </a>
        </div>
      </section>
    </main>
  );
}