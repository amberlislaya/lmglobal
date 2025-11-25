import React from 'react';
import { SiOpensearch } from "react-icons/si";
import HomeHeader from "./HomeHeader";
import SearchInput from "./SearchInput";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden selection:bg-pink-500 selection:text-white">
    
    {/* --- FONDO ANIMADO --- */}
    <div className="absolute inset-0 w-full h-full z-[-1]">
    <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
    <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
    <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
    </div>
    
    <HomeHeader />
    
    <main className="grow flex flex-col items-center justify-center relative z-10 px-5">
    
    <div className="w-full max-w-[600px] flex flex-col items-center transform transition-all duration-500">
    
    {/* Logo Animado */}
    <div className="flex flex-col items-center mb-8 group hover:scale-105 transition-transform duration-500">
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
    
    {/* Buscador con lógica integrada */}
    <div className="w-full">
    <SearchInput showButtons={true} />
    </div>
    
    </div>
    </main>
    
    <div className="relative z-10">
    <Footer />
    </div>
    
    </div>
  )
}

export default Home