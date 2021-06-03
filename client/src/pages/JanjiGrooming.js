import React from 'react'
import { jenis_pengajuan, moment } from '../components/elements/func'

const JanjiGrooming = ({service, data}) => {
  return (
    <>
      <p className='text-xl font-bold ml-2'>{jenis_pengajuan(service)}</p>
      {
       !data.tanggal_reservasi ? 
        <p className='text-xl mt-2 ml-2'>
          {data.hari}, {data.waktu}
        </p> :
        <>
          <p className='text-xl mt-2 ml-2'>
            {moment(data.tanggal_reservasi)}
          </p>
          <p className='text-xl mt-2 ml-2'>
            Pukul: {data.waktu}
          </p>
        </>
      }
    </>
  )
}

export default JanjiGrooming
