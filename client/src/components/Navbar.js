import { useRef, useState } from 'react'
import logo from '../logo.png'
import { Link } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import './Navbar.css'

function Navbar() {
  const [toggle, setToggle] = useState(false)
  const nodeRef = useRef(null)
  return (
    <>
      <div className='bg-gradient-to-br from-rose-500 to-pink-500 fixed w-full flex flex-wrap items-center justify-between px-5 py-3'>
        <div>
          <button onClick={() => setToggle(!toggle)} className='focus:outline-none text-white'>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <img src={logo} alt="Ry-VET" width="120" />
        <div></div>
      </div>

      {toggle && (
      <>
      <div className='fixed inset-0 bg-black opacity-70' onClick={()=> setToggle(!toggle)}></div>
      <aside className='bg-gradient-to-br from-rose-500 to-pink-500 w-4/5 min-h-screen fixed z-20 flex flex-col shadow'>
        <div className='flex-grow'>
          <nav>
            <ul>
              <li>
                <Link to="/grooming" className='p-4 block text-white text-xl hover:bg-rose-600'> Grooming </Link>
              </li>
              <li>
                <Link to="/bedah" className='p-4 block text-white text-xl hover:bg-rose-600'> Bedah </Link>
              </li>
              <li>
                <Link to="/pemeriksaan" className='p-4 block text-white text-xl hover:bg-rose-600'> Pemeriksaan </Link>
              </li>
              <li>
                <Link to="rawat-inap" className='p-4 block text-white text-xl hover:bg-rose-600'> Rawat Inap </Link>
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

export default Navbar
