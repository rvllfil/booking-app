import { useState } from "react"
import Navbar from "../components/Navbar"

function Pemeriksaan() {
  const [pemeriksaan, setPemeriksaan] = useState('klinik')
  return (
    <>
      <Navbar backButton={true}/>
      <div className="max-w-md py-1 bg-white shadow-lg rounded-lg mx-5 my-4">
        <h4 className='mt-3 mb-3 text-2xl text-center'>Pemeriksaan</h4>
      </div>
      <div className="max-w-md pt-4 pb-6 px-2 bg-white shadow-lg rounded-lg mx-5 mt-4 mb-10">
        <form className='px-3'>
          <div className='mt-2'>
            <label className="block text-gray-700 mb-2" htmlFor="username">
              Jenis Hewan
            </label>
            <input
              className="mt-1 block w-full rounded-lg border-1 border-pink-500 focus:outline-none focus:border-white focus:ring-4 focus:ring-pink-400 focus:ring-opacity-60 placeholder-gray-300"
              id="username" type="text" placeholder="Jenis Hewan" />
          </div>
          <div className='mt-2'>
            <label className="block text-gray-700 mb-2" htmlFor="username">
              Jumlah Hewan
            </label>
            <input
              className="mt-1 block w-full rounded-lg border-1 border-pink-500 focus:outline-none focus:border-white focus:ring-4 focus:ring-pink-400 focus:ring-opacity-60 placeholder-gray-300"
              id="username" type="number" placeholder="0" onKeyDown={ e=> ( e.keyCode === 69 || e.keyCode === 190 ) &&
            e.preventDefault() }/>
          </div>
          <label className="block py-2">
            <span className="text-gray-700">Pilih Hari</span>
            <select
              className="block w-full mt-1 rounded-lg border-1 border-pink-500 focus:outline-none focus:border-white focus:ring-4 focus:ring-pink-400 focus:ring-opacity-60">
              <option>Senin (16:30-21:00 WIB)</option>
              <option>Selasa (16:30-21:00 WIB)</option>
              <option>Rabu (16:30-21:00 WIB)</option>
              <option>Kamis (16:30-19:00 WIB)</option>
            </select>
          </label>
          <label className="block py-2">
            <span className="text-gray-700">Pilih Pemeriksaan</span>
            <select onChange={(e)=>setPemeriksaan(e.target.value)} className="block w-full mt-1 rounded-lg border-1
              border-pink-500 focus:outline-none focus:border-white focus:ring-4 focus:ring-pink-400
              focus:ring-opacity-60">
              <option value='klinik'>Ke Klinik</option>
              <option value='visit'>Visit</option>
            </select>
          </label>
          {pemeriksaan==='visit' && (
          <label className="block py-2">
            <span className="text-gray-700">Alamat</span>
            <textarea
              className="mt-1 block w-full rounded-lg border-1 border-pink-500 focus:outline-none focus:border-white focus:ring-4 focus:ring-pink-400 focus:ring-opacity-60"
              rows="3"></textarea>
          </label>
          )}

          <button
            className="mt-5 px-5 py-2 w-full text-lg text-white rounded-lg bg-gradient-to-br from-rose-500 to-pink-500 focus:ring-4 focus:ring-pink-500 focus:ring-opacity-50">
            Booking
          </button>
        </form>
      </div>
    </>
  )
}

export default Pemeriksaan
