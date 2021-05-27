const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const PVisitSchema = new Schema({
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
  alamat: {
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

module.exports = PemeriksaanVisit = mongoose.model('pvisit', PVisitSchema)