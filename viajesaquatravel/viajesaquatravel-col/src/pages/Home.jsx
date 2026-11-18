import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/siteConfig';
import { ShieldCheck, Star, ArrowRight, PlaneTakeoff, HeartHandshake } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import ProductModal from '../components/ui/ProductModal';
import HeroCarousel from '../components/ui/HeroCarousel';

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const [formData, setFormData] = useState({
    nombre: '',
    destino: '',
    fechas: '',
    personas: ''
  });

  const heroSlides = siteConfig.catalog.filter(p => 
    p.id === 'mar-01' || // Japón
    p.id === 'vol-01' || // Punta Cana
    p.id === 'mar-09'    // F1 Miami
  );

  const getCategoryColor = (lineId) => {
    const colors = {
      volume: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
      local: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
      margin: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
      aquaWoman: 'bg-purple-500/20 text-purple-300 border-purple-500/30'
    };
    return colors[lineId] || 'bg-slate-700 text-slate-300 border-slate-600';
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { nombre, destino, fechas, personas } = formData;
    const msg = `Hola Aqua Travel, soy ${nombre}. Solicito cotización para viajar a ${destino}. Fechas estimadas: ${fechas}. Número de personas: ${personas}.`;
    const url = `https://wa.me/${siteConfig.agency.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const groupedBusinessLines = Object.keys(siteConfig.businessLines).filter(key => key !== 'aquaWoman');

  return (
    <div className="w-full">
      <HeroCarousel 
        slides={heroSlides} 
        onOpenModal={setSelectedProduct} 
      />

      <section className="relative z-20 -mt-16 max-w-7xl mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl backdrop-blur-md flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mb-4">
              <HeartHandshake className="text-blue-400" size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Asesoría Humana</h3>
            <p className="text-slate-400 text-sm">Acompañamiento 1 a 1. Nada de chatbots fríos; diseñamos tu viaje a medida.</p>
          </div>
          
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl backdrop-blur-md flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-[#25D366]/10 flex items-center justify-center mb-4">
              <ShieldCheck className="text-[#25D366]" size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Trayectoria y Respaldo</h3>
            <p className="text-slate-400 text-sm">{siteConfig.agency.experienceYears} años de experiencia creando rutas seguras. Certificados con RNT {siteConfig.agency.rnt}.</p>
          </div>
          
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl backdrop-blur-md flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-amber-500/10 flex items-center justify-center mb-4">
              <PlaneTakeoff className="text-amber-400" size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Viajes 100% Seguros</h3>
            <p className="text-slate-400 text-sm">Operadores verificados y alianzas estratégicas para garantizar tranquilidad absoluta.</p>
          </div>
        </div>
      </section>

      {/* Catálogo Agrupado por Línea de Negocio */}
      <section id="destinos" className="max-w-7xl mx-auto px-4 md:px-8 py-8 space-y-24">
        {groupedBusinessLines.map(lineKey => {
          const lineData = siteConfig.businessLines[lineKey];
          const lineProducts = siteConfig.catalog.filter(p => p.businessLine === lineKey);
          
          if (lineProducts.length === 0) return null;

          return (
            <div key={lineKey}>
              <div className="mb-10 border-b border-slate-800 pb-4">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{lineData.name}</h2>
                <p className="text-slate-400 text-lg">{lineData.desc}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {lineProducts.map((product) => (
                  <div 
                    key={product.id} 
                    className="group flex flex-col bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all duration-300 cursor-pointer"
                    onClick={() => setSelectedProduct(product)}
                  >
                    <div className="relative h-56 overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.title}
                        onError={(e) => { e.target.src = FALLBACK_IMAGE; }}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold border backdrop-blur-md ${getCategoryColor(product.businessLine)}`}>
                          {lineData.name}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-white mb-2">{product.title}</h3>
                      <div className="flex gap-2 mb-6 flex-wrap">
                        {product.features.map((feature, idx) => (
                          <span key={idx} className="text-xs text-slate-400 bg-slate-950 px-2 py-1 rounded-md border border-slate-800">
                            {feature}
                          </span>
                        ))}
                      </div>
                      
                      <div className="mt-auto pt-4 border-t border-slate-800 flex items-center justify-between">
                        <div>
                          <span className="block text-xs text-slate-400 mb-1">Precio</span>
                          <span className="text-lg font-bold text-white">
                            {product.price.includes('consultar') ? product.price : `$${product.price}`}
                          </span>
                        </div>
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-500 text-white transition-colors group-hover:scale-110">
                          <ArrowRight size={20} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* Quote Form Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 shadow-xl flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-white mb-4">Diseña tu viaje a medida</h2>
            <p className="text-slate-400 mb-8">¿No encuentras lo que buscas en nuestro catálogo? Déjanos tus datos básicos y un asesor estructurará una cotización exclusiva para ti.</p>
            
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
                  <Star className="text-blue-400" size={20} />
                </div>
                <p className="text-sm text-slate-300">Asignación de asesor prioritario</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
                  <ShieldCheck className="text-blue-400" size={20} />
                </div>
                <p className="text-sm text-slate-300">Presupuestos transparentes sin costos ocultos</p>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 bg-slate-950 p-6 md:p-8 rounded-2xl border border-slate-800">
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">Nombre Completo</label>
                <input 
                  type="text" 
                  name="nombre"
                  required
                  onChange={handleFormChange}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  placeholder="Ej. Camila Torres"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">Destino de Interés</label>
                <input 
                  type="text" 
                  name="destino"
                  required
                  onChange={handleFormChange}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  placeholder="Ej. Cancún, México"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1">Fechas Estimadas</label>
                  <input 
                    type="text" 
                    name="fechas"
                    required
                    onChange={handleFormChange}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="Ej. Dic 2024"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1">Personas</label>
                  <input 
                    type="number" 
                    name="personas"
                    min="1"
                    required
                    onChange={handleFormChange}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="Ej. 2"
                  />
                </div>
              </div>
              <button 
                type="submit"
                className="w-full mt-4 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1DA851] text-white px-6 py-4 rounded-xl font-bold transition-all shadow-lg shadow-green-900/20"
              >
                <FaWhatsapp size={20} />
                Enviar a WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Lo que dicen nuestros viajeros</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteConfig.testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-amber-400 fill-amber-400" size={18} />
                ))}
              </div>
              <p className="text-slate-300 italic mb-6">"{testimonial.text}"</p>
              <p className="text-white font-bold text-sm">— {testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Aqua Woman Traffic Bridge */}
      <section id="aqua-woman" className="max-w-7xl mx-auto px-4 md:px-8 mb-24">
        <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 group">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          
          <div className="relative z-10 max-w-2xl">
            <span className="inline-block py-1 px-3 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-bold mb-4 uppercase tracking-wider">
              Sub-marca Exclusiva
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {siteConfig.businessLines.aquaWoman.name}
            </h2>
            <p className="text-slate-400 text-lg">
              Un ecosistema inmersivo diseñado exclusivamente para mujeres que buscan transformar el mundo viajando. Retiros, conexiones y destinos con propósito.
            </p>
          </div>
          
          <div className="relative z-10 flex-shrink-0">
            <Link 
              to="/aquawoman"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-full font-bold transition-all shadow-lg shadow-pink-500/30"
            >
              Descubrir Experiencias
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </div>
  );
}