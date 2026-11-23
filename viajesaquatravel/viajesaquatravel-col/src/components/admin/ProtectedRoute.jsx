import { Navigate, useLocation } from 'react-router-dom';
import { ShieldAlert } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export default function ProtectedRoute({ children }) {
  const { currentUser, isAdmin, loading, logout } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 text-slate-600">
        Verificando permisos de administrador...
      </div>
    );
  }

  if (!currentUser) {
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 p-6">
        <div className="max-w-md w-full bg-white border border-slate-200 rounded-2xl p-8 text-center shadow-sm">
          <ShieldAlert className="w-12 h-12 text-amber-600 mx-auto mb-4" />
          <h1 className="text-xl font-semibold text-slate-900 mb-2">
            Acceso restringido
          </h1>
          <p className="text-sm text-slate-600 mb-6">
            Tu cuenta ({currentUser.email}) no cuenta con permisos de administrador
            (<code>admin: true</code>). Si acabas de recibir el permiso, cierra sesión y
            vuelve a ingresar.
          </p>
          <button
            type="button"
            onClick={logout}
            className="px-4 py-2 rounded-lg bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition"
          >
            Cerrar sesión
          </button>
        </div>
      </div>
    );
  }

  return children;
}