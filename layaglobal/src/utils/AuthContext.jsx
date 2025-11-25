import React, { createContext, useContext, useState, useEffect } from "react";
// 1. CAMBIO: Importa signInWithPopup en lugar de signInWithRedirect
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth"; 
import { auth, provider } from "./firebase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // FUNCIÓN 1: INICIAR SESIÓN
  // Usamos POPUP. Es más visual, no recarga la página y falla menos en localhost.
  const login = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      // Aquí ya tienes el usuario y su foto
      console.log("Usuario logueado:", result.user); 
      return result;
    } catch (error) {
      console.error("Error en el Popup:", error);
      throw error; // Lanzamos el error para que ProfileIcon lo capture
    }
  };

  // FUNCIÓN 2: CERRAR SESIÓN
  const logout = () => {
    return signOut(auth);
  };

  // FUNCIÓN 3: PERSISTENCIA
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);