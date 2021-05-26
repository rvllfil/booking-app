const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')

// Models
const Bedah = require('../../models/Bedah')
const PVisit = require('../../models/PemeriksaanVisit')
const RawatInap = require('../../models/RawatInap')

// @route   GET api/pengajuan
// @desc    Get All Pengajuan
// @access  Public
router.get('/', async (req, res) => {
  //FIND ALL CONSULTATIONS FILTERED BY STATUS
  let bedah
  let pemeriksaan_visit
  let rawat_inap
  try {
    bedah = await Bedah.find({ status: 'diajukan' }).sort({booked_at: -1}).exec()
  } catch (err) {
    return res.status(400).json({
      error: 'Error Saat mengambil data bedah'
    })
  }
  try {
    pemeriksaan_visit = await PVisit.find({ status: 'diajukan' }).sort({booked_at: -1}).exec()
  } catch (err) {
    return res.status(400).json({
      error: 'Error Saat mengambil data pemeriksaan visit'
    })
  }
  try {
    rawat_inap = await Bedah.find({ status: 'diajukan' }).sort({booked_at: -1}).exec()
  } catch (err) {
    return res.status(400).json({
      error: 'Error Saat mengambil data rawat inap'
    })
  }
  res.json({ bedah, pemeriksaan_visit, rawat_inap })
})

module.exports = router