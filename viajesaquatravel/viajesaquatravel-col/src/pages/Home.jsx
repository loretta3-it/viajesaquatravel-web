import React, { useState, useEffect } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';
import { siteConfig } from '../config/siteConfig';
import { ShieldCheck, Star, PlaneTakeoff, HeartHandshake, Loader2 } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import ProductModal from '../components/ui/ProductModal';
import HeroCarousel from '../components/ui/HeroCarousel';
import PackageCard from '../components/ui/PackageCard';

export default function Home() {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [formData, setFormData] = useState({ nombre: '', destino: '', fechas: '', personas: '' });

  // Fetch Firestore Data
  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        // Consultamos destinos activos. Si en la migración no incluiste isActive en el objeto, 
        // puedes remover el where() y filtrar en JS, pero respetaremos tu instrucción:
        const q = query(collection(db, 'destinations'), where('isActive', '==', true));
        const snapshot = await getDocs(q);
        
        let fetchedData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        // Fallback preventivo por si isActive no se guardó en la migración V1
        if (fetchedData.length === 0) {
          const fallbackSnap = await getDocs(collection(db, 'destinations'));
          fetchedData = fallbackSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        }
        
        setDestinations(fetchedData);
      } catch (error) {
        console.error("Error silencioso cargando catálogo:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchDestinations();
  }, []);

  const heroSlides = destinations.filter(p => 
    p.id === 'mar-01' || p.id === 'vol-01' || p.id === 'mar-09'
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

  const handleFormChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const groupedBusinessLines = Object.keys(siteConfig.businessLines).filter(key => key !== 'aquaWoman');
  const filterOptions = [
    { id: 'Todos', label: 'Todos los Destinos' },
    ...groupedBusinessLines.map(key => ({ id: key, label: siteConfig.businessLines[key].name }))
  ];

  const visibleLines = activeFilter === 'Todos' 
    ? groupedBusinessLines 
    : groupedBusinessLines.filter(key => key === activeFilter);

  return (
    <div className="w-full">
      {/* Sticky Menu */}
      <div className="sticky top-20 z-40 bg-[#0B1220]/90 backdrop-blur-md border-b border-slate-800 py-3">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center gap-3 overflow-x-auto whitespace-nowrap [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {filterOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => {
                  setActiveFilter(option.id);
                  const catalogSection = document.getElementById('destinos');
                  if (catalogSection) {
                    const y = catalogSection.getBoundingClientRect().top + window.pageYOffset - 140;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                }}
                className={`px-5 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                  activeFilter === option.id 
                    ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,136,229,0.3)] border border-blue-500' 
                    : 'bg-slate-800/50 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700/50'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <HeroCarousel slides={heroSlides} onOpenModal={setSelectedProduct} />

      <section className="relative z-20 -mt-16 max-w-7xl mx-auto px-4 mb-16">
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
            <p className="text-slate-400 text-sm">{siteConfig.agency.experienceYears} años de experiencia. RNT {siteConfig.agency.rnt}.</p>
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

      {/* Catálogo Firestore con Skeleton Loader */}
      <section id="destinos" className="max-w-7xl mx-auto px-4 md:px-8 py-4 space-y-24 min-h-[50vh]">
        {loading ? (
          <div className="animate-pulse space-y-24">
            {[1, 2].map((_, i) => (
              <div key={i}>
                <div className="h-8 bg-slate-800 w-48 rounded mb-4"></div>
                <div className="h-4 bg-slate-800 w-64 rounded mb-10"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[1, 2, 3].map((_, j) => (
                    <div key={j} className="bg-slate-800/50 rounded-2xl h-[400px]"></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          visibleLines.map(lineKey => {
            const lineData = siteConfig.businessLines[lineKey];
            const lineProducts = destinations.filter(p => p.businessLine === lineKey);
            
            if (lineProducts.length === 0) return null;

            return (
              <div key={lineKey} className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="mb-10 border-b border-slate-800 pb-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{lineData.name}</h2>
                  <p className="text-slate-400 text-lg">{lineData.desc}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {lineProducts.map((product) => (
                    <PackageCard 
                      key={product.id}
                      product={product}
                      onClick={setSelectedProduct}
                      categoryName={lineData.name}
                      categoryColor={getCategoryColor(product.businessLine)}
                    />
                  ))}
                </div>
              </div>
            );
          })
        )}
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 shadow-xl flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-white mb-4">Diseña tu viaje a medida</h2>
            <p className="text-slate-400 mb-8">Déjanos tus datos básicos y un asesor estructurará una cotización exclusiva para ti.</p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
                  <Star className="text-blue-400" size={20} />
                </div>
                <p className="text-sm text-slate-300">Asignación de asesor prioritario</p>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 bg-slate-950 p-6 md:p-8 rounded-2xl border border-slate-800">
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <input type="text" name="nombre" required onChange={handleFormChange} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-1 focus:ring-blue-500" placeholder="Nombre Completo" />
              <input type="text" name="destino" required onChange={handleFormChange} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-1 focus:ring-blue-500" placeholder="Destino de Interés" />
              <div className="grid grid-cols-2 gap-4">
                <input type="text" name="fechas" required onChange={handleFormChange} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-1 focus:ring-blue-500" placeholder="Fechas" />
                <input type="number" name="personas" required onChange={handleFormChange} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-1 focus:ring-blue-500" placeholder="Personas" />
              </div>
              <button type="submit" className="w-full mt-6 flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1DA851] text-[#04210f] px-6 py-4 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(37,211,102,0.3)]">
                <FaWhatsapp size={22} />
                <span>Enviar a WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {selectedProduct && <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
    </div>
  );
}