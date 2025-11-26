import React from 'react';
import ReactDOM from 'react-dom'; 
import { IoLogOutOutline, IoClose } from "react-icons/io5";

const LogoutModal = ({ isOpen, onClose, onConfirm, userName }) => {
 if (!isOpen) return null;
 
 return ReactDOM.createPortal(
  <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
  {/* Fondo oscuro */}
  <div 
  className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
  onClick={onClose}
  ></div>
  
  {/* Ventana */}
  <div className="relative w-full max-w-md bg-[#0f172a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden transform transition-all scale-100 animate-in zoom-in-95 duration-200">
  
  {/* Luces de fondo */}
  <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
  <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
  
  <div className="flex flex-col items-center p-8 text-center relative z-10">
  
  <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6 border border-white/10 shadow-inner">
  <IoLogOutOutline className="text-3xl text-pink-500" />
  </div>
  
  <h3 className="text-2xl font-bold text-white mb-2 tracking-wide">
  ¿Cerrar sesión?
  </h3>
  
  <p className="text-slate-400 text-sm mb-8 leading-relaxed">
  Estás a punto de desconectarte de la cuenta de <br/>
  <span className="text-cyan-400 font-semibold">{userName}</span>.
  </p>
  
  <div className="flex gap-4 w-full">
  <button 
  onClick={onClose}
  className="flex-1 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 text-sm font-medium transition-all"
  >
  Cancelar
  </button>
  
  <button 
  onClick={onConfirm}
  className="flex-1 py-3 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white text-sm font-bold shadow-lg hover:shadow-pink-500/25 transition-all transform active:scale-95"
  >
  Sí, salir
  </button>
  </div>
  </div>
  
  {/* BOTÓN X CORREGIDO: Agregamos 'z-50' y 'cursor-pointer' */}
  <button 
  onClick={onClose}
  className="absolute top-4 right-4 z-50 p-2 text-white/30 hover:text-white transition-colors cursor-pointer"
  >
  <IoClose size={20} />
  </button>
  
  </div>
  </div>,
  document.body
 );
};

export default LogoutModal;