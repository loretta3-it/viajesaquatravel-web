import { CheckCircle2, FileCheck2, HeartPulse, Info, Smartphone, Sparkles } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import { useSettings } from '../../hooks/useSettings';
import { buildWhatsAppUrl } from '../../utils/whatsapp';

const ICON_MAP = {
  visa: FileCheck2,
  medical: HeartPulse,
  sim: Smartphone,
};

const ICON_ACCENT_MAP = {
  visa: 'bg-blue-500/10 text-blue-400 border border-blue-500/25',
  medical: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/25',
  sim: 'bg-amber-500/10 text-amber-400 border border-amber-500/25',
};

export default function ServiceCard({ service }) {
  const { agency } = useSettings();

  if (!service) return null;

  const Icon = ICON_MAP[service.icon] || Sparkles;
  const iconAccent =
    ICON_ACCENT_MAP[service.icon] || 'bg-slate-800 text-slate-200 border border-slate-700';

  const phone = agency?.whatsappNumber || agency?.phone;
  const whatsappHref = buildWhatsAppUrl(
    service.whatsappMessage || `Quiero recibir información sobre ${service.title}.`,
    phone
  );

  const benefits =
    Array.isArray(service.features) && service.features.length > 0
      ? service.features
      : Array.isArray(service.includes)
        ? service.includes
        : [];

  const legalNotes = Array.isArray(service.importantNotes) ? service.importantNotes : [];

  return (
    <article className="bg-slate-900 rounded-3xl border border-slate-800 hover:border-slate-700 transition-colors shadow-xl p-6 sm:p-7 flex flex-col justify-between h-full">
      <div>
        <div className="flex items-start justify-between gap-4 mb-5">
          <div
            className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${iconAccent}`}
          >
            <Icon className="w-6 h-6" aria-hidden="true" />
          </div>

          {service.priceLabel && (
            <span className="px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-slate-300 text-xs font-semibold">
              {service.priceLabel}
            </span>
          )}
        </div>

        <h2 className="text-xl font-bold text-white tracking-tight">{service.title}</h2>

        {service.summary && (
          <p className="mt-2.5 text-sm font-medium text-slate-200 leading-relaxed">
            {service.summary}
          </p>
        )}

        {service.description && (
          <p className="mt-2 text-sm text-slate-400 leading-relaxed">{service.description}</p>
        )}

        {benefits.length > 0 && (
          <ul className="mt-5 space-y-2.5">
            {benefits.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                <CheckCircle2
                  className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        {legalNotes.length > 0 && (
          <div className="mt-5 p-3.5 rounded-xl bg-amber-950/35 border border-amber-500/30 text-amber-200/90 text-xs leading-relaxed flex items-start gap-2">
            <Info className="w-4 h-4 shrink-0 mt-0.5 text-amber-400" aria-hidden="true" />
            <div className="space-y-1">
              {legalNotes.map((note, idx) => (
                <p key={idx}>{note}</p>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="mt-6 pt-5 border-t border-slate-800">
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#1DA851] text-[#04210f] font-bold text-sm transition shadow-lg shadow-green-900/20"
        >
          <FaWhatsapp className="w-4 h-4" aria-hidden="true" />
          <span>{service.ctaLabel || 'Solicitar asesoría'}</span>
        </a>
      </div>
    </article>
  );
}