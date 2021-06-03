const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const GroomingSchema = new Schema({
  user_id: {
    type: String,
    required: true
  },
  waktu: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  booked_at: {
    type: Date,
    default: Date.now
  },
  tanggal_reservasi: {
    type: Date,
  }
})

module.exports = Grooming = mongoose.model('grooming', GroomingSchema)