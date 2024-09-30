import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import VideoPlayer from '../components/VideoPlayer';

const MovieDetailsPage = () => {
const { id } = useParams();
const [movie, setMovie] = useState(null);

useEffect(() => {
    const fetchMovieDetails = async () => {
    const response = await axios.get(`/api/movie/${id}`);
    setMovie(response.data);
    };
    fetchMovieDetails();
}, [id]);

if (!movie) return <div>Loading...</div>;

return (
    <div>
    <h1>{movie.title}</h1>
    <p>{movie.description}</p>
    <VideoPlayer videoUrl={movie.videoUrl} />
    </div>
);
};

export default MovieDetailsPage;
