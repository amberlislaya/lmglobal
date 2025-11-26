import { Link, useParams, useNavigate } from "react-router-dom";
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
 const { query } = useParams();
 const navigate = useNavigate();
 const { setImageSearch } = useContext(Context);
 
 // Estado para la pestaña seleccionada
 const [selectedMenu, setSelectedMenu] = useState("Todo");
 
 // Sincronizar la pestaña con la URL al cargar o cambiar
 useEffect(() => {
  const urlParams = new URLSearchParams(window.location.search);
  const tab = urlParams.get('searchType') || 'Todo'; // Si no hay param, es 'Todo'
  
  setSelectedMenu(tab);
  setImageSearch(tab === "Imágenes");
 }, [query, setImageSearch]);
 
 // Manejador de clics en las pestañas
 const clickHandler = (menuItem) => {
  const tabName = menuItem.name;
  const isImage = tabName === "Imágenes";
  
  // 1. Actualizar contexto
  setImageSearch(isImage);
  setSelectedMenu(tabName);
  
  // 2. Navegar forzando el parámetro en la URL (Esto arregla que no cargue "Nuevo" o "Imágenes")
  const searchTypeParam = tabName === "Todo" ? "" : `?searchType=${tabName}`;
  navigate(`/${query}/${1}${searchTypeParam}`);
 };
 
 return (
  // Contenedor Sticky (Fijo arriba)
  <div className="p-[15px] pb-0 md:pt-7 border-b border-white/10 flex md:block flex-col items-center sticky top-0 z-50 bg-[#0f172a]/90 backdrop-blur-xl transition-all duration-300">
  
  {/* FILA SUPERIOR: Logo + Buscador + Perfil */}
  {/* Usamos max-w-[700px] para que se alinee exactamente con los resultados de abajo */}
  <div className="flex items-center justify-between w-full max-w-[700px] mx-auto px-4 sm:px-0">
  
  {/* Grupo Izquierdo: Logo y Buscador */}
  <div className="flex items-center grow gap-4">
  
  {/* Logo LAYA (Oculto en móvil, visible en escritorio) */}
  <Link to="/" className="hidden md:flex items-center mr-2 group shrink-0">
  <div className="flex flex-col items-start cursor-pointer">
  <span className="text-2xl md:text-3xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 transition-all group-hover:opacity-80">
  LAYA
  </span>
  </div>
  </Link>
  
  {/* Input de Búsqueda (Ocupa el espacio restante) */}
  <div className="w-full">
  <SearchInput from="searchResult" />
  </div>
  </div>
  
  {/* Icono de Perfil (Derecha) */}
  <div className="hidden md:block shrink-0 ml-4">
  <ProfileIcon />
  </div>
  
  </div>
  
  {/* FILA INFERIOR: Menú de Pestañas (Todo, Imágenes, Nuevo) */}
  {/* También alineado a max-w-[700px] */}
  <div className="w-full max-w-[700px] mx-auto px-4 sm:px-0">
  <div className="flex mt-4 gap-2 overflow-x-auto no-scrollbar">
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
    
    {/* Línea brillante animada debajo de la pestaña activa */}
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