import React from 'react';
import { ArrowRight } from 'lucide-react';

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";

export default function PackageCard({ product, onClick, categoryName, categoryColor }) {
  return (
    <div 
      onClick={() => onClick(product)}
      className="group relative flex flex-col bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:shadow-[0_8px_32px_rgba(37,211,102,0.15)] hover:border-white/20 hover:-translate-y-1 transition-all duration-500 cursor-pointer"
    >
      {/* Sheen Effect Superior */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent z-20"></div>

      <div className="relative h-56 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
        <img 
          src={product.image} 
          alt={product.title}
          onError={(e) => { e.target.src = FALLBACK_IMAGE; }}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
        />
        <div className="absolute top-4 left-4 z-20">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold border backdrop-blur-md shadow-sm ${categoryColor}`}>
            {categoryName}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow relative z-10 bg-gradient-to-b from-transparent to-slate-950/50">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{product.title}</h3>
        <div className="flex gap-2 mb-6 flex-wrap">
          {product.features.map((feature, idx) => (
            <span key={idx} className="text-xs text-slate-300 bg-white/5 px-2 py-1 rounded-md border border-white/10">
              {feature}
            </span>
          ))}
        </div>
        
        <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between">
          <div>
            <span className="block text-xs text-slate-400 mb-1">Precio</span>
            <span className="text-lg font-bold text-white">
              {product.price.includes('consultar') ? product.price : `$${product.price}`}
            </span>
          </div>
          <button 
            className="flex items-center gap-2 bg-blue-600/80 backdrop-blur-sm hover:bg-blue-500 text-white px-4 py-2 rounded-full transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(37,136,229,0.5)] font-semibold text-sm"
          >
            Ver detalles
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}