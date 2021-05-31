const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')
const createAdmin = require('../../middleware/createAdmin')

// User Model
const User = require('../../models/User')

// @route   POST api/users
// @desc    Register new user/member
// @access  Public
router.post('/', (req, res) => {
  const { nama, alamat, no_hp, email, password } = req.body
  const role = 'member'
  // Simple Validation
  if(!nama || !alamat || !no_hp || !email || !password) {
    return res.status(400).json({msg: 'Harap Masukan Semua Data'})
  }

  // Check for existing user
  User.findOne({ email })
    .then(user => {
      if(user) return res.status(400).json({msg: '*Alamat email pengguna telah digunakan'})
      
      const newUser = new User({
        nama,
        alamat,
        no_hp,
        email,
        password,
        role
      })

      // Create Salt & Hash
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if(err) throw err
          newUser.password = hash
          newUser.save()
            .then(user => {
              res.json({
                user: { 
                  id: user.id,
                  nama: user.nama,
                  email: user.email,
                }
              })
            })
        })
      })

    })
})

// @route   POST api/users/admin
// @desc    Register new admin
// @access  Secret
router.post('/admin', createAdmin, (req, res) => {
  const { nama, email, password } = req.body
  const role = 'admin'
  // Simple Validation
  if(!nama || !email || !password) {
    return res.status(400).json({msg: 'Harap Masukan Semua Data'})
  }

  // Check for existing user
  User.findOne({ email })
    .then(user => {
      if(user) return res.status(400).json({msg: '*Alamat email pengguna telah digunakan'})
      
      const newUser = new User({
        nama,
        email,
        password,
        role
      })

      // Create Salt & Hash
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if(err) throw err
          newUser.password = hash
          newUser.save()
            .then(user => {
              res.json({
                user: { 
                  id: user.id,
                  nama: user.nama,
                  email: user.email,
                  rolel: user.role
                }
              })
            })
        })
      })

    })
})

// @route   GET api/users
// @desc    Get All User
// @access  Public
router.get('/', async (req, res) => {
  try {
    const users = await User.find()
    if (!users) throw Error('Data User tidak ditemukan')
    res.status(200).json(users)

  } catch (e) {
    res.status(400).json({
      msg: e.message
    })
  }
})

// @route   GET api/users
// @desc    Get a User
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const users = await User.findById(req.params.id)
    if (!users) throw Error('Data User tidak ditemukan')
    res.status(200).json(users)

  } catch (e) {
    res.status(400).json({
      msg: e.message
    })
  }
})

// @route   DELETE api/users
// @desc    delete Users
// @access  Public
router.delete('/:id', async (req, res) => {
  try {
    const users = await User.findById(req.params.id)
    if (!users) throw Error('Data Users Tidak Ditemukan')
    const removed = await users.remove()
    if (!removed)
      throw Error('Terjadi Kesalahan ketika menghapus Data Users')
    res.status(200).json(users)
  } catch (e) {
    res.status(400).json({
      msg: e.message
    })
  }
})

module.exports = router