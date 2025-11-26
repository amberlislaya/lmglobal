import React from 'react'

const SearchedItemTemplate = ({ data }) => {
  
  function createMarkup(html) {
    return { __html: html };
  }
  
  return (
    // ARREGLO RESPONSIVE:
    // 1. py-4 md:py-6: Menos altura en móvil.
    // 2. px-2 md:px-4: Padding lateral seguro.
    // 3. Eliminado -mx-4 en móvil para evitar scroll horizontal indeseado.
    <div className="flex flex-col py-4 md:py-6 max-w-[800px] border-b border-white/5 hover:bg-white/[0.02] px-2 md:px-4 md:-mx-4 rounded-xl transition-colors duration-200">
    
      <div className="group cursor-pointer" onClick={() => window.open(data.link, "_blank")}>
        
        {/* URL formateada estilo "Terminal" */}
        <div className="text-xs font-mono text-cyan-400/90 truncate mb-1 tracking-wider">
          {data.formattedUrl}
        </div>
        
        {/* Título estilo "Link Cibernético" */}
        {/* ARREGLO: text-xl en móvil, text-2xl en escritorio */}
        <div className="text-xl md:text-2xl font-medium text-blue-300 group-hover:text-pink-400 group-hover:underline decoration-pink-500/50 underline-offset-4 transition-colors">
          {data.title}
        </div>
      </div>
      
      {/* Snippet / Descripción */}
      {/* ARREGLO: text-sm en móvil, text-base en escritorio */}
      <div 
        className="text-sm md:text-base text-slate-400 leading-relaxed pt-2 opacity-90"
        dangerouslySetInnerHTML={createMarkup(data.htmlSnippet)}
        style={{
          // Esto asegura que las palabras clave en negrita (<b>) del buscador se vean bien
          '--tw-prose-bold': '#fff' 
        }}
      />
    </div>
  )
}

export default SearchedItemTemplate