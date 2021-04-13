import React from 'react'
import { Link } from 'react-router-dom'
import menu1 from '../icons/menu-1.png'
import menu2 from '../icons/menu-2.png'
import menu3 from '../icons/menu-3.png'
import menu4 from '../icons/menu-4.png'


function Home() {
  return (
    <>
      <div className="grid grid-cols-2 gap-6 mt-10 mx-5 text-center text-lg text-white">
        <Link to='/grooming'>
        <button
          className='w-full pb-2 bg-gradient-to-br from-rose-400 to-pink-500 shadow-lg rounded-lg ring-4 ring-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-60'>
          <div className='w-full mb-2 p-5 bg-white rounded-lg'>
            <img className='w-full' src={menu1} alt="menu1" />
          </div>Grooming
        </button>
        </Link>
        <Link to='/pemeriksaan'>
        <button
          className='w-full pb-2 bg-gradient-to-br from-rose-400 to-pink-500 shadow-lg rounded-lg ring-4 ring-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-60'>
          <div className='w-full mb-2 p-5 bg-white rounded-lg'>
            <img className='w-full' src={menu2} alt="menu2" />
          </div>Pemeriksaan
        </button>
        </Link>
        <Link to='/rawat-inap'>
        <button
          className='w-full pb-2 bg-gradient-to-br from-rose-400 to-pink-500 shadow-lg rounded-lg ring-4 ring-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-60'>
          <div className='w-full mb-2 p-5 bg-white rounded-lg'>
            <img className='w-full' src={menu3} alt="menu3" />
          </div>Rawat Inap
        </button>
        </Link>
        <Link to='/bedah'>
        <button
          className='w-full pb-2 bg-gradient-to-br from-rose-400 to-pink-500 shadow-lg rounded-lg ring-4 ring-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-60'>
          <div className='w-full mb-2 p-5 bg-white rounded-lg'>
            <img className='w-full' src={menu4} alt="menu4" />
          </div>Bedah
        </button>
        </Link>
      </div>
    </>
  )
}

export default Home
