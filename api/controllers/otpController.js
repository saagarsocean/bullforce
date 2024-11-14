const User = require('../models/User')
const sendOtpEmail = require('../utils/nodemailer')
const { validationResult } = require('express-validator')

const generateOtp = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  const { email } = req.body
  const otp = Math.floor(1000 + Math.random() * 9000).toString()

  try {
    const existingUser = await User.findOne({ email })

    if (existingUser) {
      existingUser.otp = otp;
      existingUser.otpCreatedAt = Date.now()
      await existingUser.save()
    } else {
      const newUser = new User({ email, otp })
      await newUser.save();
    }

    await sendOtpEmail(email, otp);

    return res.status(200).json({ message: 'OTP sent successfully' })
  } catch (err) {
    if (err.message.includes('recipient does not exist')) {
      return res.status(400).json({ error: 'Invalid email: recipient does not exist' })
    }
    return res.status(500).json({ error: 'Failed to send OTP' })
  }
}

const verifyOtp = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  const { email, otp } = req.body

  if (!email || !otp) {
    return res.status(400).json({ error: 'Email and OTP are required' })
  }

  try {
    const otpRecord = await User.findOne({ email, otp })
    if (!otpRecord) {
      return res.status(400).json({ error: 'Invalid OTP' })
    }

    return res.status(200).json({ message: 'OTP verified successfully' })
  } catch (err) {
    console.error('Error:', err)
    return res.status(500).json({ error: 'Failed to verify OTP' })
  }
};

module.exports = {
  generateOtp,
  verifyOtp
};
