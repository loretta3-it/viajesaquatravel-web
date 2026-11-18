import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ShieldCheck } from 'lucide-react';
import { FaWhatsapp, FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa6';
import { siteConfig } from '../../config/siteConfig';

export default function LayoutShell({ children }) {
  const whatsappUrl = `https://wa.me/${siteConfig.agency.whatsappNumber}?text=${encodeURIComponent('Hola Viajes Aqua Travel, me gustaría recibir asesoría general.')}`;

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
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="/#destinos" className="hover:text-white transition-colors">Destinos</a>
            <Link 
              to="/aquawoman" 
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-4 py-2 rounded-full font-bold transition-all shadow-md shadow-pink-500/20"
            >
              Aqua Woman
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer Institucional */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4 hover:opacity-80 transition-opacity">
              <img src="/logo-circle.png" alt="Logo Aqua Travel" className="h-12 w-auto object-contain" />
              <h3 className="font-bold text-lg text-white">{siteConfig.agency.name}</h3>
            </Link>
            <p className="text-slate-400 text-sm mb-2">{siteConfig.agency.experienceYears} años creando experiencias inolvidables.</p>
            <div className="flex items-center gap-2 text-slate-400 text-sm mt-4">
              <ShieldCheck size={16} className="text-[#25D366]" />
              <span>Agencia Certificada RNT {siteConfig.agency.rnt}</span>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Ubicación</h3>
            <div className="flex items-start gap-2 text-slate-400 text-sm">
              <MapPin size={16} className="mt-1 flex-shrink-0" />
              <span>{siteConfig.agency.location}</span>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Redes Sociales</h3>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/viajesaquatravel/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-colors text-slate-300" aria-label="Instagram">
                <FaInstagram size={20} />
              </a>
              <a href="https://www.facebook.com/viajesaquatravel/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors text-slate-300" aria-label="Facebook">
                <FaFacebookF size={18} />
              </a>
              <a href="https://www.tiktok.com/@viajesaquatravel" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-white hover:text-black transition-colors text-slate-300" aria-label="TikTok">
                <FaTiktok size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Contacto Directo</h3>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1DA851] text-white px-5 py-2.5 rounded-md font-medium transition-all"
            >
              <FaWhatsapp size={18} />
              Hablar con un Asesor
            </a>
          </div>
        </div>
      </footer>

      {/* Botón Flotante WhatsApp */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1DA851] text-white p-4 rounded-full shadow-xl shadow-green-900/20 hover:scale-110 transition-transform flex items-center justify-center"
        aria-label="Contactar por WhatsApp"
      >
        <FaWhatsapp size={28} />
      </a>
    </div>
  );
}