const express = require('express')
const router = express.Router()

// Bedah Model
const Bedah = require('../../models/Bedah')

// @route   GET api/bedah
// @desc    Get All Bedah
// @access  Public
router.get('/', async (req, res) => {
  try {
    const bedah = await Bedah.find().sort({booked_at: -1})
    if (!bedah) throw Error('Data Bedah tidak ditemukan')
    res.status(200).json(bedah)

  } catch (e) {
    res.status(400).json({msg: e.message})
  }
})

// @route   POST api/bedah
// @desc    Create Bedah
// @access  Public
router.post('/', async (req, res) => {
  const newBedah = new Bedah({
    jenis_hewan: req.body.jenis_hewan,
    keluhan: req.body.keluhan,
    hari: req.body.hari,
    waktu: req.body.waktu,
    status: req.body.status,
  })
  
  try {
    const bedah = await newBedah.save()
    if(!bedah) throw Error('Terjadi Kesalahan ketika menyimpan Data Bedah')
    res.status(200).json(bedah)
  } catch(e) {
    res.status(400).json({msg: e.message})
  }
})

// @route   PUT api/bedah
// @desc    Update Bedah
// @access  Public
router.put('/:id', async (req, res) => {
  try {
    const bedah = await Bedah.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if(!bedah) throw Error('Terjadi Kesalahan ketika mengubah Data Bedah')
    res.status(200).json(bedah)
  } catch(e) {
    res.status(400).json({ msg: e.message })
  }
})

module.exports = router