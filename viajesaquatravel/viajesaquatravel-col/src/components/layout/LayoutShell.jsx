import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ShieldCheck } from 'lucide-react';
import { FaWhatsapp, FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa6';
import { siteConfig } from '../../config/siteConfig';
import WhatsAppFab from '../ui/WhatsAppFab';
import Footer from './Footer.jsx';

export default function LayoutShell({ children }) {
  const whatsappUrl = `https://wa.me/${siteConfig.agency.whatsappNumber}?text=${encodeURIComponent('Hola Viajes AquaTravel, me gustaría recibir asesoría general.')}`;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans flex flex-col">
      {/* Navbar Oscuro Translúcido */}
      <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src="/logo-circle.png" alt="Logo Aqua Travel" className="h-10 w-auto object-contain" />
            <div>
              <h1 className="text-xl font-bold tracking-tight text-white">{siteConfig.agency.name}</h1>
              <p className="text-xs text-slate-400 font-medium tracking-wide">RNT: {siteConfig.agency.rnt}</p>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
            <a href="/#destinos" className="hover:text-white transition-colors">Destinos</a>
            <Link 
              to="/aquawoman" 
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-4 py-2 rounded-full font-bold transition-all shadow-md shadow-pink-500/20"
            >
              Aqua Woman
            </Link>
            {/* CTA Black Friday */}
            <Link 
              to="/black-friday" 
              className="relative group bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600 text-stone-900 px-5 py-2.5 rounded-full font-bold transition-all shadow-[0_0_15px_rgba(234,179,8,0.4)] hover:shadow-[0_0_25px_rgba(234,179,8,0.6)] hover:-translate-y-0.5 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 w-full h-full transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
              <span className="relative z-10 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-stone-900 animate-pulse"></span>
                Black Friday Ofertas
              </span>
            </Link>
          </nav>
        </div>
      </header>
      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

<Footer />
      {/* Botón Flotante WhatsApp Modular */}
      <WhatsAppFab />
    </div>
  );
}