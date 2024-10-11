// src/components/Dashboard.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './Dashboard.css'; // Import the CSS file for styling
import videoBg from './assets/bgv3.mp4'; // Import the background video

const Dashboard = () => {
  const navigate = useNavigate(); // Initialize navigate
  const [activeThumbnail, setActiveThumbnail] = useState(null);

  // Array of thumbnails linked to Azure Blob Storage
  const thumbnails = [
    'https://multiflixaccount.blob.core.windows.net/thumbnails/thumbnail1.jpg',
    'https://multiflixaccount.blob.core.windows.net/thumbnails/thumbnail2.jpg',
    'https://multiflixaccount.blob.core.windows.net/thumbnails/thumbnail3.jpg',
    'https://multiflixaccount.blob.core.windows.net/thumbnails/thumbnail4.jpg',
    'https://multiflixaccount.blob.core.windows.net/thumbnails/thumbnail5.jpg',
  ];

  // Array of episodes linked to Azure Blob Storage
  const episodes = [
    'https://multiflixaccount.blob.core.windows.net/episodes/Episode1.mp4',
    'https://multiflixaccount.blob.core.windows.net/episodes/Episode2.mp4',
    'https://multiflixaccount.blob.core.windows.net/episodes/Episode3.mp4',
    'https://multiflixaccount.blob.core.windows.net/episodes/Episode4.mp4',
    'https://multiflixaccount.blob.core.windows.net/episodes/Episode5.mp4',
  ];

  // Handle thumbnail click to display options
  const handleThumbnailClick = (index) => {
    setActiveThumbnail(index === activeThumbnail ? null : index); // Toggle options on click
  };

  // Navigate to video player with selected episode and mode
  const navigateToVideoPlayer = (index, mode) => {
    navigate('/video-player', {
      state: { src: episodes[index], mode: mode }, // Pass the episode src and mode as state
    });
  };

  return (
    <div className="dashboard-container">
      {/* Background video */}
      <video autoPlay loop muted className="background-video">
        <source src={videoBg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Thumbnail images */}
      <div className="thumbnails-container">
        {thumbnails.map((thumbnail, index) => (
          <div className="thumbnail-wrapper" key={index}>
            <img
              src={thumbnail}
              alt={`thumbnail${index + 1}`}
              className={`thumbnail ${activeThumbnail === index ? 'blurred' : ''}`} // Apply blur if active
              onClick={() => handleThumbnailClick(index)} // Set the clicked thumbnail
            />
            
            {/* Show options if the thumbnail is active */}
            {activeThumbnail === index && (
              <div className="options-box">
                <button className="option-btn" onClick={() => navigateToVideoPlayer(index, 'Solo')}>Solo</button>
                <button className="option-btn" onClick={() => navigateToVideoPlayer(index, 'Party')}>Party</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
