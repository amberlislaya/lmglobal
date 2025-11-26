import React, { useState } from 'react';
import { quickLinks, settingMenu } from "../utils/Constants";
import InfoModal from "./InfoModal";

const Footer = () => {
 const [isModalOpen, setIsModalOpen] = useState(false);
 const [modalContent, setModalContent] = useState({ title: "", content: null });
 
 // --- 1. LÓGICA DE AÑO AUTOMÁTICO ---
 const currentYear = new Date().getFullYear();
 const startYear = 2023;
 const displayYear = currentYear > startYear ? `${startYear} - ${currentYear}` : startYear;
 
 // --- 2. ESTILO DORADO Y LUMINOSO ---
 const goldTextStyle = "font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-amber-300 to-yellow-500 drop-shadow-[0_0_8px_rgba(251,191,36,0.8)]";
 
 // --- 3. BASE DE DATOS DE INFORMACIÓN ---
 const infoData = {
  "Acerca de": {
   title: "La Mente Maestra",
   content: (
    <>
    <div className="mb-6">
    {/* Nombre brillando en el Modal */}
    <h2 className={`text-2xl md:text-4xl mb-2 ${goldTextStyle}`}>
    Amberlis Laya Madera
    </h2>
    <p className="text-cyan-300/80 font-mono text-[7px] md:text-sm tracking-wider uppercase">
    Fundadora y Desarrolladora Principal
    </p>
    </div>
    <p className="mb-4 text-sm md:text-base">
    Soy el corazón venezolano de este proyecto, impulsada por la innovación y el diseño de alto nivel. Entiendo el código como un lienzo infinito donde fusiono la ingeniería de software avanzada con una estética impecable.
    </p>
    <p className="text-sm md:text-base">
    Mi misión no es solo crear tecnología que funcione, sino llevar el talento venezolano a la vanguardia global, creando experiencias que emocionen, inspiren y deslumbren al mundo.
    </p>
    </>
   )
  },
  "Novedades": {
   title: "Futuro de Laya Global",
   content: "• Integración profunda de Inteligencia Artificial Generativa (Gemini).\n• Motor de búsqueda optimizado para resultados en tiempo real.\n• Nueva interfaz de voz y reconocimiento visual.\n• Próximamente: Asistente personal Laya."
  },
  "Negocios": {
   title: "Oportunidades Globales",
   content: "Explora las tendencias de mercado más rentables analizadas por nuestra IA:\n\n1. Desarrollo de Software con IA.\n2. Energías Renovables y Sustentabilidad.\n3. E-commerce de nicho.\n4. Educación digital especializada."
  },
  "Cómo buscar en Laya": {
   title: "Guía de Uso",
   content: "1. Usa la barra central para escribir tu consulta.\n2. Haz clic en el micrófono para búsqueda por voz fluida.\n3. Sube una imagen en el icono de cámara para análisis visual.\n4. Usa la chispa ✨ para consultar a la Inteligencia Artificial."
  },
  "Privacidad": {
   title: "Política de Privacidad",
   content: "En Laya Global, la seguridad es nuestra prioridad. Tus datos de navegación y consultas están encriptados. No comercializamos tu información personal con terceros."
  },
  "Terminos": { 
   title: "Términos de Servicio",
   content: "Al usar Laya Global, aceptas navegar con respeto y responsabilidad. Este proyecto es una demostración de innovación tecnológica y propiedad intelectual de Amberlis Laya Madera."
  },
  "Configuración": {
   title: "Sistema",
   content: "• Versión: Laya Global v2.0 (Aether Edition)\n• Motor: React + Vite + Firebase + Google AI\n• Región: Detectada automáticamente\n• Estado: Online"
  }
 };
 
 const handleLinkClick = (menuName) => {
  // Si no encuentra el menú exacto, muestra un mensaje por defecto
  let data = infoData[menuName];
  if (!data) data = { title: menuName, content: "Información próximamente disponible en Laya Global." };
  
  setModalContent(data);
  setIsModalOpen(true);
 };
 
 return (
  <>
  {/* Renderizado del Modal */}
  <InfoModal 
  isOpen={isModalOpen} 
  onClose={() => setIsModalOpen(false)}
  title={modalContent.title}
  content={modalContent.content}
  />
  
  {/* --- FOOTER RESPONSIVE --- */}
  <footer className="w-full bg-black/20 backdrop-blur-md border-t border-white/5 relative z-10">
  
  {/* Fila 1: País */}
  <div className="flex py-3 px-6 md:px-8 border-b border-white/5 justify-center md:justify-start">
  <span className="text-slate-400 font-semibold text-xs md:text-[14px] tracking-widest uppercase opacity-80">
  Argentina - Venezuela
  </span>
  </div>
  
  {/* Fila 2: Enlaces y Copyright (Flexible: Columna en móvil, Fila en PC) */}
  <div className="flex flex-col lg:flex-row justify-between items-center py-4 px-4 md:px-8 gap-4 lg:gap-0">
  
  {/* Izquierda: Links Rápidos */}
  <div className="flex flex-wrap justify-center lg:justify-start gap-x-4 gap-y-2">
  {quickLinks.map((menu, index) => (
   <span 
   key={index} 
   onClick={() => handleLinkClick(menu)}
   className="text-slate-500 hover:text-cyan-400 text-[12px] md:text-[13px] cursor-pointer transition-colors select-none whitespace-nowrap p-1"
   >
   {menu}
   </span>
  ))}
  </div>
  
  {/* Derecha: Configuración + Copyright */}
  <div className="flex flex-col lg:flex-row items-center gap-y-3 gap-x-6">
  
  {/* Links Configuración */}
  <div className="flex flex-wrap justify-center gap-x-4 gap-y-2"> 
  {settingMenu.map((menu, index) => (
   <span 
   key={index} 
   onClick={() => handleLinkClick(menu)}
   className="text-slate-500 hover:text-cyan-400 text-[12px] md:text-[13px] cursor-pointer transition-colors select-none whitespace-nowrap p-1"
   >    
   {menu}
   </span>
  ))}
  </div>
  
  {/* Copyright con tu nombre en ORO */}
  <p className="text-slate-600 text-[11px] md:text-[12px] cursor-default text-center lg:text-right whitespace-nowrap">
  © {displayYear} <span className={goldTextStyle}>Amberlis Laya Madera</span>, Todos los derechos reservados
  </p>
  </div>
  </div>
  </footer>
  </>
 )
}

export default Footer;