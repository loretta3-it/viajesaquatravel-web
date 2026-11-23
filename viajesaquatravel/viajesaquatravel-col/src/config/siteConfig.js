import { WHATSAPP_PREFIX } from '../utils/whatsapp';
import { formatPrice } from '../utils/price';

export const siteConfig = {
  schemaVersion: 3,

  agency: {
    name: 'Viajes Aqua Travel',
    rnt: '115795',
    location: 'Zipacentro, Zipaquirá, Cundinamarca, Colombia',
    phone: '573000000000', // Preservar el número real actual del repo al fusionar
    email: 'contacto@viajesaquatravel.com', // Preservar el correo real actual del repo
    whatsappPrefix: WHATSAPP_PREFIX,
    social: {
      facebook: '',
      instagram: '',
      tiktok: '',
    },
    mapPins: [
      { label: 'Oficina Zipaquirá', lat: 5.0221, lng: -74.0048 },
      { label: 'Cancún', lat: 21.1619, lng: -86.8515 },
      { label: 'Punta Cana', lat: 18.5601, lng: -68.3725 },
      { label: 'Miami', lat: 25.7617, lng: -80.1918 },
      { label: 'Europa', lat: 48.8566, lng: 2.3522 },
      { label: 'Japón', lat: 35.6762, lng: 139.6503 },
      { label: 'Dubái', lat: 25.2048, lng: 55.2708 },
    ],
  },

  businessLines: {
    volume: {
      id: 'volume',
      name: 'Caribe y Américas',
      description: 'Paquetes vacacionales para familias y parejas.',
    },
    local: {
      id: 'local',
      name: 'Destinos Nacionales',
      description: 'Escapadas y circuitos por Colombia.',
    },
    margin: {
      id: 'margin',
      name: 'Grandes Viajes 2027',
      description: 'Experiencias de alto nivel: Japón, Europa y F1 Miami.',
    },
  },

  seed: {
    // MERGE_REQUIRED: Inyectar aquí los 21 objetos exactos desde aquatravel-v3-seed-preview.json -> destinations
    destinations: [],

    // MERGE_REQUIRED: Inyectar aquí los 14 objetos exactos desde aquatravel-v3-seed-preview.json -> offers
    offers: [],

    // Decisión D7: Ráquira (aw-01, published) + Cancún y Dubái (draft)
    aquawoman_retreats: [
      // MERGE_REQUIRED: Fusionar media/detalles exactos de aw-01 desde aquatravel-v3-seed-preview.json
      {
        id: 'aw-01',
        title: 'Retiro Aqua Woman Ráquira',
        destination: 'Ráquira, Boyacá',
        duration: '3 Días / 2 Noches',
        price: null,
        priceLabel: 'A consultar',
        currency: 'COP',
        status: 'published',
        isActive: true,
        retreatTheme: 'Bienestar, conexión y renovación femenina',
        departureDates: [],
        spotsLabel: 'Cupos limitados',
        media: [],
        description:
          'Experiencia inmersiva diseñada exclusivamente para mujeres en Ráquira, combinando descanso, bienestar y comunidad.',
        features: [],
        includes: [],
        notIncludes: [],
        importantNotes: [],
        itinerary: [],
        whatsappMessage:
          'Quiero recibir información sobre el Retiro Aqua Woman en Ráquira.',
        sortOrder: 1,
      },
      {
        id: 'aw-cancun',
        title: 'Aqua Woman Experience Cancún',
        destination: 'Cancún, México',
        duration: 'Por definir',
        price: null,
        priceLabel: 'A consultar',
        currency: 'USD',
        status: 'draft',
        isActive: true,
        retreatTheme: 'Caribe, bienestar y comunidad femenina',
        departureDates: [],
        spotsLabel: 'Próximamente',
        media: [],
        description: 'Borrador inicial del retiro internacional Aqua Woman en Cancún.',
        features: [],
        includes: [],
        notIncludes: [],
        importantNotes: [],
        itinerary: [],
        whatsappMessage:
          'Quiero información prioritaria sobre Aqua Woman Experience Cancún.',
        sortOrder: 2,
      },
      {
        id: 'aw-dubai',
        title: 'Aqua Woman Experience Dubái',
        destination: 'Dubái, Emiratos Árabes Unidos',
        duration: 'Por definir',
        price: null,
        priceLabel: 'A consultar',
        currency: 'USD',
        status: 'draft',
        isActive: true,
        retreatTheme: 'Lujo, cultura y empoderamiento en Oriente Medio',
        departureDates: [],
        spotsLabel: 'Próximamente',
        media: [],
        description: 'Borrador inicial de la expedición femenina Aqua Woman en Dubái.',
        features: [],
        includes: [],
        notIncludes: [],
        importantNotes: [],
        itinerary: [],
        whatsappMessage:
          'Quiero información prioritaria sobre Aqua Woman Experience Dubái.',
        sortOrder: 3,
      },
    ],

    // Decisión D7: 3 servicios publicados
    services: [
      {
        id: 'svc-visas',
        title: 'Gestión y Asesoría de Visas',
        summary:
          'Acompañamiento integral para trámites de visa de Estados Unidos y Espacio Schengen.',
        description:
          'Servicio especializado de asesoría migratoria para viajeros colombianos. Incluye diagnóstico de perfil, organización documental, gestión de formularios y citas, y entrenamiento personalizado para la entrevista consular. Nota legal: la aprobación o negación de la visa es decisión exclusiva de la autoridad consular correspondiente.',
        icon: 'visa',
        ctaLabel: 'Solicitar asesoría de visa',
        price: null,
        priceLabel: 'A consultar',
        currency: 'COP',
        status: 'published',
        isActive: true,
        media: [],
        features: [
          'Diagnóstico personalizado de perfil del solicitante',
          'Gestión y revisión documental (EE.UU. y Espacio Schengen)',
          'Programación de citas y seguimiento de trámites',
          'Entrenamiento práctico para entrevista consular',
        ],
        includes: [
          'Evaluación de perfil y requisitos',
          'Diligenciamiento y revisión de formularios',
          'Preparación para entrevista consular',
        ],
        notIncludes: [
          'Tasas consulares oficiales',
          'Garantía de aprobación consular',
        ],
        importantNotes: [
          'La aprobación de cualquier visa es facultad exclusiva de la embajada o consulado correspondiente.',
        ],
        whatsappMessage:
          'Quiero asesoría para el trámite de mi visa (EE.UU. o Espacio Schengen).',
        sortOrder: 1,
      },
      {
        id: 'svc-asistencia',
        title: 'Asistencia Integral y Médica al Viajero',
        summary:
          'Respaldo médico 24/7, hospitalización, protección de equipaje y telemedicina en tu viaje.',
        description:
          'Viaja protegido ante imprevistos médicos o logísticos en destinos nacionales e internacionales. Coberturas diseñadas según tu destino y duración del viaje, con opciones sin deducibles y soporte continuo 24/7.',
        icon: 'medical',
        ctaLabel: 'Cotizar asistencia al viajero',
        price: null,
        priceLabel: 'Según plan y destino',
        currency: 'COP',
        status: 'published',
        isActive: true,
        media: [],
        features: [
          'Atención médica inmediata ante emergencias',
          'Hospitalización, cirugías, medicamentos y odontología de urgencia',
          'Traslados sanitarios, ambulancias y repatriación',
          'Protección y localización de equipaje',
          'Cobertura sin deducibles según plan elegido',
          'Telemedicina y soporte 24/7 en español',
        ],
        includes: [
          'Asistencia médica y hospitalaria según tope del plan',
          'Telemedicina y central de emergencias 24/7',
          'Cobertura de equipaje y traslados sanitarios',
        ],
        notIncludes: [
          'Condiciones preexistentes fuera de la cobertura contratada',
        ],
        importantNotes: [
          'Las coberturas exactas y ausencia de deducibles dependen del plan seleccionado al momento de la emisión.',
        ],
        whatsappMessage:
          'Quiero cotizar una Asistencia Integral y Médica al Viajero para mi próximo viaje.',
        sortOrder: 2,
      },
      {
        id: 'svc-sim',
        title: 'Conectividad Global - SIM Card Internacional',
        summary:
          'SIM Cards internacionales listas para usar con datos a medida y sin costos de roaming.',
        description:
          'Mantente conectado desde que aterrizas con nuestras SIM Cards internacionales listas para usar. Planes de datos a la medida de tu itinerario con llamadas locales, llamadas a Colombia y SMS ilimitados sin cargos sorpresa de roaming.',
        icon: 'sim',
        ctaLabel: 'Cotizar SIM internacional',
        price: null,
        priceLabel: 'Según destino y días',
        currency: 'COP',
        status: 'published',
        isActive: true,
        media: [],
        features: [
          'Listas para usar desde el aterrizaje',
          'Planes de datos a medida por destino y duración',
          'Llamadas locales, llamadas a Colombia y SMS ilimitados',
          'Sin tarifas ni sorpresas de roaming internacional',
        ],
        includes: [
          'SIM Card internacional configurada',
          'Soporte de activación previa al viaje',
        ],
        notIncludes: [
          'Equipos celulares con bandas bloqueadas por operador',
        ],
        importantNotes: [
          'Verifica que tu teléfono cuente con bandas abiertas antes del viaje.',
        ],
        whatsappMessage:
          'Quiero cotizar una SIM Card Internacional para mantenerme conectado en mi viaje.',
        sortOrder: 3,
      },
    ],

    // MERGE_REQUIRED: Inyectar aquí los 3 banners desde aquatravel-v3-seed-preview.json -> banners
    banners: [],

    settings: {
      promo_button: {
        id: 'promo_button',
        label: 'Ofertas Especiales',
        isVisible: true,
        targetPath: '/ofertas',
        palette: {
          preset: 'sunset',
          bgFrom: '#0F172A',
          bgTo: '#1E293B',
          text: '#FFFFFF',
          glow: '#25D366',
        },
        pulse: true,
        updatedBy: 'seed-v3',
      },
      aquawoman_page: {
        id: 'aquawoman_page',
        heroTitle: 'Aqua Woman Experience',
        heroSubtitle:
          'Viajes y retiros diseñados para conectar, descansar y descubrir el mundo entre mujeres.',
        instagramUrl: '',
      },
      reviews: {
        id: 'reviews',
        provider: 'google',
        widgetId: '',
        isVisible: false,
      },
    },
  },
};

/**
 * SHIM LEGACY TEMPORAL (se elimina en Sprint 4).
 * Mantiene compatibilidad con Home.jsx, BlackFriday.jsx y AquaWoman.jsx durante Sprints 1–3.
 */
siteConfig.catalog = [
  ...siteConfig.seed.destinations.map((item) => ({
    ...item,
    image: item.media?.[0]?.url || '',
    price: formatPrice(item.price, item.currency, item.priceLabel),
  })),
];

siteConfig.offers = {
  campaignName: 'Ofertas Especiales',
  deals: siteConfig.seed.offers.map((offer) => ({
    ...offer,
    image: offer.media?.[0]?.url || '',
    discountPrice: formatPrice(offer.price, offer.currency, offer.priceLabel),
    originalPrice:
      offer.originalPrice != null
        ? formatPrice(offer.originalPrice, offer.currency)
        : '',
  })),
};

const raquiraSeed = siteConfig.seed.aquawoman_retreats[0];
siteConfig.aquaWomanData = {
  title: siteConfig.seed.settings.aquawoman_page.heroTitle,
  subtitle: siteConfig.seed.settings.aquawoman_page.heroSubtitle,
  retreat: raquiraSeed
    ? {
        ...raquiraSeed,
        gallery: (raquiraSeed.media || []).map((m) => m.url),
      }
    : null,
};