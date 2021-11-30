import React, { Component } from 'react'
import { basicMoviesFromApi } from '../../fakeApi'
import MovieCard from './MovieCard'


class MovieList extends Component {
  constructor() {
    super()
    //1. Instrucciones lista estática: montamos un estado con los datos
    this.state = {
      movies: basicMoviesFromApi
    }
  }

  render() {
    //2. Instrucciones lista estática: Mapeamos la lista desde el estado, 
    //pasandole las props que necesite
    return this.state.movies.map((eachMovie) => (
      <MovieCard key={eachMovie.id} title={eachMovie.title} director={eachMovie.director} />
    ))
  }

}

export default MovieList