import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
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
  const rnt = agency?.rnt || '115795';
  const closeMenu = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        <Link
          to="/"
          onClick={closeMenu}
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <img
            src="/logo-circle.png"
            alt="Logo Aqua Travel"
            className="h-10 w-auto object-contain"
          />
          <div>
            <span className="block text-xl font-bold tracking-tight text-white">
              {brandName}
            </span>
            <p className="text-xs text-slate-400 font-medium tracking-wide">
              RNT: {rnt}
            </p>
          </div>
        </Link>

        <nav
          aria-label="Navegación principal"
          className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300"
        >
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `transition-colors ${
                  isActive ? 'text-white font-semibold' : 'text-slate-300 hover:text-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <Link
            to="/aquawoman"
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-4 py-2 rounded-full font-bold transition-all shadow-md shadow-pink-500/20"
          >
            Aqua Woman
          </Link>

          <PromoButton />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <PromoButton className="px-3 py-1.5 text-xs" />
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition cursor-pointer"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-900/95 backdrop-blur-md px-4 pt-3 pb-5 shadow-xl">
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
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            <Link
              to="/aquawoman"
              onClick={closeMenu}
              className="mt-1 px-4 py-2.5 rounded-xl text-center text-sm font-bold text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 transition-all shadow-md shadow-pink-500/20"
            >
              Aqua Woman
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}