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


<div id="searchBox"
    className="h-[46px] w-full md:w-[584px] flex items-center gap-3 px-4 border border-[#dfe1e5] rounded-3xl hover:bg-white hover:shadow-c hover:border-0 focus-within:shadow-c focus-within:border-0"
>
<AiOutlineSearch size={18} color="#9aa0a6" />
<input
  type="text"
  onChange={(e) => setSearchQuery(e.target.value)}
  onKeyUp={searchQueryHandler}
  value={searchQuery}
  autoFocus
  className="grow outline-0 text-black/[0.87]"
/>
<div className="flex items-center gap-3">
    {searchQuery && (
 <RiEyeCloseLine
    size={24}
    color="#096CA0"
    className="cursor-pointer"
    onClick={() => setSearchQuery("")}
/>
)}
<MdSpatialAudio className="h-6 w-6 cursor-pointer"  />
<IoCameraOutline className="h-6 w-6 cursor-pointer"/>
</div>
</div>
)
}

export default SearchInput