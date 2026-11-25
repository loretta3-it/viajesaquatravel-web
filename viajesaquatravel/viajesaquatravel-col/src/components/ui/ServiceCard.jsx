import { CheckCircle2, FileCheck2, HeartPulse, Info, Smartphone, Sparkles } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import { useSettings } from '../../hooks/useSettings';
import { buildWhatsAppUrl } from '../../utils/whatsapp';

const ICON_MAP = {
  visa: FileCheck2,
  medical: HeartPulse,
  sim: Smartphone,
};

export default function ServiceCard({ service }) {
  const { agency } = useSettings();

  if (!service) return null;

  const Icon = ICON_MAP[service.icon] || Sparkles;
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
    <article className="bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow p-6 sm:p-7 flex flex-col justify-between h-full">
      <div>
        <div className="flex items-start justify-between gap-4 mb-5">
          <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center shrink-0">
            <Icon className="w-6 h-6" aria-hidden="true" />
          </div>
          {service.priceLabel && (
            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
              {service.priceLabel}
            </span>
          )}
        </div>

        <h2 className="text-xl font-bold text-slate-900 tracking-tight">{service.title}</h2>

        {service.summary && (
          <p className="mt-2 text-sm font-medium text-slate-700 leading-relaxed">
            {service.summary}
          </p>
        )}

        {service.description && (
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">{service.description}</p>
        )}

        {benefits.length > 0 && (
          <ul className="mt-5 space-y-2.5">
            {benefits.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
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
          <div className="mt-5 p-3.5 rounded-xl bg-amber-50 border border-amber-200/80 text-amber-900 text-xs leading-relaxed flex items-start gap-2">
            <Info className="w-4 h-4 shrink-0 mt-0.5 text-amber-700" aria-hidden="true" />
            <div className="space-y-1">
              {legalNotes.map((note, idx) => (
                <p key={idx}>{note}</p>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="mt-6 pt-5 border-t border-slate-100">
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#1ebe5d] text-slate-950 font-semibold text-sm transition shadow-xs"
        >
          <FaWhatsapp className="w-4 h-4" aria-hidden="true" />
          <span>{service.ctaLabel || 'Solicitar asesoría'}</span>
        </a>
      </div>
    </article>
  );
}