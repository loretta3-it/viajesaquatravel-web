import React, { useState, useEffect } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { 
  Globe, 
  MousePointerClick, 
  Tag, 
  TrendingUp, 
  Info, 
  BarChart3 
} from 'lucide-react';

export default function Dashboard() {
  const [activeOffersCount, setActiveOffersCount] = useState(0);

  // Conexión real para contar las ofertas activas en la BD
  useEffect(() => {
    const fetchOffersCount = async () => {
      try {
        const q = query(collection(db, 'offers'), where('isActive', '==', true));
        const snapshot = await getDocs(q);
        setActiveOffersCount(snapshot.size);
      } catch (error) {
        console.error("Error silencioso cargando conteo de ofertas:", error);
      }
    };
    fetchOffersCount();
  }, []);

  // Datos mockeados para la gráfica de interés
  const destinationInterest = [
    { name: 'Aqua Woman (Retiros)', percentage: 82, color: 'bg-purple-500' },
    { name: 'Punta Cana Todo Incluido', percentage: 65, color: 'bg-blue-500' },
    { name: 'Europa Fantástica', percentage: 48, color: 'bg-emerald-500' },
    { name: 'San Andrés (Black Days)', percentage: 35, color: 'bg-amber-500' },
  ];

  return (
    <div className="max-w-7xl mx-auto animate-in fade-in duration-500">
      
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
          <BarChart3 className="text-blue-500" size={28} />
          Panel Gerencial
        </h1>
        <p className="text-slate-400">Visión global del rendimiento comercial y tráfico digital.</p>
      </div>

      {/* Banner de Aviso (Fase 3) */}
      <div className="mb-8 p-4 bg-blue-900/20 border border-blue-500/30 rounded-xl flex items-start gap-3">
        <Info className="text-blue-400 w-5 h-5 flex-shrink-0 mt-0.5" />
        <p className="text-blue-300 text-sm">
          <strong>Nota de Arquitectura:</strong> Los indicadores de tráfico y leads mostrados son demostrativos. 
          Los datos analíticos reales se sincronizarán al conectar la API de Meta Ads y Google Analytics en la Fase 3 del proyecto.
        </p>
      </div>

      {/* Grid de KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        
        {/* KPI 1: Tráfico */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-slate-400 text-sm font-medium mb-1">Tráfico Web Mensual</p>
              <h3 className="text-3xl font-bold text-white">2,450</h3>
            </div>
            <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
              <Globe className="text-blue-400" size={20} />
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <TrendingUp size={14} className="text-[#25D366]" />
            <span className="text-[#25D366] font-medium">+12.5%</span>
            <span className="text-slate-500">vs. mes anterior</span>
          </div>
        </div>

        {/* KPI 2: Leads */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-slate-400 text-sm font-medium mb-1">Leads (Clics a WhatsApp)</p>
              <h3 className="text-3xl font-bold text-white">184</h3>
            </div>
            <div className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center">
              <MousePointerClick className="text-[#25D366]" size={20} />
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <TrendingUp size={14} className="text-[#25D366]" />
            <span className="text-[#25D366] font-medium">+5.2%</span>
            <span className="text-slate-500">vs. mes anterior</span>
          </div>
        </div>

        {/* KPI 3: Ofertas (DATO REAL DE FIRESTORE) */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg relative overflow-hidden">
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-yellow-500/5 rounded-full blur-2xl"></div>
          <div className="flex justify-between items-start mb-4 relative z-10">
            <div>
              <p className="text-slate-400 text-sm font-medium mb-1">Ofertas Activas</p>
              <h3 className="text-3xl font-bold text-yellow-400">{activeOffersCount}</h3>
            </div>
            <div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center">
              <Tag className="text-yellow-400" size={20} />
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs relative z-10">
            <span className="text-yellow-500 font-medium">Sincronizado</span>
            <span className="text-slate-500">en tiempo real</span>
          </div>
        </div>

        {/* KPI 4: Conversión */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-slate-400 text-sm font-medium mb-1">Tasa de Conversión</p>
              <h3 className="text-3xl font-bold text-white">7.5%</h3>
            </div>
            <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center">
              <TrendingUp className="text-purple-400" size={20} />
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <TrendingUp size={14} className="text-[#25D366]" />
            <span className="text-[#25D366] font-medium">+1.1%</span>
            <span className="text-slate-500">vs. benchmark industrial</span>
          </div>
        </div>
      </div>

      {/* Gráfica Simulada con Tailwind */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl">
        <h3 className="text-lg font-bold text-white mb-6">Interés de Clientes por Destino (Últimos 30 días)</h3>
        
        <div className="space-y-6">
          {destinationInterest.map((item, index) => (
            <div key={index}>
              <div className="flex justify-between text-sm mb-2">
                <span className="font-medium text-slate-300">{item.name}</span>
                <span className="text-slate-400">{item.percentage}% de clics</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden">
                <div 
                  className={`${item.color} h-3 rounded-full transition-all duration-1000 ease-out`}
                  style={{ width: `${item.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}