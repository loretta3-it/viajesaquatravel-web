// src/pages/Home.js
import { Check, Clock, Image as ImageIcon, Flower2 } from "lucide-react";
import {
  AQUA_WOMAN_MESSAGE,
  BUSINESS,
  MAIN_CTA_MESSAGE,
  WHATSAPP_NUMBERS,
  buildWhatsAppLink,
  formatCOP,
  highTicketProducts,
  volumeProducts,
} from "../data/CatalogData";

/* -----------------------------------------------------------------------------
   Palette (arbitrary values, so no tailwind.config.js changes are needed)
   Navy        #0B2545   primary / trust
   Navy deep   #07182E   premium section background
   Navy card   #0F2F57   cards on the dark section
   Light gray  #F4F6F9   light section background
   WA green    #25D366   ALL CTAs (hover #1EBE5A)
----------------------------------------------------------------------------- */

/** Lucide has no WhatsApp brand icon, so we ship our own inline SVG. */
function WhatsAppIcon({ className = "h-5 w-5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.86 9.86 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.41a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.22-8.23 8.22Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.23-.16-.48-.29Z" />
    </svg>
  );
}

/** The only CTA style used on the whole page. */
function WhatsAppButton({ href, children, className = "" }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2.5 rounded-lg bg-[#25D366] px-6 py-3.5 text-base font-bold text-[#062B16] transition-colors hover:bg-[#1EBE5A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${className}`}
    >
      <WhatsAppIcon />
      {children}
    </a>
  );
}

/** Swap for a real <img> once authentic photos are available. */
function ImagePlaceholder({ src, alt, label, dark = false, tone }) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover"
      />
    );
  }
  const toneClasses =
    tone ?? (dark ? "bg-[#163B6B] text-white/60" : "bg-slate-200 text-slate-500");
  return (
    <div
      role="img"
      aria-label={alt}
      className={`flex h-full w-full flex-col items-center justify-center gap-2 text-center ${toneClasses}`}
    >
      <ImageIcon className="h-8 w-8" aria-hidden="true" />
      <span className="px-4 text-xs font-medium">Foto real: {label}</span>
    </div>
  );
}

function ProductCard({ product, dark = false }) {
  const { destination, title, tagline, duration, includes, priceFrom, priceNote } =
    product;

  return (
    <article
      className={`flex flex-col overflow-hidden rounded-2xl border ${
        dark
          ? "border-white/10 bg-[#0F2F57] text-white"
          : "border-slate-200 bg-white text-[#0B2545]"
      }`}
    >
      <div className="aspect-[4/3] w-full">
        <ImagePlaceholder
          src={product.image}
          alt={product.imageAlt}
          label={destination}
          dark={dark}
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold leading-snug">{title}</h3>
        <p className={`mt-2 text-sm ${dark ? "text-white/70" : "text-slate-600"}`}>
          {tagline}
        </p>

        <p
          className={`mt-4 flex items-center gap-2 text-sm font-semibold ${
            dark ? "text-white/80" : "text-slate-700"
          }`}
        >
          <Clock className="h-4 w-4" aria-hidden="true" />
          {duration}
        </p>

        <ul className="mt-3 space-y-1.5">
          {includes.map((item) => (
            <li
              key={item}
              className={`flex items-start gap-2 text-sm ${
                dark ? "text-white/80" : "text-slate-600"
              }`}
            >
              <Check
                className="mt-0.5 h-4 w-4 flex-none text-[#25D366]"
                aria-hidden="true"
              />
              {item}
            </li>
          ))}
        </ul>

        <div
          className={`mt-6 border-t pt-5 ${
            dark ? "border-white/10" : "border-slate-200"
          }`}
        >
          <p className={`text-sm ${dark ? "text-white/70" : "text-slate-500"}`}>
            Desde
          </p>
          <p className="text-3xl font-extrabold tracking-tight">
            {formatCOP(priceFrom)}{" "}
            <span
              className={`text-sm font-semibold ${
                dark ? "text-white/70" : "text-slate-500"
              }`}
            >
              COP {priceNote}
            </span>
          </p>
        </div>

        <WhatsAppButton
          href={buildWhatsAppLink(WHATSAPP_NUMBERS.main, product.whatsappMessage)}
          className="mt-5 w-full"
        >
          Cotizar este paquete
        </WhatsAppButton>
      </div>
    </article>
  );
}

function Hero() {
  return (
    <header className="relative isolate overflow-hidden bg-[#0B2545]">
      {/* Replace with the real hero photo, e.g.:
          <img src="/images/hero.jpg" alt="..." className="absolute inset-0 -z-20 h-full w-full object-cover" /> */}
      <div
        className="absolute inset-0 -z-20 bg-gradient-to-br from-[#163B6B] via-[#0B2545] to-[#07182E]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-[#07182E]/50"
        aria-hidden="true"
      />

      <div className="mx-auto flex min-h-[85vh] max-w-6xl flex-col justify-center px-6 py-24 md:py-32">
        <p className="mb-4 text-base font-semibold text-white/80">
          {BUSINESS.name}
        </p>
        <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
          Viajes a tu medida sin estrés ni carga mental
        </h1>
        <p className="mt-6 max-w-xl text-lg text-white/85 md:text-xl">
          9 años de experiencia garantizando tu inversión
        </p>

        <div className="mt-10 flex flex-col items-start gap-3">
          <WhatsAppButton
            href={buildWhatsAppLink(WHATSAPP_NUMBERS.main, MAIN_CTA_MESSAGE)}
            className="w-full px-8 py-4 text-lg sm:w-auto"
          >
            Cotiza tu viaje por WhatsApp
          </WhatsAppButton>
          <p className="text-sm text-white/70">
            Sin formularios: te respondemos directo por chat.
          </p>
        </div>
      </div>
    </header>
  );
}

function TrustBar() {
  const items = [
    `🛡️ ${BUSINESS.years} años de experiencia`,
    `📍 Oficina Física en ${BUSINESS.location}`,
    `📋 RNT ${BUSINESS.rnt}`,
  ];

  return (
    <section
      aria-label="Respaldo de Viajes Aqua Travel"
      className="border-b border-slate-200 bg-white"
    >
      <ul className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-3 px-6 py-5 text-center text-sm font-bold text-[#0B2545] md:flex-row md:gap-0 md:text-base">
        {items.map((text, i) => (
          <li
            key={text}
            className={`md:px-8 ${
              i > 0 ? "md:border-l md:border-slate-300" : ""
            }`}
          >
            {text}
          </li>
        ))}
      </ul>
    </section>
  );
}

function VolumeSection() {
  return (
    <section id="escapadas" className="bg-[#F4F6F9] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0B2545] md:text-4xl">
            Escapadas y Todo Incluido
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Paquetes listos para salir pronto, con todo resuelto.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {volumeProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

function HighTicketSection() {
  return (
    <section id="viajes-2027" className="bg-[#07182E] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            Los viajes de tu vida: 2027
          </h2>
          <p className="mt-3 text-lg text-white/70">
            Itinerarios diseñados contigo, con acompañamiento desde la
            cotización hasta el regreso.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {highTicketProducts.map((product) => (
            <ProductCard key={product.id} product={product} dark />
          ))}
        </div>
      </div>
    </section>
  );
}

function AquaWomanBanner() {
  return (
    <section
      id="aqua-woman"
      className="bg-[#D9F0EC]"
      aria-labelledby="aqua-woman-title"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 md:grid-cols-2 md:py-28">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#0B2545]/20 px-4 py-1.5 text-sm font-semibold text-[#0B2545]">
            <Flower2 className="h-4 w-4" aria-hidden="true" />
            Retiros terapéuticos para mujeres
          </span>
          <h2
            id="aqua-woman-title"
            className="mt-5 text-3xl font-extrabold tracking-tight text-[#0B2545] md:text-5xl"
          >
            Aqua Woman Experience
          </h2>
          <p className="mt-4 max-w-lg text-lg text-[#0B2545]/80">
            Un viaje para volver a ti: descanso, bienestar y compañía de otras
            mujeres, organizado por el equipo en el que ya confían.
          </p>

          <WhatsAppButton
            href={buildWhatsAppLink(WHATSAPP_NUMBERS.aqua, AQUA_WOMAN_MESSAGE)}
            className="mt-8 w-full px-8 py-4 sm:w-auto"
          >
            Quiero información de Aqua Woman
          </WhatsAppButton>
        </div>

        <div className="aspect-[4/3] overflow-hidden rounded-2xl">
          <ImagePlaceholder
            alt="Mujeres compartiendo un retiro de bienestar al aire libre"
            label="Aqua Woman Experience"
            tone="bg-[#B8E0D9] text-[#0B2545]/60"
          />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0B2545] px-6 py-10 text-center text-sm text-white/70">
      <p className="font-semibold text-white">{BUSINESS.name}</p>
      <p className="mt-1">
        {BUSINESS.location} · RNT {BUSINESS.rnt}
      </p>
    </footer>
  );
}

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <VolumeSection />
      <HighTicketSection />
      <AquaWomanBanner />
      <Footer />
    </main>
  );
}