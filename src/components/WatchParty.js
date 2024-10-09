// src/components/WatchParty.js
import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

const WatchParty = ({ partyCode }) => {
  const socket = io('http://localhost:5001');
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    socket.emit('join', partyCode);

    socket.on('play', () => setPlaying(true));
    socket.on('pause', () => setPlaying(false));
  }, [partyCode]);

  const handlePlay = () => {
    socket.emit('play', partyCode);
    setPlaying(true);
  };

  const handlePause = () => {
    socket.emit('pause', partyCode);
    setPlaying(false);
  };

  return (
    <div>
      <video controls={false} src="MOVIE_URL" />
      <button onClick={playing ? handlePause : handlePlay}>
        {playing ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default WatchParty;
