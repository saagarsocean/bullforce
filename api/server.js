const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const otpRoutes = require('./routes/otp')
const cors = require('cors')

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error: ', err))

app.get('/', (req, res) => {
  res.send('Backend is running')
});

app.use('/api/otp', otpRoutes)

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});
