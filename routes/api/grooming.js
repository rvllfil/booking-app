const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')

// Grooming Model
const Grooming = require('../../models/Grooming')

// @route   GET api/grooming
// @desc    Get All Grooming
// @access  Public
router.get('/', async (req, res) => {
  try {
    const grooming = await Grooming.find().sort({
      booked_at: -1
    })
    if (!grooming) throw Error('Data Grooming tidak ditemukan')
    res.status(200).json(grooming)

  } catch (e) {
    res.status(400).json({
      msg: e.message
    })
  }
})

// @route   POST api/grooming
// @desc    Create Booking Grooming
// @access  Private
router.post('/', auth, async (req, res) => {
  const newGrooming = new Grooming({
    user_id: req.user.id,
    waktu: req.body.waktu,
    status: req.body.status,
    booked_at: req.body.booked_at,
    tanggal_reservasi: req.body.tanggal_reservasi,
  })

  try {
    const grooming = await newGrooming.save()
    if (!grooming) throw Error('Terjadi Kesalahan ketika menyimpan Data Grooming')
    res.status(200).json(grooming)
  } catch (e) {
    res.status(400).json({
      msg: e.message
    })
  }
})

// @route   GET api/grooming
// @desc    Get A Grooming
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const grooming = await Grooming.findById(req.params.id)
    if (!grooming) throw Error('Data Grooming tidak ditemukan')
    res.status(200).json(grooming)
  } catch (e) {
    res.status(400).json({
      msg: e.message
    })
  }
})

// @route   PUT api/grooming
// @desc    Update Booking Grooming
// @access  Private
router.put('/:id', auth, async (req, res) => {
  try {
    const grooming = await Grooming.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    if (!grooming) throw Error('Terjadi Kesalahan ketika mengubah Data Grooming')
    res.status(200).json(grooming)
  } catch (e) {
    res.status(400).json({
      msg: e.message
    })
  }
})

// @route   DELETE api/grooming
// @desc    delete Grooming
// @access  Public
router.delete('/:id', async (req, res) => {
  try {
    const grooming = await Grooming.findById(req.params.id)
    if (!grooming) throw Error('Data Grooming Tidak Ditemukan')
    const removed = await grooming.remove()
    if (!removed)
      throw Error('Terjadi Kesalahan ketika menghapus Data Grooming')
    res.status(200).json(grooming)
  } catch (e) {
    res.status(400).json({
      msg: e.message
    })
  }
})

// WARNING DELETE ALL COLLECTION
router.delete('/', async (req, res) => {
  try {
    if(!req.query.andayakin) throw Error('Kode Rahasia Kosong')
    else if(req.query.andayakin === 'ya') {
      const grooming = await Grooming.collection.drop()
    }
    res.status(200).json("penghapusan collection grooming berhasil")
  } catch (e) {
    res.status(400).json({
      msg: e.message
    })
  }
})

module.exports = router