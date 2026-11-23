/**
 * Utilidades de parseo y formateo de precios V3 (Decisión D1).
 * Soporta entradas legacy V2 (ej. "8.690 USD", "A consultar") y formato V3 (number | null).
 */

const VALID_CURRENCIES = ['COP', 'USD', 'EUR'];

/**
 * Parsea un precio V2 (string) o V3 (number | null) a la estructura normalizada V3.
 * @param {number|string|null|undefined} input
 * @param {string} [fallbackCurrency='COP']
 * @returns {{ price: number | null, currency: 'COP' | 'USD' | 'EUR', priceLabel: string }}
 */
export function parsePrice(input, fallbackCurrency = 'COP') {
  const safeFallback = VALID_CURRENCIES.includes(fallbackCurrency)
    ? fallbackCurrency
    : 'COP';

  if (input === null || input === undefined || input === '') {
    return { price: null, currency: safeFallback, priceLabel: 'A consultar' };
  }

  if (typeof input === 'number') {
    if (!Number.isFinite(input) || input < 0) {
      return { price: null, currency: safeFallback, priceLabel: 'A consultar' };
    }
    return { price: Math.round(input), currency: safeFallback, priceLabel: '' };
  }

  const raw = String(input).trim();
  if (!raw || /consultar|cotizar|solicitar/i.test(raw)) {
    return {
      price: null,
      currency: safeFallback,
      priceLabel: raw || 'A consultar',
    };
  }

  let currency = safeFallback;
  if (/\bUSD\b|US\$|\bD[OÓ]LAR/i.test(raw)) {
    currency = 'USD';
  } else if (/\bEUR\b|€/i.test(raw)) {
    currency = 'EUR';
  } else if (/\bCOP\b/i.test(raw)) {
    currency = 'COP';
  }

  // Elimina separadores de miles (puntos o comas seguidos de 3 dígitos) y caracteres no numéricos
  const cleaned = raw
    .replace(/\.(?=\d{3}(\D|$))/g, '')
    .replace(/,(?=\d{3}(\D|$))/g, '')
    .replace(',', '.')
    .replace(/[^0-9.]/g, '');

  const numeric = Number(cleaned);
  if (!cleaned || !Number.isFinite(numeric)) {
    return { price: null, currency, priceLabel: raw };
  }

  return {
    price: Math.round(numeric),
    currency,
    priceLabel: '',
  };
}

/**
 * Formatea un precio V3 para visualización en UI.
 * @param {number|string|null|undefined} price
 * @param {'COP'|'USD'|'EUR'} [currency='COP']
 * @param {string} [priceLabel='A consultar']
 * @returns {string}
 */
export function formatPrice(price, currency = 'COP', priceLabel = 'A consultar') {
  if (typeof price === 'string') {
    const parsed = parsePrice(price, currency);
    return formatPrice(parsed.price, parsed.currency, parsed.priceLabel || priceLabel);
  }

  if (price === null || price === undefined || !Number.isFinite(Number(price))) {
    return priceLabel || 'A consultar';
  }

  const normalizedCurrency = VALID_CURRENCIES.includes(currency) ? currency : 'COP';
  const formattedNumber = new Intl.NumberFormat('es-CO', {
    maximumFractionDigits: 0,
  }).format(Number(price));

  if (normalizedCurrency === 'EUR') {
    return `€${formattedNumber} EUR`;
  }

  return `$${formattedNumber} ${normalizedCurrency}`;
}