// src/components/VideoPlayer.js
import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation
import './VideoPlayer.css'; // Import the CSS file for styling

const VideoPlayer = () => {
const videoRef = useRef(null);
const location = useLocation(); // Get the location object

const handleFullScreen = () => {
    if (videoRef.current) {
    if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
    } else if (videoRef.current.mozRequestFullScreen) { // Firefox
        videoRef.current.mozRequestFullScreen();
    } else if (videoRef.current.webkitRequestFullscreen) { // Chrome, Safari, and Opera
        videoRef.current.webkitRequestFullscreen();
    } else if (videoRef.current.msRequestFullscreen) { // IE/Edge
        videoRef.current.msRequestFullscreen();
    }
    }
};

// Use the video source and mode from the location state
const videoSrc = location.state?.src || ''; // Add default value

return (
    <div className="video-player-container">
    <video
        ref={videoRef}
        className="video-player"
        controls
        onDoubleClick={handleFullScreen} // Allow double-click to enter full-screen mode
        autoPlay // Optionally, auto-play the video
    >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
    </video>
    </div>
);
};

export default VideoPlayer;
