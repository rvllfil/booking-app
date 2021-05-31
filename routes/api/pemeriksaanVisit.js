const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')

// Bedah Model
const PVisit = require('../../models/PemeriksaanVisit')

// @route   GET api/pemeriksaan-visit
// @desc    Get All Pemeriksaan Visit
// @access  Public
router.get('/', async (req, res) => {
  try {
    const pvisit = await PVisit.find().sort({
      booked_at: -1
    })
    if (!pvisit) throw Error('Data Pemeriksaan Visit tidak ditemukan')
    res.status(200).json(pvisit)

  } catch (e) {
    res.status(400).json({
      msg: e.message
    })
  }
})

// @route   POST api/pemeriksaan-visit
// @desc    Create Pemeriksaan Visit
// @access  Private
router.post('/', auth, async (req, res) => {
  const newPVisit = new PVisit({
    user_id: req.user.id,
    jenis_hewan: req.body.jenis_hewan,
    jumlah_hewan: req.body.jumlah_hewan,
    hari: req.body.hari,
    waktu: req.body.waktu,
    alamat: req.body.alamat,
    status: req.body.status,
  })

  try {
    const pvisit = await newPVisit.save()
    if (!pvisit) throw Error('Terjadi Kesalahan ketika menyimpan Data Pemeriksaan Visit')
    res.status(200).json(pvisit)
  } catch (e) {
    res.status(400).json({
      msg: e.message
    })
  }
})

// @route   GET api/pemeriksaan-visit
// @desc    Get A Pemeriksaan Visit
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const pvisit = await PVisit.findById(req.params.id)
    if (!pvisit) throw Error('Data Pemeriksaan Visit tidak ditemukan')
    res.status(200).json(pvisit)
  } catch (e) {
    res.status(400).json({
      msg: e.message
    })
  }
})

// @route   PUT api/pemeriksaan-visit
// @desc    Update Booking PVisit
// @access  Public
router.put('/:id', async (req, res) => {
  try {
    const pvisit = await PVisit.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    if (!pvisit) throw Error('Terjadi Kesalahan ketika mengubah Data Pemeriksaan Visit')
    res.status(200).json(pvisit)
  } catch (e) {
    res.status(400).json({
      msg: e.message
    })
  }
})

// @route   DELETE api/pemeriksaan-visit
// @desc    delete Bedah
// @access  Public
router.delete('/:id', async (req, res) => {
  try {
    const pvisit = await PVisit.findById(req.params.id)
    if (!pvisit) throw Error('Data Pemeriksaan Visit Tidak Ditemukan')
    const removed = await pvisit.remove()
    if (!removed)
      throw Error('Terjadi Kesalahan ketika menghapus Data Pemeriksaan Visit')
    res.status(200).json(pvisit)
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
      const pvisit = await PVisit.collection.drop()
    }
      res.status(200).json("penghapusan collection pvisit berhasil")
  } catch (e) {
    res.status(400).json({
      msg: e.message
    })
  }
})


module.exports = router