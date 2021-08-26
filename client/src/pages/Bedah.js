import { useState } from "react"
import { connect } from "react-redux"
import { addBedah } from "./../redux/bedah/bedahActions"
import { useHistory } from 'react-router-dom'
import Navbar from "../components/Navbar"
import { alphabet, generateData } from "../components/elements/func"

function Bedah({addBedah}) {
  const initData = {
    jenis_hewan: '',
    keluhan: '',
    hari: 'Senin',
    waktu: '05:00-07:00',
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
    if (!data.keluhan) {
      isValid = false
      err.keluhan = 'Harap masukan keluhan.'
    }
    setMessage(err)
    return isValid
  }

  const onSubmit = (e) => {
    e.preventDefault()
    setMessage(initMsg)
    if (validate()){
      const newData = generateData(data)
      console.log(newData)
      try {
        addBedah(newData, history)
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
      <div className='min-w-screen flex flex-col items-center justify-center'>
        <div className="max-w-md py-1 bg-white shadow-lg rounded-lg mx-5 my-4 w-full">
          <h4 className='mt-3 mb-3 text-2xl text-center lg:text-4xl'>Bedah</h4>
        </div>
        <div className="max-w-md pt-4 pb-6 px-2 bg-white shadow-lg rounded-lg mx-5 mt-4 mb-10 w-full lg:text-2xl">
          <form onSubmit={onSubmit} className='px-3' method='post'>
            <div className='mt-2'>
              <label className="block text-gray-700 mb-2">
                Jenis Hewan
              </label>
              <input
                className="mt-1 block w-full rounded-lg border-1 border-pink-500 focus:outline-none focus:border-white focus:ring-4 focus:ring-pink-400 focus:ring-opacity-60 placeholder-gray-300 lg:text-2xl"
                type="text" placeholder="kucing/anjing/dll" onChange={onChange} name='jenis_hewan'
                onKeyDown={alphabet}
              />
              <div className='text-xs text-red-500'>{message.jenis_hewan}</div>
            </div>
            <div className='mt-2'>
              <label className="block text-gray-700 mb-2">
                Keluhan
              </label>
              <input
                className="mt-1 block w-full rounded-lg border-1 border-pink-500 focus:outline-none focus:border-white focus:ring-4 focus:ring-pink-400 focus:ring-opacity-60 placeholder-gray-300 lg:text-2xl"
                type="text" placeholder="penyakit apa, dll" onChange={onChange} name='keluhan'/>
              <div className='text-xs text-red-500'>{message.keluhan}</div>
            </div>
            <label className="block py-2">
              <span className="text-gray-700">Pilih Hari</span>
              <select
                className="block w-full mt-1 rounded-lg border-1 border-pink-500 focus:outline-none focus:border-white focus:ring-4 focus:ring-pink-400 focus:ring-opacity-60 lg:text-2xl" name='hari' onChange={onChange}>
                <option>Senin </option>
                <option>Selasa </option>
                <option>Rabu </option>
                <option>Kamis </option>
              </select>
            </label>
            <label className="block py-2">
              <span className="text-gray-700">Pilih Waktu</span>
              <select
                className="block w-full mt-1 rounded-lg border-1 border-pink-500 focus:outline-none focus:border-white focus:ring-4 focus:ring-pink-400 focus:ring-opacity-60 lg:text-2xl" name='waktu' onChange={onChange}>
                <option>05:00-07:00</option>
                <option>12:00-13:00</option>
                <option>16:00-21:00</option>
              </select>
            </label>
            <button
              type='submit'
              className="mt-5 px-5 py-2 w-full text-lg text-white rounded-lg bg-gradient-to-br from-rose-500 to-pink-500 focus:ring-4 focus:ring-pink-500 focus:ring-opacity-50 lg:text-3xl lg:py-4">
              Booking
            </button>
          </form>
        </div>
      </div>
    </>
  )
} 


const mapStateToProps = (state) => {
  return {
    bedah: state.bedah
  }
} 

export default connect(mapStateToProps, {addBedah})(Bedah)
