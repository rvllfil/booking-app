import Navbar from '../../components/Navbar'
import Pengajuan from '../../components/Pengajuan'
import Reservasi from '../Reservasi'

const HomeAdmin = () => {
  return (
    <>
      <Navbar />
      <div className='flex flex-col items-center justify-center mx-2 lg:flex-row lg:items-start'>
        <Reservasi />
        <Pengajuan />
      </div>
    </>
  )
}

export default HomeAdmin
