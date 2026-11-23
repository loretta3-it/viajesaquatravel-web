import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LayoutShell from './components/layout/LayoutShell';
import Home from './pages/Home';
import AquaWoman from './pages/AquaWoman';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import BlackFriday from './pages/BlackFriday';
import DataMigrator from './components/layout/admin/DataMigrator';

function App() {
  return (
    <Router>
      <LayoutShell>
        <Routes>
          {/* Ruta Principal: Agencia Corporativa Oscura */}
          <Route path="/" element={<Home />} />
          
          {/* Ruta Submarca: Experiencia Femenina Cálida */}
          <Route path="/aquawoman" element={<AquaWoman />} />

          <Route path="/black-friday" element={<BlackFriday/>} />

          {/* Rutas Estáticas Legales */}
          <Route path="/terminos-y-condiciones" element={<Terms />} />
          <Route path="/politicas-de-privacidad" element={<Privacy />} />

          <Route path="/admin/migrator" element={<DataMigrator/>} />

        </Routes>
      </LayoutShell>
    </Router>
  );
}

export default App;