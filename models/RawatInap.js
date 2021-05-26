const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const RawatInapSchema = new Schema({
  user_id: {
    type: String,
    required: true
  },
  jumlah: {
    type: String,
    required: true
  },
  tanggal_masuk: {
    type: Date,
    required: true
  },
  tanggal_keluar: {
    type: Date,
    required: true
  },
  jenis_rawat_inap: {
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

module.exports = RawatInap = mongoose.model('rawatInap', RawatInapSchema)