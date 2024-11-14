import { useState } from 'react'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import axios from 'axios'
import cardLogo from '../images/card-logo.png'

const OTPVerification = () => {
  const [otpValues, setOtpValues] = useState(['', '', '', ''])
  const navigate = useNavigate()
  const email = sessionStorage.getItem('email')

  const handleOtpChange = (e, index) => {
    let value = e.target.value;
    if (/[^0-9]/.test(value)) return;

    const updatedOtpValues = [...otpValues]
    updatedOtpValues[index] = value
    setOtpValues(updatedOtpValues)

    if (value && index < otpValues.length - 1) {
      document.getElementById(`otp-input-${index + 1}`).focus()
    }
  };

  const handleVerifyOtp = async () => {
    const otpEntered = otpValues.join('')
  
    try {
      const response = await axios.post('http://localhost:5000/api/otp/verify-otp', {
        email: sessionStorage.getItem('email'),
        otp: otpEntered,
      });
      Swal.fire('Success!', 'OTP verified successfully.', 'success').then(() => {
        sessionStorage.clear()
        setOtpValues(['', '', '', ''])
        navigate('/')
      });
    } catch (error) {
      Swal.fire('Failed!', 'Incorrect OTP. Please try again.', 'error');
      setOtpValues(['', '', '', ''])
    }
  };

  const isButtonDisabled = otpValues.includes('')

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
    >
      <div
        className="p-8 rounded-lg shadow-md w-[450px] h-[500px] text-center relative border border-yellow-500"
        style={{
          background: `linear-gradient(to bottom, rgb(29, 38, 53) 0%, transparent 95%), 
                      linear-gradient(to top, rgb(152, 108, 53) 0%, transparent 85%)`,
        }}
      >
        <motion.img
          src={cardLogo}
          alt="BullForce Logo"
          className="mx-auto h-40 mb-4"
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.3 }}
        />
        
        <h1 className="text-white font-bold mb-2 text-2xl">OTP</h1>
        <p className="text-gray-400 mt-4 mb-4">Please enter the OTP sent to {email}</p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-between mb-4"
        >
          {otpValues.map((value, index) => (
            <motion.input
              key={index}
              id={`otp-input-${index}`}
              type="text"
              maxLength="1"
              value={value}
              onChange={(e) => handleOtpChange(e, index)}
              className="w-12 h-12 text-center border mt-4 border-gray-300 rounded-lg bg-white text-gray-900"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </motion.div>

        {isButtonDisabled ? (
          <button
            onClick={handleVerifyOtp}
            className="w-full text-xl mt-6 bg-yellow-300 text-gray-500 p-3 rounded font-bold cursor-not-allowed"
            disabled
          >
            Proceed
          </button>
        ) : (
          <motion.button
            onClick={handleVerifyOtp}
            className="w-full text-xl mt-6 bg-yellow-500 text-black p-3 rounded font-bold hover:bg-yellow-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Proceed
          </motion.button>
        )}
      </div>
    </motion.div>
  );
};

export default OTPVerification
