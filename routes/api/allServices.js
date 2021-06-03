const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')

// Models
const Bedah = require('../../models/Bedah')
const Grooming = require('../../models/Grooming')
const PVisit = require('../../models/PemeriksaanVisit')
const PKlinik = require('../../models/PemeriksaanKlinik')
const RawatInap = require('../../models/RawatInap')

// @route   GET api/services
// @desc    Get all services
// @access  Public
router.get('/', async (req, res) => {
  //FIND ALL CONSULTATIONS FILTERED BY STATUS
  let bedah
  let grooming
  let pemeriksaan_visit
  let pemeriksaan_klinik
  let rawat_inap
  try {
    if(!req.query.user_id) { 
      if (req.query.status === 'diterima')  {
       bedah = await Bedah.find({status: 'diterima'}).sort({booked_at: -1}).exec()
      } else {
        bedah = await Bedah.find().sort({booked_at: -1}).exec()
      }
    } else if (!req.query.status && !req.query.user_id) {
      bedah = await Bedah.find().sort({booked_at: -1}).exec()
    } else {
      bedah = await Bedah.find({user_id: req.query.user_id}).sort({booked_at: -1}).exec()
    }
  } catch (err) {
    return res.status(400).json({
      error: 'Error Saat mengambil data bedah'
    })
  }
  try {
    if(!req.query.user_id) { 
      if (req.query.status === 'diterima')  {
       grooming = await Grooming.find({status: 'diterima'}).sort({booked_at: -1}).exec()
      } else {
        grooming = await Grooming.find().sort({booked_at: -1}).exec()
      }
    } else if (!req.query.status && !req.query.user_id) {
      grooming = await Grooming.find().sort({booked_at: -1}).exec()
    } else {
      grooming = await Grooming.find({user_id: req.query.user_id}).sort({booked_at: -1}).exec()
    }
  } catch (err) {
    return res.status(400).json({
      error: 'Error Saat mengambil data grooming'
    })
  }
  try {
    if(!req.query.user_id) { 
      if (req.query.status === 'diterima')  {
       pemeriksaan_visit = await PVisit.find({status: 'diterima'}).sort({booked_at: -1}).exec()
      } else {
        pemeriksaan_visit = await PVisit.find().sort({booked_at: -1}).exec()
      }
    } else if (!req.query.status && !req.query.user_id) {
      pemeriksaan_visit = await PVisit.find().sort({booked_at: -1}).exec()
    } else {
      pemeriksaan_visit = await PVisit.find({user_id: req.query.user_id}).sort({booked_at: -1}).exec()
    }
  } catch (err) {
    return res.status(400).json({
      error: 'Error Saat mengambil data pemeriksaan_visit'
    })
  }
  try {
    if(!req.query.user_id) { 
      if (req.query.status === 'diterima')  {
       pemeriksaan_klinik = await PKlinik.find({status: 'diterima'}).sort({booked_at: -1}).exec()
      } else {
        pemeriksaan_klinik = await PKlinik.find().sort({booked_at: -1}).exec()
      }
    } else if (!req.query.status && !req.query.user_id) {
      pemeriksaan_klinik = await PKlinik.find().sort({booked_at: -1}).exec()
    } else {
      pemeriksaan_klinik = await PKlinik.find({user_id: req.query.user_id}).sort({booked_at: -1}).exec()
    }
  } catch (err) {
    return res.status(400).json({
      error: 'Error Saat mengambil data pemeriksaan_klinik'
    })
  }
  try {
    if(!req.query.user_id) { 
      if (req.query.status === 'diterima')  {
       rawat_inap = await RawatInap.find({status: 'diterima'}).sort({booked_at: -1}).exec()
      } else {
        rawat_inap = await RawatInap.find().sort({booked_at: -1}).exec()
      }
    } else if (!req.query.status && !req.query.user_id) {
      rawat_inap = await RawatInap.find().sort({booked_at: -1}).exec()
    } else {
      rawat_inap = await RawatInap.find({user_id: req.query.user_id}).sort({booked_at: -1}).exec()
    }
  } catch (err) {
    return res.status(400).json({
      error: 'Error Saat mengambil data rawat_inap'
    })
  }
  res.json({ bedah, grooming, pemeriksaan_visit, pemeriksaan_klinik, rawat_inap })
})

module.exports = router