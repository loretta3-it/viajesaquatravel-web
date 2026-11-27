import { useState } from 'react';
import { Globe2, MapPin } from 'lucide-react';
import { useSettings } from '../../hooks/useSettings';

const MAP_BG_IMAGE =
  'https://images.unsplash.com/photo-1713098965471-d324f294a71d?q=80&w=1502&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D';

function projectCoordinates(lat, lng) {
  const safeLat = Math.max(-90, Math.min(90, Number(lat) || 0));
  const safeLng = Math.max(-180, Math.min(180, Number(lng) || 0));
  const x = ((safeLng + 180) / 360) * 1000;
  const y = ((90 - safeLat) / 180) * 500;
  return { x, y };
}

export default function WorldMap({ pins: propPins }) {
  const { agency } = useSettings();
  const pins =
    Array.isArray(propPins) && propPins.length > 0 ? propPins : agency?.mapPins || [];

  const [selectedLabel, setSelectedLabel] = useState('');

  const activePin = pins.find((p) => p.label === selectedLabel) || pins[0] || null;

  return (
    <div className="rounded-3xl bg-slate-900 text-white border border-slate-800 p-6 sm:p-8 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#25D366]">
            <Globe2 className="w-4 h-4" aria-hidden="true" />
            <span>Presencia Global</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
            Desde Zipaquirá hacia los destinos más deseados
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Toca o pasa el cursor sobre cada punto para explorar nuestros destinos principales.
          </p>
        </div>

        {activePin && (
          <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-200 self-start sm:self-auto shrink-0">
            <MapPin className="w-4 h-4 text-[#25D366] shrink-0" aria-hidden="true" />
            <span className="font-semibold text-white">{activePin.label}</span>
          </div>
        )}
      </div>

      <div className="relative w-full aspect-[2/1] overflow-hidden rounded-2xl bg-[#0B1220] border border-slate-800">
        {/* Imagen de fondo limpia y nítida con overlay oscuro suave */}
        <img
          src={MAP_BG_IMAGE}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[#0B1220]/30"
        />

        {/* SVG transparente únicamente con chinchetas luminosas y tooltips */}
        <svg
          viewBox="0 0 1000 500"
          role="img"
          aria-label="Mapa mundial de destinos operados por Viajes Aqua Travel"
          className="relative z-10 w-full h-full block select-none"
        >
          <defs>
            <filter id="pin-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {pins.map((pin, idx) => {
            const { x, y } = projectCoordinates(pin.lat, pin.lng);
            const isHq = /zipaquir[áa]/i.test(pin.label || '');
            const isSelected = activePin?.label === pin.label;
            const pinColor = isHq ? '#25D366' : '#38bdf8';

            return (
              <g
                key={`${pin.label}-${idx}`}
                transform={`translate(${x}, ${y})`}
                onMouseEnter={() => setSelectedLabel(pin.label)}
                onClick={() => setSelectedLabel(pin.label)}
                className="cursor-pointer outline-none"
                role="button"
                tabIndex={0}
                aria-label={pin.label}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedLabel(pin.label);
                  }
                }}
              >
                <circle r="18" fill="transparent" />
                <circle
                  r={isSelected ? 17 : 11}
                  fill={pinColor}
                  fillOpacity={isSelected ? 0.38 : 0.22}
                />
                <circle
                  r={isHq ? 6.5 : 5}
                  fill={pinColor}
                  stroke="#0B1220"
                  strokeWidth="2"
                  filter="url(#pin-glow)"
                />
              </g>
            );
          })}

          {activePin && (() => {
            const { x, y } = projectCoordinates(activePin.lat, activePin.lng);
            const clampedX = Math.max(85, Math.min(915, x));
            const tooltipY = y < 55 ? y + 36 : y - 16;

            return (
              <g transform={`translate(${clampedX}, ${tooltipY})`} pointerEvents="none">
                <rect
                  x="-78"
                  y="-22"
                  width="156"
                  height="26"
                  rx="8"
                  fill="#0f172a"
                  fillOpacity="0.95"
                  stroke="#64748b"
                  strokeWidth="1.2"
                />
                <text
                  x="0"
                  y="-5"
                  textAnchor="middle"
                  fill="#f8fafc"
                  fontSize="11"
                  fontWeight="700"
                >
                  {activePin.label}
                </text>
              </g>
            );
          })()}
        </svg>
      </div>

      {pins.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-5">
          {pins.map((pin, idx) => {
            const isSelected = activePin?.label === pin.label;
            return (
              <button
                key={`${pin.label}-pill-${idx}`}
                type="button"
                onClick={() => setSelectedLabel(pin.label)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition cursor-pointer ${
                  isSelected
                    ? 'bg-[#25D366] text-[#04210f] shadow-sm'
                    : 'bg-slate-950 text-slate-300 border border-slate-800 hover:border-slate-600 hover:text-white'
                }`}
              >
                {pin.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}