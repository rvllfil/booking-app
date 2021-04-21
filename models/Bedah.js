const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const BedahSchema = new Schema({
  jenis_hewan: {
    type: String,
    required: true
  },
  keluhan: {
    type: String,
    required: true
  },
  hari: {
    type: String,
    required: true
  },
  waktu: {
    type: String,
    required: true
  },
  booked_at: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    required: true
  }
})

module.exports = Bedah = mongoose.model('bedah', BedahSchema)