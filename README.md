# BullForce OTP Login Project

This is a simple OTP-based login project built with React, Node.js, and Express. Users can log in using their email address, and an OTP is sent to their email for verification. The backend is implemented using Node.js and MongoDB for storing OTPs.

## Features

- **User Authentication**: Users can log in with their email and receive an OTP.
- **OTP Verification**: The user enters the OTP sent to their email to complete the login process.
- **Email Integration**: OTPs are sent via Gmail using Nodemailer.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community) (or you can use MongoDB Atlas)

## Installation

### Frontend Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/saagarsocean/bullforce-auth.git
    ```
2. Navigate to the frontend directory:
    ```bash
    cd bullforce
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
4. Start the development server:
    ```bash
    npm start
    ```
   The frontend should now be running at `http://localhost:3000`.

### Backend Setup

1. Navigate to the backend directory:
    ```bash
    cd server
    ```
2. Install the backend dependencies:
    ```bash
    npm install
    ```
3. Create a `.env` file in the root of the backend directory with the following variables:

    ```env
    MAIL_HOST=smtp.gmail.com
    MAIL_PORT=587
    MAIL_USER=your-email@gmail.com
    MAIL_PASS=your-email-password
    ```

    Replace `your-email@gmail.com` and `your-email-password` with your Gmail credentials (use an App Password if you have 2-factor authentication enabled).

4. Start the backend server:
    ```bash
    npm run start
    ```

   The backend should now be running at `http://localhost:5000`.

## How It Works

1. The user enters their email on the login page.
2. An OTP is generated and sent to the user's email using Nodemailer.
3. The user enters the OTP on the OTP verification page.
4. The backend verifies the OTP and allows the user to log in.

## Troubleshooting

- Ensure MongoDB is running if you're using a local instance.
- If you're using Gmail, make sure to allow less secure apps or generate an App Password if you have two-factor authentication enabled.
- If you face any issues, check the browser and server console logs for more information.

## Contributing

Feel free to fork the repository and submit pull requests for any improvements or bug fixes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

