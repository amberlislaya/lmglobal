import React, { useState, useEffect, useContext, useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoCameraOutline } from "react-icons/io5";
import { MdSpatialAudio } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";

import { Context } from "../utils/ContextApi";
import { fetchDataFromApi } from "../utils/api";

const SearchInput = ({ showButtons = false, from }) => { // <-- Se mantiene 'from' para la lógica de estilos
 const { query } = useParams();
 const [searchQuery, setSearchQuery] = useState(query || "");
 const [isListening, setIsListening] = useState(false); 
 const [isProcessing, setIsProcessing] = useState(false);
 const [loadingLucky, setLoadingLucky] = useState(false);
 const navigate = useNavigate();
 
 const fileInputRef = useRef(null);
 const { setImageSearch } = useContext(Context);
 
 useEffect(() => {
  setSearchQuery(query || "");
 }, [query]);
 
 const performSearch = (text) => {
  if (text?.length > 0) {
   navigate(`/${text}/${1}`);
  }
 };
 
 const searchQueryHandler = (event) => {
  if (event?.key === "Enter") {
   performSearch(searchQuery);
  }
 };
 
 const handleLuckySearch = () => {
  if (!searchQuery) return;
  setLoadingLucky(true);
  fetchDataFromApi({ q: searchQuery, start: 1 }).then((res) => {
   setLoadingLucky(false);
   if (res?.items?.[0]?.link) {
    window.location.href = res.items[0].link;
   } else {
    performSearch(searchQuery);
   }
  }).catch((err) => {
   setLoadingLucky(false);
   performSearch(searchQuery);
  });
 };
 
 const handleVoiceSearch = () => {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) return;
  
  const recognition = new SpeechRecognition();
  recognition.lang = "es-ES"; 
  recognition.interimResults = true; 
  recognition.continuous = false;
  
  setIsListening(true);
  recognition.start();
  
  recognition.onresult = (event) => {
   const transcript = Array.from(event.results)
   .map(result => result[0].transcript).join('');
   setSearchQuery(transcript);
   
   if (event.results[0].isFinal) {
    setIsListening(false);
    setIsProcessing(true);
    setTimeout(() => {
     performSearch(transcript);
     setIsProcessing(false);
    }, 1500); 
   }
  };
  recognition.onerror = () => { setIsListening(false); setIsProcessing(false); };
  recognition.onend = () => { if (!isProcessing) setIsListening(false); };
 };
 
 const handleCameraClick = () => fileInputRef.current.click();
 
 const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
   setSearchQuery(file.name);
   setImageSearch(true);
   navigate(`/${file.name}/${1}`);
  }
 };
 
 let placeholderText = "Busca en el universo...";
 if (isListening) placeholderText = "Te estoy escuchando...";
 if (isProcessing) placeholderText = "Buscando respuesta...";
 
 // LÓGICA PARA AJUSTAR ANCHO Y MARGEN
 let searchBoxClasses = "md:w-[584px] mb-8";
 if (from === "searchResult") {
  // En SearchResult, se usa el ancho completo (w-full) de su contenedor padre (max-w-[1200px])
  searchBoxClasses = "w-full mb-0";
 }
 
 return (
  <div className="flex flex-col items-center w-full">
  <div
  id="searchBox"
  // ALTURA REDUCIDA A h-[45px]
  className={`group h-[45px] w-full flex items-center gap-3 px-5 
        rounded-full transition-all duration-300 ease-out 
        ${searchBoxClasses} 
        bg-white/5 border border-white/10 backdrop-blur-md shadow-lg
        hover:bg-white/10 hover:shadow-cyan-500/20 hover:border-white/30
        focus-within:bg-black/40 focus-within:shadow-[0_0_30px_rgba(34,211,238,0.2)] focus-within:border-cyan-500/50
        ${isListening ? "border-red-500 shadow-[0_0_20px_rgba(239,68,68,0.6)] animate-pulse" : ""}
        ${isProcessing ? "border-green-500 shadow-[0_0_20px_rgba(34,197,94,0.6)]" : ""}
        `}
   >
   <AiOutlineSearch 
   size={20} // Tamaño de ícono ajustado
   className={`cursor-pointer transition-colors ${isProcessing ? "text-green-400 animate-spin" : "text-white/60 hover:text-cyan-400"}`}
   onClick={() => performSearch(searchQuery)} 
   />
   
   <input
   type="text"
   onChange={(e) => setSearchQuery(e.target.value)}
   onKeyUp={searchQueryHandler}
   value={searchQuery}
   autoFocus
   placeholder={placeholderText}
   className="grow outline-none bg-transparent text-white text-base placeholder-white/30" // Tamaño de texto ajustado
   disabled={isProcessing} 
   />
   
   <div className="flex items-center gap-4">
   <input 
   type="file" 
   ref={fileInputRef}
   onChange={handleFileChange}
   accept="image/*"
   className="hidden"
   />
   <MdSpatialAudio 
   className={`h-5 w-5 cursor-pointer transition-transform hover:scale-110 // Tamaño de ícono ajustado
                ${isListening ? "text-red-500 scale-125" : "text-blue-400 hover:text-white"}`}
    onClick={handleVoiceSearch}
    title="Buscar por voz"
    />
    <IoCameraOutline 
    className="h-5 w-5 cursor-pointer text-purple-400 hover:text-white transition-transform hover:scale-110" // Tamaño de ícono ajustado
    onClick={handleCameraClick}
    title="Subir imagen"
    />
    </div>
    </div>
    
    {/* --- SOLO BOTÓN ME SIENTO AFORTUNADO --- */}
    {showButtons && (
     <div className="flex flex-wrap justify-center gap-4">
     <button 
     className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white/90 text-sm font-medium tracking-wide shadow-lg hover:bg-white/10 hover:shadow-pink-500/30 hover:border-pink-500/30 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
     onClick={handleLuckySearch}
     disabled={loadingLucky}
     >
     {loadingLucky ? (
      <>
      <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
      Viajando...
      </>
     ) : (
      "Me siento afortunado"
     )}
     </button>
     </div>
    )}
    </div>
   );
  };
  
  export default SearchInput;