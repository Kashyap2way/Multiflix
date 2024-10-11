import React, { useRef, useEffect } from 'react';

const CustomVideoPlayer = ({ src, mode }) => {
const videoRef = useRef(null);

useEffect(() => {
    if (videoRef.current) {
    // Start playing the video automatically when component is mounted
    videoRef.current.play();
    }
}, [src]);

return (
    <div className="video-player-container">
    <div className="video-header">
        {/* Display the mode (Solo/Party) */}
        <h2>{mode} Mode</h2>
    </div>
    
    <video 
        ref={videoRef} 
        src={src} 
        controls 
        className="custom-video"
        onError={() => alert('Error loading video')}
    >
        Your browser does not support the video tag.
    </video>
    </div>
);
};

export default CustomVideoPlayer;
