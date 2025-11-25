import React from 'react'
import { quickLinks, settingMenu } from "../utils/Constants";

const Footer = () => {
  return (
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
      className="text-slate-500 hover:text-cyan-400 text-[13px] leading-none p-[10px] md:p-[15px] cursor-pointer transition-colors"
      >
      {menu}
      </span>
    ))}
    </div>
    
    <div className="flex justify-center flex-wrap"> 
    {settingMenu.map((menu, index) => (
      <span 
      key={index} 
      className="text-slate-500 hover:text-cyan-400 text-[13px] leading-none p-[10px] md:p-[15px] cursor-pointer transition-colors"
      >    
      {menu}
      </span>
    ))}
    </div>
    
    <p className="text-pink-500/80 hover:text-pink-400 text-[12px] leading-none p-[10px] md:p-[15px] cursor-default transition-colors">
    © Amberlis Laya Madera, Todos los derechos reservados
    </p>
    </div>
    </footer>
  )
}

export default Footer;