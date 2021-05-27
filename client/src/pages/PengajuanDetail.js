import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import PengajuanBedah from '../components/PengajuanBedah'
import PengajuanPVisit from '../components/PengajuanPVisit'
import PengajuanRawatInap from '../components/PengajuanRawatInap'

const PengajuanDetail = () => {
  const location = useLocation()
  const { pengajuan, data, user } = location.state
  const view = () => {
    if(pengajuan === 'Rawat Inap') {
      return (<PengajuanRawatInap 
        datas = {data}
        user = {user} 
      />)
    } else if(pengajuan === 'Pemeriksaan Visit') {
      return (<PengajuanPVisit 
        datas = {data}
        user = {user} 
      />)
    } else if(pengajuan === 'Bedah') {
      return (<PengajuanBedah 
        datas = {data}
        user = {user} 
      />)
    } 
  }
  return (
    <>
      <Navbar backButton={true} />
      <div className="max-w-md py-1 bg-white shadow-lg rounded-lg mx-5 my-4">
        <h4 className='mt-3 mb-3 text-2xl text-center'>Detail Pengajuan Reservasi</h4>
        <h4 className='mt-3 mb-3 font-extrabold text-3xl text-center'>{pengajuan}</h4>
      </div>
      <div className="max-w-md pt-4 pb-6 px-2 bg-white shadow-lg rounded-lg mx-5 mt-4 mb-10">
        {view()}            
      </div>
    </>
  )
}

export default PengajuanDetail
