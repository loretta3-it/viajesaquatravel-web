import {
  Award,
  Compass,
  Globe2,
  HeartHandshake,
  MapPin,
  ShieldCheck,
  Sparkles,
  UserCheck,
  Wallet,
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import PageHeader from '../components/layout/PageHeader';
import WorldMap from '../components/ui/WorldMap';
import { useSettings } from '../hooks/useSettings';
import { buildWhatsAppUrl } from '../utils/whatsapp';

const DIFFERENTIATORS = [
  {
    icon: UserCheck,
    title: 'Asesoría personalizada',
    description:
      'Te ayudamos a encontrar el viaje que mejor se adapte a tus gustos, necesidades, expectativas y presupuesto.',
    accent: 'text-blue-400 bg-blue-500/10 border border-blue-500/20',
  },
  {
    icon: Globe2,
    title: 'Destinos nacionales e internacionales',
    description:
      'Contamos con múltiples opciones para que descubras Colombia y explores el mundo.',
    accent: 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/20',
  },
  {
    icon: HeartHandshake,
    title: 'Acompañamiento y confianza',
    description:
      'Estamos contigo en el proceso de planeación, reserva y organización de tu experiencia, brindándote orientación y atención cercana.',
    accent: 'text-[#25D366] bg-[#25D366]/10 border border-[#25D366]/20',
  },
  {
    icon: Wallet,
    title: 'Opciones para todos los presupuestos',
    description:
      'Creemos que viajar debe estar al alcance de todos. Por eso buscamos alternativas, facilidades de pago y opciones que te permitan hacer realidad tus sueños.',
    accent: 'text-amber-400 bg-amber-500/10 border border-amber-500/20',
  },
  {
    icon: Sparkles,
    title: 'Experiencias para cada viajero',
    description:
      'Viajes familiares, escapadas en pareja, vacaciones con amigos, grupos, aventuras, viajes de bienestar y experiencias diseñadas para vivir momentos únicos.',
    accent: 'text-purple-400 bg-purple-500/10 border border-purple-500/20',
  },
  {
    icon: ShieldCheck,
    title: 'Profesionalismo y respaldo',
    description:
      'Trabajamos con aliados y proveedores turísticos para ofrecerte alternativas organizadas, servicios de calidad y la tranquilidad de viajar con una agencia comprometida contigo.',
    accent: 'text-emerald-400 bg-emerald-500/10 border border-emerald-500/20',
  },
];

export default function About() {
  const { agency } = useSettings();
  const rnt = agency?.rnt || '115795';
  const experienceYears = agency?.experienceYears || '9';
  const addressLine1 = agency?.addressLine1 || 'Carrera 10 No. 5-73 oficina 213';
  const phone = agency?.whatsappNumber || agency?.phone;

  const whatsappHref = buildWhatsAppUrl(
    'Estuve visitando la página Nosotros y quiero empezar a planear mi próximo viaje.',
    phone
  );

  return (
    <main className="bg-[#0B1220] text-slate-100 min-h-[75vh] pb-20">
      <PageHeader
        title="Nosotros"
        subtitle="Viajes Aquatravel — Una agencia al alcance de todos."
        breadcrumbItems={[
          { label: 'Inicio', path: '/' },
          { label: 'Nosotros' },
        ]}
      />

      {/* Bloque ¿Quiénes somos? + Métricas + ¿Qué sueñas hacer? */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 bg-slate-900 rounded-3xl border border-slate-800 p-7 sm:p-10 shadow-xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold">
              <Award className="w-4 h-4 text-blue-400" aria-hidden="true" />
              <span>¿Quiénes somos?</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              ¿Quiénes somos?
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Somos una Agencia de Viajes comprometida con ofrecer experiencias de viaje
              Nacionales e Internacionales, brindando asesoría personalizada, acompañamiento,
              confianza y opciones que se adaptan a las necesidades y posibilidades de cada
              viajero.
            </p>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Creemos que conocer el mundo debe estar al alcance de todos, viajar es mucho más que
              conocer un lugar; es crear recuerdos, compartir momentos especiales, descubrir nuevas
              culturas y regalarse experiencias que quedan para toda la vida.
            </p>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Por eso, trabajamos día a día para convertir cada sueño de viaje en una realidad, con
              un servicio cercano, transparente y responsable.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-200">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-950/70 border border-slate-800 font-medium">
                <MapPin className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                {addressLine1}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-950/70 border border-slate-800 font-medium">
                <ShieldCheck className="w-4 h-4 text-[#25D366]" aria-hidden="true" />
                RNT {rnt}
              </span>
            </div>
          </div>

          {/* Métricas de confianza + ¿Qué sueñas hacer? */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 flex flex-col justify-between min-h-[155px] shadow-lg">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                Experiencia
              </span>
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-[#25D366]">+{experienceYears}</p>
                <p className="text-xs text-slate-400 mt-1">Años diseñando viajes</p>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 flex flex-col justify-between min-h-[155px] shadow-lg">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                Respaldo Legal
              </span>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-white">RNT {rnt}</p>
                <p className="text-xs text-slate-400 mt-1">Registro Nacional de Turismo</p>
              </div>
            </div>

            <div className="col-span-2 bg-slate-900 rounded-3xl border border-slate-800 p-6 sm:p-7 shadow-lg space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
                <Compass className="w-4 h-4" aria-hidden="true" />
                <span>¿Qué sueñas hacer?</span>
              </div>
              <h3 className="text-lg font-bold text-white">¿Qué sueñas hacer?</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Contamos con diferentes alternativas de turismo, paquetes vacacionales, destinos de
                playa, experiencias nacionales e internacionales, cruceros, viajes familiares,
                viajes en pareja, Bodas y mucho más.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bloque ¿Qué nos hace diferentes? (6 tarjetas) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="mb-8 border-b border-slate-800 pb-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            ¿Qué nos hace diferentes?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {DIFFERENTIATORS.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="bg-slate-900 rounded-3xl border border-slate-800 hover:border-slate-700 transition-colors p-6 shadow-lg"
              >
                <div
                  className={`w-11 h-11 rounded-2xl flex items-center justify-center mb-4 ${item.accent}`}
                >
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="text-base font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  {item.description}
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

      {/* Bloque final de cierre */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14">
        <div className="rounded-3xl bg-slate-900 border border-slate-800 p-8 sm:p-10 shadow-xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Tu próximo destino comienza aquí
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              No importa si sueñas con conocer una playa paradisíaca, recorrer Europa, descubrir
              rincones mágicos de Colombia o vivir una aventura al otro lado del mundo. En Viajes
              Aquatravel estamos listos para ayudarte a hacerlo realidad.
            </p>
            <p className="text-sm sm:text-base text-white font-semibold">
              Tú sueñas con viajar, nosotros te ayudamos a hacerlo posible.
            </p>
            <p className="text-sm text-amber-300 font-semibold">
              Viajes Aquatravel — Una agencia al alcance de todos.
            </p>
            <p className="text-sm text-slate-300">
              Cuéntanos tu sueño y lo hacemos realidad.
            </p>
          </div>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[#25D366] hover:bg-[#1DA851] text-[#04210f] font-bold text-sm sm:text-base transition shadow-lg shadow-green-900/25 shrink-0"
          >
            <FaWhatsapp className="w-5 h-5" aria-hidden="true" />
            <span>¡Escríbenos hoy y empecemos a planear!</span>
          </a>
        </div>
      </section>
    </main>
  );
}