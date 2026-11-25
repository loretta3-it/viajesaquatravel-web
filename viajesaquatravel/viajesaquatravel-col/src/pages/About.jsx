import { Award, Compass, HeartHandshake, MapPin, ShieldCheck, Sparkles } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import PageHeader from '../components/layout/PageHeader';
import WorldMap from '../components/ui/WorldMap';
import { useSettings } from '../hooks/useSettings';
import { buildWhatsAppUrl } from '../utils/whatsapp';

const VALUE_PILLARS = [
  {
    icon: ShieldCheck,
    title: 'Respaldo Formal (RNT 115795)',
    description:
      'Operamos bajo la normatividad turística colombiana con total transparencia en tarifas, proveedores y políticas de viaje.',
    accent: 'text-[#25D366] bg-[#25D366]/10',
  },
  {
    icon: HeartHandshake,
    title: 'Acompañamiento Humano Real',
    description:
      'No eres un número de reserva. Te asesoramos antes de comprar, durante tu estadía y hasta tu regreso a casa.',
    accent: 'text-blue-400 bg-blue-500/10',
  },
  {
    icon: Compass,
    title: 'Diseño a la Medida',
    description:
      'Desde escapadas nacionales y Caribe en familia hasta grandes viajes internacionales como Europa, Japón o Fórmula 1.',
    accent: 'text-emerald-400 bg-emerald-500/10',
  },
  {
    icon: Sparkles,
    title: 'Curaduría y Experiencias Únicas',
    description:
      'Seleccionamos hoteles, aerolíneas y operadores confiables, además de crear nuestra comunidad exclusiva Aqua Woman Experience.',
    accent: 'text-amber-400 bg-amber-500/10',
  },
];

export default function About() {
  const { agency } = useSettings();
  const brandName = agency?.name || 'Viajes Aqua Travel';
  const rnt = agency?.rnt || '115795';
  const experienceYears = agency?.experienceYears || '9';
  const location = agency?.addressLine1 || agency?.location || 'Zipacentro, Zipaquirá, Colombia';
  const phone = agency?.whatsappNumber || agency?.phone;

  const whatsappHref = buildWhatsAppUrl(
    'Estuve conociendo la historia de Viajes Aqua Travel y quiero asesoría para planear mi próximo viaje.',
    phone
  );

  return (
    <main className="bg-[#0B1220] text-slate-50 pb-20">
      <PageHeader
        title="Nosotros"
        subtitle="Más de 9 años transformando sueños de viaje en experiencias seguras, transparentes y memorables desde Zipaquirá hacia el mundo."
        breadcrumbItems={[
          { label: 'Inicio', path: '/' },
          { label: 'Nosotros' },
        ]}
      />

      {/* Historia y credenciales */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 bg-slate-900 rounded-3xl border border-slate-800 p-7 sm:p-10 shadow-xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold">
              <Award className="w-4 h-4 text-blue-400" aria-hidden="true" />
              <span>Trayectoria comprobada en Zipaquirá</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Una agencia cercana con visión global
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              <strong className="text-white">{brandName}</strong> nació en Zipaquirá con el
              propósito de ofrecer una asesoría turística honesta, cálida y profesional. Durante más
              de {experienceYears} años hemos acompañado a familias, parejas, grupos corporativos y
              viajeras independientes a descubrir destinos en Colombia, el Caribe, América, Europa y
              Asia.
            </p>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Creemos que planear un viaje debe ser emocionante y libre de fricción. Por eso
              combinamos herramientas digitales ágiles con el criterio experto de nuestro equipo
              humano en Zipacentro, asegurando que cada detalle —vuelos, alojamientos, traslados,
              visas y asistencia médica— esté respaldado de principio a fin.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-200">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800/80 border border-slate-700 font-medium">
                <MapPin className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                {location}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800/80 border border-slate-700 font-medium">
                <ShieldCheck className="w-4 h-4 text-[#25D366]" aria-hidden="true" />
                RNT {rnt}
              </span>
            </div>
          </div>

          {/* Métricas de confianza Bento */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 flex flex-col justify-between min-h-[150px] shadow-lg">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                Experiencia
              </span>
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-[#25D366]">{experienceYears}+</p>
                <p className="text-xs text-slate-400 mt-1">Años diseñando viajes</p>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 flex flex-col justify-between min-h-[150px] shadow-lg">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                Formalidad
              </span>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-white">RNT {rnt}</p>
                <p className="text-xs text-slate-400 mt-1">Registro Nacional de Turismo</p>
              </div>
            </div>

            <div className="col-span-2 bg-slate-900 rounded-3xl border border-slate-800 p-6 shadow-lg space-y-3">
              <h3 className="text-base font-bold text-white">
                ¿Prefieres hablar con una asesora?
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Cuéntanos tu destino ideal, fechas estimadas y presupuesto. Te respondemos directo
                por WhatsApp con opciones claras.
              </p>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#1DA851] text-[#04210f] font-bold text-sm transition"
              >
                <FaWhatsapp className="w-4 h-4" aria-hidden="true" />
                <span>Hablar con Viajes Aqua Travel</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Propuesta de valor */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="mb-8 border-b border-slate-800 pb-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Nuestra propuesta de valor
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-1">
            Cuatro pilares que respaldan cada itinerario que operamos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {VALUE_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.title}
                className="bg-slate-900 rounded-3xl border border-slate-800 p-6 shadow-lg"
              >
                <div
                  className={`w-11 h-11 rounded-2xl flex items-center justify-center mb-4 ${pillar.accent}`}
                >
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="text-base font-bold text-white">{pillar.title}</h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {/* Mapamundi interactivo */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <WorldMap />
      </section>
    </main>
  );
}