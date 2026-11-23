import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.jsx';

// Importaciones Públicas
import LayoutShell from './components/layout/LayoutShell.jsx';
import Home from './pages/Home.jsx';
import AquaWoman from './pages/AquaWoman.jsx';
import Terms from './pages/Terms.jsx';
import Privacy from './pages/Privacy.jsx';
import BlackFriday from './pages/BlackFriday.jsx';

// Importaciones Administrativas
import Login from './components/admin/Login.jsx';
import ProtectedRoute from './components/admin/ProtectedRoute.jsx';
import AdminLayout from './components/layout/admin/AdminLayout.jsx';
import OffersManager from './components/layout/admin/OffersManager.jsx';
import DataMigrator from './components/layout/admin/DataMigrator.jsx';

function App() {
  console.log("🛠️ DEBUG [App] - Inicializando árbol de rutas...");

  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* ============================== */}
          {/* RUTAS PÚBLICAS (Con Layout) */}
          {/* ============================== */}
          <Route path="/" element={<LayoutShell><Home /></LayoutShell>} />
          <Route path="/aquawoman" element={<LayoutShell><AquaWoman /></LayoutShell>} />
          <Route path="/black-friday" element={<LayoutShell><BlackFriday /></LayoutShell>} />
          <Route path="/terminos-y-condiciones" element={<LayoutShell><Terms /></LayoutShell>} />
          <Route path="/politicas-de-privacidad" element={<LayoutShell><Privacy /></LayoutShell>} />

          {/* ============================== */}
          {/* RUTA DE LOGIN (Sin Layout) */}
          {/* ============================== */}
          <Route path="/admin/login" element={<Login />} />
          
          {/* ============================== */}
          {/* RUTAS CMS / ADMIN ANIDADAS */}
          {/* ============================== */}
          <Route 
            path="/admin" 
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            {/* Redirección automática de /admin a /admin/dashboard */}
            <Route index element={<Navigate to="dashboard" replace />} />
            
            {/* El Outlet de AdminLayout renderizará estos componentes */}
            <Route path="dashboard" element={<OffersManager />} />
            <Route path="offers" element={<OffersManager />} />
            
            {/* Herramienta temporal de migración */}
            <Route path="migrator" element={<DataMigrator />} />
            
            {/* Placeholder para futuras secciones */}
            <Route path="catalog" element={<div className="text-slate-400 p-8">Módulo Catálogo en construcción...</div>} />
          </Route>
          
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;