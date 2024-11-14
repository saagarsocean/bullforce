import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoginPage from './components/LoginPage'
import OTPVerification from './components/OTPVerification'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/enter-otp" element={<OTPVerification />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
