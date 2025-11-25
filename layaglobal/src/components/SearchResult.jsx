import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { fetchDataFromApi } from "../utils/api";
import SearchResultHeader from "./SearchResultHeader";
import Footer from "./Footer";
import SearchedItemTemplate from "./SearchedItemTemplate";
import SearchedImageItemTemplate from "./SearchedImageItemTemplate";
import Pagination from "./Pagination";
import { Context } from "../utils/ContextApi";

const SearchResult = () => {
 const [result, setResult] = useState();
 const { query, startIndex } = useParams();
 const { imageSearch } = useContext(Context);
 
 useEffect(() => {
  fetchSearchResults();
  window.scrollTo(0, 0);
 }, [query, startIndex, imageSearch]);
 
 const fetchSearchResults = () => {
  let payload = { q: query, start: startIndex };
  if (imageSearch) {
   payload.searchType = "image";
  }
  fetchDataFromApi(payload).then((res) => {
   console.log(res);
   setResult(res);
  });
 };
 
 if (!result) return (
  <div className="min-h-screen bg-[#0f172a] flex items-center justify-center">
  {/* Loader simple mientras carga */}
  <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-cyan-500"></div>
  </div>
 );
 
 const { items, queries, searchInformation } = result;
 
 return (
  <div className="flex flex-col min-h-screen bg-[#0f172a] text-slate-200 relative">
  
  {/* --- FONDO ANIMADO FIJO (Se mantiene al hacer scroll) --- */}
  <div className="fixed inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
  <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-600/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
  <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-cyan-600/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
  <div className="absolute bottom-[-10%] left-[20%] w-96 h-96 bg-pink-600/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
  </div>
  
  {/* Header Sticky */}
  <SearchResultHeader />
  
  <main className="grow p-[15px] pb-10 md:pr-5 md:pl-20 relative z-10">
  
  {/* Estadísticas de búsqueda estilo consola */}
  <div className="flex text-xs font-mono text-cyan-500/60 mb-6 border-b border-white/5 pb-2 max-w-[700px]">
  {`SYSTEM_STATUS: ${searchInformation.formattedTotalResults} found in ${searchInformation.formattedSearchTime}s`}
  </div>
  
  {!imageSearch ? (
   <div className="flex flex-col gap-2">
   {items.map((item, index) => (
    <SearchedItemTemplate key={index} data={item} />
   ))}
   </div>
  ) : (
   <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
   {items.map((item, index) => (
    <SearchedImageItemTemplate key={index} data={item} />
   ))}
   </div>
  )}
  
  <Pagination queries={queries} />
  </main>
  
  <Footer />
  </div>
 );
}

export default SearchResult;