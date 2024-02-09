
import { useState } from 'react';
import './App.css'
import MoviesList from './components/MoviesList'
import { Routes, Route } from 'react-router-dom';
import EditPage from './pages/EditPage';
import MoviesData from './movies-list.json'

function App() {
  const [movies, setMovies] = useState(MoviesData)

  // Whenever our page is ready we set the loading to false

  // setIsLoading(false) // this will go inside a function that collects the data, etc...

  return (
    <>
      <Routes>
        <Route path="/" element={<MoviesList movies={movies} setMovies={setMovies} />} />
        <Route path='/edit/:id' element={<EditPage  movies={movies} setMovies={setMovies} />} />
      </Routes>
    </>
  )
}

export default App
