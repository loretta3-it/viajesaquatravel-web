import React from 'react';
import { FaWhatsapp } from 'react-icons/fa6';
import { siteConfig } from '../../config/siteConfig';

export default function WhatsAppFab() {
  const whatsappUrl = `https://wa.me/${siteConfig.agency.whatsappNumber}?text=${encodeURIComponent('Hola Viajes Aqua Travel, me gustaría recibir asesoría general.')}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1DA851] text-white p-4 rounded-full shadow-xl shadow-green-900/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group"
      aria-label="Contactar por WhatsApp"
    >
      <div className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-75"></div>
      <FaWhatsapp size={28} className="relative z-10" />
    </a>
  );
}