import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { GoSearch } from "react-icons/go";
import { BsImage } from "react-icons/bs";
import { BiNews } from "react-icons/bi";
import { SlTag } from "react-icons/sl";

import SearchInput from "./SearchInput";
import ProfileIcon from "./ProfileIcon";
import { Context } from "../utils/ContextApi";
import { menu } from "../utils/Constants";

const SearchResultHeader = () => {
  const [selectedMenu, setSelectedMenu] = useState("All");
  const { setImageSearch } = useContext(Context);
  
  useEffect(() => {
    return () => setImageSearch(false);
  }, []);
  
  const clickHandler = (menuItem) => {
    let isTypeImage = menuItem.name === "Images";
    setImageSearch(isTypeImage ? true : false);
    setSelectedMenu(menuItem.name);
  };
  
  return (
    <div className="p-[15px] pb-0 md:pr-5 md:pl-20 md:pt-7 border-b border-white/10 flex md:block flex-col items-center sticky top-0 z-50 bg-[#0f172a]/90 backdrop-blur-xl transition-all duration-300">
    <div className="flex items-center justify-between w-full">
    <div className="flex items-center grow">
    <Link to="/" className="hidden md:block mr-8 group">
    <div className="flex flex-col items-start cursor-pointer">
    <span className="text-3xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 transition-all group-hover:opacity-80">
    LAYA
    </span>
    </div>
    </Link>
    
    {/* Ajustamos el buscador para que se vea bien en el header */}
    <div className="w-full md:w-auto transform origin-left scale-90 md:scale-100">
    <SearchInput from="searchResult" />
    </div>
    </div>
    <div className="hidden md:block">
    <ProfileIcon />
    </div>
    </div>
    
    {/* Menú de Navegación (Tabs) */}
    <div className="flex ml-[-12px] mt-4 gap-2 overflow-x-auto no-scrollbar">
    {menu.map((menuItem, index) => (
      <span 
      key={index}
      className={`
                            flex items-center px-4 py-3 cursor-pointer relative transition-all duration-300 rounded-t-lg
                            ${selectedMenu === menuItem.name 
        ? "text-cyan-400 bg-white/5" 
        : "text-gray-400 hover:text-gray-200 hover:bg-white/5"}
                        `}
        onClick={() => clickHandler(menuItem)}
        >
        <span className="hidden md:block mr-2 text-lg">
        {menuItem.icon}
        </span>
        <span className="text-sm font-medium tracking-wide">{menuItem.name}</span>
        
        {/* Línea brillante animada para el activo */}
        {selectedMenu === menuItem.name && (
          <span className="h-[2px] w-full absolute bottom-0 left-0 bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
        )}
        </span>
      ))}
      </div>
      </div>
    );
  };
  
  export default SearchResultHeader;