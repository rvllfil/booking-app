import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import PengajuanBedah from '../components/PengajuanBedah'
import PengajuanPVisit from '../components/PengajuanPVisit'
import PengajuanPKlinik from '../components/PengajuanPKlinik'
import PengajuanRawatInap from '../components/PengajuanRawatInap'
import { jenis_pengajuan } from '../components/elements/func'

const PengajuanDetail = () => {
  const { slug, id } = useParams()
  const view = () => {
    if(slug === 'rawat_inap') {
      return <PengajuanRawatInap id={id}/>
    } else if(slug === 'pemeriksaan_visit') {
      return <PengajuanPVisit id={id}/>
    } else if(slug === 'pemeriksaan_klinik') {
      return <PengajuanPKlinik id={id}/>
    } else if(slug === 'bedah') {
      return <PengajuanBedah id={id}/>
    } 
  }
  return (
    <>
      <Navbar backButton={true} />
      <div className="max-w-md py-1 bg-white shadow-lg rounded-lg mx-5 my-4">
        <h4 className='mt-3 mb-3 text-2xl text-center'>Detail Pengajuan Reservasi</h4>
        <h4 className='mt-3 mb-3 font-extrabold text-3xl text-center'>{jenis_pengajuan(slug)}</h4>
      </div>
      <div className="max-w-md pt-4 pb-6 px-2 bg-white shadow-lg rounded-lg mx-5 mt-4 mb-10">
        {view()}            
      </div>
    </>
  )
}

export default PengajuanDetail
