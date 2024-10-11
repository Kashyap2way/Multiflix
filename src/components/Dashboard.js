import React, { useState } from 'react';
import './Dashboard.css'; // Import the CSS file for styling
import thumbnail1 from './assets/thumbnail1.jpg'; // Importing the images
import thumbnail2 from './assets/thumbnail2.jpg';
import thumbnail3 from './assets/thumbnail3.jpg';
import thumbnail4 from './assets/thumbnail4.jpg';
import thumbnail5 from './assets/thumbnail5.jpg';
import videoBg from './assets/bgv3.mp4'; // Import the background video

const Dashboard = () => {
  // State to track the active thumbnail
  const [activeThumbnail, setActiveThumbnail] = useState(null);

  // Array of thumbnails
  // Update thumbnail URLs to use Azure Blob Storage
const thumbnails = [
  'https://multiflixaccount.blob.core.windows.net/thumbnails/thumbnail1.jpg',
  'https://multiflixaccount.blob.core.windows.net/thumbnails/thumbnail2.jpg',
  'https://multiflixaccount.blob.core.windows.net/thumbnails/thumbnail3.jpg',
  'https://multiflixaccount.blob.core.windows.net/thumbnails/thumbnail4.jpg',
  'https://multiflixaccount.blob.core.windows.net/thumbnails/thumbnail5.jpg',
];

  // Handle thumbnail click to display options
  const handleThumbnailClick = (index) => {
    setActiveThumbnail(index === activeThumbnail ? null : index); // Toggle options on click
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
                <button className="option-btn">Solo</button>
                <button className="option-btn">Party</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
