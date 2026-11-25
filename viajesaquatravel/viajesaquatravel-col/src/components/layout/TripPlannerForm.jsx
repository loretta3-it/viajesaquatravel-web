import { useState } from 'react';
import { AlertTriangle, Calendar, MapPin, User, Users } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import { useSettings } from '../../hooks/useSettings';
import { buildWhatsAppUrl } from '../../utils/whatsapp';

function getTodayIso() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function formatIsoToDmy(isoDate) {
  if (!isoDate || !/^\d{4}-\d{2}-\d{2}$/.test(isoDate)) return '';
  const [year, month, day] = isoDate.split('-');
  return `${day}/${month}/${year}`;
}

export default function TripPlannerForm() {
  const { agency } = useSettings();
  const [todayIso] = useState(() => getTodayIso());

  const [name, setName] = useState('');
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [error, setError] = useState('');

  const babiesExceedAdults = infants > adults;

  const handleStartDateChange = (value) => {
    setStartDate(value);
    if (endDate && value && endDate < value) {
      setEndDate(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!name.trim() || !destination.trim()) {
      setError('Por favor ingresa tu nombre y el destino deseado.');
      return;
    }

    if (!startDate || !endDate) {
      setError('Selecciona las fechas estimadas de ida y regreso.');
      return;
    }

    if (startDate < todayIso) {
      setError('La fecha de inicio no puede ser anterior a hoy.');
      return;
    }

    if (endDate < startDate) {
      setError('La fecha de regreso debe ser igual o posterior a la fecha de inicio.');
      return;
    }

    const formattedStart = formatIsoToDmy(startDate);
    const formattedEnd = formatIsoToDmy(endDate);

    const passengersParts = [`${adults} adulto${adults === 1 ? '' : 's'}`];
    if (children > 0) {
      passengersParts.push(`${children} menor${children === 1 ? '' : 'es'} (2-11 años)`);
    }
    if (infants > 0) {
      passengersParts.push(`${infants} bebé${infants === 1 ? '' : 's'} (<2 años)`);
    }

    const message = `Mi nombre es ${name.trim()}. Quiero cotizar un viaje a ${destination.trim()} del ${formattedStart} al ${formattedEnd} para ${passengersParts.join(', ')}.`;
    const phone = agency?.whatsappNumber || agency?.phone;
    const url = buildWhatsAppUrl(message, phone);

    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-slate-950 p-6 md:p-8 rounded-2xl border border-slate-800 space-y-4"
      noValidate
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="tp-name" className="block text-xs font-semibold text-slate-300 mb-1.5">
            Nombre Completo
          </label>
          <div className="relative">
            <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              id="tp-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ej. Laura Gómez"
              className="w-full pl-10 pr-3.5 py-3 rounded-lg bg-slate-900 border border-slate-700 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>

        <div>
          <label htmlFor="tp-dest" className="block text-xs font-semibold text-slate-300 mb-1.5">
            Destino de Interés
          </label>
          <div className="relative">
            <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              id="tp-dest"
              type="text"
              required
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="Ej. Cancún, Europa, San Andrés..."
              className="w-full pl-10 pr-3.5 py-3 rounded-lg bg-slate-900 border border-slate-700 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>

        <div>
          <label htmlFor="tp-start" className="block text-xs font-semibold text-slate-300 mb-1.5">
            Fecha desde
          </label>
          <div className="relative">
            <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              id="tp-start"
              type="date"
              required
              min={todayIso}
              value={startDate}
              onChange={(e) => handleStartDateChange(e.target.value)}
              className="w-full pl-10 pr-3.5 py-3 rounded-lg bg-slate-900 border border-slate-700 text-sm text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>

        <div>
          <label htmlFor="tp-end" className="block text-xs font-semibold text-slate-300 mb-1.5">
            Fecha hasta
          </label>
          <div className="relative">
            <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              id="tp-end"
              type="date"
              required
              min={startDate || todayIso}
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full pl-10 pr-3.5 py-3 rounded-lg bg-slate-900 border border-slate-700 text-sm text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div>
          <label htmlFor="tp-adults" className="block text-xs font-semibold text-slate-300 mb-1.5">
            Adultos
          </label>
          <div className="relative">
            <Users className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              id="tp-adults"
              type="number"
              min={1}
              max={20}
              value={adults}
              onChange={(e) => setAdults(Math.max(1, Number(e.target.value) || 1))}
              className="w-full pl-9 pr-2.5 py-3 rounded-lg bg-slate-900 border border-slate-700 text-sm text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>

        <div>
          <label htmlFor="tp-children" className="block text-xs font-semibold text-slate-300 mb-1.5">
            Menores (2–11)
          </label>
          <input
            id="tp-children"
            type="number"
            min={0}
            max={20}
            value={children}
            onChange={(e) => setChildren(Math.max(0, Number(e.target.value) || 0))}
            className="w-full px-3 py-3 rounded-lg bg-slate-900 border border-slate-700 text-sm text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="tp-infants" className="block text-xs font-semibold text-slate-300 mb-1.5">
            Bebés (&lt;2)
          </label>
          <input
            id="tp-infants"
            type="number"
            min={0}
            max={10}
            value={infants}
            onChange={(e) => setInfants(Math.max(0, Number(e.target.value) || 0))}
            className="w-full px-3 py-3 rounded-lg bg-slate-900 border border-slate-700 text-sm text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>

      {babiesExceedAdults && (
        <div
          role="status"
          className="p-3 rounded-xl bg-amber-950/40 border border-amber-500/30 text-amber-200 text-xs flex items-start gap-2"
        >
          <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5 text-amber-400" aria-hidden="true" />
          <span>
            Hay más bebés (&lt;2 años) que adultos. Las aerolíneas suelen requerir al menos un
            adulto por cada bebé en brazos; nuestra asesora te ayudará a cotizar la mejor opción.
          </span>
        </div>
      )}

      {error && (
        <p role="alert" className="text-xs font-medium text-rose-400">
          {error}
        </p>
      )}

      <button
        type="submit"
        className="w-full mt-2 flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1DA851] text-[#04210f] px-6 py-4 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(37,211,102,0.3)] cursor-pointer"
      >
        <FaWhatsapp size={22} aria-hidden="true" />
        <span>Enviar a WhatsApp</span>
      </button>
    </form>
  );
}