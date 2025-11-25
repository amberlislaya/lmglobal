import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// IMPORTANTE: Importamos el Proveedor de Autenticación
import { AuthProvider } from "./utils/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Envolvemos toda la aplicación con AuthProvider. 
        Así, cualquier componente (como el Header o el Icono) 
        sabrá si el usuario está logueado. */}
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);