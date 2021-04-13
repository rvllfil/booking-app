import { useState } from 'react'
import logo from '../logo.png'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar({backButton}) {
  const [toggle, setToggle] = useState(false)
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
          <Link to="/home">
            <button className='focus:outline-none text-white'>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18">
              </path>
            </svg>
            </button>
          </Link>
        )}

        <img className='mr-8' src={logo} alt="Ry-VET" width="120" />
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
                <Link onClick={() => setToggle(!toggle)} to="/tentang" className='p-4 block text-white text-xl hover:bg-rose-600'> Tentang </Link>
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

export default Navbar
