import React from 'react'
import { MdScreenSearchDesktop } from "react-icons/md";
import ProfileRing from "../assets/profile-ring.svg"

// IMPORTANTE: Importamos el hook de autenticación
import { useAuth } from "../utils/AuthContext";

const ProfileIcon = () => {
  // Extraemos los datos y funciones del contexto
  const { currentUser, login, logout } = useAuth();

  // Función para manejar el clic en el perfil
  const handleAuthAction = async () => {
    if (currentUser) {
        // SI ESTÁ CONECTADO: Preguntamos si quiere salir
        if(window.confirm(`¿Quieres cerrar sesión de ${currentUser.displayName}?`)) {
            try {
                await logout();
            } catch (error) {
                console.error("Error al cerrar sesión:", error);
                alert("No se pudo cerrar sesión: " + error.message);
            }
        }
    } else {
        // SI NO ESTÁ CONECTADO: Iniciamos sesión
        try {
            await login();
        } catch (error) {
            console.error("Error al iniciar sesión:", error);
            // Esto te ayudará a saber si es un error de red
            alert("Error de conexión con Google: " + error.message);
        }
    }
  };

  return (
    <div className="flex gap-4 items-center">
      
      {/* Icono de Apps (Izquierda) - Decorativo */}
      <span className="h-10 w-10 flex items-center justify-center rounded-full cursor-pointer hover:bg-white/10 transition-colors group">
        <MdScreenSearchDesktop 
            size={22} 
            className="text-gray-400 group-hover:text-cyan-400 transition-colors" 
        />
      </span>
      
      {/* Avatar de Usuario (Derecha) - INTERACTIVO */}
      <span 
        className="h-10 w-10 relative flex justify-center items-center cursor-pointer group"
        onClick={handleAuthAction}
        title={currentUser ? `Conectado como ${currentUser.displayName}` : "Iniciar sesión con Google"}
      >
        {/* Efecto de brillo detrás del anillo (Verde si está on, Rosa si está off) */}
        <div className={`absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300 
            ${currentUser ? "bg-green-500" : "bg-pink-500"}`}>
        </div>
        
        {/* Anillo SVG Decorativo */}
        <img className="absolute w-full h-full opacity-80 group-hover:opacity-100 transition-opacity z-10" src={ProfileRing} alt="ring" />
        
        {/* Contenedor de la Imagen */}
        <span className="h-8 w-8 rounded-full overflow-hidden border border-white/20 group-hover:border-white/50 transition-colors bg-gradient-to-br from-purple-600 to-blue-600 z-20 flex items-center justify-center">
           
           {currentUser ? (
               // CASO 1: USUARIO LOGUEADO (Muestra foto de Google)
               <img 
                 className="h-full w-full object-cover" 
                 src={currentUser.photoURL} 
                 alt="Perfil" 
                 referrerPolicy="no-referrer" // Ayuda a cargar imágenes de Google
               />
           ) : (
               // CASO 2: USUARIO NO LOGUEADO (Muestra icono)
               <MdScreenSearchDesktop size={16} className="text-white/50" />
           )}
           
        </span>
      </span>
    </div>
  )
}

export default ProfileIcon