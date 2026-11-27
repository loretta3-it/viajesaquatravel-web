import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import { useSettings } from '../../hooks/useSettings';

export default function PromoButton({ className = '', onClick }) {
  const { promoButton } = useSettings();

  if (!promoButton || promoButton.isVisible === false) {
    return null;
  }

  const palette = promoButton.palette || {};
  const bgFrom = palette.bgFrom || '#F59E0B';
  const bgTo = palette.bgTo || '#EAB308';
  const textColor = palette.text || '#0F172A';
  const glowColor = palette.glow || '#F59E0B';
  const targetPath = promoButton.targetPath || '/ofertas';
  const label = promoButton.label || 'Ofertas Especiales';

  const buttonStyle = {
    '--promo-bg-from': bgFrom,
    '--promo-bg-to': bgTo,
    '--promo-text': textColor,
    '--promo-glow': glowColor,
    backgroundImage: 'linear-gradient(135deg, var(--promo-bg-from), var(--promo-bg-to))',
    color: 'var(--promo-text)',
    boxShadow: `0 6px 20px -6px ${glowColor}`,
  };

  return (
    <Link
      to={targetPath}
      onClick={onClick}
      style={buttonStyle}
      className={`relative inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full text-sm font-bold tracking-tight transition-transform duration-200 hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 focus-visible:ring-amber-400 ${
        promoButton.pulse ? 'promo-pulse' : ''
      } ${className}`}
    >
      <Sparkles className="w-4 h-4 shrink-0" aria-hidden="true" />
      <span>{label}</span>
    </Link>
  );
}