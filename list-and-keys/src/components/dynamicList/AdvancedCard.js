import React from "react"

const AdvancedCard = ({ title, hasOscar, director, removeMovie }) => {


  return (
    <article className="movie-card">
      <h4>{title}</h4>
      <p>Dirigida por: {director}</p>
      {/* 
        Si quisieramos ocultar el parrafo se podría usar el shortcircuit
        hasOscar && <p>Tiene Oscar</p>
      */}

      <p>Tiene Oscar: {hasOscar ? "Sí" : "No"}</p>
      <br />
      {/*3. Instrucciones delete: en onclick llamamos a esa función (deconstruida en linea 3) */}
      <button onClick={removeMovie}>Eliminar película de favoritos</button>
    </article>
  )
}
export default AdvancedCard