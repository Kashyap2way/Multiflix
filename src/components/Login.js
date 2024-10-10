// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simple validation (can be any username and password)
    if (username && password) {
      // Redirect to dashboard
      navigate('/dashboard');
    } else {
      alert('Please enter a username and password');
    }
  };

  return (
    <div className="login-container">
      <video className="background-video" autoPlay loop muted>
        <source src={require('./assets/bgv1.mp4')} type="video/mp4" />
      </video>

      <div className="login-form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
