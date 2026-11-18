import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";

export default function HeroCarousel({ slides, onOpenModal }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!slides || slides.length === 0) return;
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 6000); 
    return () => clearInterval(timer);
  }, [slides]);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  if (!slides || slides.length === 0) return null;

  const currentSlide = slides[currentIndex];

  return (
    <div className="relative w-full h-[80vh] min-h-[600px] overflow-hidden group">
      <div 
        className="w-full h-full flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, idx) => (
          <div key={idx} className="relative w-full h-full flex-shrink-0">
            <img 
              src={slide.image} 
              alt={slide.title} 
              onError={(e) => { e.target.src = FALLBACK_IMAGE; }}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-slate-900/60"></div>
            
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto z-10">
              <span className="inline-block py-1 px-4 rounded-full bg-white/10 border border-white/20 text-sm font-semibold text-white mb-6 backdrop-blur-md uppercase tracking-widest">
                Viaje Destacado
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-xl">
                {slide.title}
              </h1>
              <p className="text-2xl md:text-3xl font-light text-slate-200 mb-10 drop-shadow-md">
                Desde <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">{slide.price}</span>
              </p>
              
              <button 
                onClick={() => onOpenModal(slide)}
                className="flex items-center gap-3 bg-[#25D366] hover:bg-[#1DA851] text-white px-8 py-4 rounded-xl font-bold transition-all hover:scale-105 shadow-xl shadow-green-900/30 text-lg"
              >
                Ver Detalles / Cotizar
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <button 
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 md:left-8 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white transition-all opacity-0 group-hover:opacity-100 z-20"
        aria-label="Anterior"
      >
        <ChevronLeft size={28} />
      </button>
      <button 
        onClick={goToNext}
        className="absolute top-1/2 right-4 md:right-8 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white transition-all opacity-0 group-hover:opacity-100 z-20"
        aria-label="Siguiente"
      >
        <ChevronRight size={28} />
      </button>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-20">
        {slides.map((_, slideIndex) => (
          <button
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentIndex === slideIndex 
                ? 'bg-[#25D366] scale-125 shadow-[0_0_10px_rgba(37,211,102,0.8)]' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Ir al slide ${slideIndex + 1}`}
          />
        ))}
      </div>
    </div>
  );
}