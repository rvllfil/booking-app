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
  const [dropdown, setDropdown] = useState(false)
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

  const LinkLogo = () => {
    if(user.role === 'member') {
      return (
      <Link to='/home'>
        <img className='mr-8' src={logo} alt="Ry-VET" width="120" />
      </Link>
      ) 
    } else if(user.role === 'admin') {
      return (
      <Link to='/admin'>
        <img className='mr-8' src={logo} alt="Ry-VET" width="120" />
      </Link>
      ) 
    }
  }

  const NavLink = () => {
    if(user.role === 'member') {
      return (
        <ul className='flex flex-col min-h-screen lg:flex-row lg:min-h-full'>
          <li className='min-h-full'>
            <Link onClick={() => setToggle(!toggle)} to="/home" className='p-4 block text-white text-xl hover:bg-rose-600 lg:hidden sm:block'> Home </Link>
            <Link to="/home" className='p-4 hidden text-white text-xl hover:bg-rose-600 lg:block'> Home </Link>
          </li>
          <li className='min-h-full'>
            <Link onClick={() => setToggle(!toggle)} to="/profil" className='p-4 block text-white text-xl hover:bg-rose-600 lg:hidden sm:block'> Profil </Link>
            <Link to="/profil" className='p-4 hidden text-white text-xl hover:bg-rose-600 lg:block'> Profil </Link>
          </li>
          <li className='min-h-full'>
            <Link onClick={() => setToggle(!toggle)} to="/janji-temu" className='p-4 block text-white text-xl hover:bg-rose-600 lg:hidden sm:block'> Janji Temu </Link>
            <Link to="/janji-temu" className='p-4 hidden text-white text-xl hover:bg-rose-600 lg:block'> Janji Temu </Link>
          </li>
          <li className='min-h-full'>
            <Link to="/tentang" className='p-4 block text-white text-xl hover:bg-rose-600 lg:hidden sm:block'> Tentang </Link>
            <Link onClick={() => setToggle(!toggle)} to="/tentang" className='p-4 hidden text-white text-xl hover:bg-rose-600 lg:block'> Tentang </Link>
          </li>
          <li className='mt-auto lg:mt-0'>
            <Logout sty='p-4 block text-white text-xl hover:bg-rose-600 cursor-pointer' />
          </li>
        </ul>
      ) 
    } else if(user.role === 'admin') {
      return (
      <ul className='flex flex-col min-h-full'>
        <li>
          <Link onClick={() => setToggle(!toggle)} to="/admin" className='p-4 block text-white text-xl hover:bg-rose-600'> Home </Link>
        </li>
        <li>
          <Link onClick={() => setToggle(!toggle)} to="/admin/bedah" className='p-4 block text-white text-xl hover:bg-rose-600'> Bedah </Link>
        </li>
        <li>
          <Link onClick={() => setToggle(!toggle)} to="/admin/rawat-inap" className='p-4 block text-white text-xl hover:bg-rose-600'> Rawat Inap </Link>
        </li>
        <li>
          <Link onClick={() => setToggle(!toggle)} to="/admin/grooming" className='p-4 block text-white text-xl hover:bg-rose-600'> Grooming </Link>
        </li>
        <li>
          <Link onClick={() => setToggle(!toggle)} to="/admin/pemeriksaan-visit" className='p-4 block text-white text-xl hover:bg-rose-600'> Pemeriksaan Visit </Link>
        </li>
        <li>
          <Link onClick={() => setToggle(!toggle)} to="/admin/pemeriksaan-klinik" className='p-4 block text-white text-xl hover:bg-rose-600'> Pemeriksaan Klinik </Link>
        </li>
        <li>
          <Link onClick={() => setToggle(!toggle)} to="/admin/members" className='p-4 block text-white text-xl hover:bg-rose-600'> Daftar Member </Link>
        </li>
        <li className='mt-auto font-bold'>
          <Logout sty='p-4 text-white text-xl hover:bg-rose-600' />
        </li>
      </ul>
      ) 
    }
  }
  
  return (
    <>
      <div className='bg-gradient-to-br from-rose-500 to-pink-500 top-0 w-full flex flex-wrap items-center justify-between px-5 py-3 lg:px-20'>
        {!backButton && (
          <div className='lg:hidden'> 
          <button onClick={() => setToggle(!toggle)} className='focus:outline-none text-white'>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        )}

        {backButton && (
          <Link to={link} className='lg:hidden'>
            <button className='focus:outline-none text-white'>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18">
                </path>
              </svg>
            </button>
          </Link>
        )}
        
        {
          isLoading || user === null ?
          <img className='mr-8' src={logo} alt="Ry-VET" width="120" /> :
          LinkLogo()
        }
        { user.role === 'member' &&
          <div className='hidden lg:block'>
            <nav className='lg:flex lg:flex-row lg:justify-items-center'>
            {
              isLoading || user === null ? '' :
              NavLink()
            }
            </nav>
          </div>
        }

        { user.role === 'admin' &&
          <div className='hidden lg:block'>
            <nav className='flex flex-row justify-items-center'>
            <ul className='flex flex-row items-center'>
              <li>
                <Link onClick={() => setToggle(!toggle)} to="/admin" className='p-4 mr-5 block text-white text-xl hover:bg-rose-600'> Home </Link>
              </li>
              <li>
                <Link onClick={() => setToggle(!toggle)} to="/admin/members" className='p-4 block text-white text-xl hover:bg-rose-600'> Daftar Member </Link>
              </li>
              <li className='mx-5'>
              <div>
                <div>
                  <button type="button" onClick={() => setDropdown(!dropdown)}
                    className="inline-flex items-center justify-center w-full text-white text-xl rounded-md  shadow-sm px-4 py-2 bg-transparent font-medium hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-pink-600 focus:ring-indigo-500"
                    id="menu-button" aria-expanded="true" aria-haspopup="true">
                    Layanan
                    {/* Heroicon name: solid/chevron-down */}
                    <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                      fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                {dropdown && 
                <div
                  className="origin-top-right absolute right-40 mt-8 w-56 rounded-md shadow-lg bg-gradient-to-br from-rose-500 to-pink-500 ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
                  <div className="py-1" role="none">
                    <Link onClick={() => setDropdown(!dropdown)} to="/admin/bedah" className='p-4 block text-white text-xl hover:bg-rose-600'> Bedah </Link>
                    <Link onClick={() => setDropdown(!dropdown)} to="/admin/rawat-inap" className='p-4 block text-white text-xl hover:bg-rose-600'> Rawat Inap </Link>
                    <Link onClick={() => setDropdown(!dropdown)} to="/admin/grooming" className='p-4 block text-white text-xl hover:bg-rose-600'> Grooming </Link>
                    <Link onClick={() => setDropdown(!dropdown)} to="/admin/pemeriksaan-visit" className='p-4 block text-white text-xl hover:bg-rose-600'> Pemeriksaan Visit </Link>
                    <Link onClick={() => setDropdown(!dropdown)} to="/admin/pemeriksaan-klinik" className='p-4 block text-white text-xl hover:bg-rose-600'> Pemeriksaan Klinik </Link>
                  </div>
                </div>
                }
                </div>
              </li>
              <li className='mt-auto font-bold'>
                <Logout sty='p-4 text-white text-xl hover:bg-rose-600' />
              </li>
            </ul> 
              
            </nav>
          </div>
        }

        <div className='lg:hidden'></div>
      </div>

      {toggle && (
      <>
        <div className='top-0 fixed inset-0 bg-black opacity-70 lg:hidden' onClick={()=> setToggle(!toggle)}></div>
        <aside className='top-0 bg-gradient-to-br from-rose-500 to-pink-500 w-4/5 min-h-screen fixed z-20 shadow lg:hidden'>
          <div className=''>
            <nav>
            {
              isLoading || user === null ? '' :
              NavLink()
            }
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
