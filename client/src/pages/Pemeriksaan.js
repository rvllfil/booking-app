import { useState } from "react"
import { connect } from "react-redux"
import { useHistory } from "react-router"
import { alphabet, generateData, numeric } from "../components/elements/func"
import Navbar from "../components/Navbar"
import { addPemeriksaanVisit, addPemeriksaanKlinik } from '../redux/pemeriksaan/pemeriksaanActions'

function Pemeriksaan({
  user, 
  isLoading, 
  addPemeriksaanVisit,
  addPemeriksaanKlinik
}) {
  const [pemeriksaan, setPemeriksaan] = useState('klinik')
  
  const alamat = !isLoading ? user.alamat : ''

  const initData = {
    jenis_hewan: '',
    jumlah_hewan: '',
    hari: 'Senin',
    alamat: alamat,
  }
  const [data, setData] = useState(initData)

  const onChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const initMsg = {
    jenis_hewan: '',
    keluhan: '',
  }

  const [message, setMessage] = useState(initMsg)

  const history = useHistory()

  const validate = () => {
    let err = {}
    let isValid = true
    if (!data.jenis_hewan) {
      isValid = false
      err.jenis_hewan = 'Harap masukan jenis hewan.'
    }
    if (!data.jumlah_hewan) {
      isValid = false
      err.jumlah_hewan = 'Harap masukan jumlah hewan.'
    }
    if(pemeriksaan === 'visit') {
      if (!data.alamat) {
        isValid = false
        err.alamat = 'Harap masukan alamat.'
      }
    }
    setMessage(err)
    return isValid
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if(pemeriksaan === 'visit') {
      if(validate()){
        const newData = generateData(data)
        console.log(newData)
        try {
          addPemeriksaanVisit(newData, history)
          alert('Berhasil!')
        } catch(err) {
          alert(err.message)
        }
      }  
    } else if(pemeriksaan === 'klinik') {
      if(validate()){
        const newData = generateData(data)
        console.log(newData)
        try {
          addPemeriksaanKlinik(newData, history)
          alert('Berhasil!')
        } catch(err) {
          alert(err.message)
        }
      }  
    }
  }

  return (
    <>
      <Navbar backButton={true}/>
      <div className='min-w-screen flex flex-col items-center justify-center'>
        <div className="max-w-md py-1 bg-white shadow-lg rounded-lg mx-5 my-4 w-full">
          <h4 className='mt-3 text-2xl text-center lg:text-4xl'>Pemeriksaan</h4>
          <div className='mt-3 mb-3 flex text-base text-pink-500 px-5'>
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <p className='ml-2'>Pemeriksaan hanya dilakukan pada pukul 16:30 sampai 21:00</p>
          </div>
        </div>
        <div className="max-w-md pt-4 pb-6 px-2 bg-white shadow-lg rounded-lg mx-5 mt-4 mb-10 w-full lg:text-2xl">
          <form className='px-3' method='post' onSubmit={onSubmit}>
            <div className='mt-2'>
              <label className="block text-gray-700" htmlFor="username">
                Jenis Hewan
              </label>
              <input
                className="mt-1 block w-full rounded-lg border-1 border-pink-500 focus:outline-none focus:border-white focus:ring-4 focus:ring-pink-400 focus:ring-opacity-60 placeholder-gray-300 lg:text-2xl"
                name="jenis_hewan" onChange={onChange} type="text" placeholder="Jenis Hewan" 
                onKeyDown={alphabet}
              />
              <div className='text-xs text-red-500'>{message.jenis_hewan}</div>
            </div>
            <div className='mt-2'>
              <label className="block text-gray-700" htmlFor="username">
                Jumlah Hewan
              </label>
              <input
                className="mt-1 block w-full rounded-lg border-1 border-pink-500 focus:outline-none focus:border-white focus:ring-4 focus:ring-pink-400 focus:ring-opacity-60 placeholder-gray-300 lg:text-2xl"
                name="jumlah_hewan" onChange={onChange} type="number" placeholder="1" 
                onKeyDown={numeric}
              />
              <div className='text-xs text-red-500'>{message.jumlah_hewan}</div>
            </div>
            <label className="block py-2">
              <span className="text-gray-700">Pilih Hari</span>
              <select
                className="block w-full mt-1 rounded-lg border-1 border-pink-500 focus:outline-none focus:border-white focus:ring-4 focus:ring-pink-400 focus:ring-opacity-60 lg:text-2xl" name='hari' onChange={onChange}>
                <option>Senin</option>
                <option>Selasa</option>
                <option>Rabu</option>
                <option>Kamis</option>
              </select>
            </label>
            <label className="block py-2">
              <span className="text-gray-700">Pilih Pemeriksaan</span>
              <select onChange={(e)=>setPemeriksaan(e.target.value)} className="block w-full mt-1 rounded-lg border-1
                border-pink-500 focus:outline-none focus:border-white focus:ring-4 focus:ring-pink-400
                focus:ring-opacity-60 lg:text-2xl">
                <option value='klinik'>Ke Klinik</option>
                <option value='visit'>Visit</option>
              </select>
            </label>
            {pemeriksaan==='visit' && (
            <label className="block py-2">
              <span className="text-gray-700">Alamat</span>
              <textarea
                className="mt-1 block w-full rounded-lg border-1 border-pink-500 focus:outline-none focus:border-white focus:ring-4 focus:ring-pink-400 focus:ring-opacity-60 lg:text-2xl"
                rows="3" name='alamat' value={data.alamat} onChange={onChange}></textarea>
              <div className='text-xs text-red-500'>{message.alamat}</div>
            </label>
            )}

            <button
              className="mt-5 px-5 py-2 w-full text-lg text-white rounded-lg bg-gradient-to-br from-rose-500 to-pink-500 focus:ring-4 focus:ring-pink-500 focus:ring-opacity-50 lg:text-2xl lg:py-4">
              Booking
            </button>
          </form>
        </div>
      </div>
    </>
  )
}


const mapStateToProps = state => ({
  user: state.auth.user,
  isLoading: state.auth.isLoading
})


export default connect(mapStateToProps, {
  addPemeriksaanVisit,
  addPemeriksaanKlinik
})(Pemeriksaan)
