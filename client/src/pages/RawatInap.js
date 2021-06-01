import { useState } from "react"
import { connect } from "react-redux"
import { useHistory } from "react-router"
import Navbar from "../components/Navbar"
import { addRawatInap } from '../redux/rawatInap/rawatInapActions'

function RawatInap({addRawatInap}) {
  const initData = {
    jenis_rawat_inap: 'Rawat Inap Sakit',
    jumlah: '',
    tanggal_masuk: '',
    tanggal_keluar: '',
    status: 'diajukan'
  }
  const [data, setData] = useState(initData)
  
  const onChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const initMsg = {
    jumlah: '',
    tanggal_masuk: '',
    tanggal_keluar: ''
  }

  const [message, setMessage] = useState(initMsg)

  const history = useHistory()

  const validate = () => {
    let err = {}
    let isValid = true
    if (!data.jumlah) {
      isValid = false
      err.jumlah = 'Harap masukan jumlah kucing.'
    }
    if (!data.tanggal_masuk) {
      isValid = false
      err.tanggal_masuk = 'Harap masukan tanggal masuk.'
    }
    if (!data.tanggal_keluar) {
      isValid = false
      err.tanggal_keluar = 'Harap masukan tanggal keluar.'
    }
    setMessage(err)
    return isValid
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if(validate()) {
      const newData = generateData(data)
      console.log(newData)
      try {
        addRawatInap(newData, history)
        setData(initData)
        alert('Berhasil!')
      } catch(err) {
        alert(err.message)
      }
    }
  }
  
  return (
    <>
      <Navbar backButton={true}/>
      <div className="max-w-md py-1 bg-white shadow-lg rounded-lg mx-5 my-4">
        <h4 className='mt-3 text-2xl text-center'>Rawat Inap</h4>
        <div className='mt-3 mb-3 px-3 flex text-base text-pink-500'>
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <p className='ml-2'>Rawat inap hanya dilakukan untuk hewan peliharaan kucing</p>
        </div>
      </div>
      <div className="max-w-md pt-4 pb-6 px-2 bg-white shadow-lg rounded-lg mx-5 mt-4 mb-10">
        <form className='px-3' method='post' onSubmit={onSubmit}>
          <label className="block py-2">
            <span className="text-gray-700">Jenis Rawat Inap</span>
            <select
              className="block w-full mt-1 rounded-lg border-1 border-pink-500 focus:outline-none focus:border-white focus:ring-4 focus:ring-pink-400 focus:ring-opacity-60" name='jenis_rawat_inap' onChange={onChange}>
              <option>Rawat Inap Sakit</option>
              <option>Rawat Inap Sehat</option>
            </select>
          </label>
          <div className='mt-2'>
            <label className="block text-gray-700 mb-2" htmlFor="username">
              Jumlah Kucing
            </label>
            <input
              className="mt-1 block w-full rounded-lg border-1 border-pink-500 focus:outline-none focus:border-white focus:ring-4 focus:ring-pink-400 focus:ring-opacity-60 placeholder-gray-300"
               type="number" placeholder="0" onKeyDown={ e=> ( e.key === 'e' || e.key === '.' ) &&
            e.preventDefault() } name='jumlah' onChange={onChange}/>
            <div className='text-xs text-red-500'>{message.jumlah}</div>
          </div>
          <div className='grid grid-cols-2 gap-2 mt-2'>
            <label className="block py-2 ">
              <span className="text-gray-700">Mulai</span>
              <input type='date' placeholder='Masukan Tanggal'
                className="mt-1 block w-full rounded-lg border-1 border-pink-500 focus:outline-none focus:border-white focus:ring-4 focus:ring-pink-400 focus:ring-opacity-60"
                rows="3" name='tanggal_masuk' onChange={onChange} ></input>
              <div className='text-xs text-red-500'>{message.tanggal_masuk}</div>
          </label>
            <label className="block py-2 ">
              <span className="text-gray-700">Sampai</span>
              <input type='date' placeholder='Masukan Tanggal'
                className="mt-1 block w-full rounded-lg border-1 border-pink-500 focus:outline-none focus:border-white focus:ring-4 focus:ring-pink-400 focus:ring-opacity-60"
                rows="3" name='tanggal_keluar' onChange={onChange} ></input>
              <div className='text-xs text-red-500'>{message.tanggal_keluar}</div>
          </label>
          </div>

          <button
            className="mt-4 px-5 py-2 w-full text-lg text-white rounded-lg bg-gradient-to-br from-rose-500 to-pink-500 focus:ring-4 focus:ring-pink-500 focus:ring-opacity-50">
            Booking
          </button>
        </form>
      </div>
    </>
  )
}

const generateData = data => {
  let newData = {
    ...data,
    booked_at: generateDate(),
    status: "diajukan"
  }
  newData = {
    ...newData,
    tanggal_reservasi: newData.tanggal_masuk
  }
  return newData
} 

const generateDate = () => {
  const date = Date.now()
  const newDate = new Date(date)
  return newDate
}

export default connect(null, {
  addRawatInap
})(RawatInap)
