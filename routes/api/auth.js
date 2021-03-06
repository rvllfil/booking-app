const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')
const auth = require('../../middleware/auth')

// User Model
const User = require('../../models/User')

// @route   POST api/auth
// @desc    Auth user
// @access  Public
router.post('/', (req, res) => {
  const { email, password } = req.body

  // Simple Validation
  if(!email || !password) {
    return res.status(400).json({msg: 'Harap masukan email dan password'})
  }

  // Check for existing user
  User.findOne({ email })   
    .then(user => {
      if(!user) return res.status(400).json({msg: 'User tidak ditemukan!'})
      
      // Validate Password
      if(password !== user.password) return res.status(400).json({msg: 'Password Salah!'})
      else {
        jwt.sign(
          { id: user.id, role: user.role },
          config.get('jwtSecret'),            
          (err, token) => {
            if(err) throw err
            res.json({
              token,
              user: { 
                id: user.id,
                nama: user.nama,
                email: user.email,
                role: user.role
              }
            })
          }
        )
      }
      // bcrypt.compare(password, user.password)
      //   .then(isMatch => {
      //     if(!isMatch) return res.status(400).json({msg: 'Password Salah!'})
        
      //     jwt.sign(
      //       { id: user.id, role: user.role },
      //       config.get('jwtSecret'),            
      //       (err, token) => {
      //         if(err) throw err
      //         res.json({
      //           token,
      //           user: { 
      //             id: user.id,
      //             nama: user.nama,
      //             email: user.email,
      //             role: user.role
      //           }
      //         })
      //       }
      //     )
      //   })

    })
})


// @route   GET api/auth/user
// @desc    Get user data
// @access  Private
router.get('/user', auth, (req, res) => {
  User.findById(req.user.id)
    .select('-password')
    .then(user => res.json(user))
})


module.exports = router