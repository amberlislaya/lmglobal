import { Link, useParams, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { GoSearch } from "react-icons/go";
import { BsImage } from "react-icons/bs";
import { BiNews } from "react-icons/bi";
import { SlTag } from "react-icons/sl";
// Importamos el logo para la versión móvil
import { SiOpensearch } from "react-icons/si"; 

import SearchInput from "./SearchInput";
import ProfileIcon from "./ProfileIcon";
import { Context } from "../utils/ContextApi";
import { menu } from "../utils/Constants";

const SearchResultHeader = () => {
  const { query } = useParams();
  const navigate = useNavigate();
  const { setImageSearch } = useContext(Context);
  
  const [selectedMenu, setSelectedMenu] = useState("Todo");
  
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tab = urlParams.get('searchType') || 'Todo';
    setSelectedMenu(tab);
    setImageSearch(tab === "Imágenes");
  }, [query, setImageSearch]);
  
  const clickHandler = (menuItem) => {
    const tabName = menuItem.name;
    const isImage = tabName === "Imágenes";
    setImageSearch(isImage);
    setSelectedMenu(tabName);
    const searchTypeParam = tabName === "Todo" ? "" : `?searchType=${tabName}`;
    navigate(`/${query}/${1}${searchTypeParam}`);
  };
  
  return (
    <div className="p-[15px] pb-0 md:pt-7 border-b border-white/10 flex md:block flex-col items-center sticky top-0 z-50 bg-[#0f172a]/90 backdrop-blur-xl transition-all duration-300">
      
      {/* FILA SUPERIOR */}
      <div className="flex items-center justify-between w-full max-w-[700px] mx-auto px-0 md:px-0">
        
        <div className="flex items-center grow gap-3 md:gap-4">
          
          {/* --- BOTÓN DE INICIO (LOGO) --- */}
          {/* Quitamos el 'hidden' para que siempre se vea, pero cambiamos el contenido según el tamaño */}
          <Link to="/" className="flex items-center group shrink-0">
            
            {/* VERSIÓN MÓVIL: Solo el Ícono (Ahorra espacio) */}
            <div className="md:hidden p-2 rounded-full bg-white/5 border border-white/10 active:scale-95 transition-transform">
                <SiOpensearch className="text-xl text-cyan-400" />
            </div>

            {/* VERSIÓN ESCRITORIO: Texto Completo LAYA */}
            <div className="hidden md:flex flex-col items-start cursor-pointer mr-2">
              <span className="text-2xl md:text-3xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 transition-all group-hover:opacity-80">
                LAYA
              </span>
            </div>
          </Link>
          
          {/* INPUT */}
          <div className="w-full">
            <SearchInput from="searchResult" />
          </div>
        </div>
        
        {/* PERFIL (Oculto en móviles muy pequeños si quieres, o visible) */}
        <div className="hidden sm:block shrink-0 ml-2 md:ml-4">
          <ProfileIcon />
        </div>
        
      </div>
      
      {/* PESTAÑAS */}
      <div className="w-full max-w-[700px] mx-auto px-0 sm:px-0">
        <div className="flex mt-2 md:mt-4 gap-2 overflow-x-auto no-scrollbar">
          {menu.map((menuItem, index) => (
            <span 
              key={index}
              className={`
                flex items-center px-3 md:px-4 py-2 md:py-3 cursor-pointer relative transition-all duration-300 rounded-t-lg select-none
                ${selectedMenu === menuItem.name 
                  ? "text-cyan-400 bg-white/5" 
                  : "text-gray-400 hover:text-gray-200 hover:bg-white/5"}
              `}
              onClick={() => clickHandler(menuItem)}
            >
              <span className="hidden md:block mr-2 text-lg">
                {menuItem.icon}
              </span>
              <span className="text-sm font-medium tracking-wide whitespace-nowrap">
                {menuItem.name}
              </span>
              
              {selectedMenu === menuItem.name && (
                <span className="h-[2px] w-full absolute bottom-0 left-0 bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResultHeader;