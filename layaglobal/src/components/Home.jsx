import { SiOpensearch } from "react-icons/si";
import HomeHeader from "./HomeHeader";
import SearchInput from "./SearchInput";
import Footer from "./Footer";



const Home = () => {

    
  return (

<div className="h-[100vh] flex flex-col ">
<HomeHeader />
<main className="grow flex justify-center">
<div className="w-full px-5 flex flex-col items-center mt-20"> {/* Ajusta mt-20 según sea necesario */}
  <SiOpensearch className="text-6xl text-[#1e2a61] mb-2" /> {/* Ajusta mb-2 según sea necesario */}
  <p className="w-[172px] md:w-[272px] mb-3 text-5xl text-red-500 font-bold justify-center items-center">
    LayaGlobal
  </p>

<SearchInput />
<div className="flex gap-2 text-[#3c4043] mt-8">
<button className="h-9 px-4 bg-[#f8f9fa] text-sm rounded-md border border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-c2">
            LayaGlobal Search
</button>
<button className="h-9 px-4 bg-[#f8f9fa] text-sm rounded-md border border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-c2">
Me siento afortunado
</button>
</div>
</div>
</main>
<Footer />
</div>
)
}

export default Home