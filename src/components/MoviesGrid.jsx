import React, { useEffect, useState } from 'react';
import '../styles.css'
import MovieCard from './MovieCard';
const MoviesGrid = () => {

    const [movies,setMovies] = useState([]);
    useEffect(() => {
       fetch('movies.json')
       .then(response => response.json())
       .then(data => setMovies(data))
    },[]);
    return (
        <div className='movies-grid'>
            {
                movies.map((movie) => (
                    <MovieCard movie={movie}/>
                ))
            }
        </div>
    );
};

export default MoviesGrid;