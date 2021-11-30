import React from 'react'
import './MovieCard.css'

const MovieCard = ({ title, director }) => {

  //3. Instrucciones lista estática: recibimos las props y las pintamos
  return (
    <article className="movie-card">
      <h4>{title}</h4>
      <p>Dirigida por: {director}</p>
      <br />
    </article>
  )
}

export default MovieCard