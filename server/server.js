const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

require('dotenv').config()

const authRoutes = require('./routes/authRoutes')
const applicationRoutes = require('./routes/applicationRoutes')

const app = express()

// MIDDLEWARE

app.use(express.json())
app.use(cors())

// DATABASE CONNECTION

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB Connected'))
.catch((err) => console.log(err))

// ROUTES

app.use('/api/auth', authRoutes)

app.use('/api/applications', applicationRoutes)

// TEST ROUTE

app.get('/', (req, res) => {
  res.send('API Running')
})

// SERVER

app.listen(5000, () => {
  console.log('Server running on port 5000')
})