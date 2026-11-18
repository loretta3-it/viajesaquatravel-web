import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LayoutShell from './components/layout/LayoutShell';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <LayoutShell>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </LayoutShell>
    </Router>
  );
}

export default App;