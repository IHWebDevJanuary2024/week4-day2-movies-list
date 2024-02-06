function MovieCard(props) {
    const movie = props.movie;

    function displayOscars(movie) {
        /*   if (movie.hasOscars) {
              return '🏆'
          } else {
              return '💩'
          } */

        return movie.hasOscars ? '🏆' : '💩' // Ternary operator, is not necessary to create a function for a single line

    }

    return (
        <li className='movie-card' key={movie._id}>
            <p>{movie.director}</p>
            <p>{movie.title}</p>
            <p>{movie.IMDBRating}</p>
            {movie.hasOscars ? '🏆' : '💩'} {/* we can add it here directly */}
            <button onClick={() => props.deleteCard(movie._id)}>🗑️</button>
            {/*  <button onClick={() => console.log(movie._id)}>🗑️</button> */}
        </li>
    )
}

export default MovieCard;