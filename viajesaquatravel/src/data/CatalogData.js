// src/data/CatalogData.js
// -----------------------------------------------------------------------------
// V3 Catalog — four categories, consumed by src/pages/Home.js
//
// NOTE: Tailwind classes written in this file (gradient, gridClass) are picked
// up only if tailwind.config.js scans it: content: ["./src/**/*.{js,jsx}"]
//
// ⚠️ REEMPLAZAR before launch:
//   - WHATSAPP_NUMBERS (placeholders)
//   - AQUA_WOMAN_SOCIAL.url (assumed to be Instagram)
//   - `price: null` -> real "Desde" price (no price was provided for the
//     Volume Engine and National destinations, so none was invented)
//   - `image: null` -> real photo URL
// Optional per-product fields supported by the cards: duration (string),
// includes (string[]), priceNote (e.g. "por persona").
// -----------------------------------------------------------------------------

/** Numbers in international format, digits only (57 = Colombia). */
export const WHATSAPP_NUMBERS = {
  main: "573000000000", // REEMPLAZAR: WhatsApp principal de Aqua Travel
  aqua: "573000000001", // REEMPLAZAR: WhatsApp específico de Aqua Woman
};

export const BUSINESS = {
  name: "Viajes Aqua Travel",
  years: 9,
  rnt: "115795",
  city: "Zipaquirá",
  location: "Zipacentro, Zipaquirá",
};

/** Aqua Woman is a traffic bridge to this profile. */
export const AQUA_WOMAN_SOCIAL = {
  handle: "@aquawomanexperience",
  url: "https://www.instagram.com/aquawomanexperience/", // REEMPLAZAR si no es Instagram
};

export const MAIN_CTA_MESSAGE =
  "Hola, vi su página y quiero cotizar un viaje a mi medida.";

/** Builds a wa.me deep link with a pre-filled message. */
export const buildWhatsAppLink = (number, message) =>
  `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

const CURRENCY_SYMBOLS = { USD: "$", EUR: "€", COP: "$" };

/** { amount: 8690, currency: "USD" } -> { value: "$8.690", code: "USD" } */
export const formatPriceParts = ({ amount, currency }) => ({
  value: `${CURRENCY_SYMBOLS[currency] ?? ""}${String(amount).replace(
    /\B(?=(\d{3})+(?!\d))/g,
    "."
  )}`,
  code: currency,
});

/**
 * Category shape:
 * id, title, subtitle, theme ("gray" | "white" | "dark"), whatsapp ("main" | "aqua"),
 * gridClass, badge { label, gradient }, products[]
 *
 * Product shape:
 * id, destination, tagline, price ({ amount, currency } | null),
 * image (URL | null), imageAlt, whatsappMessage
 */
export const catalog = [
  // ---------------------------------------------------------------------------
  // 1. VOLUME ENGINE — Caribe / Américas
  // ---------------------------------------------------------------------------
  {
    id: "volume-engine",
    title: "Escapadas y Todo Incluido",
    subtitle: "Caribe y Américas: paquetes listos para salir, con todo resuelto.",
    theme: "gray",
    whatsapp: "main",
    gridClass: "sm:grid-cols-2 xl:grid-cols-4",
    badge: { label: "Todo Incluido", gradient: "from-teal-600 to-emerald-600" },
    products: [
      {
        id: "punta-cana",
        destination: "Punta Cana",
        tagline: "Playas de arena blanca y resort todo incluido.",
        price: null, // REEMPLAZAR: { amount: 0, currency: "COP" }
        image: null,
        imageAlt: "Playa de arena blanca en Punta Cana",
        whatsappMessage: "Hola, quiero cotizar el paquete a Punta Cana.",
      },
      {
        id: "cancun",
        destination: "Cancún",
        tagline: "Mar turquesa y Riviera Maya a tu ritmo.",
        price: null, // REEMPLAZAR
        image: null,
        imageAlt: "Costa de Cancún con mar turquesa",
        whatsappMessage: "Hola, quiero cotizar el paquete a Cancún.",
      },
      {
        id: "curazao-aruba",
        destination: "Curazao / Aruba",
        tagline: "Islas del Caribe holandés, sol y aguas cristalinas.",
        price: null, // REEMPLAZAR
        image: null,
        imageAlt: "Playa caribeña en Aruba",
        whatsappMessage: "Hola, quiero cotizar el paquete a Curazao / Aruba.",
      },
      {
        id: "mexico-buenos-aires",
        destination: "México D.F. / Buenos Aires",
        tagline: "Dos capitales de Latinoamérica para vivir su cultura.",
        price: null, // REEMPLAZAR
        image: null,
        imageAlt: "Calle de una gran capital latinoamericana",
        whatsappMessage:
          "Hola, quiero cotizar el paquete a México D.F. / Buenos Aires.",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 2. NATIONAL DESTINATIONS
  // ---------------------------------------------------------------------------
  {
    id: "nacionales",
    title: "Destinos Nacionales",
    subtitle: "Descubre Colombia sin complicarte con la logística.",
    theme: "white",
    whatsapp: "main",
    gridClass: "md:grid-cols-2",
    badge: { label: "Nacional", gradient: "from-sky-600 to-teal-600" },
    products: [
      {
        id: "san-andres-cartagena",
        destination: "San Andrés / Cartagena",
        tagline: "El mar de siete colores y la ciudad amurallada.",
        price: null, // REEMPLAZAR
        image: null,
        imageAlt: "Mar de San Andrés y calles de Cartagena",
        whatsappMessage:
          "Hola, quiero cotizar el paquete a San Andrés / Cartagena.",
      },
      {
        id: "guajira-palomino-boyaca",
        destination: "Guajira / Palomino / Boyacá",
        tagline: "Desierto, playa y paisajes de montaña en Colombia.",
        price: null, // REEMPLAZAR
        image: null,
        imageAlt: "Paisaje de la Guajira y montañas de Boyacá",
        whatsappMessage:
          "Hola, quiero cotizar el paquete a Guajira / Palomino / Boyacá.",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 3. HIGH-TICKET 2027
  // ---------------------------------------------------------------------------
  {
    id: "high-ticket-2027",
    title: "Los viajes de tu vida: 2027",
    subtitle:
      "Itinerarios diseñados contigo, con acompañamiento desde la cotización hasta el regreso.",
    theme: "dark",
    whatsapp: "main",
    gridClass: "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
    badge: {
      label: "High-Ticket 2027",
      gradient: "from-indigo-600 to-blue-600",
    },
    products: [
      {
        id: "japon-cerezos",
        destination: "Japón Cerezos",
        tagline: "Japón en temporada de cerezos en flor.",
        price: { amount: 8690, currency: "USD" },
        image: null,
        imageAlt: "Cerezos en flor junto a un templo japonés",
        whatsappMessage: "Hola, quiero cotizar el paquete Japón Cerezos 2027.",
      },
      {
        id: "europa-primera-vez",
        destination: "Europa Primera Vez",
        tagline: "Tu primer viaje a Europa, con todo organizado.",
        price: { amount: 3390, currency: "EUR" },
        image: null,
        imageAlt: "Calle europea al atardecer",
        whatsappMessage:
          "Hola, quiero cotizar el paquete Europa Primera Vez 2027.",
      },
      {
        id: "vietnam",
        destination: "Vietnam",
        tagline: "Cultura, gastronomía y paisajes del sudeste asiático.",
        price: { amount: 4790, currency: "USD" },
        image: null,
        imageAlt: "Paisaje de Vietnam con montañas y arrozales",
        whatsappMessage: "Hola, quiero cotizar el paquete a Vietnam 2027.",
      },
      {
        id: "egipto-jordania",
        destination: "Egipto / Jordania",
        tagline: "Dos destinos milenarios en un solo viaje.",
        price: { amount: 4351, currency: "USD" },
        image: null,
        imageAlt: "Pirámides de Egipto al amanecer",
        whatsappMessage:
          "Hola, quiero cotizar el paquete a Egipto / Jordania 2027.",
      },
      {
        id: "turquia-grecia",
        destination: "Turquía / Grecia",
        tagline: "Dos destinos del Mediterráneo con historia y mar.",
        price: { amount: 3890, currency: "USD" },
        image: null,
        imageAlt: "Globos aerostáticos sobre Capadocia",
        whatsappMessage:
          "Hola, quiero cotizar el paquete a Turquía / Grecia 2027.",
      },
      {
        id: "guatemala",
        destination: "Guatemala",
        tagline: "Cultura maya, volcanes y lagos.",
        price: { amount: 2970, currency: "USD" },
        image: null,
        imageAlt: "Lago rodeado de volcanes en Guatemala",
        whatsappMessage: "Hola, quiero cotizar el paquete a Guatemala 2027.",
      },
      {
        id: "f1-miami",
        destination: "F1 Miami",
        tagline: "Vive el Gran Premio de Miami en vivo.",
        price: { amount: 2346, currency: "USD" },
        image: null,
        imageAlt: "Autódromo del Gran Premio de Miami",
        whatsappMessage: "Hola, quiero cotizar el paquete F1 Miami 2027.",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 4. AQUA WOMAN — traffic bridge to @aquawomanexperience
  // ---------------------------------------------------------------------------
  {
    id: "aqua-woman",
    title: "Aqua Woman Experience",
    subtitle: "Retiros terapéuticos para mujeres.",
    purpose: "traffic-bridge", // sends traffic to @aquawomanexperience
    theme: "aqua",
    whatsapp: "aqua",
    gridClass: "",
    badge: { label: "Aqua Woman", gradient: "from-rose-600 to-fuchsia-600" },
    products: [
      {
        id: "retiro-raquira",
        destination: "Retiro Ráquira",
        tagline:
          "Un retiro terapéutico para mujeres en Ráquira, Boyacá: descanso, bienestar y compañía.",
        price: { amount: 1999000, currency: "COP" },
        image: null,
        imageAlt: "Mujeres compartiendo un retiro de bienestar en Ráquira",
        whatsappMessage:
          "Hola, quiero información sobre el Retiro Ráquira de Aqua Woman Experience.",
      },
    ],
  },
];