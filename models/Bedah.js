const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const BedahSchema = new Schema({
  user_id: {
    type: String,
    required: true
  },
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
  },
  tanggal_reservasi: {
    type: Date,
  }
})

module.exports = Bedah = mongoose.model('bedah', BedahSchema)