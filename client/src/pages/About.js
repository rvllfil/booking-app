import React from 'react'
import { Link } from 'react-router-dom'
import ig from '../icons/instagram.svg'
import wa from '../icons/whatsapp.svg'


function About() {
  return (
    <div>
      <div className="max-w-md py-1 bg-white shadow-lg rounded-lg mx-5 my-4">
        <h4 className='text-pink-500 mt-3 mb-3 text-2xl text-center'>Tentang Kami</h4>
        <div className='px-3 text-lg text'>
        <p>Ryvet Animal Cure (RAC) merupakan klinik hewan pribadi yang berdiri sejak tahun 2018. Klinik hewan Ryvet Animal Care bertempat du Jl. Garuda Caringin no.45 RT03/01. Kelurahan Baros, Kecamatan Baros, Kota Sukabumi</p>
        <p>Dokter Praktek : Drh. Muhammad Rijki</p>
        </div>
        <div className='flex flex-col mt-4 pb-4 px-8 text-lg text-white text-center'>
          <Link className='px-4 bg-gradient-to-br from-rose-500 to-pink-500 rounded-lg mt-2'><img className='w-8 inline-flex mr-2 my-2' src={ig} alt="instagram icon"/><span>Ryvet Animal Care</span></Link>
          <Link className='px-4 bg-gradient-to-br from-rose-500 to-pink-500 rounded-lg mt-2'><img className='w-8 inline-flex mr-2 my-2' src={wa} alt="whatsapp icon"/><span>(+62) 857 4237 0406</span></Link>
        </div>
      </div>
    </div>
  )
}

export default About
