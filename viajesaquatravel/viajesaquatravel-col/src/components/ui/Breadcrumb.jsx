import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumb({ items }) {
  return (
    <nav className="flex items-center space-x-2 text-sm text-slate-400 mb-6 overflow-x-auto whitespace-nowrap pb-2 custom-scrollbar">
      <Link 
        to="/" 
        className="flex items-center hover:text-white transition-colors"
        aria-label="Inicio"
      >
        <Home size={16} />
      </Link>
      
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <ChevronRight size={16} className="text-slate-600 flex-shrink-0" />
          {item.path ? (
            <Link 
              to={item.path} 
              className="hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-slate-200 font-medium">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}