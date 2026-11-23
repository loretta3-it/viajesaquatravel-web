import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { MapPin, ShieldCheck, Phone, Mail, Clock } from 'lucide-react';
import { FaWhatsapp, FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa6';
import { siteConfig } from '../../config/siteConfig';

export default function Footer() {
  const [agency, setAgency] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAgencySettings = async () => {
      try {
        const docRef = doc(db, 'settings', 'agency');
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setAgency(docSnap.data());
        } else {
          setAgency(siteConfig.agency); // Fallback a config local si no hay BD
        }
      } catch (error) {
        console.error("Error silencioso cargando settings:", error);
        setAgency(siteConfig.agency); // Fallback seguro
      } finally {
        setLoading(false);
      }
    };
    fetchAgencySettings();
  }, []);

  if (loading) {
    return (
      <footer className="bg-slate-900 border-t border-slate-800 py-16 mt-16 text-slate-300 animate-pulse">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-48 bg-slate-800/50 rounded-xl"></div>
      </footer>
    );
  }

  // Prevenir crasheos si faltan datos
  const safeAgency = agency || siteConfig.agency;
  const whatsappUrl = `https://wa.me/${safeAgency.whatsappNumber}?text=${encodeURIComponent('Hola Viajes Aqua Travel, me gustaría recibir asesoría general.')}`;

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-16 mt-16 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        <div className="flex flex-col">
          <Link to="/" className="flex items-center gap-3 mb-6 hover:opacity-80 transition-opacity">
            <img src="/logo-circle.png" alt="Logo Aqua Travel" className="h-12 w-auto object-contain" />
            <h3 className="font-bold text-xl text-white">{safeAgency.name}</h3>
          </Link>
          <p className="text-slate-400 text-sm mb-4 leading-relaxed">
            {safeAgency.experienceYears} años creando experiencias inolvidables. Diseñamos viajes seguros con asesoría humana 1 a 1.
          </p>
          <div className="flex items-center gap-2 text-sm mt-2 bg-slate-800/50 p-3 rounded-lg border border-slate-700/50">
            <ShieldCheck size={18} className="text-[#25D366] flex-shrink-0" />
            <span>Agencia Certificada RNT <strong>{safeAgency.rnt}</strong></span>
          </div>
        </div>
        
        <div className="flex flex-col">
          <h3 className="font-bold text-lg mb-6 text-white">Contacto</h3>
          <ul className="space-y-4 text-sm text-slate-400">
            <li>
              <a href={`tel:${safeAgency.phone}`} className="flex items-start gap-3 hover:text-white transition-colors">
                <Phone size={18} className="text-blue-400 mt-0.5" />
                <span>{safeAgency.phone}</span>
              </a>
            </li>
            <li>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-white transition-colors">
                <FaWhatsapp size={18} className="text-[#25D366] mt-0.5" />
                <span>+{safeAgency.whatsappNumber}</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${safeAgency.email}`} className="flex items-start gap-3 hover:text-white transition-colors">
                <Mail size={18} className="text-rose-400 mt-0.5" />
                <span>{safeAgency.email}</span>
              </a>
            </li>
          </ul>

          <h3 className="font-bold text-lg mt-8 mb-4 text-white">Horarios de Atención</h3>
          <ul className="space-y-3 text-sm text-slate-400">
            {safeAgency.hours && (
              <>
                <li className="flex items-start gap-3">
                  <Clock size={18} className="text-amber-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="block font-medium text-slate-300">Lunes a Viernes</span>
                    <span>{safeAgency.hours.weekdays}</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 pl-7">
                  <div>
                    <span className="block font-medium text-slate-300">Sábados</span>
                    <span>{safeAgency.hours.saturday}</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 pl-7">
                  <div>
                    <span className="block font-medium text-slate-300">Domingos y Festivos</span>
                    <span>{safeAgency.hours.sundayAndHolidays}</span>
                  </div>
                </li>
              </>
            )}
          </ul>
        </div>

        <div className="flex flex-col">
          <h3 className="font-bold text-lg mb-6 text-white">Nuestra Oficina</h3>
          <div className="flex items-start gap-3 text-sm text-slate-400 mb-8">
            <MapPin size={18} className="text-emerald-400 mt-0.5 flex-shrink-0" />
            <div className="leading-relaxed">
              <span className="block text-white font-medium mb-1">{safeAgency.addressLine1}</span>
              <span>{safeAgency.addressLine2}</span>
            </div>
          </div>

          <h3 className="font-bold text-lg mb-4 text-white">Síguenos</h3>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/viajesaquatravel/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all shadow-md">
              <FaInstagram size={18} />
            </a>
            <a href="https://www.facebook.com/viajesaquatravel/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all shadow-md">
              <FaFacebookF size={18} />
            </a>
            <a href="https://www.tiktok.com/@viajesaquatravel" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-white hover:text-black transition-all shadow-md">
              <FaTiktok size={18} />
            </a>
          </div>
        </div>

        <div className="flex flex-col">
          <h3 className="font-bold text-lg mb-6 text-white">Legal</h3>
          <ul className="space-y-3 text-sm text-slate-400">
            {siteConfig.policies.map((policy) => (
              <li key={policy.id}>
                <Link to={policy.path} className="hover:text-blue-400 transition-colors">
                  {policy.title}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="mt-auto pt-8">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full gap-2 bg-[#25D366] hover:bg-[#1DA851] text-[#04210f] px-5 py-3 rounded-xl font-bold transition-all shadow-lg shadow-green-900/20"
            >
              <FaWhatsapp size={20} />
              Chatear con un Asesor
            </a>
          </div>
        </div>

      </div>

      {/* Derechos de Autor y Acceso Oculto al CMS */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
        <p>
          &copy; {new Date().getFullYear()}{' '}
          <Link to="/admin/login" className="outline-none cursor-text hover:text-slate-400 transition-colors">
            {safeAgency.name}
          </Link>
          . Todos los derechos reservados. RNT {safeAgency.rnt}.
        </p>
      </div>
    </footer>
  );
}