import React, { useState } from 'react';
import { quickLinks, settingMenu } from "../utils/Constants";
import InfoModal from "./InfoModal";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Cambiamos el estado inicial de content a null para flexibilidad
  const [modalContent, setModalContent] = useState({ title: "", content: null });

  // --- ESTILO DORADO Y LUMINOSO PARA TU NOMBRE ---
  // Usamos un gradiente de oro y un drop-shadow para el brillo
  const goldTextStyle = "font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-amber-300 to-yellow-500 drop-shadow-[0_0_8px_rgba(251,191,36,0.8)]";

  const infoData = {
    "Acerca de": {
        title: "La Mente Maestra",
        // AHORA USAMOS JSX AQUÍ PARA APLICAR EL ESTILO AL NOMBRE
        content: (
            <>
                <div className="mb-6">
                    {/* TU NOMBRE BRILLANDO EN EL MODAL (Más grande) */}
                    <h2 className={`text-1xl md:text-2xl mb-2 ${goldTextStyle}`}>
                        Amberlis Laya Madera
                    </h2>
                    <p className="text-cyan-300/80 font-mono text-[11px] tracking-wider uppercase">
                        Fundadora y Desarrolladora Principal
                    </p>
                </div>
                <p className="mb-4">
                    Soy el corazón venezolano de este proyecto, impulsada por la innovación y el diseño de alto nivel. Entiendo el código como un lienzo infinito donde fusiono la ingeniería de software avanzada con una estética impecable.
                </p>
                <p>
                    Mi misión no es solo crear tecnología que funcione, sino llevar el talento venezolano a la vanguardia global, creando experiencias que emocionen, inspiren y deslumbren al mundo.
                </p>
            </>
        )
    },
    // El resto sigue siendo texto plano para mantenerlo simple
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
    const data = infoData[menuName] || { 
        title: menuName, 
        content: "Información próximamente disponible en Laya Global." 
    };
    
    setModalContent(data);
    setIsModalOpen(true);
  };

  return (
    <>
        <InfoModal 
            isOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)}
            title={modalContent.title}
            content={modalContent.content}
        />

        <footer className="w-full bg-black/20 backdrop-blur-sm border-t border-white/5 relative z-10">
        
        {/* Sección País */}
        <div className="flex py-[15px] px-[15px] md:px-[30px] border-b border-white/5">
            <span className="text-slate-400 font-semibold text-[15px] leading-none tracking-wider">
                Argentina - Venezuela
            </span>
        </div>
        
        {/* Sección Enlaces */}
        <div className="flex flex-col md:flex-row justify-between items-center py-4 md:px-[15px]">
        
            <div className="flex justify-center flex-wrap">
                {quickLinks.map((menu, index) => (
                <span 
                    key={index} 
                    onClick={() => handleLinkClick(menu)}
                    className="text-slate-500 hover:text-cyan-400 text-[13px] leading-none p-[10px] md:p-[15px] cursor-pointer transition-colors select-none"
                >
                    {menu}
                </span>
                ))}
            </div>
            
            <div className="flex justify-center flex-wrap"> 
                {settingMenu.map((menu, index) => (
                <span 
                    key={index} 
                    onClick={() => handleLinkClick(menu)}
                    className="text-slate-500 hover:text-cyan-400 text-[13px] leading-none p-[10px] md:p-[15px] cursor-pointer transition-colors select-none"
                >    
                    {menu}
                </span>
                ))}
            </div>
            
            {/* COPYRIGHT CON TU NOMBRE BRILLANDO */}
            <p className="text-slate-500 text-[12px] leading-none p-[10px] md:p-[15px] cursor-default">
                © <span className={goldTextStyle}>Amberlis Laya Madera</span>, Todos los derechos reservados
            </p>
        </div>
        </footer>
    </>
  )
}

export default Footer;