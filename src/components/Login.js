// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithGoogle } from '../firebaseConfig'; // Import the Google sign-in function
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

  const handleGoogleLogin = async () => {
    const user = await signInWithGoogle();
    if (user) {
      navigate('/dashboard'); // Redirect to dashboard after successful login
    } else {
      alert('Google login failed');
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

        {/* Google Login Button */}
        <div className="google-login" onClick={handleGoogleLogin}>
          <img src={require('./assets/google-icon.png')} alt="Google logo" />
          <span>Login with Google</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
