// src/pages/Home.js
import {
  Check,
  Clock,
  ExternalLink,
  Flower2,
  Image as ImageIcon,
} from "lucide-react";
import {
  AQUA_WOMAN_SOCIAL,
  BUSINESS,
  MAIN_CTA_MESSAGE,
  WHATSAPP_NUMBERS,
  buildWhatsAppLink,
  catalog,
  formatPriceParts,
} from "../data/CatalogData";

/* -----------------------------------------------------------------------------
   Palette (arbitrary values, no tailwind.config.js changes needed)
   Navy        #0B2545   primary / trust
   Navy deep   #07182E   High-Ticket section background
   Navy card   #0F2F57   cards on the dark section
   Light gray  #F4F6F9   light section background
   WA green    #25D366   ALL CTAs
----------------------------------------------------------------------------- */

/** Set to a real photo path (e.g. "/images/hero.jpg") to replace the placeholder. */
const HERO_IMAGE = null;

/** Section look per `theme` in CatalogData.js */
const THEMES = {
  gray: {
    section: "bg-[#F4F6F9]",
    title: "text-[#0B2545]",
    subtitle: "text-slate-600",
    dark: false,
  },
  white: {
    section: "bg-white",
    title: "text-[#0B2545]",
    subtitle: "text-slate-600",
    dark: false,
  },
  dark: {
    section: "bg-[#07182E]",
    title: "text-white",
    subtitle: "text-white/70",
    dark: true,
  },
};

/** SEO-optimized <h2> text per category id (see CatalogData.js). */
const SECTION_TITLES = {
  "volume-engine": "Paquetes Todo Incluido al Caribe: Punta Cana y Cancún",
  nacionales: "Viajes Nacionales: San Andrés, La Guajira y Cartagena",
  "high-ticket-2027":
    "Viajes Internacionales y Experiencias Premium: Europa, Japón y F1 Miami",
  "aqua-woman": "Aqua Woman: Retiros Terapéuticos y de Bienestar para Mujeres",
};

/** Lucide has no WhatsApp brand icon, so this is an inline SVG. */
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

/**
 * The only CTA style on the page: bg-[#25D366], brightness boost on hover,
 * and an icon with a soft pulse (animate-pulse) to invite the click.
 */
function WhatsAppButton({ href, children, className = "" }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#25D366] px-6 py-3.5 text-base font-bold text-[#062B16] transition duration-300 hover:brightness-110 focus-visible:brightness-110 ${className}`}
    >
      <WhatsAppIcon className="h-5 w-5 animate-pulse motion-reduce:animate-none" />
      {children}
    </a>
  );
}

/** Gradient badge, absolutely positioned in the top-left of its image wrapper. */
function FloatingBadge({ label, gradient }) {
  return (
    <span
      className={`absolute left-4 top-4 z-10 inline-flex items-center rounded-full bg-gradient-to-r ${gradient} px-3 py-1.5 text-xs font-bold text-white`}
    >
      {label}
    </span>
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
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    );
  }
  const toneClasses =
    tone ??
    (dark ? "bg-[#163B6B] text-white/60" : "bg-slate-200 text-slate-500");
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

function Price({ price, note, dark }) {
  if (!price) {
    return (
      <p
        className={`text-base font-bold ${
          dark ? "text-white" : "text-[#0B2545]"
        }`}
      >
        Consulta el precio de tu fecha
      </p>
    );
  }
  const { value, code } = formatPriceParts(price);
  return (
    <>
      <p className={`text-sm ${dark ? "text-white/70" : "text-slate-500"}`}>
        Desde
      </p>
      <p className="text-3xl font-extrabold tracking-tight">
        {value}{" "}
        <span
          className={`text-sm font-semibold ${
            dark ? "text-white/70" : "text-slate-500"
          }`}
        >
          {code}
          {note ? ` ${note}` : ""}
        </span>
      </p>
    </>
  );
}

function ProductCard({ product, category, dark }) {
  const { destination, tagline, duration, includes, price } = product;

  return (
    <article
      className={`group flex flex-col overflow-hidden rounded-2xl border transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl ${
        dark
          ? "border-white/10 bg-[#0F2F57] text-white"
          : "border-slate-200 bg-white text-[#0B2545]"
      }`}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <FloatingBadge
          label={category.badge.label}
          gradient={category.badge.gradient}
        />
        <ImagePlaceholder
          src={product.image}
          alt={product.imageAlt}
          label={destination}
          dark={dark}
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold leading-snug">{destination}</h3>
        <p
          className={`mt-2 text-sm ${dark ? "text-white/70" : "text-slate-600"}`}
        >
          {tagline}
        </p>

        {duration && (
          <p
            className={`mt-4 flex items-center gap-2 text-sm font-semibold ${
              dark ? "text-white/80" : "text-slate-700"
            }`}
          >
            <Clock className="h-4 w-4" aria-hidden="true" />
            {duration}
          </p>
        )}

        {includes?.length > 0 && (
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
        )}

        <div
          className={`mt-auto border-t pt-5 ${
            dark ? "border-white/10" : "border-slate-200"
          }`}
        >
          <Price price={price} note={product.priceNote} dark={dark} />
        </div>

        <WhatsAppButton
          href={buildWhatsAppLink(
            WHATSAPP_NUMBERS[category.whatsapp],
            product.whatsappMessage
          )}
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
    <header className="relative isolate overflow-hidden bg-[#07182E]">
      {/* Aspirational image (placeholder until HERO_IMAGE is set) */}
      {HERO_IMAGE ? (
        <img
          src={HERO_IMAGE}
          alt="Destino de viaje aspiracional"
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#1B5A8C] via-[#0B2545] to-[#07182E]"
          aria-hidden="true"
        >
          <p className="absolute bottom-20 right-6 flex items-center gap-2 text-xs font-medium text-white/40">
            <ImageIcon className="h-4 w-4" aria-hidden="true" />
            Foto aspiracional del hero
          </p>
        </div>
      )}

      {/* Dark overlay for text readability */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-start px-6 pb-40 pt-28 md:pt-36">
        <p className="mb-5 inline-flex w-fit items-center rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur-md">
          {BUSINESS.name}
        </p>

        {/* Raw text of the H1 (spans joined by a space) must stay exactly:
            "Agencia de Viajes en Zipaquirá: Punta Cana, San Andrés, Europa y Retiros para Mujeres" */}
        <h1 className="max-w-4xl text-white">
          <span className="block text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Agencia de Viajes en Zipaquirá:
          </span>{" "}
          <span className="mt-3 block text-2xl font-bold leading-snug text-white/90 sm:text-3xl md:text-4xl">
            Punta Cana, San Andrés, Europa y Retiros para Mujeres
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-xl font-semibold text-white md:text-2xl">
          Viajes a tu medida sin estrés ni carga mental
        </p>
        <p className="mt-3 max-w-xl text-lg text-white/90 md:text-xl">
          9 años de experiencia garantizando tu inversión
        </p>

        <div className="mt-10 flex flex-col items-start gap-3">
          <WhatsAppButton
            href={buildWhatsAppLink(WHATSAPP_NUMBERS.main, MAIN_CTA_MESSAGE)}
            className="w-full px-8 py-4 text-lg sm:w-auto"
          >
            Cotiza tu viaje por WhatsApp
          </WhatsAppButton>
          <p className="text-sm text-white/75">
            Sin formularios: te respondemos directo por chat.
          </p>
        </div>
      </div>
    </header>
  );
}

/** Floating panel that overlaps the bottom edge of the hero. */
function TrustBar() {
  const items = [
    { text: `🛡️ ${BUSINESS.years} años de experiencia` },
    { text: `📍 Oficina ${BUSINESS.city}` },
    // RNT is legally required in Colombian travel advertising: highlighted pill
    { text: `📋 RNT ${BUSINESS.rnt}`, highlight: true },
  ];

  return (
    <section
      aria-label="Respaldo de Viajes Aqua Travel"
      className="relative z-10 -mt-12 bg-[linear-gradient(to_bottom,transparent_50%,#F4F6F9_50%)] px-6 md:-mt-14"
    >
      <ul className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-6 py-5 text-center text-sm font-bold text-[#0B2545] shadow-xl md:flex-row md:gap-0 md:py-6 md:text-base">
        {items.map(({ text, highlight }, i) => (
          <li
            key={text}
            className={`md:flex-1 md:px-6 ${
              i > 0 ? "md:border-l md:border-slate-200" : ""
            }`}
          >
            {highlight ? (
              <span className="inline-block rounded-full bg-[#0B2545] px-4 py-1.5 text-white">
                {text}
              </span>
            ) : (
              text
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

function CategorySection({ category, isFirst }) {
  const theme = THEMES[category.theme];

  return (
    <section
      id={category.id}
      className={`${theme.section} ${
        isFirst ? "pb-20 pt-16 md:pb-28 md:pt-20" : "py-20 md:py-28"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2
            className={`text-3xl font-extrabold tracking-tight md:text-4xl ${theme.title}`}
          >
            {SECTION_TITLES[category.id] ?? category.title}
          </h2>
          <p className={`mt-3 text-lg ${theme.subtitle}`}>{category.subtitle}</p>
        </div>

        <div className={`mt-12 grid gap-8 ${category.gridClass}`}>
          {category.products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              category={category}
              dark={theme.dark}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/** Aqua Woman: full-width banner that bridges traffic to the brand's profile. */
function AquaWomanBanner({ category }) {
  const product = category.products[0];
  const { value, code } = formatPriceParts(product.price);

  return (
    <section
      id={category.id}
      aria-labelledby="aqua-woman-title"
      className="bg-gradient-to-br from-[#D9F0EC] via-[#CDEDE8] to-[#BFE6F0]"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 md:grid-cols-2 md:py-28">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#0B2545]/20 bg-white/50 px-4 py-1.5 text-sm font-semibold text-[#0B2545] backdrop-blur-md">
            <Flower2 className="h-4 w-4" aria-hidden="true" />
            {category.subtitle}
          </span>
          <h2
            id="aqua-woman-title"
            className="mt-5 text-3xl font-extrabold tracking-tight text-[#0B2545] md:text-5xl"
          >
            {SECTION_TITLES[category.id] ?? category.title}
          </h2>
          <p className="mt-4 max-w-lg text-lg text-[#0B2545]/80">
            {product.tagline}
          </p>

          <div className="mt-6">
            <p className="text-sm font-semibold text-[#0B2545]/70">
              {product.destination} · Desde
            </p>
            <p className="text-4xl font-extrabold tracking-tight text-[#0B2545]">
              {value}{" "}
              <span className="text-base font-semibold text-[#0B2545]/70">
                {code}
              </span>
            </p>
          </div>

          <WhatsAppButton
            href={buildWhatsAppLink(
              WHATSAPP_NUMBERS[category.whatsapp],
              product.whatsappMessage
            )}
            className="mt-8 w-full px-8 py-4 sm:w-auto"
          >
            Quiero información del retiro
          </WhatsAppButton>

          <a
            href={AQUA_WOMAN_SOCIAL.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#0B2545] underline underline-offset-4"
          >
            Conoce la comunidad en {AQUA_WOMAN_SOCIAL.handle}
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
          <FloatingBadge
            label={category.badge.label}
            gradient={category.badge.gradient}
          />
          <ImagePlaceholder
            src={product.image}
            alt={product.imageAlt}
            label={product.destination}
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
      <p className="mt-1">Oficina física en {BUSINESS.location}</p>
      <p className="mt-3 text-base font-bold text-white">
        RNT {BUSINESS.rnt}
      </p>
    </footer>
  );
}

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBar />
      {catalog.map((category, index) =>
        category.id === "aqua-woman" ? (
          <AquaWomanBanner key={category.id} category={category} />
        ) : (
          <CategorySection
            key={category.id}
            category={category}
            isFirst={index === 0}
          />
        )
      )}
      <Footer />
    </main>
  );
}