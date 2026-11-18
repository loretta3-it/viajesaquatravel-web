import { FaWhatsapp } from "react-icons/fa6";

const WA_NUMBER = "57XXXXXXXXXX"; // replace with the real number, no "+"
const WA_MESSAGE = "Hola Aqua Travel, quiero información sobre un viaje.";

export default function WhatsAppFab() {
  const href = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="group fixed right-5 z-50 bottom-[calc(1.25rem+env(safe-area-inset-bottom))]
                 flex h-14 items-center gap-2 rounded-full bg-[#25D366] pl-4 pr-4
                 text-[#0B1220] font-semibold shadow-[0_0_24px_rgba(37,211,102,0.35)]
                 transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_32px_rgba(37,211,102,0.55)]
                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white
                 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1220]"
    >
      <span className="relative flex h-6 w-6 flex-shrink-0 items-center justify-center">
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-[#0B1220]/25 opacity-0
                     motion-safe:group-hover:animate-ping"
        />
        <FaWhatsapp className="relative h-6 w-6" aria-hidden="true" />
      </span>
      <span className="hidden sm:inline text-sm">Cotiza por WhatsApp</span>
    </a>
  );
}