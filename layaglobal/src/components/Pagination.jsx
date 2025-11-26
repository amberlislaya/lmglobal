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
    <div className="flex flex-col items-center py-8 md:py-14 w-full max-w-[700px] select-none px-4 mx-auto">
      
      {/* CONTENEDOR PRINCIPAL DE NAVEGACIÓN 
          - Móvil: Flex justify-between (Botones a los extremos)
          - Desktop: Relative justify-center (Logo centrado, botones absolutos)
      */}
      <div className="w-full flex justify-between md:justify-center md:relative items-center mb-6 md:mb-8 min-h-[40px]">
        
        {/* --- BOTÓN ANTERIOR --- */}
        {queries.previousPage ? (
          <div 
            className="md:absolute md:left-0 flex items-center gap-2 cursor-pointer group transition-all hover:-translate-x-1 md:hover:-translate-x-2"
            onClick={() => paginationClickHandler(queries.previousPage[0].startIndex)}
          >
            <div className="p-2 rounded-full bg-white/5 border border-white/10 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all">
                <FiChevronLeft size={20} className="md:w-6 md:h-6 text-gray-400 group-hover:text-cyan-400" />
            </div>
            <span className="hidden sm:block text-sm text-gray-500 group-hover:text-cyan-400 font-medium tracking-widest uppercase">
              Anterior
            </span>
          </div>
        ) : (
            // Espaciador invisible para mantener el botón 'Siguiente' a la derecha en móvil si no hay 'Anterior'
            <div className="w-10 md:hidden"></div>
        )}

        {/* --- LOGO DECORATIVO (Solo Desktop) --- */}
        <div className="hidden md:flex items-end gap-1 mx-4">
             <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-600 drop-shadow-lg">L</span>
             <span className="text-3xl font-bold text-red-500 animate-pulse">a</span>
             <span className="text-3xl font-bold text-yellow-500">y</span>
             <span className="text-3xl font-bold text-green-500">a</span>
             <span className="text-3xl font-bold text-blue-500">a</span>
             <span className="text-3xl font-bold text-purple-500">a</span>
        </div>

        {/* --- BOTÓN SIGUIENTE --- */}
        {queries.nextPage ? (
          <div 
            className="md:absolute md:right-0 flex items-center gap-2 cursor-pointer group transition-all hover:translate-x-1 md:hover:translate-x-2"
            onClick={() => paginationClickHandler(queries.nextPage[0].startIndex)}
          >
            <span className="hidden sm:block text-sm text-gray-500 group-hover:text-pink-400 font-medium tracking-widest uppercase">
              Siguiente
            </span>
            <div className="p-2 rounded-full bg-white/5 border border-white/10 group-hover:border-pink-500/50 group-hover:shadow-[0_0_15px_rgba(236,72,153,0.3)] transition-all">
                <FiChevronRight size={20} className="md:w-6 md:h-6 text-gray-400 group-hover:text-pink-400" />
            </div>
          </div>
        ) : (
            // Espaciador invisible para mantener el equilibrio en móvil
            <div className="w-10 md:hidden"></div>
        )}
      </div>

      {/* --- NÚMEROS DE PÁGINA --- */}
      {/* Flex wrap para evitar desbordamiento en pantallas muy estrechas */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4">
        {pagination.map((p) => (
          <span
            key={p.page}
            onClick={() => paginationClickHandler(p.startIndex)}
            className={`
                flex items-center justify-center 
                w-8 h-8 md:w-10 md:h-10  /* Más pequeño en móvil */
                rounded-full cursor-pointer 
                text-xs md:text-sm font-bold 
                transition-all duration-300
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