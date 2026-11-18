import { FaWhatsapp } from "react-icons/fa6";
import { MapPin } from "lucide-react";

const WA_NUMBER = "57XXXXXXXXXX";

export default function PackageCard({ title, destination, price, badge, image, alt }) {
  const message = `Hola Aqua Travel, quiero cotizar el paquete: ${title}.`;
  const href = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <article
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10
                 bg-[#0F1A2E] transition-all duration-300
                 motion-safe:hover:-translate-y-1 hover:border-teal-400/40
                 hover:shadow-[0_12px_40px_-12px_rgba(45,212,191,0.35)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={alt ?? title}
          loading="lazy"
          decoding="async"
          width="800"
          height="600"
          className="h-full w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#0F1A2E] via-[#0F1A2E]/50 to-transparent"
        />
        {badge && (
          <span className="absolute left-3 top-3 rounded-full bg-[#0B1220]/85 px-3 py-1 text-xs
                           font-semibold text-teal-300 ring-1 ring-teal-300/30 backdrop-blur-sm">
            {badge}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <p className="flex items-center gap-1.5 text-sm text-white/70">
          <MapPin className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
          {destination}
        </p>
        <h3 className="text-lg font-semibold leading-snug text-white">{title}</h3>
        {price && (
          <p className="text-sm text-white/70">
            Desde <span className="text-base font-semibold text-white">{price}</span>
          </p>
        )}

        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex h-12 items-center justify-center gap-2 rounded-xl
                     bg-[#25D366] px-4 font-semibold text-[#0B1220] transition-all duration-200
                     hover:brightness-110 active:scale-[0.98]
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white
                     focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F1A2E]"
        >
          <FaWhatsapp className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
          Cotizar este paquete
        </a>
      </div>
    </article>
  );
}