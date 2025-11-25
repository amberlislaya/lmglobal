import React from 'react'

const SearchedItemTemplate = ({ data }) => {
  
  function createMarkup(html) {
    return { __html: html };
  }
  
  return (
    <div className="flex flex-col py-6 max-w-[800px] border-b border-white/5 hover:bg-white/[0.02] px-4 -mx-4 rounded-xl transition-colors duration-200">
    
    <div className="group cursor-pointer" onClick={() => window.open(data.link, "_blank")}>
    {/* URL formateada estilo "Terminal" */}
    <div className="text-xs font-mono text-cyan-400/90 truncate mb-1 tracking-wider">
    {data.formattedUrl}
    </div>
    
    {/* Título estilo "Link Cibernético" */}
    <div className="text-xl md:text-2xl font-medium text-blue-300 group-hover:text-pink-400 group-hover:underline decoration-pink-500/50 underline-offset-4 transition-colors">
    {data.title}
    </div>
    </div>
    
    {/* Snippet / Descripción */}
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