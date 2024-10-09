// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import { BlobServiceClient } from '@azure/storage-blob';

const blobServiceClient = new BlobServiceClient('YOUR_BLOB_SERVICE_URL');

const Dashboard = () => {
const [movies, setMovies] = useState([]);

useEffect(() => {
    const fetchMovies = async () => {
    const containerClient = blobServiceClient.getContainerClient('movies');
    const blobs = [];
    for await (const blob of containerClient.listBlobsFlat()) {
        blobs.push(blob);
    }
    setMovies(blobs);
    };
    fetchMovies();
}, []);

return (
    <div>
    {movies.map(movie => (
        <div key={movie.name}>
        <img src={`YOUR_BLOB_URL/${movie.name}.thumbnail`} alt={movie.name} />
        <h3>{movie.name}</h3>
        <button>Watch Solo</button>
        <button>Watch with Friends</button>
        </div>
    ))}
    </div>
);
};

export default Dashboard;
