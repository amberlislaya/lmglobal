import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import { RiEyeCloseLine } from "react-icons/ri";
import { IoCameraOutline } from "react-icons/io5";
import { MdSpatialAudio } from "react-icons/md";

const SearchInput = () => {
  const { query } = useParams();
  const [searchQuery, setSearchQuery] = useState(query || "");
  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if (event?.key === "Enter" && searchQuery?.length > 0) {
      navigate(`/${searchQuery}/${1}`);
    }
  };

  return (
    <div
      id="searchBox"
      className="group h-[55px] w-full md:w-[584px] flex items-center gap-3 px-5 
      rounded-full transition-all duration-300 ease-out
      bg-white/5 border border-white/10 backdrop-blur-md shadow-lg
      hover:bg-white/10 hover:shadow-cyan-500/20 hover:border-white/30
      focus-within:bg-black/40 focus-within:shadow-[0_0_30px_rgba(34,211,238,0.2)] focus-within:border-cyan-500/50"
    >
      <AiOutlineSearch 
        size={22} 
        className="text-white/60 group-focus-within:text-cyan-400 transition-colors" 
      />
      
      <input
        type="text"
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyUp={searchQueryHandler}
        value={searchQuery}
        autoFocus
        placeholder="Busca en el universo..."
        className="grow outline-none bg-transparent text-white text-lg placeholder-white/30"
      />
      
      <div className="flex items-center gap-4">
        {searchQuery && (
          <RiEyeCloseLine
            size={24}
            className="cursor-pointer text-white/60 hover:text-pink-500 transition-colors"
            onClick={() => setSearchQuery("")}
          />
        )}
        <MdSpatialAudio 
            className="h-6 w-6 cursor-pointer text-blue-400 hover:text-white transition-transform hover:scale-110" 
        />
        <IoCameraOutline 
            className="h-6 w-6 cursor-pointer text-purple-400 hover:text-white transition-transform hover:scale-110"
        />
      </div>
    </div>
  );
};

export default SearchInput;