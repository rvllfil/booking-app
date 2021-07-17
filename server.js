const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
const path = require('path')

const app = express()

// body-parser middleware
app.use(express.json())

// DB config
const db = config.get("mongoURI")

// Connect to Mongo
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch((err) => console.log(err))

// Use Routes
app.use('/api/users', require('./routes/api/users'))
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/bedah', require('./routes/api/bedah'))
app.use('/api/grooming', require('./routes/api/grooming'))
app.use('/api/pemeriksaan-visit', require('./routes/api/pemeriksaanVisit'))
app.use('/api/pemeriksaan-klinik', require('./routes/api/pemeriksaanKlinik'))
app.use('/api/rawat-inap', require('./routes/api/rawatInap'))
app.use('/api/pengajuan', require('./routes/api/pengajuan'))
app.use('/api/services', require('./routes/api/allServices'))


if(process.env.NODE_ENV === 'production') {
  // set static folder
  app.use(wxpress.static('client/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server started on PORT ${port}`))