import { useState } from 'react'

const PengajuanRawatInap = ({datas, user}) => {

  const [data, setData] = useState({})
  
  const onSubmit = (e) => {
    e.prevenDefault()
    console.log(data)
  }

  return (
    <div>
      <p className='mt-2 text-lg font-bold text-pink-400 '>Nama</p>
      <p className='text-lg text-black'>{user.nama}</p>
      <p className='mt-2 text-lg font-bold text-pink-400 '>Jenis Rawat Inap</p>
      <p className='text-lg text-black'>{datas.jenis_rawat_inap}</p>
      <p className='mt-2 text-lg font-bold text-pink-400 '>Jumlah</p>
      <p className='text-lg text-black'>{datas.jumlah}</p>
      <p className='mt-2 text-lg font-bold text-pink-400 '>Tanggal Masuk</p>
      <p className='text-lg text-black'>{datas.tanggal_masuk}</p>
      <p className='mt-2 text-lg font-bold text-pink-400 '>Tanggal Keluar</p>
      <p className='mb-10 text-lg text-black'>{datas.tanggal_keluar}</p>
      <form action="post" onSubmit={onSubmit}>
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

export default PengajuanRawatInap
