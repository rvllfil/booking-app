const JanjiRawatInap = ({service, data}) => {
  return (
    <>
      <p className='text-xl font-bold ml-2'>{data.jenis_rawat_inap}</p>
      <p className='text-xl mt-2 ml-2'>Tanggal Masuk: {moment(data.tanggal_masuk)}</p>
      <p className='text-xl mt-1 ml-2'>Tanggal Keluar: {moment(data.tanggal_keluar)}</p>
      <div className='flex flex-row-reverse mt-4'>
        <p className='text-xl mt-1 order-1'>Status :</p>
        <p className={`text-xl mr-2 ml-2 py-1 px-2 rounded-lg inline bg-opacity-60 ${color(data.status)}`}>{data.status}</p>
      </div>
    </>
  )
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

const moment = (date) => {
  let dated = new Date(date)
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  let result = dated.toLocaleDateString('id-ID', options)
  return result 
}

export default JanjiRawatInap
