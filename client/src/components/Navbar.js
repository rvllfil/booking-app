import { useEffect, useState } from 'react'
import logo from '../logo.png'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'
import Logout from './Logout'
import { connect } from 'react-redux'

function Navbar({backButton, isLoading, user}) {
  const location = useLocation()
  const path = location.pathname
  const [toggle, setToggle] = useState(false)
  const [link, setLink] = useState('')
  
  useEffect(() => {
    try {
      if (!isLoading && user.role === 'member') {
        setLink('/home')
      } else if (!isLoading && user.role === 'admin') {
        setLink('/admin')
      }
    } catch (e) {
      setLink(path)
    }
  }, [user, isLoading, path])
  
  return (
    <>
      <div className='bg-gradient-to-br from-rose-500 to-pink-500 top-0 w-full flex flex-wrap items-center justify-between px-5 py-3'>
        {!backButton && (
          <div>
          <button onClick={() => setToggle(!toggle)} className='focus:outline-none text-white'>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        )}

        {backButton && (
          <Link to={link}>
            <button className='focus:outline-none text-white'>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18">
              </path>
            </svg>
            </button>
          </Link>
        )}

        <Link to='/home'>
          <img className='mr-8' src={logo} alt="Ry-VET" width="120" />
        </Link>
        <div></div>
      </div>

      {toggle && (
      <>
      <div className='top-0 fixed inset-0 bg-black opacity-70' onClick={()=> setToggle(!toggle)}></div>
      <aside className='top-0 bg-gradient-to-br from-rose-500 to-pink-500 w-4/5 min-h-screen fixed z-20 flex flex-col shadow'>
        <div className='flex-grow'>
          <nav>
            <ul>
              <li>
                <Link onClick={() => setToggle(!toggle)} to="/profil" className='p-4 block text-white text-xl hover:bg-rose-600'> Profil </Link>
              </li>
              <li>
                <Link onClick={() => setToggle(!toggle)} to="/janji-temu" className='p-4 block text-white text-xl hover:bg-rose-600'> Janji Temu </Link>
              </li>
              <li>
                <Link onClick={() => setToggle(!toggle)} to="/tentang" className='p-4 block text-white text-xl hover:bg-rose-600'> Tentang </Link>
              </li>
              <li>
                <Logout sty='p-4 block text-white text-xl hover:bg-rose-600' />
              </li>
            </ul>
          </nav>
        </div>
      </aside>
      </>
      )}
      
    </>
  )
}

Navbar.defaultProps = {
  backButton: false
}


const mapStateToProps = state => ({
  user: state.auth.user,
  isLoading: state.auth.isLoading
})

export default connect(mapStateToProps)(Navbar)
