import React, { useState } from 'react'
import { MdScreenSearchDesktop } from "react-icons/md"; 
import { useAuth } from "../utils/AuthContext";
import LogoutModal from "./LogoutModal"; 

const ProfileIcon = () => {
  const { currentUser, login, logout } = useAuth();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleAuthAction = async () => {
    if (currentUser) {
        setShowLogoutModal(true);
    } else {
        try {
            await login();
        } catch (error) {
            console.error("Error login:", error);
            alert("Error de conexión: " + error.message);
        }
    }
  };

  const confirmLogout = async () => {
      try {
          await logout();
          setShowLogoutModal(false);
      } catch (error) {
          console.error("Error logout:", error);
          setShowLogoutModal(false);
      }
  };

  return (
    <>
        <LogoutModal 
            isOpen={showLogoutModal} 
            onClose={() => setShowLogoutModal(false)} 
            onConfirm={confirmLogout}
            userName={currentUser?.displayName || "Usuario"}
        />

        <div className="flex items-center"> 
            <span 
                className="h-10 w-10 relative flex justify-center items-center cursor-pointer group"
                onClick={handleAuthAction}
                title={currentUser ? "Cerrar sesión" : "Iniciar sesión"}
            >
                {/* Anillo Neón Giratorio */}
                <div className="absolute -inset-[3px] rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-[spin_3s_linear_infinite] blur-[2px] opacity-80 group-hover:opacity-100 group-hover:blur-md transition-all duration-500"></div>

                {/* Fondo negro para tapar el centro */}
                <div className="absolute inset-[2px] rounded-full bg-[#0f172a] z-10"></div>
                
                {/* Imagen o Icono */}
                <span className="h-full w-full rounded-full overflow-hidden border border-white/10 z-20 flex items-center justify-center relative">
                    {currentUser ? (
                        <img 
                            className="h-full w-full object-cover" 
                            src={currentUser.photoURL} 
                            alt="Perfil" 
                            referrerPolicy="no-referrer"
                        />
                    ) : (
                        <MdScreenSearchDesktop size={16} className="text-white/50" />
                    )}
                </span>
            </span>
        </div>
    </>
  )
}

export default ProfileIcon;