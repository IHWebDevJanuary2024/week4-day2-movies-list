
import { useState } from 'react';
import './App.css'
import MoviesList from './components/MoviesList'

function App() {
  const [showMovies, setShowMovies] = useState(false);

  // Whenever our page is ready we set the loading to false

  // setIsLoading(false) // this will go inside a function that collects the data, etc...

  return (
    <>
      <button onClick={() => setShowMovies(!showMovies)}>{showMovies ? "Hide" : "Show"} Movies</button>
      {
        showMovies ? <MoviesList /> : <h1>Sorry, you don't have access to the movies</h1>
      }
    </>
  )
}

export default App
