const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const PKlinikSchema = new Schema({
  user_id: {
    type: String,
    required: true
  },
  jenis_hewan: {
    type: String,
    required: true
  },
  jumlah_hewan: {
    type: String,
    required: true
  },
  hari: {
    type: String,
    required: true
  },
  waktu: {
    type: String,
  }, 
  booked_at: {
    type: Date,
  },
  status: {
    type: String,
    required: true
  },
  tanggal_reservasi: {
    type: Date,
  }
})

module.exports = PemeriksaanKlinik = mongoose.model('pklinik', PKlinikSchema)