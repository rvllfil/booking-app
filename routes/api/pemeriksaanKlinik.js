const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')

// Bedah Model
const PKlinik = require('../../models/PemeriksaanKlinik')

// @route   GET api/pemeriksaan-klinik
// @desc    Get All Pemeriksaan Klinik
// @access  Public
router.get('/', async (req, res) => {
  try {
    const pklinik = await PKlinik.find().sort([
      ['tanggal_reservasi', 1], ['waktu', 1]
    ])
    if (!pklinik) throw Error('Data Pemeriksaan Klinik tidak ditemukan')
    res.status(200).json(pklinik)

  } catch (e) {
    res.status(400).json({
      msg: e.message
    })
  }
})

// @route   POST api/pemeriksaan-klinik
// @desc    Create Pemeriksaan Klinik
// @access  Private
router.post('/', auth, async (req, res) => {
  const newPKlinik = new PKlinik({
    user_id: req.user.id,
    jenis_hewan: req.body.jenis_hewan,
    jumlah_hewan: req.body.jumlah_hewan,
    hari: req.body.hari,
    waktu: req.body.waktu,
    booked_at: req.body.booked_at,
    tanggal_reservasi: req.body.tanggal_reservasi,
    status: req.body.status
  })

  try {
    const pklinik = await newPKlinik.save()
    if (!pklinik) throw Error('Terjadi Kesalahan ketika menyimpan Data Pemeriksaan Klinik')
    res.status(200).json(pklinik)
  } catch (e) {
    res.status(400).json({
      msg: e.message
    })
  }
})

// @route   GET api/pemeriksaan-klinik
// @desc    Get A Pemeriksaan Klinik
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const pklinik = await PKlinik.findById(req.params.id)
    if (!pklinik) throw Error('Data Pemeriksaan Klinik tidak ditemukan')
    res.status(200).json(pklinik)
  } catch (e) {
    res.status(400).json({
      msg: e.message
    })
  }
})

// @route   PUT api/pemeriksaan-klinik
// @desc    Update Booking PKlinik
// @access  Public
router.put('/:id', async (req, res) => {
  try {
    const pklinik = await PKlinik.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    if (!pklinik) throw Error('Terjadi Kesalahan ketika mengubah Data Pemeriksaan Klinik')
    res.status(200).json(pklinik)
  } catch (e) {
    res.status(400).json({
      msg: e.message
    })
  }
})

// @route   DELETE api/pemeriksaan-klinik
// @desc    delete Bedah
// @access  Public
router.delete('/:id', async (req, res) => {
  try {
    const pklinik = await PKlinik.findById(req.params.id)
    if (!pklinik) throw Error('Data Pemeriksaan Klinik Tidak Ditemukan')
    const removed = await pklinik.remove()
    if (!removed)
      throw Error('Terjadi Kesalahan ketika menghapus Data Pemeriksaan Klinik')
    res.status(200).json(pklinik)
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
      const pklinik = await PKlinik.collection.drop()
    }
      res.status(200).json("penghapusan collection pklinik berhasil")
  } catch (e) {
    res.status(400).json({
      msg: e.message
    })
  }
})


module.exports = router