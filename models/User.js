const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const UserSchema = new Schema({  
  nama: {
    type: String,
    required: true
  },
  alamat: {
    type: String  
  },
  no_hp: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  tanggal_registrasi: {
    type: Date,
    default: Date.now
  },
  
})

module.exports = User = mongoose.model('user', UserSchema)