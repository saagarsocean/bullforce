# BULLFORCE Auth App
This project implements a secure OTP-based login and verification system using React. It includes client-side validation, responsive styling, and integration with SweetAlert2 for enhanced user feedback.

## Features
- **OTP Generation and Validation**: Generates a one-time password (OTP) upon email login, which is verified in the next step.
- **Responsive UI**: Built with TailwindCSS for adaptive and accessible styling.
- **Client-Side Validation**: Ensures email format and OTP structure correctness.
- **Session Storage**: Temporarily stores OTP and user email during the verification process.
- **Alert Notifications**: SweetAlert2 alerts for user feedback.

## Getting Started
### Prerequisites
- Node.js
- NPM or Yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/saagarsocean/bullforce-auth.git
   cd bullforce-auth
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the application:
   ```bash
   npm start
   ```

## Folder Structure
login
├── public               # Public assets
│   └── index.html       # HTML entry point
├── src                  # Source files
│   ├── components       # React components
│   │   ├── LoginPage.js         # Email login and OTP request
│   │   ├── OTPVerification.js   # OTP entry and validation
│   │   └── Navbar.js            # Navigation bar with logo
│   ├── images           # Image assets
│   ├── App.js           # Main application component
│   ├── index.js         # React entry point
│   └── styles.css       # Custom styles (if needed)
├── package.json         # Project dependencies and scripts
└── README.md            # Project overview and setup instructions
