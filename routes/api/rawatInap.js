const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')

// Bedah Model
const RawatInap = require('../../models/RawatInap')

// @route   GET api/rawat-inap
// @desc    Get All Rawat Inap
// @access  Public
router.get('/', async (req, res) => {
  try {
    const rawatinap = await RawatInap.find().sort({
      booked_at: -1
    })
    if (!rawatinap) throw Error('Data Rawat Inap tidak ditemukan')
    res.status(200).json(rawatinap)

  } catch (e) {
    res.status(400).json({
      msg: e.message
    })
  }
})

// @route   POST api/rawat-inap
// @desc    Create Rawat Inap
// @access  Private
router.post('/', auth, async (req, res) => {
  const newRawatInap = new RawatInap({
    user_id: req.user.id,
    jenis_rawat_inap: req.body.jenis_rawat_inap,
    jumlah: req.body.jumlah,
    tanggal_masuk: req.body.tanggal_masuk,
    tanggal_keluar: req.body.tanggal_keluar,
    status: req.body.status,
    booked_at: req.body.booked_at,
    tanggal_reservasi: req.body.tanggal_reservasi,
  })

  try {
    const rawatinap = await newRawatInap.save()
    if (!rawatinap) throw Error('Terjadi Kesalahan ketika menyimpan Data Pemeriksaan Visit')
    res.status(200).json(rawatinap)
  } catch (e) {
    res.status(400).json({
      msg: e.message
    })
  }
})

// @route   GET api/rawat-inap
// @desc    Get A Rawat Inap
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const rawatInap = await RawatInap.findById(req.params.id)
    if (!rawatInap) throw Error('Data Rawat Inap tidak ditemukan')
    res.status(200).json(rawatInap)
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
    const rawatInap = await RawatInap.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    if (!rawatInap) throw Error('Terjadi Kesalahan ketika mengubah Data Bedah')
    res.status(200).json(rawatInap)
  } catch (e) {
    res.status(400).json({
      msg: e.message
    })
  }
})

// @route   DELETE api/rawat-inap
// @desc    delete Rawat Inap
// @access  Public
router.delete('/:id', async (req, res) => {
  try {
    const rawatinap = await RawatInap.findById(req.params.id)
    if (!rawatinap) throw Error('Data Rawat Inap Tidak Ditemukan')
    const removed = await rawatinap.remove()
    if (!removed)
      throw Error('Terjadi Kesalahan ketika menghapus Data Rawat Inap')
    res.status(200).json(rawatinap)
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
      const rawatinap = await RawatInap.collection.drop()
    }
      res.status(200).json("penghapusan collection rawat inap berhasil")
  } catch (e) {
    res.status(400).json({
      msg: e.message
    })
  }
})

module.exports = router