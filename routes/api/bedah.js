const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')

// Bedah Model
const Bedah = require('../../models/Bedah')

// @route   GET api/bedah
// @desc    Get All Bedah
// @access  Public
router.get('/', async (req, res) => {
  try {
    const bedah = await Bedah.find({status: 'diajukan'}).sort({
      booked_at: -1
    })
    if (!bedah) throw Error('Data Bedah tidak ditemukan')
    res.status(200).json(bedah)

  } catch (e) {
    res.status(400).json({
      msg: e.message
    })
  }
})

// @route   POST api/bedah
// @desc    Create Booking Bedah
// @access  Private
router.post('/', auth, async (req, res) => {
  const newBedah = new Bedah({
    user_id: req.user.id,
    jenis_hewan: req.body.jenis_hewan,
    keluhan: req.body.keluhan,
    hari: req.body.hari,
    waktu: req.body.waktu,
    status: req.body.status,
  })

  try {
    const bedah = await newBedah.save()
    if (!bedah) throw Error('Terjadi Kesalahan ketika menyimpan Data Bedah')
    res.status(200).json(bedah)
  } catch (e) {
    res.status(400).json({
      msg: e.message
    })
  }
})

// @route   PUT api/bedah
// @desc    Update Booking Bedah
// @access  Public
router.put('/:id', async (req, res) => {
  try {
    const bedah = await Bedah.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    if (!bedah) throw Error('Terjadi Kesalahan ketika mengubah Data Bedah')
    res.status(200).json(bedah)
  } catch (e) {
    res.status(400).json({
      msg: e.message
    })
  }
})

// @route   DELETE api/bedah
// @desc    delete Bedah
// @access  Public
router.delete('/:id', async (req, res) => {
  try {
    const bedah = await Bedah.findById(req.params.id)
    if (!bedah) throw Error('Data Bedah Tidak Ditemukan')
    const removed = await bedah.remove()
    if (!removed)
      throw Error('Terjadi Kesalahan ketika menghapus Data Bedah')
    res.status(200).json(bedah)
  } catch (e) {
    res.status(400).json({
      msg: e.message
    })
  }
})

module.exports = router