import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import LayoutShell from './components/layout/LayoutShell';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import BlackFriday from './pages/BlackFriday';
import AquaWoman from './pages/AquaWoman';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Login from './components/admin/Login';
import ProtectedRoute from './components/admin/ProtectedRoute';
import AdminLayout from './components/layout/admin/AdminLayout';
import Dashboard from './pages/admin/Dashboard';
import CatalogManager from './pages/admin/CatalogManager';
import OffersManager from './components/layout/admin/OffersManager';
import DataMigrator from './components/layout/admin/DataMigrator';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <LayoutShell>
                <Home />
              </LayoutShell>
            }
          />
          <Route
            path="/nosotros"
            element={
              <LayoutShell>
                <About />
              </LayoutShell>
            }
          />
          <Route
            path="/servicios"
            element={
              <LayoutShell>
                <Services />
              </LayoutShell>
            }
          />
          <Route
            path="/ofertas"
            element={
              <LayoutShell>
                <BlackFriday />
              </LayoutShell>
            }
          />
          <Route path="/black-friday" element={<Navigate to="/ofertas" replace />} />
          <Route
            path="/aquawoman"
            element={
              <LayoutShell>
                <AquaWoman />
              </LayoutShell>
            }
          />
          <Route
            path="/terminos"
            element={
              <LayoutShell>
                <Terms />
              </LayoutShell>
            }
          />
          <Route
            path="/privacidad"
            element={
              <LayoutShell>
                <Privacy />
              </LayoutShell>
            }
          />

          <Route path="/admin/login" element={<Login />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="catalog" element={<CatalogManager />} />
            <Route path="offers" element={<OffersManager />} />
            <Route path="migrator" element={<DataMigrator />} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}