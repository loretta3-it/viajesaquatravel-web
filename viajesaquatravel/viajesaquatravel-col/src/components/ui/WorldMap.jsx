import { useState } from 'react';
import { Globe2, MapPin } from 'lucide-react';
import { useSettings } from '../../hooks/useSettings';

function projectCoordinates(lat, lng) {
  const safeLat = Math.max(-90, Math.min(90, Number(lat) || 0));
  const safeLng = Math.max(-180, Math.min(180, Number(lng) || 0));
  const x = ((safeLng + 180) / 360) * 1000;
  const y = ((90 - safeLat) / 180) * 500;
  return { x, y };
}

export default function WorldMap({ pins: propPins }) {
  const { agency } = useSettings();
  const pins = Array.isArray(propPins) && propPins.length > 0
    ? propPins
    : agency?.mapPins || [];

  const [selectedLabel, setSelectedLabel] = useState(pins[0]?.label || '');

  const activePin = pins.find((p) => p.label === selectedLabel) || pins[0] || null;

  return (
    <div className="rounded-3xl bg-slate-950 text-white border border-slate-800 p-6 sm:p-8 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#25D366]">
            <Globe2 className="w-4 h-4" aria-hidden="true" />
            <span>Presencia Global</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold mt-1">
            Desde Zipaquirá hacia los destinos más deseados
          </h3>
        </div>

        {activePin && (
          <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm text-slate-200 self-start sm:self-auto">
            <MapPin className="w-4 h-4 text-[#25D366] shrink-0" aria-hidden="true" />
            <span className="font-medium">{activePin.label}</span>
          </div>
        )}
      </div>

      <div className="relative w-full overflow-hidden rounded-2xl bg-slate-900/70 border border-slate-800/80">
        <svg
          viewBox="0 0 1000 500"
          role="img"
          aria-label="Mapa mundial de destinos operados por Viajes Aqua Travel"
          className="w-full h-auto block"
        >
          {/* Cuadrícula sutil de meridianos y paralelos */}
          <g stroke="#1e293b" strokeWidth="1" strokeDasharray="4 4">
            <line x1="0" y1="125" x2="1000" y2="125" />
            <line x1="0" y1="250" x2="1000" y2="250" />
            <line x1="0" y1="375" x2="1000" y2="375" />
            <line x1="250" y1="0" x2="250" y2="500" />
            <line x1="500" y1="0" x2="500" y2="500" />
            <line x1="750" y1="0" x2="750" y2="500" />
          </g>

          {/* Siluetas minimalistas de continentes */}
          <g fill="#1e293b" stroke="#334155" strokeWidth="1.2" strokeLinejoin="round">
            {/* Norteamérica y Centroamérica */}
            <path d="M85,78 L155,58 L245,62 L292,98 L272,155 L235,182 L212,212 L245,232 L222,248 L195,222 L152,188 L112,148 Z" />
            {/* Sudamérica */}
            <path d="M242,250 L292,262 L338,302 L322,368 L286,438 L260,425 L252,355 L232,298 Z" />
            {/* Europa */}
            <path d="M465,78 L538,68 L585,95 L568,145 L515,158 L472,142 L456,112 Z" />
            {/* África */}
            <path d="M468,175 L548,172 L592,225 L575,322 L532,388 L496,352 L472,265 L455,215 Z" />
            {/* Asia y Medio Oriente */}
            <path d="M585,82 L735,68 L852,102 L878,162 L812,218 L735,232 L665,215 L605,192 L578,145 Z" />
            {/* Japón */}
            <path d="M876,142 L894,152 L886,178 L868,168 Z" />
            {/* Oceanía */}
            <path d="M792,315 L872,312 L898,362 L858,402 L795,382 Z" />
          </g>

          {/* Chinchetas interactivas desde settings/agency.mapPins */}
          {pins.map((pin, idx) => {
            const { x, y } = projectCoordinates(pin.lat, pin.lng);
            const isHq = /zipaquir[áa]/i.test(pin.label || '');
            const isSelected = activePin?.label === pin.label;

            return (
              <g
                key={`${pin.label}-${idx}`}
                transform={`translate(${x}, ${y})`}
                onMouseEnter={() => setSelectedLabel(pin.label)}
                onClick={() => setSelectedLabel(pin.label)}
                className="cursor-pointer"
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
                <circle
                  r={isSelected ? 14 : 9}
                  fill={isHq ? '#25D366' : '#38bdf8'}
                  fillOpacity={isSelected ? 0.28 : 0.16}
                />
                <circle
                  r={isHq ? 6 : 4.5}
                  fill={isHq ? '#25D366' : '#38bdf8'}
                  stroke="#0f172a"
                  strokeWidth="2"
                />
                {isSelected && (
                  <g transform="translate(0, -16)">
                    <rect
                      x="-68"
                      y="-20"
                      width="136"
                      height="22"
                      rx="6"
                      fill="#0f172a"
                      stroke="#334155"
                      strokeWidth="1"
                    />
                    <text
                      x="0"
                      y="-6"
                      textAnchor="middle"
                      fill="#f8fafc"
                      fontSize="10"
                      fontWeight="600"
                    >
                      {pin.label}
                    </text>
                  </g>
                )}
              </g>
            );
          })}
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
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition cursor-pointer ${
                  isSelected
                    ? 'bg-[#25D366] text-slate-950'
                    : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-600'
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