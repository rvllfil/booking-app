import { connect } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import logo from '../logo.png'
import PropTypes from 'prop-types'
import { login } from '../redux/auth/authActions'
import { useEffect, useState } from 'react'

function Login({error, login}) {
  const [user, setUser] = useState({
    email: '',
    password: ''
  })


  const [message, setMessage] = useState(null)
  const onChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const history = useHistory()
  const onSubmit = (e) => {
    e.preventDefault()
    // Attempt to login
    login(user, history)
  }

  useEffect((prevProps) => {
    if (error !== prevProps) {
      // check for register error
      if (error.id === 'LOGIN_FAIL') {
        setMessage(error.msg.msg)
      } else {
        setMessage(null)
      }
    }
    
  }, [error])


  return (
    <>
    <div className="lg:flex bg-white h-screen">
      <div className="lg:w-1/2 xl:max-w-screen-sm">
        <div className="py-12 bg-pink-100 lg:bg-white flex justify-center lg:justify-start lg:px-12">
          <div className="cursor-pointer flex items-center">
            <div>
              <img className='' src={logo} alt="Ry-VET" width="200" />
            </div>
          </div>
        </div>
        <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
          <h2 className="text-center text-4xl text-gray-700 font-display font-semibold lg:text-left xl:text-5xl
                  xl:text-bold">Log in</h2>
          <div className="mt-12">
            <form onSubmit={onSubmit} method='post'>
              <div>
                <div className="text-sm font-bold text-gray-700 tracking-wide">Email</div>
                <input className="mt-2 block w-full rounded-lg border-1 border-pink-500 focus:outline-none focus:border-white focus:ring-4 focus:ring-pink-400 focus:ring-opacity-60 placeholder-gray-300" type='email' placeholder="Masukan alamat email" onChange={onChange} name='email'/>
              </div>
              <div className="mt-6">
                <div className="flex justify-between items-center">
                  <div className="text-sm font-bold text-gray-700 tracking-wide">
                    Password
                  </div>
                  {/* <div>
                    <a className="text-xs font-display font-semibold text-pink-600 hover:text-pink-800 cursor-pointer">
                      Lupa Password?
                    </a>
                  </div> */}
                </div>
                <input className="mt-2 block w-full rounded-lg border-1 border-pink-500 focus:outline-none focus:border-white focus:ring-4 focus:ring-pink-400 focus:ring-opacity-60 placeholder-gray-300" type='password' placeholder="Masukan password" onChange={onChange} name='password'/>
              </div>
              <div className='text-sm text-red-500 mt-7'>{message}</div>  
              <div className="mt-3">
                <button className="bg-gradient-to-br from-rose-400 to-pink-400 text-white p-4 w-full rounded-full tracking-wide font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-gradient-to-br from-rose-600 to-pink-600 shadow-lg">
                  Masuk
                </button>
              </div>
            </form>
            <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
              Tidak punya akun ? <Link className='cursor-pointer text-pink-600 hover:text-pink-800' to='/register'>Daftar</Link> 
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
)
}

Login.propTypes = {
  isAuthenticated: PropTypes.bool,
  error: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error  
})

export default connect(mapStateToProps, {
  login
})(Login)
