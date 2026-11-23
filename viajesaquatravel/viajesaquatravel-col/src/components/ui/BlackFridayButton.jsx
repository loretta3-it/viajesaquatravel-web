import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

export default function BlackFridayButton() {
  return (
    <Link
      to="/black-friday"
      className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-yellow-600 via-yellow-300 to-yellow-600 text-black font-bold animate-pulse shadow-[0_0_15px_rgba(234,179,8,0.5)] hover:shadow-[0_0_25px_rgba(234,179,8,0.8)] transition-all hover:scale-105 hover:animate-none"
      aria-label="Ver ofertas de Black Friday"
    >
      <Sparkles size={18} className="text-black" />
      <span>Black Days</span>
    </Link>
  );
}