import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, ShieldCheck } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa6';
import { useSettings } from '../../hooks/useSettings';
import { buildWhatsAppUrl } from '../../utils/whatsapp';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const { agency } = useSettings();

  const brandName = agency?.name || 'Viajes Aqua Travel';
  const rnt = agency?.rnt || '115795';
  const location = agency?.location || 'Zipacentro, Zipaquirá, Cundinamarca, Colombia';
  const email = agency?.email || '';
  const phone = agency?.whatsappNumber || agency?.phone || '';
  const social = agency?.social || {};

  const whatsappUrl = buildWhatsAppUrl(
    'Me gustaría recibir asesoría general sobre paquetes turísticos.',
    phone
  );

  const socialLinks = [
    { id: 'facebook', label: 'Facebook', href: social.facebook, icon: FaFacebookF },
    { id: 'instagram', label: 'Instagram', href: social.instagram, icon: FaInstagram },
    { id: 'tiktok', label: 'TikTok', href: social.tiktok, icon: FaTiktok },
  ].filter((item) => typeof item.href === 'string' && item.href.trim().length > 0);

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-xl font-bold text-white tracking-tight">{brandName}</h2>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Agencia de viajes con más de 9 años de experiencia diseñando vacaciones, grandes
              viajes y experiencias a la medida con acompañamiento humano real.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300">
              <ShieldCheck className="w-4 h-4 text-[#25D366]" aria-hidden="true" />
              <span>Registro Nacional de Turismo — RNT {rnt}</span>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Explorar
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="hover:text-white transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="hover:text-white transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/ofertas" className="hover:text-white transition-colors">
                  Ofertas Especiales
                </Link>
              </li>
              <li>
                <Link to="/aquawoman" className="hover:text-white transition-colors">
                  Aqua Woman Experience
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contacto
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" aria-hidden="true" />
                <span>{location}</span>
              </li>
              {email && (
                <li className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-slate-500 shrink-0" aria-hidden="true" />
                  <a href={`mailto:${email}`} className="hover:text-white transition-colors">
                    {email}
                  </a>
                </li>
              )}
              {phone && (
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-slate-500 shrink-0" aria-hidden="true" />
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    WhatsApp Oficial
                  </a>
                </li>
              )}
            </ul>

            <div className="flex items-center gap-2.5 mt-5">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-slate-700 transition"
                  >
                    <Icon className="w-4 h-4" aria-hidden="true" />
                  </a>
                );
              })}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-lg bg-[#25D366] text-slate-950 flex items-center justify-center hover:bg-[#1ebe5d] transition"
              >
                <FaWhatsapp className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {CURRENT_YEAR} {brandName}. Todos los derechos reservados. RNT {rnt}.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/terminos" className="hover:text-slate-300 transition-colors">
              Términos y Condiciones
            </Link>
            <Link to="/privacidad" className="hover:text-slate-300 transition-colors">
              Política de Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}