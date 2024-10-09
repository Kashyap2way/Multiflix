// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import OTPVerification from './components/OTPVerification';
import Dashboard from './components/Dashboard';

const App = () => {
  const [user, setUser] = useState(null);
  const [verified, setVerified] = useState(false);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login setUser={setUser} />} />
          <Route path="/otp" element={<OTPVerification user={user} setVerified={setVerified} />} />
          {verified && <Route path="/dashboard" element={<Dashboard />} />}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
