// src/components/OTPVerification.js
import React, { useState } from 'react';
import axios from 'axios';

const OTPVerification = ({ user, setVerified }) => {
  const [otp, setOtp] = useState('');

  const handleSendOtp = () => {
    axios.post('http://localhost:5001/send-otp', { email: user.email })
      .then(() => alert('OTP sent to your email'))
      .catch(error => console.error('Error sending OTP:', error));
  };

  const handleVerifyOtp = () => {
    axios.post('http://localhost:5001/verify-otp', { email: user.email, otp })
      .then(() => setVerified(true))
      .catch(() => alert('Invalid OTP'));
  };

  return (
    <div>
      <h2>OTP Verification</h2>
      <button onClick={handleSendOtp}>Send OTP</button>
      <input value={otp} onChange={e => setOtp(e.target.value)} placeholder="Enter OTP" />
      <button onClick={handleVerifyOtp}>Verify OTP</button>
    </div>
  );
};

export default OTPVerification;
