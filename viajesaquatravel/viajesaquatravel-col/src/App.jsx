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
import Dashboard from './pages/admin/Dashboard.jsx'; // <-- NUEVA IMPORTACIÓN DEL DASHBOARD
import OffersManager from './components/layout/admin/OffersManager.jsx';
import DataMigrator from './components/layout/admin/DataMigrator.jsx';
import CatalogManager from './pages/admin/CatalogManager.jsx';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* RUTAS PÚBLICAS */}
          <Route path="/" element={<LayoutShell><Home /></LayoutShell>} />
          <Route path="/aquawoman" element={<LayoutShell><AquaWoman /></LayoutShell>} />
          <Route path="/black-friday" element={<LayoutShell><BlackFriday /></LayoutShell>} />
          <Route path="/terminos-y-condiciones" element={<LayoutShell><Terms /></LayoutShell>} />
          <Route path="/politicas-de-privacidad" element={<LayoutShell><Privacy /></LayoutShell>} />

          {/* RUTA DE LOGIN */}
          <Route path="/admin/login" element={<Login />} />
          
          {/* RUTAS CMS / ADMIN ANIDADAS */}
          <Route 
            path="/admin" 
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to="dashboard" replace />} />
            
            {/* PANEL GERENCIAL */}
            <Route path="dashboard" element={<Dashboard />} />
            
            {/* GESTOR DE OFERTAS BLACK FRIDAY */}
            <Route path="offers" element={<OffersManager />} />
            
            {/* HERRAMIENTA GESTOR DE CATÁLOGO */}
            <Route path="catalog" element={<CatalogManager />} />
            
            {/* HERRAMIENTA DE MIGRACIÓN TEMPORAL */}
            <Route path="migrator" element={<DataMigrator />} />
          </Route>
          
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;