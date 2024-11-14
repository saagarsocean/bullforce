const mongoose = require('mongoose');
const {Schema, model} = mongoose

const userSchema = new Schema({
  email: { type: String, required: true },
  otp: { type: String, required: true },
  createdAt: { type: Date, default: Date.now},
  otpCreatedAt: { type: Date, default: Date.now }
});

userSchema.index({ otpCreatedAt: 1 }, { expireAfterSeconds: 600 })

const User = model('User', userSchema);

module.exports = User
