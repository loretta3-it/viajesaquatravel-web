// src/data/CatalogData.js
// -----------------------------------------------------------------------------
// Single source of truth for the landing page.
// ⚠️ Replace every value marked "REEMPLAZAR" with real data before launch
// (WhatsApp numbers, prices, durations, inclusions and photos).
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
  location: "Zipacentro, Zipaquirá",
};

/** Builds a wa.me deep link with a pre-filled message. */
export const buildWhatsAppLink = (number, message) =>
  `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

/** Formats a number as Colombian pesos, e.g. 3290000 -> "$3.290.000". */
export const formatCOP = (value) =>
  new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(value);

export const MAIN_CTA_MESSAGE =
  "Hola, vi su página y quiero cotizar un viaje a mi medida.";

export const AQUA_WOMAN_MESSAGE =
  "Hola, quiero información sobre la Aqua Woman Experience.";

/**
 * Product shape:
 * id, segment ("volume" | "high-ticket"), destination, title, tagline,
 * duration, includes[], priceFrom (COP, per person), priceNote,
 * image (URL or null -> renders the placeholder), imageAlt, whatsappMessage
 */
export const catalog = [
  // ---------------------------------------------------------------------------
  // SECTION 1 — Volume engine: "Escapadas y Todo Incluido"
  // ---------------------------------------------------------------------------
  {
    id: "punta-cana",
    segment: "volume",
    destination: "Punta Cana",
    title: "Punta Cana todo incluido",
    tagline: "Playa caribeña y resort sin preocuparte por nada.",
    duration: "5 días / 4 noches", // REEMPLAZAR
    includes: [
      "Tiquetes aéreos desde Bogotá",
      "Hotel todo incluido",
      "Traslados aeropuerto–hotel",
    ], // REEMPLAZAR
    priceFrom: 3290000, // REEMPLAZAR
    priceNote: "por persona",
    image: null,
    imageAlt: "Playa de arena blanca en Punta Cana", // REEMPLAZAR por foto real
    whatsappMessage:
      "Hola, quiero cotizar el paquete a Punta Cana todo incluido.",
  },
  {
    id: "cancun",
    segment: "volume",
    destination: "Cancún",
    title: "Cancún todo incluido",
    tagline: "Mar turquesa, cenotes y la Riviera Maya a tu ritmo.",
    duration: "5 días / 4 noches", // REEMPLAZAR
    includes: [
      "Tiquetes aéreos desde Bogotá",
      "Hotel todo incluido",
      "Traslados aeropuerto–hotel",
    ], // REEMPLAZAR
    priceFrom: 3890000, // REEMPLAZAR
    priceNote: "por persona",
    image: null,
    imageAlt: "Costa de Cancún con mar turquesa", // REEMPLAZAR por foto real
    whatsappMessage: "Hola, quiero cotizar el paquete a Cancún todo incluido.",
  },
  {
    id: "san-andres",
    segment: "volume",
    destination: "San Andrés",
    title: "Escapada a San Andrés",
    tagline: "El mar de siete colores, sin salir del país.",
    duration: "4 días / 3 noches", // REEMPLAZAR
    includes: [
      "Tiquetes aéreos desde Bogotá",
      "Hotel con alimentación",
      "Traslados y tarjeta de turismo",
    ], // REEMPLAZAR
    priceFrom: 1490000, // REEMPLAZAR
    priceNote: "por persona",
    image: null,
    imageAlt: "Mar de siete colores en San Andrés", // REEMPLAZAR por foto real
    whatsappMessage: "Hola, quiero cotizar la escapada a San Andrés.",
  },

  // ---------------------------------------------------------------------------
  // SECTION 2 — High-ticket 2027
  // ---------------------------------------------------------------------------
  {
    id: "japon-2027",
    segment: "high-ticket",
    destination: "Japón",
    title: "Japón 2027",
    tagline: "Tokio, Kioto y Osaka con ruta diseñada a tu medida.",
    duration: "12 días / 10 noches", // REEMPLAZAR
    includes: [
      "Tiquetes internacionales",
      "Hoteles y traslados internos",
      "Acompañamiento antes y durante el viaje",
    ], // REEMPLAZAR
    priceFrom: 14900000, // REEMPLAZAR
    priceNote: "por persona",
    image: null,
    imageAlt: "Templo japonés entre árboles en otoño", // REEMPLAZAR por foto real
    whatsappMessage: "Hola, quiero cotizar el paquete a Japón 2027.",
  },
  {
    id: "europa-2027",
    segment: "high-ticket",
    destination: "Europa",
    title: "Europa 2027",
    tagline: "Capitales icónicas en un solo viaje, sin improvisar.",
    duration: "15 días / 13 noches", // REEMPLAZAR
    includes: [
      "Tiquetes internacionales",
      "Hoteles y trenes entre ciudades",
      "Seguro de asistencia en viaje",
    ], // REEMPLAZAR
    priceFrom: 11800000, // REEMPLAZAR
    priceNote: "por persona",
    image: null,
    imageAlt: "Calle europea al atardecer", // REEMPLAZAR por foto real
    whatsappMessage: "Hola, quiero cotizar el paquete a Europa 2027.",
  },
  {
    id: "turquia-2027",
    segment: "high-ticket",
    destination: "Turquía",
    title: "Turquía 2027",
    tagline: "Estambul, Capadocia y Éfeso entre historia y paisaje.",
    duration: "10 días / 8 noches", // REEMPLAZAR
    includes: [
      "Tiquetes internacionales",
      "Hoteles y vuelos internos",
      "Excursiones principales",
    ], // REEMPLAZAR
    priceFrom: 8900000, // REEMPLAZAR
    priceNote: "por persona",
    image: null,
    imageAlt: "Globos aerostáticos sobre Capadocia", // REEMPLAZAR por foto real
    whatsappMessage: "Hola, quiero cotizar el paquete a Turquía 2027.",
  },
  {
    id: "f1-miami-2027",
    segment: "high-ticket",
    destination: "F1 Miami",
    title: "Gran Premio de F1 en Miami",
    tagline: "Vive la Fórmula 1 en vivo con entradas y hotel resueltos.",
    duration: "5 días / 4 noches", // REEMPLAZAR
    includes: [
      "Tiquetes aéreos",
      "Hotel en Miami",
      "Entradas al Gran Premio",
    ], // REEMPLAZAR
    priceFrom: 9600000, // REEMPLAZAR
    priceNote: "por persona",
    image: null,
    imageAlt: "Autodromo del Gran Premio de Miami", // REEMPLAZAR por foto real
    whatsappMessage: "Hola, quiero cotizar el paquete F1 Miami 2027.",
  },
];

export const volumeProducts = catalog.filter((p) => p.segment === "volume");
export const highTicketProducts = catalog.filter(
  (p) => p.segment === "high-ticket"
);