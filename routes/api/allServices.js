const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')

// Models
const Bedah = require('../../models/Bedah')
const PVisit = require('../../models/PemeriksaanVisit')
const RawatInap = require('../../models/RawatInap')

// @route   GET api/services
// @desc    Get all services
// @access  Public
router.get('/', async (req, res) => {
  //FIND ALL CONSULTATIONS FILTERED BY STATUS
  let bedah
  let pemeriksaan_visit
  let rawat_inap
  try {
    if(!req.query.user_id) bedah = await Bedah.find().sort({booked_at: -1}).exec()
    else bedah = await Bedah.find({user_id: req.query.user_id}).sort({booked_at: -1}).exec()
  } catch (err) {
    return res.status(400).json({
      error: 'Error Saat mengambil data bedah'
    })
  }
  try {
    if(!req.query.user_id) pemeriksaan_visit = await PVisit.find().sort({booked_at: -1}).exec()
    else pemeriksaan_visit = await PVisit.find({user_id: req.query.user_id}).sort({booked_at: -1}).exec() 
  } catch (err) {
    return res.status(400).json({
      error: 'Error Saat mengambil data pemeriksaan visit'
    })
  }
  try {
    if(!req.query.user_id) rawat_inap = await RawatInap.find().sort({booked_at: -1}).exec()
    else rawat_inap = await RawatInap.find({user_id: req.query.user_id}).sort({booked_at: -1}).exec()
  } catch (err) {
    return res.status(400).json({
      error: 'Error Saat mengambil data rawat inap'
    })
  }
  res.json({ bedah, pemeriksaan_visit, rawat_inap })
})

module.exports = router