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

// @route   DELETE api/bedah
// @desc    delete Bedah
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

module.exports = router