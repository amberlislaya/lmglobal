import React from 'react'
import { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useParams, useNavigate } from "react-router-dom";
import { pagination } from "../utils/Constants";

const Pagination = ({ queries }) => {
  const { query } = useParams();
  const [page, setPage] = useState(pagination[0].startIndex);
  const navigate = useNavigate();
  
  useEffect(() => {
    setPage(pagination[0].startIndex);
  }, [query]);
  
  const paginationClickHandler = (startIndex) => {
    setPage(startIndex);
    navigate(`/${query}/${startIndex}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <div className="flex flex-col items-center py-14 max-w-[700px] select-none">
    
    {/* Contenedor Principal de Navegación */}
    <div className="relative w-full flex justify-center items-center mb-8">
    
    {/* Botón Anterior */}
    {queries.previousPage && (
      <div 
      className="absolute left-0 md:left-10 flex items-center gap-2 cursor-pointer group transition-all hover:-translate-x-2"
      onClick={() => paginationClickHandler(queries.previousPage[0].startIndex)}
      >
      <div className="p-2 rounded-full bg-white/5 border border-white/10 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all">
      <FiChevronLeft size={24} className="text-gray-400 group-hover:text-cyan-400" />
      </div>
      <span className="hidden md:block text-sm text-gray-500 group-hover:text-cyan-400 font-medium tracking-widest uppercase">
      Anterior
      </span>
      </div>
    )}
    
    {/* LOGO DECORATIVO "LAYA..." (Estilo Neon) */}
    {/* Aquí simulamos las letras 'o' de Google pero con estilo Cyberpunk */}
    <div className="hidden md:flex items-end gap-1 mx-4">
    <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-600 drop-shadow-lg">L</span>
    <span className="text-3xl font-bold text-red-500 animate-pulse">a</span>
    <span className="text-3xl font-bold text-yellow-500">y</span>
    <span className="text-3xl font-bold text-green-500">a</span>
    <span className="text-3xl font-bold text-blue-500">a</span>
    <span className="text-3xl font-bold text-purple-500">a</span>
    {/* Nota: Puedes cambiar estos colores individuales por un solo gradiente si prefieres algo más uniforme */}
    </div>
    
    {/* Botón Siguiente */}
    {queries.nextPage && (
      <div 
      className="absolute right-0 md:right-10 flex items-center gap-2 cursor-pointer group transition-all hover:translate-x-2"
      onClick={() => paginationClickHandler(queries.nextPage[0].startIndex)}
      >
      <span className="hidden md:block text-sm text-gray-500 group-hover:text-pink-400 font-medium tracking-widest uppercase">
      Siguiente
      </span>
      <div className="p-2 rounded-full bg-white/5 border border-white/10 group-hover:border-pink-500/50 group-hover:shadow-[0_0_15px_rgba(236,72,153,0.3)] transition-all">
      <FiChevronRight size={24} className="text-gray-400 group-hover:text-pink-400" />
      </div>
      </div>
    )}
    </div>
    
    {/* Números de Página */}
    <div className="flex gap-4">
    {pagination.map((p) => (
      <span
      key={p.page}
      onClick={() => paginationClickHandler(p.startIndex)}
      className={`
                flex items-center justify-center w-10 h-10 rounded-full cursor-pointer text-sm font-bold transition-all duration-300
                ${page === p.startIndex 
        ? "bg-cyan-600 text-white shadow-[0_0_20px_rgba(8,145,178,0.6)] scale-110 border border-cyan-400" 
        : "text-gray-500 hover:text-white hover:bg-white/10 border border-transparent"}
            `}
        >
        {p.page}
        </span>
      ))}
      </div>
      </div>
    )
  }
  
  export default Pagination