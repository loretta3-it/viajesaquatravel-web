import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

// Importaciones Públicas
import LayoutShell from './components/layout/LayoutShell';
import Home from './pages/Home';
import AquaWoman from './pages/AquaWoman';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import BlackFriday from './pages/BlackFriday';

// Importaciones Administrativas
import ProtectedRoute from './components/admin/ProtectedRoute.jsx';
import DataMigrator from './components/layout/admin/DataMigrator';
import Login from './components/admin/Login';
// import Dashboard from './pages/admin/Dashboard'; // Descomentar al crear

function App() {
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
          {/* RUTAS CMS / ADMIN (Sin Layout) */}
          {/* ============================== */}
          <Route path="/admin/login" element={<Login />} />
          
          <Route 
            path="/admin/dashboard" 
            element={
              <ProtectedRoute>
                {/* <Dashboard /> */}
                <div className="text-white p-10">Dashboard (En construcción)</div>
              </ProtectedRoute>
            } 
          />

          <Route 
            path="/admin/migrator" 
            element={
              <ProtectedRoute>
                <DataMigrator />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;