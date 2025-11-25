import React from 'react'
import { MdScreenSearchDesktop } from "react-icons/md";
// import Profile from "../assets/profile-200x200.jpg";
import ProfileRing from "../assets/profile-ring.svg"

const ProfileIcon = () => {
  return (
    <div className="flex gap-4 items-center">
    {/* Icono de Apps */}
    <span className="h-10 w-10 flex items-center justify-center rounded-full cursor-pointer hover:bg-white/10 transition-colors group">
    <MdScreenSearchDesktop 
    size={22} 
    className="text-gray-400 group-hover:text-cyan-400 transition-colors" 
    />
    </span>
    
    {/* Avatar de Usuario con Anillo Neon */}
    <span className="h-10 w-10 relative flex justify-center items-center cursor-pointer group">
    {/* Efecto de brillo detrás del anillo */}
    <div className="absolute inset-0 rounded-full bg-pink-500 blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
    
    <img className="absolute w-full h-full opacity-80 group-hover:opacity-100 transition-opacity" src={ProfileRing} alt="ring" />
    
    <span className="h-8 w-8 rounded-full overflow-hidden border border-white/20 group-hover:border-pink-500 transition-colors bg-gradient-to-br from-purple-600 to-blue-600">
    {/* Placeholder visual si no hay imagen (gradiente) o descomenta la imagen abajo */}
    {/* <img className="h-full w-full object-cover" src={Profile} /> */}
    </span>
    </span>
    </div>
  )
}

export default ProfileIcon