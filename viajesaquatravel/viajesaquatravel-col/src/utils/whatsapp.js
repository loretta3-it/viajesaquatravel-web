/**
 * Constructor único de enlaces de WhatsApp (Decisión D6).
 * Los mensajes en Firestore se almacenan SIN prefijo; este helper lo antepone siempre.
 */

export const WHATSAPP_PREFIX =
  'Hola Viajes AquaTravel, te escribo desde la página web. ';

// Número oficial de la agencia (debe coincidir con siteConfig.agency.whatsappNumber)
export const DEFAULT_WHATSAPP_PHONE = '573043321590';

const LEGACY_PREFIX_REGEX =
  /^(hola\s+(viajes\s+)?aqua\s*travel[,!.\s]*(te\s+escribo\s+desde\s+la\s+p[áa]gina\s+web\.?\s*)?|hola,\s*)/i;

/**
 * Limpia prefijos heredados de V2 para almacenar el mensaje base limpio en Firestore.
 * @param {string} [message='']
 * @returns {string}
 */
export function stripWhatsAppPrefix(message = '') {
  if (typeof message !== 'string') return '';
  return message.trim().replace(LEGACY_PREFIX_REGEX, '').trim();
}

/**
 * Construye una URL oficial de WhatsApp con el prefijo obligatorio D6.
 * @param {string} [text=''] Mensaje específico del producto o consulta (sin prefijo).
 * @param {string} [phone] Número en formato internacional sin "+".
 * @returns {string}
 */
export function buildWhatsAppUrl(text = '', phone = DEFAULT_WHATSAPP_PHONE) {
  const digits = String(phone || DEFAULT_WHATSAPP_PHONE).replace(/\D/g, '');
  const cleanBody = stripWhatsAppPrefix(text);
  const fullMessage = cleanBody
    ? `${WHATSAPP_PREFIX}${cleanBody}`
    : WHATSAPP_PREFIX.trim();

  return `https://wa.me/${digits}?text=${encodeURIComponent(fullMessage)}`;
}