const { body } = require('express-validator')

const validateEmail = [
  body('email')
    .isEmail().withMessage('Please enter a valid email address')
    .normalizeEmail(),
];

module.exports = validateEmail
