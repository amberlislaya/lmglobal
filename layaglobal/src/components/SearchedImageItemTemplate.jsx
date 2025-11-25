import React from 'react'

const SearchedImageItemTemplate = ({ data }) => {
  return (
    <div 
    className="group flex flex-col p-3 rounded-xl cursor-pointer transition-all duration-300 hover:bg-white/5 hover:scale-[1.02]"
    onClick={() => window.open(data.image.contextLink, "_blank")}
    >
    {/* Contenedor de Imagen con Efecto Glow */}
    <div className="rounded-xl overflow-hidden h-[120px] md:h-[140px] lg:h-[160px] relative border border-white/10 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all duration-300">
    <img
    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
    src={data.link}
    alt={data.title}
    />
    {/* Overlay sutil al hacer hover */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
    
    {/* Info de la imagen */}
    <div className="text-xs text-cyan-400/80 pt-3 font-mono tracking-wide truncate">
    {data.displayLink}
    </div>
    <div className="text-sm text-gray-200 truncate pt-1 group-hover:text-cyan-200 transition-colors">
    {data.title}
    </div>
    </div>
  );
};

export default SearchedImageItemTemplate;