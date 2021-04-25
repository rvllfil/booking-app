const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')

// User Model
const User = require('../../models/User')

// @route   POST api/users
// @desc    Register new user
// @access  Public
router.post('/', (req, res) => {
  const { nama, alamat, no_hp, email, password } = req.body

  // Simple Validation
  if(!nama || !alamat || !no_hp || !email || !password) {
    return res.status(400).json({msg: 'Harap Masukan Semua Data'})
  }

  // Check for existing user
  User.findOne({ email })
    .then(user => {
      if(user) return res.status(400).json({msg: 'Pengguna sudah ada'})
      
      const newUser = new User({
        nama,
        alamat,
        no_hp,
        email,
        password
      })

      // Create Salt & Hash
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if(err) throw err
          newUser.password = hash
          newUser.save()
            .then(user => {

              jwt.sign(
                { id: user.id },
                config.get('jwtSecret'),
                { expiresIn: 3600 },
                (err, token) => {
                  if(err) throw err
                  res.json({
                    token,
                    user: { 
                      id: user.id,
                      nama: user.nama,
                      email: user.email,
                    }
                  })
                }
              )
            })
        })
      })

    })
})


module.exports = router