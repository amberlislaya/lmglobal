import React, { useState } from 'react'
import { BiImage } from "react-icons/bi"; // Importamos icono para fallback

const SearchedImageItemTemplate = ({ data }) => {
  // Estado para detectar si la imagen falló al cargar
  const [imgError, setImgError] = useState(false);

  return (
    <div 
      // RESPONSIVE: Ajustamos padding (p-2 en móvil, p-3 en desktop)
      className="group flex flex-col p-2 md:p-3 rounded-xl cursor-pointer transition-all duration-300 hover:bg-white/5 hover:scale-[1.02]"
      onClick={() => window.open(data.image.contextLink, "_blank")}
    >
      {/* Contenedor de Imagen con Efecto Glow y Altura Responsiva */}
      <div className="rounded-xl overflow-hidden h-[100px] sm:h-[120px] md:h-[140px] lg:h-[160px] relative border border-white/10 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all duration-300 bg-black/20">
        
        {!imgError ? (
            <img
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                src={data.link}
                alt={data.title}
                loading="lazy"
                onError={() => setImgError(true)} // Si falla, activamos el fallback
            />
        ) : (
            // Fallback elegante si la imagen está rota
            <div className="h-full w-full flex flex-col items-center justify-center bg-white/5 text-white/20">
                <BiImage size={24} />
                <span className="text-[10px] mt-1 font-mono opacity-70">No img</span>
            </div>
        )}

        {/* Overlay sutil al hacer hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      {/* Info de la imagen: Texto ajustado para móvil */}
      <div className="text-[10px] md:text-xs text-cyan-400/80 pt-2 md:pt-3 font-mono tracking-wide truncate">
        {data.displayLink}
      </div>
      <div className="text-xs md:text-sm text-gray-200 truncate pt-1 group-hover:text-cyan-200 transition-colors">
        {data.title}
      </div>
    </div>
  );
};

export default SearchedImageItemTemplate;