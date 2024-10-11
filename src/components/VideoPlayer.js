// src/components/VideoPlayer.js
import React, { useRef, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation
import './VideoPlayer.css'; // Import the CSS file for styling
import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome for icons

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const location = useLocation(); // Get the location object
  const [isPlaying, setIsPlaying] = useState(false); // Track playing state
  const [progress, setProgress] = useState(0); // Track progress
  const [volume, setVolume] = useState(1); // Track volume

  const videoSrc = location.state?.src || ''; // Add default value

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying); // Toggle play state
  };

  const handleTimeUpdate = () => {
    const currentTime = videoRef.current.currentTime;
    const duration = videoRef.current.duration;
    const percent = (currentTime / duration) * 100;
    setProgress(percent);
  };

  const handleKeyPress = (event) => {
    switch (event.key) {
      case 'ArrowLeft':
        event.preventDefault(); // Prevent default scrolling
        videoRef.current.currentTime = Math.max(videoRef.current.currentTime - 5, 0); // Skip back 5 seconds
        break;
      case 'ArrowRight':
        event.preventDefault(); // Prevent default scrolling
        videoRef.current.currentTime = Math.min(videoRef.current.currentTime + 5, videoRef.current.duration); // Skip forward 5 seconds
        break;
      case 'ArrowUp':
        event.preventDefault(); // Prevent default scrolling
        setVolume((prevVolume) => {
          const newVolume = Math.min(prevVolume + 0.1, 1);
          videoRef.current.volume = newVolume; // Increase volume
          return newVolume;
        });
        break;
      case 'ArrowDown':
        event.preventDefault(); // Prevent default scrolling
        setVolume((prevVolume) => {
          const newVolume = Math.max(prevVolume - 0.1, 0);
          videoRef.current.volume = newVolume; // Decrease volume
          return newVolume;
        });
        break;
      case 'f':
      case 'F':
        if (document.fullscreenElement) {
          document.exitFullscreen();
        } else {
          videoRef.current.requestFullscreen();
        }
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    video.addEventListener('timeupdate', handleTimeUpdate);
    document.addEventListener('keydown', handleKeyPress); // Add event listener for key presses

    // Lock scrolling when the video player is focused
    const lockScroll = (event) => {
      if (document.activeElement === videoRef.current) {
        event.preventDefault();
      }
    };

    window.addEventListener('keydown', lockScroll);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      document.removeEventListener('keydown', handleKeyPress); // Cleanup event listener
      window.removeEventListener('keydown', lockScroll); // Cleanup scroll lock
    };
  }, []);

  return (
    <div className="video-player-container">
      <video
        ref={videoRef}
        className="video-player"
        onClick={togglePlay} // Toggle play/pause on video click
        onKeyDown={(e) => e.stopPropagation()} // Prevent event bubbling
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Custom Controls */}
      <div className="custom-controls">
        {/* Show play button only when video is paused */}
        {!isPlaying && (
          <button className="control-btn" onClick={togglePlay}>
            <i className="fa fa-play" style={{ fontSize: '50px', color: 'white' }}></i>
          </button>
        )}

        {/* Hide pause button when the video is playing */}
        {isPlaying && (
          <button className="control-btn" onClick={togglePlay}>
            <i className="fa fa-pause" style={{ fontSize: '50px', color: 'white' }}></i>
          </button>
        )}
      </div>

      {/* Custom Progress Bar */}
      <input
        type="range"
        className="progress-bar"
        value={progress}
        onChange={(e) => {
          const newTime = videoRef.current.duration * (e.target.value / 100);
          videoRef.current.currentTime = newTime;
        }}
        style={{ height: '10px' }} // Make the progress bar thicker
      />
    </div>
  );
};

export default VideoPlayer;
