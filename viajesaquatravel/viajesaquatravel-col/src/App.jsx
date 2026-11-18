import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LayoutShell from './components/layout/LayoutShell';
import Home from './pages/Home';
import AquaWoman from './pages/AquaWoman';

function App() {
  return (
    <Router>
      <LayoutShell>
        <Routes>
          {/* Ruta Principal: Agencia Corporativa Oscura */}
          <Route path="/" element={<Home />} />
          
          {/* Ruta Submarca: Experiencia Femenina Cálida */}
          <Route path="/aquawoman" element={<AquaWoman />} />
        </Routes>
      </LayoutShell>
    </Router>
  );
}

export default App;