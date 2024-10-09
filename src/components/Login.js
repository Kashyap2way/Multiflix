// src/components/Login.js
import React from 'react';
import { signInWithGoogle } from '../firebaseConfig'; // Adjust the import path

const Login = ({ setUser }) => {
  const handleLogin = async () => {
    const user = await signInWithGoogle();
    if (user) {
      // Store user and redirect to OTP verification
      setUser(user);
      window.location.href = "/otp";
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Login with Google</button>
    </div>
  );
};

export default Login;
