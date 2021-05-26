import { useEffect, useMemo, useState } from 'react'
import { connect } from 'react-redux'
import { register } from '../redux/auth/authActions'
import logo from '../logo.png'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router'


function Register({register, error}) {
  const [data, setData] = useState({
    nama: '',
    no_hp: '',
    alamat: '',
    email: '',
    password: '',
  })

  const initErrors = () => { 
    return {
    nama: '',
    no_hp: '',
    alamat: '',
    email: '',
    password: '',
    konfirmasi_password: ''
    }
  }

  const clear = useMemo(() => initErrors, [])

  const [errors, setErrors] = useState(clear())
  const keys = Object.keys(errors)

  const [konfirmasi, setKonfirmasi] = useState({
    password: null,
    konfirmasi: null
  })

  const [confirm, setConfirm] = useState('')

  const [message, setMessage] = useState(null)

  const onChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value 
    })
  }

  const onPassword = e => {
    let text = e.target.value
    if ( text.length > 7) {
      setKonfirmasi({
        ...konfirmasi,
        [e.target.name]: true
      })
      setData({
        ...data,
        [e.target.name]: e.target.value
      })
    }
    else if (text.length < 8) {
      setKonfirmasi({
        ...konfirmasi,
        [e.target.name]: false
      })
    }
  }

  const onConfirm = e => {
    setConfirm(e.target.value)
    if (e.target.value === data.password) {
      setKonfirmasi({
        ...konfirmasi,
        [e.target.name]: true
      })
    } else {
      setKonfirmasi({
        ...konfirmasi,
        [e.target.name]: false
      })
    }
  }

  const validate = () => {
    let err = {}
    let isValid = true
    console.log(keys)
    if (!data.nama) {
      isValid = false
      err.nama = 'Harap masukan nama anda.'
    }
    if (!data.no_hp) {
      isValid = false
      err.no_hp = 'Harap masukan no handphone anda.'
    }
    if (!data.alamat) {
      isValid = false
      err.alamat = 'Harap masukan alamat anda.'
    }
    if (!data.email) {
      isValid = false
      err.email = 'Harap masukan email anda.'
    } else if (typeof data.email !== "undefined") {
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i)
      if (!pattern.test(data.email)) {
        isValid = false
        err.email = 'Alamat email anda tidak valid.'
      }
    }
    if (!data.password) {
      isValid = false
      err.password = 'Harap masukan password anda.'
    }
    if (!confirm) {
      isValid = false
      err.konfirmasi_password = 'Harap masukan konfirmasi password anda.'
    }
    if (typeof data.password !== "undefined" && typeof confirm !== "undefined") {
      if (data.password !== confirm) {
        isValid = false
        err.konfirmasi_password = 'Konfirmasi password tidak sesuai.'
      }
    }
    setErrors({...errors, ...err})
    return isValid
  }
  
  
  const history = useHistory()
  const onSubmit = (e) => {
    e.preventDefault()
    if(validate()) {
      setErrors(clear())
      // Attempt to register
      register(data, history)
    }
  }

  useEffect((prevProps) => {
    if (error !== prevProps) {
      // check for register error
      if (error.id === 'REGISTER_FAIL') {
        setErrors(clear())
        setMessage(error.msg.msg)
      } else {
        setMessage(null)
      }
    }
    
  }, [error, clear])

  return (
    <>
      <div className="lg:flex bg-white h-full pb-8">
        <div className="lg:w-1/2 xl:max-w-screen-sm">
          <div className="py-8 bg-pink-100 lg:bg-white flex justify-center lg:justify-start lg:px-12">
            <div className="cursor-pointer flex items-center">
              <div>
                <img className='' src={logo} alt="Ry-VET" width="120" />
              </div>
            </div>
          </div>
          <div className="mt-5 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
            <h2 className="text-center text-4xl text-gray-700 font-display font-semibold lg:text-left xl:text-5xl
                  xl:text-bold">Daftar</h2>
            <div className="mt-6">
              <form onSubmit={onSubmit} method='post'>
                <div className='mb-2'>
                  <div className="text-sm font-bold text-gray-700 tracking-wide">Nama</div>
                  <input
                    className="mt-1 block w-full rounded-lg border-1 border-pink-500 focus:outline-none focus:border-white focus:ring-4 focus:ring-pink-400 focus:ring-opacity-60 placeholder-gray-300"
                    type='text' 
                    placeholder="Masukan nama" 
                    onChange={onChange} 
                    name='nama'
                  />
                  <div className='text-xs text-red-500'>{errors.nama}</div>
                </div>
                <div className='mb-2'>
                  <div className="text-sm font-bold text-gray-700 tracking-wide">Nomor Handphone</div>
                  <input
                    className="mt-1 block w-full rounded-lg border-1 border-pink-500 focus:outline-none focus:border-white focus:ring-4 focus:ring-pink-400 focus:ring-opacity-60 placeholder-gray-300"
                    type='number' 
                    placeholder="Masukan nomor handphone" 
                    onKeyDown={ e=> ( e.key === 'e' || e.key === '.' ) && e.preventDefault() } onChange={onChange} 
                    name='no_hp'
                  />
                  <div className='text-xs text-red-500'>{errors.no_hp}</div>
                </div>
                <div className='mb-2'>
                  <div className="text-sm font-bold text-gray-700 tracking-wide">Alamat</div>
                  <textarea
                    className="mt-1 block w-full rounded-lg border-1 border-pink-500 focus:outline-none focus:border-white focus:ring-4 focus:ring-pink-400 focus:ring-opacity-60 placeholder-gray-300"
                    placeholder="Masukan alamat" 
                    row='3' 
                    onChange={onChange} 
                    name='alamat'
                  />
                  <div className='text-xs text-red-500'>{errors.alamat}</div>
                </div>
                <div className='mb-2'>
                  <div className="text-sm font-bold text-gray-700 tracking-wide">Email</div>
                  <input
                    className="mt-1 block w-full rounded-lg border-1 border-pink-500 focus:outline-none focus:border-white focus:ring-4 focus:ring-pink-400 focus:ring-opacity-60 placeholder-gray-500"
                    type='email' 
                    placeholder="Masukan alamat email" 
                    onChange={onChange} 
                    name='email'
                  />
                  <div className='text-xs text-red-500'>{errors.email}</div>
                </div>
                <div className='mb-2'>
                  <div className="flex justify-between items-center">
                    <div className="text-sm font-bold text-gray-700 tracking-wide">
                      Password
                    </div>
                    { konfirmasi.password && (
                      <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>  
                    )}
                    { konfirmasi.password === false && (
                      <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
                    )}
                  </div>
                  <input
                    className="mt-1 block w-full rounded-lg border-1 border-pink-500 focus:outline-none focus:border-white focus:ring-4 focus:ring-pink-400 focus:ring-opacity-60 placeholder-gray-300"
                    type='password' 
                    placeholder="Masukan password" 
                    name='password'
                    onChange={onPassword}
                  />
                  <div className='text-xs text-red-500'>{errors.password}</div>
                </div>
                <div className='mb-8'>
                  <div className="flex justify-between items-center">
                    <div className="text-sm font-bold text-gray-700 tracking-wide">
                      Konfirmasi Password
                    </div>
                    { konfirmasi.konfirmasi && (
                      <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>  
                    )}
                    { konfirmasi.konfirmasi === false && (
                      <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
                    )}
                  </div>
                  <input
                    className="mt-1 block w-full rounded-lg border-1 border-pink-500 focus:outline-none focus:border-white focus:ring-4 focus:ring-pink-400 focus:ring-opacity-60 placeholder-gray-300"
                    type='password' 
                    placeholder="Masukan password" 
                    name='konfirmasi'
                    onChange={onConfirm}
                  />
                  <div className='text-xs text-red-500'>{errors.konfirmasi_password}</div>
                </div>
                <div className='text-sm text-red-500 mb-4'>{message}</div>
                <div>
                  <button
                    className="bg-gradient-to-br from-rose-400 to-pink-400 text-white p-4 w-full rounded-full tracking-wide font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-gradient-to-br from-rose-600 to-pink-600 shadow-lg"
                    type='submit'
                  >
                    Daftar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

Register.propTypes = {
  error: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired

}

const mapStateToProps = state => ({
  error: state.error
})

export default connect(mapStateToProps, {
  register
})(Register)
