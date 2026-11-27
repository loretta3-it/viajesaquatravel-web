/**
 * Contrato de datos y validadores V3 sin dependencias externas.
 * Cubre D1–D7 y reglas del Quality Gate de AGT-001.
 */

export const STATUSES = ['draft', 'published'];
export const CURRENCIES = ['COP', 'USD', 'EUR'];
export const BUSINESS_LINES = ['volume', 'local', 'margin', 'southAmerica'];
export const MEDIA_TYPES = ['image', 'video'];
export const SERVICE_ICONS = ['visa', 'medical', 'sim'];
export const CTA_TYPES = ['whatsapp', 'route', 'product'];
export const AUDIT_ACTIONS = ['CREATE', 'UPDATE', 'TOGGLE_STATUS', 'DELETE', 'MIGRATE'];
export const PUBLIC_SETTINGS_IDS = ['agency', 'promo_button', 'aquawoman_page', 'reviews'];

export const SLUG_REGEX = /^[a-z0-9-]{3,60}$/;
export const HEX_COLOR_REGEX = /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/;
export const DIRECT_VIDEO_URL_REGEX = /^https?:\/\/.+\.(mp4|webm)(\?.*)?$/i;
export const SAFE_URL_REGEX = /^(https?:\/\/|\/).+/i;
export const RAW_HTML_REGEX = /<\s*\/?\s*[a-z][^>]*>/i;

function isStringArray(val) {
  return Array.isArray(val) && val.every((item) => typeof item === 'string');
}

function validateMediaItem(item, index) {
  const errors = [];
  if (!item || typeof item !== 'object') {
    return [`media[${index}] debe ser un objeto válido.`];
  }
  if (!MEDIA_TYPES.includes(item.type)) {
    errors.push(`media[${index}].type debe ser "image" o "video".`);
  }
  if (typeof item.url !== 'string' || !SAFE_URL_REGEX.test(item.url.trim())) {
    errors.push(`media[${index}].url debe ser una URL válida.`);
  } else if (item.type === 'video' && !DIRECT_VIDEO_URL_REGEX.test(item.url.trim())) {
    // Decisión D4: solo archivos directos .mp4/.webm
    errors.push(`media[${index}].url de video debe apuntar a un archivo directo .mp4 o .webm (D4).`);
  }
  return errors;
}

function validateBaseFields(doc, options = {}) {
  const { requirePrice = true, mediaMode = 'min1' } = options;
  const errors = [];

  if (!doc || typeof doc !== 'object') {
    return ['El documento debe ser un objeto válido.'];
  }

  if (typeof doc.id !== 'string' || !SLUG_REGEX.test(doc.id)) {
    errors.push('id debe cumplir el formato slug [a-z0-9-]{3,60}.');
  }

  if (typeof doc.title !== 'string' || doc.title.trim().length < 3 || doc.title.trim().length > 120) {
    errors.push('title es obligatorio y debe tener entre 3 y 120 caracteres.');
  }

  if (!STATUSES.includes(doc.status)) {
    errors.push(`status debe ser uno de: ${STATUSES.join(', ')}.`);
  }

  if (typeof doc.isActive !== 'boolean') {
    errors.push('isActive debe ser booleano.');
  }

  if (requirePrice) {
    if (doc.price !== null && (typeof doc.price !== 'number' || !Number.isFinite(doc.price) || doc.price < 0)) {
      errors.push('price debe ser un número >= 0 o null (D1).');
    }
    if (!CURRENCIES.includes(doc.currency)) {
      errors.push(`currency debe ser uno de: ${CURRENCIES.join(', ')}.`);
    }
  } else if (doc.price !== undefined && doc.price !== null) {
    if (typeof doc.price !== 'number' || !Number.isFinite(doc.price) || doc.price < 0) {
      errors.push('price opcional debe ser un número >= 0 o null.');
    }
  }

  if (doc.description !== undefined && (typeof doc.description !== 'string' || doc.description.length > 1500)) {
    errors.push('description debe ser texto de máximo 1500 caracteres.');
  }

  if (doc.whatsappMessage !== undefined && (typeof doc.whatsappMessage !== 'string' || doc.whatsappMessage.length > 500)) {
    errors.push('whatsappMessage debe ser texto de máximo 500 caracteres.');
  }

  for (const listKey of ['features', 'includes', 'notIncludes', 'importantNotes']) {
    if (doc[listKey] !== undefined && !isStringArray(doc[listKey])) {
      errors.push(`${listKey} debe ser un arreglo de strings.`);
    }
  }

  if (doc.media !== undefined && !Array.isArray(doc.media)) {
    errors.push('media debe ser una lista.');
  } else if (Array.isArray(doc.media)) {
    doc.media.forEach((m, idx) => {
      errors.push(...validateMediaItem(m, idx));
    });
  }

  const mediaCount = Array.isArray(doc.media) ? doc.media.length : 0;
  if (doc.status === 'published') {
    if (mediaMode === 'exact1' && mediaCount !== 1) {
      errors.push('Un banner publicado debe tener exactamente 1 elemento en media.');
    } else if (mediaMode === 'min1' && mediaCount < 1) {
      errors.push('Un documento publicado requiere al menos 1 elemento en media.');
    } else if (mediaMode === 'min1OrIcon') {
      const hasValidIcon = typeof doc.icon === 'string' && SERVICE_ICONS.includes(doc.icon);
      if (mediaCount < 1 && !hasValidIcon) {
        errors.push('Un servicio publicado requiere al menos 1 elemento en media o un icon válido.');
      }
    }
  }

  return errors;
}

export function validateDocument(collectionName, doc) {
  let errors = [];

  switch (collectionName) {
    case 'destinations': {
      errors = validateBaseFields(doc, { requirePrice: true, mediaMode: 'min1' });
      if (!BUSINESS_LINES.includes(doc.businessLine)) {
        errors.push(`businessLine debe ser uno de: ${BUSINESS_LINES.join(', ')}.`);
      }
      break;
    }

    case 'offers': {
      errors = validateBaseFields(doc, { requirePrice: true, mediaMode: 'min1' });
      if (
        doc.originalPrice !== undefined &&
        doc.originalPrice !== null &&
        (typeof doc.originalPrice !== 'number' || !Number.isFinite(doc.originalPrice))
      ) {
        errors.push('originalPrice debe ser número o null.');
      }
      break;
    }

    case 'aquawoman_retreats': {
      errors = validateBaseFields(doc, { requirePrice: true, mediaMode: 'min1' });
      if (doc.departureDates !== undefined && !isStringArray(doc.departureDates)) {
        errors.push('departureDates debe ser un arreglo de fechas YYYY-MM-DD.');
      }
      if (doc.itinerary !== undefined) {
        if (!Array.isArray(doc.itinerary)) {
          errors.push('itinerary debe ser un arreglo de objetos { day, title, desc }.');
        } else {
          doc.itinerary.forEach((step, idx) => {
            if (!step || typeof step.title !== 'string' || typeof step.desc !== 'string') {
              errors.push(`itinerary[${idx}] requiere title y desc como texto.`);
            }
          });
        }
      }
      break;
    }

    case 'services': {
      errors = validateBaseFields(doc, { requirePrice: false, mediaMode: 'min1OrIcon' });
      if (doc.icon !== undefined && !SERVICE_ICONS.includes(doc.icon)) {
        errors.push(`icon debe ser uno de: ${SERVICE_ICONS.join(', ')}.`);
      }
      if (typeof doc.summary !== 'string' || doc.summary.trim().length < 5) {
        errors.push('summary es obligatorio en services (mínimo 5 caracteres).');
      }
      break;
    }

    case 'banners': {
      errors = validateBaseFields(doc, { requirePrice: false, mediaMode: 'exact1' });
      if (!CTA_TYPES.includes(doc.ctaType)) {
        errors.push(`ctaType debe ser uno de: ${CTA_TYPES.join(', ')}.`);
      }
      if (typeof doc.ctaTarget !== 'string' || !doc.ctaTarget.trim()) {
        errors.push('ctaTarget es obligatorio en banners.');
      }
      break;
    }

    case 'settings': {
      if (!doc || !PUBLIC_SETTINGS_IDS.includes(doc.id)) {
        errors.push(`settings.id debe ser uno de: ${PUBLIC_SETTINGS_IDS.join(', ')}.`);
      }
      if (doc?.id === 'promo_button') {
        if (typeof doc.label !== 'string' || doc.label.length > 28) {
          errors.push('promo_button.label debe ser texto de máximo 28 caracteres.');
        }
        if (doc.palette) {
          for (const key of ['bgFrom', 'bgTo', 'text', 'glow']) {
            if (doc.palette[key] && !HEX_COLOR_REGEX.test(doc.palette[key])) {
              errors.push(`promo_button.palette.${key} debe ser color hexadecimal válido.`);
            }
          }
        }
      }
      if (doc?.id === 'reviews' || doc?.id === 'aquawoman_page') {
        // Decisión D2: bloquear HTML crudo anti-XSS
        const serialized = JSON.stringify(doc);
        if (RAW_HTML_REGEX.test(serialized)) {
          errors.push(`${doc.id} no permite HTML crudo (prevención XSS - D2).`);
        }
      }
      break;
    }

    default:
      errors.push(`Colección no reconocida por el esquema V3: ${collectionName}`);
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}