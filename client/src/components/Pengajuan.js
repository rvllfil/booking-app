import { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { BeatLoader } from 'react-spinners'
import { editBedah } from '../redux/bedah/bedahActions'
import { editPemeriksaanKlinik, editPemeriksaanVisit } from '../redux/pemeriksaan/pemeriksaanActions'
import { getPengajuan } from '../redux/pengajuan/pengajuanActions'
import { editRawatInap } from '../redux/rawatInap/rawatInapActions'
import { getUsers } from '../redux/users/usersActions'
import { colors, generateDate, jenis_pengajuan } from './elements/func'

const Pengajuan = ({
  pengajuan, 
  getPengajuan, 
  getUsers, 
  isLoadingPengajuan, 
  isLoadingUsers, 
  users,
  editBedah,
  editPemeriksaanKlinik,
  editPemeriksaanVisit,
  editRawatInap
}) => {

  useEffect(() => {
    getPengajuan()
    
  }, [getPengajuan])

  useEffect(() => {
    getUsers()
  }, [getUsers, pengajuan])

  const findUser = (id) => {
    try {
      return (users.find(i => i._id === id).nama)
    } catch(e) {
      
    }
    
  } 
  
  const autoTolak = (service, data, pengajuan = []) => {
    let n = generateDate()
    let d = new Date(data.tanggal_reservasi)
    console.log('fun')
    if (service === 'pemeriksaan_visit'){
      d = new Date(data.tanggal_reservasi)
      if(n.getTime() > d.getTime()){
        editPemeriksaanVisit(data._id, {status: "ditolak"})
      } 
    } else if (service === 'bedah'){
      console.log(n, d)
      console.log(n.getTime(), d.getTime())
      d = new Date(data.tanggal_reservasi)
      if(n.getTime() > d.getTime()){
        console.log('wew')
        editBedah(data._id, {status: "ditolak"})
      }
    } else if (service === 'rawat_inap'){
      d = new Date(data.tanggal_reservasi)
      if(n.getTime() > d.getTime()){
        editRawatInap(data._id, {status: "ditolak"})
      }
    } else if (service === 'pemeriksaan_klinik'){
      d = new Date(data.tanggal_reservasi)
      if(n.getTime() > d.getTime()){
        editPemeriksaanKlinik(data._id, {status: "ditolak"})
      }
    }
  }


    return (
    <>
      <div className="max-w-md bg-white shadow-lg rounded-lg mx-8 my-4">
        <div className='bg-pink-400 py-2 rounded-lg text-2xl text-center mb-3'>
          <h4 className=''>Pengajuan Reservasi</h4>
        </div>

        
        { isLoadingPengajuan ?
            <div className='text-center pt-4 pb-8 '> 
              <BeatLoader color='#EC4899' loading={isLoadingPengajuan} size={15} />
            </div>
            :
            Object.keys(pengajuan).map(service => {
              return (
                pengajuan[service].map((item, i) => {
                  autoTolak(service, item, pengajuan)
                  return (
                    <div className='flex py-2 text-base' key={i}>
                      <div className='flex-1 text-left pl-4'>
                        {isLoadingUsers ? 
                          <BeatLoader color='#EC4899' loading={isLoadingUsers} size={6} />
                        :
                          <p>{findUser(item.user_id)}</p>
                        }
                      </div>
                      <div className='flex-1 text-center text-sm my-auto'>
                        <p className={`inline px-1 rounded-lg ${colors(service)}`}>{jenis_pengajuan(service)}</p>
                      </div>
                      <div className='flex-1 my-auto text-center text-base font-bold'>
                        <Link to={{
                          pathname:`/pengajuan/${service}/${item._id}`, 
                        }}>
                          <button className='bg-pink-400 py-1 px-4 rounded-lg'>Detail</button>
                        </Link>
                      </div>
                    </div>  
                  )
                })
              )
            })
        
        }          
        <div className='pb-6'></div>
      </div> 
    </>  
  )
}



const mapStateToProps = state => ({
  pengajuan: state.pengajuan.pengajuan,
  isLoadingPengajuan: state.pengajuan.loading,
  users: state.users.users,
  isLoadingUsers: state.users.loading 
})

export default connect(mapStateToProps, {
  getPengajuan,
  getUsers,
  editBedah,
  editPemeriksaanKlinik,
  editPemeriksaanVisit,
  editRawatInap
})(Pengajuan)
