import { parsePrice } from './price';
import { stripWhatsAppPrefix } from './whatsapp';

/**
 * Capa temporal de compatibilidad V2 → V3 (se contrae en Sprint 4).
 * Acepta un documento en formato V2 o V3 y devuelve una estructura V3 consistente.
 */

function detectMediaType(url = '', explicitType) {
  if (explicitType === 'video' || explicitType === 'image') {
    return explicitType;
  }
  return /\.(mp4|webm)(\?.*)?$/i.test(String(url)) ? 'video' : 'image';
}

function normalizeMedia(raw) {
  if (Array.isArray(raw.media) && raw.media.length > 0) {
    return raw.media
      .filter((item) => item && typeof item.url === 'string' && item.url.trim())
      .map((item) => ({
        type: detectMediaType(item.url, item.type),
        url: item.url.trim(),
        ...(item.alt ? { alt: String(item.alt).trim() } : {}),
      }));
  }

  if (Array.isArray(raw.gallery) && raw.gallery.length > 0) {
    return raw.gallery
      .filter((url) => typeof url === 'string' && url.trim())
      .map((url, idx) => ({
        type: detectMediaType(url),
        url: url.trim(),
        alt: `${raw.title || 'Galería'} ${idx + 1}`,
      }));
  }

  if (typeof raw.image === 'string' && raw.image.trim()) {
    return [
      {
        type: detectMediaType(raw.image),
        url: raw.image.trim(),
        alt: raw.title ? String(raw.title).trim() : '',
      },
    ];
  }

  return [];
}

function toStringArray(value) {
  if (!Array.isArray(value)) return [];
  return value
    .map((item) => (typeof item === 'string' ? item.trim() : ''))
    .filter(Boolean);
}

/**
 * Normaliza un documento de destinations, offers, aquawoman_retreats, services o banners a V3.
 * @param {Record<string, any>} raw
 * @returns {Record<string, any> | null}
 */
export function normalizeProduct(raw) {
  if (!raw || typeof raw !== 'object') return null;

  const isLegacyOffer = raw.discountPrice !== undefined && raw.price === undefined;
  const rawPriceSource = isLegacyOffer ? raw.discountPrice : raw.price;
  const parsedPrice = parsePrice(rawPriceSource, raw.currency || 'COP');

  const parsedOriginal =
    raw.originalPrice !== undefined && raw.originalPrice !== null && raw.originalPrice !== ''
      ? parsePrice(raw.originalPrice, parsedPrice.currency).price
      : null;

  const media = normalizeMedia(raw);

  return {
    ...raw,
    id: raw.id || '',
    title: raw.title || '',
    destination: raw.destination || '',
    duration: raw.duration || '',
    price: parsedPrice.price,
    priceLabel: raw.priceLabel || parsedPrice.priceLabel || '',
    currency: raw.currency || parsedPrice.currency || 'COP',
    ...(parsedOriginal !== null ? { originalPrice: parsedOriginal } : {}),
    status: raw.status === 'draft' || raw.status === 'published' ? raw.status : 'published',
    isActive: typeof raw.isActive === 'boolean' ? raw.isActive : true,
    media,
    // Compatibilidad temporal para componentes legacy hasta Sprint 3/4
    image: media[0]?.url || raw.image || '',
    features: toStringArray(raw.features),
    includes: toStringArray(raw.includes),
    notIncludes: toStringArray(raw.notIncludes),
    importantNotes: toStringArray(raw.importantNotes),
    whatsappMessage: stripWhatsAppPrefix(raw.whatsappMessage || ''),
    description: typeof raw.description === 'string' ? raw.description : '',
    sortOrder: Number.isInteger(raw.sortOrder) ? raw.sortOrder : 0,
  };
}