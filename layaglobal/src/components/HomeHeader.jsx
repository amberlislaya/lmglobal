import React from 'react';
import ProfileIcon from "./ProfileIcon";
import { Link } from "react-router-dom";

const HomeHeader = () => {
  return (
    <header className="h-20 flex justify-between md:justify-end items-center gap-6 px-8 relative z-50">
    <div className="flex gap-6 items-center">
    
    {/* Enlace a Gmail Real */}
    <a 
    href="https://mail.google.com" 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-white/70 text-[14px] font-medium hover:text-cyan-300 cursor-pointer transition-colors tracking-wide"
    >
    Gmail
    </a>
    
    {/* Enlace a Imágenes (Redirige al inicio de Laya) */}
    <Link 
    to="/" 
    className="text-white/70 text-[14px] font-medium hover:text-pink-300 cursor-pointer transition-colors tracking-wide"
    >
    Imágenes
    </Link>
    </div>
    
    {/* El icono de perfil (ProfileIcon ya maneja la lógica de Auth internamente) */}
    <div className="hover:scale-105 transition-transform duration-300">
    <ProfileIcon />
    </div>
    </header>
  );
};

export default HomeHeader;