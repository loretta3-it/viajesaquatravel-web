import { Link } from 'react-router-dom';
import { MapPin, ShieldCheck, Phone, Mail, Clock, Lock } from 'lucide-react';
import { FaWhatsapp, FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa6';
import { siteConfig } from '../../config/siteConfig';
import { useSettings } from '../../hooks/useSettings';
import { buildWhatsAppUrl } from '../../utils/whatsapp';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const { agency, loading } = useSettings();

  if (loading && !agency) {
    return (
      <footer className="bg-slate-900 border-t border-slate-800 py-16 mt-16 text-slate-300 animate-pulse">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-48 bg-slate-800/50 rounded-xl" />
      </footer>
    );
  }

  const safeAgency = agency || siteConfig.agency;
  const whatsappNumber = safeAgency.whatsappNumber || safeAgency.phone;
  const whatsappUrl = buildWhatsAppUrl(
    'Me gustaría recibir asesoría general.',
    whatsappNumber
  );

  const instagramUrl =
    safeAgency.social?.instagram || 'https://www.instagram.com/viajesaquatravel/';
  const facebookUrl =
    safeAgency.social?.facebook || 'https://www.facebook.com/viajesaquatravel/';
  const tiktokUrl =
    safeAgency.social?.tiktok || 'https://www.tiktok.com/@viajesaquatravel';

  const policies = Array.isArray(siteConfig.policies)
    ? siteConfig.policies
    : [
        { id: 'terms', title: 'Términos y Condiciones', path: '/terminos' },
        { id: 'privacy', title: 'Política de Privacidad', path: '/privacidad' },
      ];

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-16 mt-16 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="flex flex-col">
          <Link to="/" className="flex items-center gap-3 mb-6 hover:opacity-80 transition-opacity">
            <img
              src="/logo-circle.png"
              alt="Logo Aqua Travel"
              className="h-12 w-auto object-contain"
            />
            <h3 className="font-bold text-xl text-white">{safeAgency.name}</h3>
          </Link>
          <p className="text-slate-400 text-sm mb-4 leading-relaxed">
            {safeAgency.experienceYears || '9+'} años creando experiencias inolvidables. Diseñamos
            viajes seguros con asesoría humana 1 a 1.
          </p>
          <div className="flex items-center gap-2 text-sm mt-2 bg-slate-800/50 p-3 rounded-lg border border-slate-700/50">
            <ShieldCheck size={18} className="text-[#25D366] flex-shrink-0" />
            <span>
              Agencia Certificada RNT <strong>{safeAgency.rnt}</strong>
            </span>
          </div>
        </div>

        <div className="flex flex-col">
          <h3 className="font-bold text-lg mb-6 text-white">Contacto</h3>
          <ul className="space-y-4 text-sm text-slate-400">
            {safeAgency.phone && (
              <li>
                <a
                  href={`tel:${safeAgency.phone}`}
                  className="flex items-start gap-3 hover:text-white transition-colors"
                >
                  <Phone size={18} className="text-blue-400 mt-0.5" />
                  <span>{safeAgency.phone}</span>
                </a>
              </li>
            )}
            {whatsappNumber && (
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 hover:text-white transition-colors"
                >
                  <FaWhatsapp size={18} className="text-[#25D366] mt-0.5" />
                  <span>+{whatsappNumber}</span>
                </a>
              </li>
            )}
            {safeAgency.email && (
              <li>
                <a
                  href={`mailto:${safeAgency.email}`}
                  className="flex items-start gap-3 hover:text-white transition-colors"
                >
                  <Mail size={18} className="text-rose-400 mt-0.5" />
                  <span>{safeAgency.email}</span>
                </a>
              </li>
            )}
          </ul>

          <h3 className="font-bold text-lg mt-8 mb-4 text-white">Horarios de Atención</h3>
          <ul className="space-y-3 text-sm text-slate-400">
            {safeAgency.hours && (
              <>
                <li className="flex items-start gap-3">
                  <Clock size={18} className="text-amber-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="block font-medium text-slate-300">Lunes a Viernes</span>
                    <span>{safeAgency.hours.weekdays}</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 pl-7">
                  <div>
                    <span className="block font-medium text-slate-300">Sábados</span>
                    <span>{safeAgency.hours.saturday}</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 pl-7">
                  <div>
                    <span className="block font-medium text-slate-300">Domingos y Festivos</span>
                    <span>{safeAgency.hours.sundayAndHolidays}</span>
                  </div>
                </li>
              </>
            )}
          </ul>
        </div>

        <div className="flex flex-col">
          <h3 className="font-bold text-lg mb-6 text-white">Nuestra Oficina</h3>
          <div className="flex items-start gap-3 text-sm text-slate-400 mb-8">
            <MapPin size={18} className="text-emerald-400 mt-0.5 flex-shrink-0" />
            <div className="leading-relaxed">
              <span className="block text-white font-medium mb-1">
                {safeAgency.addressLine1 || safeAgency.location}
              </span>
              {safeAgency.addressLine2 && <span>{safeAgency.addressLine2}</span>}
            </div>
          </div>

          <h3 className="font-bold text-lg mb-4 text-white">Síguenos</h3>
          <div className="flex gap-4">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all shadow-md"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all shadow-md"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href={tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-white hover:text-black transition-all shadow-md"
            >
              <FaTiktok size={18} />
            </a>
          </div>
        </div>

        <div className="flex flex-col">
          <h3 className="font-bold text-lg mb-6 text-white">Legal</h3>
          <ul className="space-y-3 text-sm text-slate-400">
            {policies.map((policy) => (
              <li key={policy.id}>
                <Link to={policy.path} className="hover:text-blue-400 transition-colors">
                  {policy.title}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/admin/login"
                className="flex items-center gap-2 hover:text-blue-400 transition-colors group"
              >
                <Lock
                  size={14}
                  className="text-slate-500 group-hover:text-blue-400 transition-colors mt-0.5"
                />
                <span>Portal Empresarial</span>
              </Link>
            </li>
          </ul>

          <div className="mt-auto pt-8">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full gap-2 bg-[#25D366] hover:bg-[#1DA851] text-[#04210f] px-5 py-3 rounded-xl font-bold transition-all shadow-lg shadow-green-900/20"
            >
              <FaWhatsapp size={20} />
              Chatear con un Asesor
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
        <p>
          &copy; {CURRENT_YEAR} {safeAgency.name}. Todos los derechos reservados. RNT{' '}
          {safeAgency.rnt}.
        </p>
      </div>
    </footer>
  );
}