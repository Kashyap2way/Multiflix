import React, { useState, useEffect } from 'react';
import MovieList from '../components/MovieList';
import axios from 'axios';

const HomePage = () => {
const [movies, setMovies] = useState([]);

useEffect(() => {
    // Replace with your own API for movies
    const fetchMovies = async () => {
    const response = await axios.get('/api/movies');
    setMovies(response.data);
    };
    fetchMovies();
}, []);

return (
    <div>
    <h2>Trending Movies</h2>
    <MovieList movies={movies} />
    </div>
);
};

export default HomePage;
