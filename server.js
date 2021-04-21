const express = require('express')
const mongoose = require('mongoose')
const bodyParse = require('body-parser')

const bedah = require('./routes/api/bedah')

const app = express()

// body-parser middleware
app.use(bodyParse.json())

// DB config
const db = require('./config/keys').mongoURI

// Connect to Mongo
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch((err) => console.log(err))

// Use Routes
app.use('/api/bedah', bedah)


const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server started on PORT ${port}`))