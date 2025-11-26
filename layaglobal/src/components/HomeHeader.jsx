import React from 'react';
import ProfileIcon from "./ProfileIcon";
import { Link } from "react-router-dom";

// 1. Importamos el hook de autenticación para obtener el email
import { useAuth } from "../utils/AuthContext";
// 2. Importamos el ícono de Gmail
import { SiGmail } from "react-icons/si"; 

const HomeHeader = () => {
  const { currentUser } = useAuth();
  
  // URL dinámica: Si hay usuario, forzamos a Gmail a usar esa cuenta; si no, vamos al login estándar.
  const gmailUrl = currentUser 
  ? `https://mail.google.com/mail/u/${currentUser.email}` 
  : "https://mail.google.com";
  
  return (
    <header className="h-20 flex justify-between md:justify-end items-center gap-6 px-8 relative z-50">
    <div className="flex gap-6 items-center">
    
    {/* Enlace a Gmail Real (Dinámico con Ícono) */}
    <a 
    href={gmailUrl} 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center gap-1 text-white/70 text-[14px] font-medium hover:text-cyan-300 cursor-pointer transition-colors tracking-wide"
    >
    {/* Ícono de Gmail */}
    <SiGmail size={16} className="text-pink-500 transition-colors group-hover:text-cyan-300" />
    
    </a>
    
    {/* Enlace a Imágenes (Redirige al inicio de Laya) */}
    <Link 
    to="/" 
    className="text-white/70 text-[14px] font-medium hover:text-pink-300 cursor-pointer transition-colors tracking-wide"
    >
    Imágenes
    </Link>
    </div>
    
    {/* El icono de perfil (Muestra la foto del usuario logueado) */}
    <div className="hover:scale-105 transition-transform duration-300">
    <ProfileIcon />
    </div>
    </header>
  );
};

export default HomeHeader;