import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Compass } from 'lucide-react';
import PromoButton from '../ui/PromoButton';
import { useSettings } from '../../hooks/useSettings';

const NAV_ITEMS = [
  { label: 'Inicio', to: '/' },
  { label: 'Nosotros', to: '/nosotros' },
  { label: 'Servicios', to: '/servicios' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { agency } = useSettings();

  const brandName = agency?.name || 'Viajes Aqua Travel';
  const closeMenu = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            to="/"
            onClick={closeMenu}
            className="inline-flex items-center gap-2.5 text-slate-900 hover:opacity-90 transition"
          >
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-slate-900 text-white">
              <Compass className="w-5 h-5" aria-hidden="true" />
            </span>
            <div className="flex flex-col leading-tight">
              <span className="text-base md:text-lg font-bold tracking-tight text-slate-900">
                {brandName}
              </span>
              {agency?.rnt && (
                <span className="text-[11px] font-medium text-slate-500">
                  RNT {agency.rnt}
                </span>
              )}
            </div>
          </Link>

          <nav aria-label="Navegación principal" className="hidden md:flex items-center gap-7">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-slate-950 font-semibold'
                      : 'text-slate-600 hover:text-slate-950'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <PromoButton />
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <PromoButton className="px-3 py-1.5 text-xs" />
            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition cursor-pointer"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-5 shadow-lg">
          <nav aria-label="Navegación móvil" className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `px-3 py-2.5 rounded-xl text-sm font-medium transition ${
                    isActive
                      ? 'bg-slate-900 text-white'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}