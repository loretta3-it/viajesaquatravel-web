import React, { useEffect } from 'react';
import { Leaf, Heart, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa6';
import { siteConfig } from '../config/siteConfig';

export default function AquaWoman() {
  const { aquaWomanData, agency, businessLines } = siteConfig;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getWhatsAppLink = () => {
    const msg = `Hola Aqua Travel, quiero más información sobre el retiro "${aquaWomanData.retreat.title}" de Aqua Woman.`;
    return `https://wa.me/${agency.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="w-full bg-stone-50 text-stone-800 font-sans selection:bg-rose-200">
      {/* Hero Editorial */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Aqua Woman Hero" 
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/60 via-rose-900/40 to-stone-50"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <span className="inline-block py-1 px-4 rounded-full bg-white/20 border border-white/30 text-sm font-semibold text-white mb-6 backdrop-blur-md uppercase tracking-[0.2em]">
            Experiencia Exclusiva
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight drop-shadow-lg">
            {aquaWomanData.heroTitle}
          </h1>
          <p className="text-lg md:text-2xl text-stone-100 mb-10 max-w-2xl mx-auto font-light drop-shadow-md">
            {aquaWomanData.heroSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#retiro"
              className="px-8 py-4 bg-white text-rose-900 rounded-full font-bold transition-all hover:scale-105 shadow-xl shadow-rose-900/20"
            >
              Descubrir el Retiro
            </a>
            <a 
              href={businessLines.aquaWoman.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 flex items-center gap-2 bg-transparent border border-white text-white rounded-full font-bold transition-all hover:bg-white/10 backdrop-blur-sm"
            >
              <FaInstagram size={20} />
              Comunidad
            </a>
          </div>
        </div>
      </section>

      {/* El Propósito / Problem-Solution */}
      <section className="py-24 px-4 max-w-5xl mx-auto text-center">
        <Heart className="w-12 h-12 text-rose-400 mx-auto mb-8 opacity-80" strokeWidth={1.5} />
        <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-8">
          Sabemos que lo sostienes todo. <br className="hidden md:block" /> Es momento de que te sostengan a ti.
        </h2>
        <p className="text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed">
          El "Zero Mental Load" no es un lujo, es una necesidad. Diseñamos viajes donde no tienes que planear, preocuparte ni cuidar de nadie más que de ti misma. Un espacio libre de juicios para reconectar con otras mujeres que, como tú, buscan un respiro profundo para sanar y volver a empezar.
        </p>
      </section>

      {/* Detalles del Retiro */}
      <section id="retiro" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Itinerario e Info */}
            <div>
              <span className="text-rose-500 font-bold tracking-widest uppercase text-sm mb-2 block">
                Próxima Experiencia
              </span>
              <h2 className="text-4xl font-serif text-stone-900 mb-6">
                {aquaWomanData.retreat.title}
              </h2>
              
              <div className="flex items-center gap-6 mb-8 text-stone-600">
                <div className="flex items-center gap-2">
                  <MapPin className="text-rose-400" size={20} />
                  <span>{aquaWomanData.retreat.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="text-rose-400" size={20} />
                  <span>3 Días, 2 Noches</span>
                </div>
              </div>

              <p className="text-stone-600 mb-8 leading-relaxed">
                {aquaWomanData.retreat.description}
              </p>

              <div className="space-y-4 mb-10">
                <h3 className="font-bold text-stone-800 text-lg mb-4">¿Qué incluye la experiencia?</h3>
                {aquaWomanData.retreat.includes.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="text-rose-400 mt-1 flex-shrink-0" size={20} />
                    <span className="text-stone-600">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 mb-8">
                <h3 className="font-bold text-stone-800 text-lg mb-4">El Viaje de 3 Días</h3>
                <div className="space-y-4">
                  {aquaWomanData.retreat.itinerary.map((day, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="font-bold text-rose-500 flex-shrink-0 w-16">{day.day}</div>
                      <div>
                        <span className="font-bold text-stone-800 block">{day.title}</span>
                        <span className="text-stone-600 text-sm">{day.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div>
                  <span className="block text-sm text-stone-500">Inversión desde</span>
                  <span className="text-3xl font-serif text-stone-900">${aquaWomanData.retreat.price} COP</span>
                </div>
                <a 
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 bg-rose-600 hover:bg-rose-700 text-white rounded-full font-bold transition-all shadow-lg shadow-rose-900/20 flex items-center justify-center gap-2"
                >
                  <FaWhatsapp size={20} />
                  Reservar mi cupo
                </a>
              </div>
            </div>

            {/* Galería Vibe */}
            <div className="grid grid-cols-2 gap-4 h-[600px]">
              <div className="flex flex-col gap-4">
                <img 
                  src={aquaWomanData.retreat.gallery[0]} 
                  alt="Retiro 1" 
                  className="w-full h-2/3 object-cover rounded-3xl"
                />
                <img 
                  src={aquaWomanData.retreat.gallery[1]} 
                  alt="Retiro 2" 
                  className="w-full h-1/3 object-cover rounded-3xl"
                />
              </div>
              <div className="flex flex-col gap-4 mt-8">
                <img 
                  src={aquaWomanData.retreat.gallery[2]} 
                  alt="Retiro 3" 
                  className="w-full h-1/3 object-cover rounded-3xl"
                />
                <img 
                  src={aquaWomanData.retreat.gallery[3]} 
                  alt="Retiro 4" 
                  className="w-full h-2/3 object-cover rounded-3xl"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
      
      {/* Footer Minimalista Local (Opcional si el LayoutShell lo cubre, pero mejora la transición) */}
      <div className="bg-stone-100 py-12 text-center border-t border-stone-200">
        <Leaf className="w-8 h-8 text-rose-300 mx-auto mb-4" />
        <p className="text-stone-500 text-sm">Aqua Woman es una experiencia respaldada por Viajes Aqua Travel.</p>
      </div>
    </div>
  );
}