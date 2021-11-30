import React, { Component } from 'react'
import { advancedMoviesFromApi } from '../../fakeApi'
import AdvancedCard from './AdvancedCard'

class DynamicMovieList extends Component {
  constructor() {
    super()

    //1. Instrucciones Oscars: añadimos al estado si debemos mostrar las pelis con Oscar o sin él
    this.state = {
      showOscars: false,
      movies: advancedMoviesFromApi,
    }
  }

  //4. Instrucciones Oscars: creamos una función que invierta este valor
  toggleOscarMovies() {
    this.setState({
      showOscars: !this.state.showOscars,
    })
  }

  //1. Instrucciones delete: creamos una función para borrar
  removeMovie(movieID) {

    //4. Instrucciones delete: usando el ID que recibimos de la función nos quedamos con el resto de pelis
    const newMovies = this.state.movies.filter(movie => movie._id !== movieID)

    //5. Instrucciones delete: sustituimos las peliculas por las nuevas
    this.setState({
      movies: newMovies
    })
  }


  render() {
    // const { showOscars, movies } = this.state //Posibilidad de deconstrucción para eliminar referencias al state

    //2. Instrucciones Oscars: filtramos las peliculas en función de nuestro state
    const filteredMovies = this.state.movies.filter(eachMovie => eachMovie.hasOscar !== this.state.showOscars)


    return (
      <div>

        {/*5. Instrucciones Oscars: creamos una función que invierta este valor */}
        <button onClick={() => this.toggleOscarMovies()}>
          {this.state.showOscars ? "Mostrar películas sin Oscar" : "Mostrar películas con Oscar"}
        </button>

        <br />
        {
          //3. Instrucciones Oscars: pintamos las pelis filtradas
          filteredMovies.map(eachMovie =>
            //2. Instrucciones delete: pasamos esa función como prop a advancedCard (removeMovie)
            //especial atención a que recibe el ID de la pelicula
            <AdvancedCard key={eachMovie._id} {...eachMovie} removeMovie={() => this.removeMovie(eachMovie._id)} />)
        }
      </div>
    )
  }
}

export default DynamicMovieList