import { useState } from "react"
import { connect } from "react-redux"
import { addBedah } from "./../redux/bedah/bedahActions"
import { v1 as uuid } from 'uuid'
import { Link } from 'react-router-dom'

function Bedah({addBedah}) {

  const [data, setData] = useState({
    id: uuid(),
    hari: 'Senin',
    waktu: '05:00-07:00'
  })
  
  const onChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    addBedah(data)
    console.log(data)
    setData({
      id: uuid(),
      jenis_hewan: '',
      keluhan: '',
      hari: 'Senin',
      waktu: '05:00-07:00'
    })
  }

  return (
    <>
      <div className="max-w-md py-1 bg-white shadow-lg rounded-lg mx-5 my-4">
        <Link to='/admin'><h4 className='mt-3 mb-3 text-2xl text-center'>Bedah</h4></Link>
      </div>
      <div className="max-w-md pt-4 pb-6 px-2 bg-white shadow-lg rounded-lg mx-5 mt-4 mb-10">
        <form onSubmit={onSubmit} className='px-3' method='post'>
          <div className='mt-2'>
            <label className="block text-gray-700 mb-2">
              Jenis Hewan
            </label>
            <input
              className="mt-1 block w-full rounded-lg border-1 border-pink-500 focus:outline-none focus:border-white focus:ring-4 focus:ring-pink-400 focus:ring-opacity-60 placeholder-gray-300"
              type="text" placeholder="kucing/anjing/dll" onChange={onChange} name='jenis_hewan'/>
          </div>
          <label className="block text-gray-700 mb-2">
            Keluhan
          </label>
          <input
            className="mt-1 block w-full rounded-lg border-1 border-pink-500 focus:outline-none focus:border-white focus:ring-4 focus:ring-pink-400 focus:ring-opacity-60 placeholder-gray-300"
            type="text" placeholder="penyakit apa, dll" onChange={onChange} name='keluhan'/>
          <label className="block py-2">
            <span className="text-gray-700">Pilih Hari</span>
            <select
              className="block w-full mt-1 rounded-lg border-1 border-pink-500 focus:outline-none focus:border-white focus:ring-4 focus:ring-pink-400 focus:ring-opacity-60" name='hari' onChange={onChange}>
              <option>Senin </option>
              <option>Selasa </option>
              <option>Rabu </option>
              <option>Kamis </option>
            </select>
          </label>
          <label className="block py-2">
            <span className="text-gray-700">Pilih Waktu</span>
            <select
              className="block w-full mt-1 rounded-lg border-1 border-pink-500 focus:outline-none focus:border-white focus:ring-4 focus:ring-pink-400 focus:ring-opacity-60" name='waktu' onChange={onChange}>
              <option>05:00-07:00</option>
              <option>12:00-13:00</option>
              <option>16:00-21:00</option>
            </select>
          </label>
          <button
            type='submit'
            className="mt-5 px-5 py-2 w-full text-lg text-white rounded-lg bg-gradient-to-br from-rose-500 to-pink-500 focus:ring-4 focus:ring-pink-500 focus:ring-opacity-50">
            Booking
          </button>
        </form>
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
