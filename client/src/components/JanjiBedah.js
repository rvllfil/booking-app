import { color, jenis_pengajuan, moment } from "./elements/func"

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

export default JanjiBedah
