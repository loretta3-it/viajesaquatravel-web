import { FaWhatsapp } from 'react-icons/fa6';
import { useSettings } from '../../hooks/useSettings';
import { buildWhatsAppUrl } from '../../utils/whatsapp';

export default function WhatsAppFab() {
  const { agency } = useSettings();
  const phone = agency?.whatsappNumber || agency?.phone;

  const whatsappUrl = buildWhatsAppUrl(
    'Me gustaría recibir asesoría para planear mi próximo viaje.',
    phone
  );

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar a Viajes Aqua Travel por WhatsApp"
      className="lg:hidden fixed bottom-5 right-5 z-40 inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] text-white shadow-xl transition-transform duration-200 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366]"
    >
      <FaWhatsapp className="w-7 h-7" aria-hidden="true" />
    </a>
  );
}