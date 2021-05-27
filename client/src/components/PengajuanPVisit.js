import { useState } from 'react'

const PengajuanPVisit = ({datas, user}) => {

  const [message, setMessage] = useState('')
  const [data, setData] = useState({})
  
  const validate = () => {
    let err = {}
    let isValid = true
    if (!data.waktu) {
      isValid = false
      err.waktu = 'Harap masukan waktu.'
    }
    setMessage(err)
    return isValid
  }

  const onChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = (e) => {
    e.prevenDefault()
    if(validate()){
      console.log(data)
    }
  }

  return (
    <div>
      <p className='mt-2 text-lg font-bold text-pink-400 '>Nama</p>
      <p className='text-lg text-black'>{user.nama}</p>
      <p className='mt-2 text-lg font-bold text-pink-400 '>Jenis Hewan</p>
      <p className='text-lg text-black'>{datas.jenis_hewan}</p>
      <p className='mt-2 text-lg font-bold text-pink-400 '>Jumlah Hewan</p>
      <p className='text-lg text-black'>{datas.jumlah_hewan}</p>
      <p className='mt-2 text-lg font-bold text-pink-400 '>Waktu</p>
      <p className='text-lg text-black'>{`Hari ${datas.hari}`}</p>
      <p className='mt-2 text-lg font-bold text-pink-400 '>Alamat</p>
      <p className='text-lg text-black'>{datas.alamat}</p>
      
      <form action="post" onSubmit={onSubmit}>
        <div className='mt-5'>
          <label className="text-xl block text-gray-700 mb-2">
            Waktu
          </label>
          <input
            className="mt-1 block w-full rounded-lg border-1 border-pink-500 focus:outline-none focus:border-white focus:ring-4 focus:ring-pink-400 focus:ring-opacity-60 placeholder-gray-300"
            type="text" placeholder="Waktu" onChange={onChange} name='waktu'/>
          <div className='text-xs text-red-500'>{message.waktu}</div>
        </div>
        <div className='flex flex-row-reverse'>
          <button
            type='submit'
            className="order-last mt-5 px-5 py-2 w-1/3 text-lg text-white rounded-lg bg-gradient-to-br from-rose-500 to-pink-500 focus:ring-4 focus:ring-pink-500 focus:ring-opacity-50">
            Terima
          </button>
          <button
            type='button'
            className="ml-5 mt-5 px-5 py-2 w-1/3 text-lg text-white rounded-lg bg-red-500 focus:ring-4 focus:ring-pink-500 focus:ring-opacity-50">
            Tolak
          </button>
        </div>
      </form>      
    </div>
  )
}

export default PengajuanPVisit
