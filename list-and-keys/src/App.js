import './App.css';
import DrinksList from './components/drinkList/DrinksList';
import DynamicMovieList from './components/dynamicList/DynamicMovieList';
import MovieList from './components/staticList/MovieList';


const App = () => {

  return (

    <main>

      <h2>Lista de peliculas dinámico</h2>
      <DynamicMovieList />

      <hr />

      <h2>Listado de Peliculas</h2>
      <MovieList />

      <hr />

      <DrinksList title="Listado de bebidas" />
    </main>

  )
}

export default App;
