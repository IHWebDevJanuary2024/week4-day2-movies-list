import { useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function EditPage(props) {
    const id = useParams().id;
    const movies = props.movies;
    const setMovies = props.setMovies;
    const movie = movies.find((movie) => movie._id === id)
    const navigate = useNavigate()

    const [title, setTitle] = useState(movie.title);
    const [director, setDirector] = useState(movie.director);
    const [hasOscars, setHasOscars] = useState(movie.hasOscars);
    const [IMDBRating, setIMDBRating] = useState(movie.IMDBRating);

    const handleSubmit = (e) => {
        e.preventDefault();
        const arrayCopy = [...movies];
        const newMovie = {
            _id: id,
            title,
            director,
            hasOscars,
            IMDBRating
        };
        const index = arrayCopy.indexOf(movie);

        arrayCopy[index] = newMovie;

        setMovies(arrayCopy);
        navigate("/")

    }


    return (
        <form onSubmit={handleSubmit}>
            <label >
                Title:
                <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" />
            </label>
            <label >
                Director:
                <input value={director} onChange={(e) => setDirector(e.target.value)} type="text" />
            </label>
            <label >
                Has oscars:
                <input checked={hasOscars} onChange={(e) => setHasOscars(e.target.checked)} type="checkbox" />
            </label>
            <label >
                Rating:
                <input value={IMDBRating} onChange={(e) => setIMDBRating(e.target.value)} type="number" />
            </label>
            <button type="submit">Edit movie</button>
        </form>
    )
}

/* "_id": "1ae23ef1",
"title": "The Godfather",
"director": "Francis Coppola",
"hasOscars": true,
"IMDBRating": 9.2 */

export default EditPage;