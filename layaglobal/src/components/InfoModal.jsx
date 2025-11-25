import React from 'react';
import { AiOutlineClose } from "react-icons/ai";

const InfoModal = ({ isOpen, onClose, title, content }) => {
 if (!isOpen) return null;
 
 return (
  <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
  {/* Fondo oscuro (Backdrop) */}
  <div 
  className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
  onClick={onClose}
  ></div>
  
  {/* Ventana del Modal */}
  <div className="relative w-full max-w-lg bg-[#0f172a] border border-white/10 rounded-2xl shadow-[0_0_40px_rgba(56,189,248,0.15)] overflow-hidden transform transition-all scale-100 animate-in fade-in zoom-in duration-200">
  
  {/* Luces decorativas */}
  <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
  <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
  
  {/* Encabezado */}
  <div className="flex justify-between items-center p-5 border-b border-white/10 bg-[#1e293b]/50">
  <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
  {title}
  </h3>
  <button 
  onClick={onClose}
  className="p-2 rounded-full hover:bg-white/10 text-white/50 hover:text-white transition-colors"
  >
  <AiOutlineClose size={20} />
  </button>
  </div>
  
  {/* Contenido */}
  <div className="p-6 text-gray-300 leading-relaxed text-base whitespace-pre-line">
  {content}
  </div>
  
  {/* Pie */}
  <div className="p-4 border-t border-white/10 bg-[#0f172a]/50 flex justify-end">
  <button 
  onClick={onClose}
  className="px-5 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white text-sm border border-white/10 transition-colors"
  >
  Entendido
  </button>
  </div>
  </div>
  </div>
 );
};

export default InfoModal;