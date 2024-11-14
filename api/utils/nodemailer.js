const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

const sendOtpEmail = async (email, otp) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Your OTP Code',
    html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>OTP Verification</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f4f7fa;
            margin: 0;
            padding: 0;
            color: #333;
          }
          .email-container {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }
          .header {
            text-align: center;
            margin-bottom: 20px;
          }
          .otp-code {
            display: block;
            font-size: 32px;
            font-weight: bold;
            color: #f59e0b;
            text-align: center;
            margin: 20px 0;
          }
          .footer {
            text-align: center;
            font-size: 14px;
            color: #777;
          }
          .button {
            display: block;
            width: 100%;
            max-width: 200px;
            background-color: #f59e0b;
            color: #fff;
            padding: 12px;
            text-align: center;
            font-size: 16px;
            text-decoration: none;
            border-radius: 4px;
            margin: 20px auto;
          }
          .button:hover {
            background-color: #e17b0f;
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="header">
            <h2>OTP Verification</h2>
            <p>We have received a request to verify your email.</p>
          </div>
          
          <div class="otp-code">
            ${otp} <!-- The OTP code here -->
          </div>
          
          <div class="footer">
            <p>If you did not request this, please ignore this email.</p>
            <p>Thank you for choosing our service!</p>
          </div>
        </div>
      </body>
      </html>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions)
    console.log('Email sent: ' + info.response)
    return { success: true }
  } catch (error) {
    if (error.responseCode === 550) {
      throw new Error('The email address does not exist.')
    } else {
      throw new Error('Failed to send OTP. Please try again.')
    }
  }
};

module.exports = sendOtpEmail
