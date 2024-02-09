import { useState } from 'react';

import './MoviesList.css'
import MovieCard from './MovieCard';

function MoviesList(props) {
    const movies = props.movies;
    const setMovies = props.setMovies;



    function deleteCard(movieID) {
        console.log("The selected card is: ", movieID);
        const newArrayOfMovies = movies.filter((movie) => {
            return movieID !== movie._id
        })
        console.log(newArrayOfMovies);
        setMovies(newArrayOfMovies);
    }

    return (
        <>
            <h1>Movies list</h1>
            <ul className='cards-container'>
                {
                    movies.map((movie) => {
                        return <MovieCard key={movie._id} movie={movie} deleteCard={deleteCard} />
                    })
                }
            </ul>
        </>
    )
}

export default MoviesList;