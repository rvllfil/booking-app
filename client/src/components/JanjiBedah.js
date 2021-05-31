const JanjiBedah = ({service, data}) => {
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
      <div className='flex flex-row-reverse mt-2'>
        <p className='text-xl mt-1 order-1'>Status :</p>
        <p className={`text-xl mr-2 ml-2 py-1 px-2 rounded-lg inline bg-opacity-60 ${color(data.status)}`}>{data.status}</p>
      </div>
    </>
  )
}

const moment = (date) => {
  let dated = new Date(date)
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  let result = dated.toLocaleDateString('id-ID', options)
  return result 
}

const color = (text) => {
  let result
  if (text === 'diajukan'){
    result = 'bg-blue-400'
  } else if (text === 'diterima'){
    result = 'bg-green-400'
  } else if (text === 'ditolak'){
    result = 'bg-red-400'
  }
  return result 
}

const jenis_pengajuan = (text) => {
  let result
  if (text === 'pemeriksaan_visit'){
    result = 'Pemeriksaan Visit'
  } else if (text === 'bedah'){
    result = 'Bedah'
  } else if (text === 'rawat_inap'){
    result = 'Rawat Inap'
  }
  return result 
}

export default JanjiBedah
