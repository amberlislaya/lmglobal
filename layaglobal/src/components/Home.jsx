import React from 'react';
import { SiOpensearch } from "react-icons/si";
import HomeHeader from "./HomeHeader";
import SearchInput from "./SearchInput";
import Footer from "./Footer";

const Home = () => {
  return (
    // Usamos min-h-[100dvh] para mejor compatibilidad con navegadores móviles
    <div className="relative min-h-[100dvh] flex flex-col overflow-hidden selection:bg-pink-500 selection:text-white">
    
    {/* --- FONDO ANIMADO --- */}
    <div className="absolute inset-0 w-full h-full z-[-1]">
    {/* Tamaño de las esferas reducido en móviles para evitar saturación */}
    <div className="absolute top-0 -left-4 w-48 md:w-72 h-48 md:h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
    <div className="absolute top-0 -right-4 w-48 md:w-72 h-48 md:h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
    <div className="absolute -bottom-8 left-20 w-48 md:w-72 h-48 md:h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
    </div>
    
    <HomeHeader />
    
    {/* CONTENIDO PRINCIPAL CENTRADO Y FLEXIBLE */}
    {/* Añadimos padding lateral seguro (px-4) y usamos grow para asegurar que el contenido se centre */}
    <main className="grow flex flex-col items-center justify-center relative z-10 px-4 w-full">
    
    <div className="w-full max-w-[600px] flex flex-col items-center transform transition-all duration-500">
    
    {/* Logo Animado: TAMAÑOS Y MARGINS DINÁMICOS */}
    <div className="flex flex-col items-center mb-6 md:mb-10 group hover:scale-105 transition-transform duration-500">
    <div className="relative">
    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-pink-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
    
    {/* Ícono de Laya: Más pequeño en móvil (text-5xl) */}
    <SiOpensearch className="relative text-5xl sm:text-6xl md:text-7xl text-white mb-2 md:mb-4 drop-shadow-lg" />
    </div>
    
    {/* Texto LAYA ajustado */}
    <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter text-gradient-laya drop-shadow-2xl text-center">
    Laya
    </h1>
    
    {/* Subtítulo ajustado */}
    <span className="text-[10px] sm:text-xs text-white/40 tracking-[0.3em] uppercase mt-2 text-center font-medium">
    Inteligencia Global
    </span>
    </div>
    
    {/* Buscador: Ancho controlado */}
    <div className="w-full sm:w-[90%] md:w-full">
    <SearchInput showButtons={true} />
    </div>
    
    </div>
    </main>
    
    {/* Footer pegado al fondo */}
    <div className="relative z-10 w-full mt-auto">
    <Footer />
    </div>
    
    </div>
  )
}

export default Home