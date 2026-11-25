import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa6';
import { useSettings } from '../../hooks/useSettings';
import { buildWhatsAppUrl } from '../../utils/whatsapp';

export default function SocialDock() {
  const { agency } = useSettings();
  const social = agency?.social || {};
  const phone = agency?.whatsappNumber || agency?.phone;

  const whatsappHref = buildWhatsAppUrl(
    'Me gustaría recibir asesoría para planear mi próximo viaje.',
    phone
  );

  const links = [
    {
      id: 'facebook',
      label: 'Facebook',
      href: social.facebook,
      icon: FaFacebookF,
      className: 'hover:bg-[#1877F2] hover:text-white',
    },
    {
      id: 'instagram',
      label: 'Instagram',
      href: social.instagram,
      icon: FaInstagram,
      className: 'hover:bg-[#E4405F] hover:text-white',
    },
    {
      id: 'tiktok',
      label: 'TikTok',
      href: social.tiktok,
      icon: FaTiktok,
      className: 'hover:bg-slate-950 hover:text-white',
    },
  ].filter((item) => typeof item.href === 'string' && item.href.trim().length > 0);

  return (
    <aside
      aria-label="Redes sociales y contacto rápido"
      className="hidden lg:flex fixed right-4 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-2 p-1.5 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-lg social-dock-enter"
    >
      {links.map((item) => {
        const Icon = item.icon;
        return (
          <a
            key={item.id}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            title={item.label}
            className={`w-10 h-10 rounded-xl flex items-center justify-center text-slate-600 transition-colors ${item.className}`}
          >
            <Icon className="w-4 h-4" aria-hidden="true" />
          </a>
        );
      })}

      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribir por WhatsApp"
        title="Asesoría por WhatsApp"
        className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#25D366] text-white hover:bg-[#1ebe5d] transition-colors shadow-sm"
      >
        <FaWhatsapp className="w-5 h-5" aria-hidden="true" />
      </a>
    </aside>
  );
}