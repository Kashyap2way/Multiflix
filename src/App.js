// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import VideoPlayer from './components/VideoPlayer'; // Import VideoPlayer

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/video-player" element={<VideoPlayer />} /> {/* Route for VideoPlayer */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
