import React,{useState} from 'react'


const MovieList = () => {
    const [movies, setMovies] = useState([
        {
            name: 'Harry Potter',
            price: '$10',
            id: 12345
        },
        {
            name:'Game of Trones',
            price:'$10',
            id: 1456
        },
        {
            name: 'Inception',
            price: '$10',
            id: 45678
        }
    ])
    return (
        {movies.map(movie =>(
            <li>{movie.name}</li>
        ))}

    );
}

export default MovieList;