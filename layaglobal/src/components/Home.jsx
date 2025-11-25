import React from 'react';
import { SiOpensearch } from "react-icons/si";
import HomeHeader from "./HomeHeader";
import SearchInput from "./SearchInput";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden selection:bg-pink-500 selection:text-white">
      
      {/* --- FONDO ANIMADO (Background FX) --- */}
      <div className="absolute inset-0 w-full h-full z-[-1]">
        {/* Orbe Púrpura */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        {/* Orbe Cian */}
        <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        {/* Orbe Rosa */}
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Header Transparente */}
      <HomeHeader />

      {/* --- CONTENIDO PRINCIPAL --- */}
      <main className="grow flex flex-col items-center justify-center relative z-10 px-5">
        
        <div className="w-full max-w-[600px] flex flex-col items-center transform transition-all duration-500 hover:scale-[1.01]">
          
          {/* Logo Animado */}
          <div className="flex flex-col items-center mb-8 group">
            <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-pink-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <SiOpensearch className="relative text-7xl text-white mb-4 drop-shadow-lg" />
            </div>
            <h1 className="text-6xl md:text-7xl font-bold tracking-tighter text-gradient-laya drop-shadow-2xl">
              Laya
            </h1>
            <span className="text-xs text-white/40 tracking-[0.3em] uppercase mt-2">
              Inteligencia Global 
            </span>
          </div>

          {/* Buscador (Nota: El componente SearchInput interno se actualizará en el siguiente paso para que sea transparente) */}
          <div className="w-full mb-8">
             <SearchInput />
          </div>

          {/* Botones de Cristal */}
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <button className="px-6 py-3 rounded-full glass glass-hover text-white/90 text-sm font-medium tracking-wide shadow-[0_0_15px_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] hover:-translate-y-1 transition-all">
              Laya Search
            </button>
            <button className="px-6 py-3 rounded-full glass glass-hover text-white/90 text-sm font-medium tracking-wide shadow-[0_0_15px_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_rgba(236,72,153,0.4)] hover:-translate-y-1 transition-all">
              Me siento afortunado
            </button>
          </div>

        </div>
      </main>

      {/* Footer (Se verá un poco fuera de lugar hasta que lo actualicemos) */}
      <div className="relative z-10">
         <Footer />
      </div>
      
    </div>
  )
}

export default Home