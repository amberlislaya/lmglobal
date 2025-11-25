import React from 'react';
import ProfileIcon from "./ProfileIcon";

const HomeHeader = () => {
  return (
    <header className="h-20 flex justify-between md:justify-end items-center gap-6 px-8 relative z-50">
    <div className="flex gap-6">
    <span className="text-white/70 text-[14px] font-medium hover:text-cyan-300 cursor-pointer transition-colors tracking-wide">
    Gmail
    </span>
    <span className="text-white/70 text-[14px] font-medium hover:text-pink-300 cursor-pointer transition-colors tracking-wide">
    Imágenes
    </span>
    </div>
    
    <div className="hover:scale-105 transition-transform duration-300">
    <ProfileIcon />
    </div>
    </header>
  );
};

export default HomeHeader;