import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../config/firebase';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  const evaluateClaims = useCallback(async (user, forceRefresh = false) => {
    if (!user) {
      setIsAdmin(false);
      return false;
    }
    try {
      const tokenResult = await user.getIdTokenResult(forceRefresh);
      const isLocalEmergencyAdmin =
        import.meta.env.DEV && user.email === 'admin@viajesaquatravel.com';
      const hasAdminClaim = tokenResult.claims?.admin === true || isLocalEmergencyAdmin;
      setIsAdmin(hasAdminClaim);
      return hasAdminClaim;
    } catch {
      setIsAdmin(false);
      return false;
    }
  }, []);
  
  // const evaluateClaims = useCallback(async (user, forceRefresh = false) => {
  //   if (!user) {
  //     setIsAdmin(false);
  //     return false;
  //   }
  //   try {
  //     const tokenResult = await user.getIdTokenResult(forceRefresh);
  //     const hasAdminClaim = tokenResult.claims?.admin === true;
  //     setIsAdmin(hasAdminClaim);
  //     return hasAdminClaim;
  //   } catch {
  //     setIsAdmin(false);
  //     return false;
  //   }
  // }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      await evaluateClaims(user, false);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [evaluateClaims]);

  const login = useCallback(
    async (email, password) => {
      const credential = await signInWithEmailAndPassword(auth, email, password);
      await evaluateClaims(credential.user, true);
      return credential;
    },
    [evaluateClaims]
  );

  const logout = useCallback(async () => {
    await signOut(auth);
    setIsAdmin(false);
  }, []);

  const refreshClaims = useCallback(async () => {
    if (!auth.currentUser) return false;
    return evaluateClaims(auth.currentUser, true);
  }, [evaluateClaims]);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        isAdmin,
        loading,
        login,
        logout,
        refreshClaims,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('useAuth debe utilizarse dentro de AuthProvider.');
  }
  return ctx;
}