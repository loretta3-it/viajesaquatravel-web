import React, { useState, useEffect } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';
import { siteConfig } from '../config/siteConfig';
import PackageCard from '../components/ui/PackageCard';
import ProductModal from '../components/ui/ProductModal';
import Breadcrumb from '../components/ui/Breadcrumb';
import { Timer, Sparkles, AlertCircle, Loader2 } from 'lucide-react';

export default function BlackFriday() {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchOffers = async () => {
      try {
        const q = query(collection(db, 'offers'), where('isActive', '==', true));
        const snapshot = await getDocs(q);
        const fetchedData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setOffers(fetchedData);
      } catch (error) {
        console.error("Error silencioso cargando ofertas:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchOffers();
  }, []);

  const adaptOfferForModal = (offer) => ({
    ...offer,
    price: offer.discountPrice ?? offer.price,
    businessLine: "volume",
    features: [offer.duration, offer.destination],
  });

  return (
    <div className="w-full bg-[#050b14] min-h-screen text-slate-50 font-sans pb-20">
      <section className="relative min-h-[60vh] flex flex-col items-center justify-center overflow-hidden border-b border-yellow-500/20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-900/20 via-[#050b14] to-[#050b14] z-0"></div>
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-yellow-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-600/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 text-center mt-12">
          <div className="flex justify-center mb-6">
            <Breadcrumb items={[{ label: 'Black Days', path: null }]} />
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 text-sm font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
            <Sparkles size={16} /> Edición Limitada
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-yellow-100 to-yellow-500 mb-6 tracking-tighter drop-shadow-lg uppercase">
            {siteConfig.offers?.campaignName || "Black Days"}
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 font-light max-w-3xl mx-auto mb-10">
            Descubre nuestras mejores tarifas del año. Descuentos exclusivos, asesoría premium y cupos estrictamente limitados.
          </p>
          <div className="flex items-center justify-center gap-4 text-yellow-500 font-mono text-xl bg-[#050b14]/80 p-4 rounded-xl border border-yellow-500/20 backdrop-blur-md inline-flex shadow-[0_0_20px_rgba(234,179,8,0.15)]">
            <Timer className="animate-pulse" />
            <span>Ofertas con tiempo límite de reserva</span>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-8 py-20">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-pulse">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="bg-slate-800/50 rounded-2xl h-[400px] border border-yellow-500/10"></div>
            ))}
          </div>
        ) : offers.length === 0 ? (
          <div className="text-center py-20 bg-white/5 rounded-2xl border border-white/10">
            <AlertCircle className="w-12 h-12 text-yellow-500 mx-auto mb-4 opacity-80" />
            <h3 className="text-2xl font-bold text-white mb-2">Estamos preparando las ofertas</h3>
            <p className="text-slate-400">Vuelve pronto para descubrir nuestros descuentos exclusivos de temporada.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offers.map((offer) => (
              <PackageCard 
                key={offer.id}
                product={offer}
                isOffer={true}
                onClick={(prod) => setSelectedProduct(adaptOfferForModal(prod))}
              />
            ))}
          </div>
        )}
      </section>

      {selectedProduct && <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} isOffer={true} />}
    </div>
  );
}