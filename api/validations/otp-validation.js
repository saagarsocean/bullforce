const { body } = require('express-validator')

const validateOtp = [
  body('otp')
    .isLength({ min: 4, max: 4 })
    .withMessage('OTP must be exactly 4 digits')
    .isNumeric().withMessage('OTP must only contain digits'),
];

module.exports = validateOtp
