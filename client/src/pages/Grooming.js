import { useState } from "react";
import Navbar from "../components/Navbar";

function Grooming() {
  const [waktu, setWaktu] = useState('')
  const waktuChange = (e) => {
    console.log(e.target.value)
    setWaktu(e.target.value)
  }
  return (
    <>
      <Navbar backButton={true}/>
      <div className="max-w-md py-1 bg-white shadow-lg rounded-lg mx-5 my-4">
        <h4 className='mt-3 mb-3 text-2xl text-center'>Grooming</h4>
      </div>
      <div className="max-w-md pt-4 pb-6 px-2 bg-white shadow-lg rounded-lg mx-5 mt-4 mb-10">
        <div>Pilih Waktu</div>
        <div className='mt-4 mx-2 grid grid-cols-2 gap-4'>
          <button value='07:00' onClick={waktuChange} className={ waktu==='07:00'?'px-5 py-2 w-full text-lg text-white rounded-lg bg-gradient-to-br from-rose-500 to-pink-500 focus:outline-none focus:ring-4 focus:ring-pink-500 focus:ring-opacity-50':'px-5 py-2 w-full text-lg text-black bg-white ring-4 ring-pink-400 rounded-lg text-xl'}>
            07:00
          </button>
          <button value='07:30' onClick={waktuChange} className={ waktu==='07:30'?'px-5 py-2 w-full text-lg text-white rounded-lg bg-gradient-to-br from-rose-500 to-pink-500 focus:outline-none focus:ring-4 focus:ring-pink-500 focus:ring-opacity-50':'px-5 py-2 w-full text-lg text-black bg-white ring-4 ring-pink-400 rounded-lg text-xl'}>
            07:30
          </button>
          <button value='08:00' onClick={waktuChange} className={ waktu==='08:00'?'px-5 py-2 w-full text-lg text-white rounded-lg bg-gradient-to-br from-rose-500 to-pink-500 focus:outline-none focus:ring-4 focus:ring-pink-500 focus:ring-opacity-50':'px-5 py-2 w-full text-lg text-black bg-white ring-4 ring-pink-400 rounded-lg text-xl'}>
            08:00
          </button>
          <button value='08:30' onClick={waktuChange} className={ waktu==='08:30'?'px-5 py-2 w-full text-lg text-white rounded-lg bg-gradient-to-br from-rose-500 to-pink-500 focus:outline-none focus:ring-4 focus:ring-pink-500 focus:ring-opacity-50':'px-5 py-2 w-full text-lg text-black bg-white ring-4 ring-pink-400 rounded-lg text-xl'}>
            08:30
          </button>
          <button value='09:00' onClick={waktuChange} className={ waktu==='09:00'?'px-5 py-2 w-full text-lg text-white rounded-lg bg-gradient-to-br from-rose-500 to-pink-500 focus:outline-none focus:ring-4 focus:ring-pink-500 focus:ring-opacity-50':'px-5 py-2 w-full text-lg text-black bg-white ring-4 ring-pink-400 rounded-lg text-xl'}>
            09:00
          </button>
          <button value='09:30' onClick={waktuChange} className={ waktu==='09:30'?'px-5 py-2 w-full text-lg text-white rounded-lg bg-gradient-to-br from-rose-500 to-pink-500 focus:outline-none focus:ring-4 focus:ring-pink-500 focus:ring-opacity-50':'px-5 py-2 w-full text-lg text-black bg-white ring-4 ring-pink-400 rounded-lg text-xl'}>
            09:30
          </button>
        </div>
        <div className='mt-8 flex text-xs text-pink-500'>
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <p className='ml-2'>Grooming hanya di hari Jum'at, reservasi dapat dilakukan 2 hari sebelum grooming</p>
        </div>
        <button className="mt-5 px-5 py-2 w-full text-lg text-white rounded-lg bg-gradient-to-br from-rose-500 to-pink-500 focus:ring-4 focus:ring-pink-500 focus:ring-opacity-50">
          Booking
        </button>
      </div>
    </>
  )
}

export default Grooming
