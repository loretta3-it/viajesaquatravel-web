import React from 'react';
import { ArrowRight, Tag } from 'lucide-react';
import { formatPrice } from '../../utils/price';

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";

export default function PackageCard({ product, onClick, categoryName, categoryColor, isOffer = false }) {
  // Compatibilidad V2 (string) / V3 (number | null): un único formateador
  const priceDisplay = formatPrice(
    isOffer ? (product.discountPrice ?? product.price) : product.price,
    product.currency,
    product.priceLabel
  );
  const originalPriceDisplay =
    isOffer && product.originalPrice ? formatPrice(product.originalPrice, product.currency) : null;
  
  // Adaptación para Firestore: Leer de media array o hacer fallback a image
  const imageUrl = (product.media && product.media.length > 0) 
    ? product.media[0].url 
    : (product.image || FALLBACK_IMAGE);

  return (
    <div 
      onClick={() => onClick(product)}
      className={`group relative flex flex-col bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer hover:-translate-y-1 ${
        isOffer 
          ? 'border border-yellow-500/50 hover:shadow-[0_8px_32px_rgba(234,179,8,0.2)] hover:border-yellow-400' 
          : 'border border-white/10 hover:shadow-[0_8px_32px_rgba(37,211,102,0.15)] hover:border-white/20'
      }`}
    >
      <div className={`absolute inset-x-0 top-0 h-px z-20 ${isOffer ? 'bg-gradient-to-r from-transparent via-yellow-400 to-transparent' : 'bg-gradient-to-r from-transparent via-white/30 to-transparent'}`}></div>

      <div className="relative h-56 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
        <img 
          src={imageUrl} 
          alt={product.title}
          onError={(e) => { e.target.src = FALLBACK_IMAGE; }}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
        />
        
        <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
          {isOffer && product.campaignTag && (
            <span className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold border backdrop-blur-md shadow-sm bg-gradient-to-r from-yellow-600 to-yellow-300 text-black border-yellow-400">
              <Tag size={12} /> {product.campaignTag}
            </span>
          )}
          {!isOffer && categoryName && (
            <span className={`px-3 py-1 rounded-full text-xs font-semibold border backdrop-blur-md shadow-sm ${categoryColor}`}>
              {categoryName}
            </span>
          )}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow relative z-10 bg-gradient-to-b from-transparent to-slate-950/50">
        <h3 className={`text-xl font-bold mb-3 transition-colors ${isOffer ? 'text-yellow-400' : 'text-white group-hover:text-blue-400'}`}>
          {product.title}
        </h3>
        
        <div className="flex gap-2 mb-6 flex-wrap">
          {isOffer ? (
            <>
              <span className="text-xs text-slate-300 bg-white/5 px-2 py-1 rounded-md border border-white/10">{product.duration}</span>
              <span className="text-xs text-slate-300 bg-white/5 px-2 py-1 rounded-md border border-white/10">{product.destination}</span>
            </>
          ) : (
            product.features?.map((feature, idx) => (
              <span key={idx} className="text-xs text-slate-300 bg-white/5 px-2 py-1 rounded-md border border-white/10">
                {feature}
              </span>
            ))
          )}
        </div>
        
        <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between">
          <div>
            {isOffer && originalPriceDisplay && (
              <span className="block text-xs text-slate-400 line-through decoration-rose-500/80 mb-0.5">
                Antes {originalPriceDisplay}
              </span>
            )}
            {!isOffer && <span className="block text-xs text-slate-400 mb-1">Precio desde</span>}
            <span className={`text-lg font-bold ${isOffer ? 'text-yellow-400' : 'text-white'}`}>
              {priceDisplay}
            </span>
          </div>
          <button 
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 font-semibold text-sm ${
              isOffer 
                ? 'bg-yellow-500 hover:bg-yellow-400 text-stone-900 group-hover:shadow-[0_0_15px_rgba(234,179,8,0.5)]'
                : 'bg-blue-600/80 backdrop-blur-sm hover:bg-blue-500 text-white group-hover:shadow-[0_0_15px_rgba(37,136,229,0.5)]'
            }`}
          >
            Ver detalles
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}