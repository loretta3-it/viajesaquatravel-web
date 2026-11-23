import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function ProtectedRoute({ children }) {
  const { currentUser } = useAuth();
  
  // Trazabilidad de Debugging
  console.log("🛠️ DEBUG [ProtectedRoute] - Estado de sesión:", currentUser ? "Autenticado" : "No autenticado", currentUser?.email || "");

  if (!currentUser) {
    console.log("🛠️ DEBUG [ProtectedRoute] - Bloqueo de acceso. Redirigiendo a /admin/login");
    return <Navigate to="/admin/login" replace />;
  }

  console.log("🛠️ DEBUG [ProtectedRoute] - Acceso concedido. Cargando interfaz...");
  return children;
}