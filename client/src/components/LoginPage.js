import { motion } from 'framer-motion'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import axios from 'axios';
import cardLogo from '../images/card-logo.png'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleLogin = async () => {
    if (!email) {
      setError('Please enter your email to login');
      Swal.fire('Error', 'Please enter your email to login', 'error')
      return
    }
  
    const emailRegex = /^[^\s@]+@gmail\.com$/
  
    if (email && emailRegex.test(email)) {
      setError('')
  
      Swal.fire({
        title: 'Sending OTP...',
        text: `OTP is being sent to ${email}`,
        icon: 'info',
        background: '#f6f8fb',
        color: '#333',
        confirmButtonColor: '#f59e0b',
        showCancelButton: false,
        allowOutsideClick: false,
        allowEscapeKey: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });
  
      try {
        sessionStorage.setItem('email', email);
  
        const response = await axios.post('http://localhost:5000/api/otp/generate-otp', { email })
  
        if (response.status === 200) {
          Swal.fire({
            title: 'OTP Sent!',
            text: `OTP successfully sent to ${email}`,
            icon: 'success',
            confirmButtonText: 'Proceed to OTP Verification',
            background: '#f6f8fb',
            color: '#333',
            confirmButtonColor: '#f59e0b',
            showCancelButton: false,
            allowOutsideClick: false,
            allowEscapeKey: false,
            didOpen: () => {
              Swal.showLoading();
            },
            timer: 3000,
          }).then(() => {
            navigate('/enter-otp');
          });
        }
      } catch (error) {
        Swal.fire('Error', 'Failed to send OTP. Please try again.', 'error')
      }
    } else {
      setError('Please enter a valid email');
      Swal.fire('Error', 'Please enter a valid email', 'error')
    }
  };  

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
    >
      <div
        className="p-8 pb-20 rounded-lg shadow-md w-[450px] h-[550px] text-center relative border border-yellow-500"
        style={{
          background: `linear-gradient(to bottom, rgb(29, 38, 53) 0%, transparent 95%), 
                      linear-gradient(to top, rgb(152, 108, 53) 0%, transparent 85%)`,
        }}
      >
        <motion.img
          src={cardLogo}
          alt="BullForce Logo"
          className="mx-auto h-40 mb-4"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        <h2 className="text-white font-bold mt-8 mb-2 text-2xl">Login</h2>
        <p className="text-white mb-10 mt-8 text-2xl">Login with Email ID</p>

        <motion.input
          type="email"
          className={`w-full p-3 border ${error ? 'border-red-500' : 'border-gray-300'} rounded mb-4 bg-white text-gray-800`}
          placeholder="Enter your Email Id"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />

        <motion.button
          onClick={handleLogin}
          className="w-full bg-yellow-500 text-black p-3 rounded font-bold hover:bg-yellow-500 text-2xl mb-12"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Log in
        </motion.button>
      </div>
    </motion.div>
  );
};

export default LoginPage