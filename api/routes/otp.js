const express = require('express')
const router = express.Router()
const otpController = require('../controllers/otpController')
const validateEmail = require('../validations/email-validation')
const validateOtp = require('../validations/otp-validation')

// Route to generate OTP
router.post('/generate-otp', validateEmail, otpController.generateOtp);

// Route to verify OTP
router.post('/verify-otp', validateOtp, validateEmail, otpController.verifyOtp);

module.exports = router;
