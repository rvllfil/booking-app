import { useEffect } from 'react'
import { connect } from 'react-redux'
import { BeatLoader } from 'react-spinners'
import { colors, compareDate, jenis_pengajuan } from '../components/elements/func'
import { getReservasi } from '../redux/reservasi/actions'
import { getUsers } from '../redux/users/usersActions'

const Reservasi = ({
  reservasi,
  reservasiLoading,
  getReservasi,
  users,
  getUsers,
  loadingUsers
}) => {
  useEffect(() => {
    getReservasi()
    
  }, [getReservasi])

  useEffect(() => {
    getUsers()
  }, [getUsers])

  const findUser = (id) => {
    try {
      return (users.find(i => i._id === id).nama)
    } catch(e) {
      
    }
    
  } 

  return (
    <>
      <div className="max-w-md bg-white shadow-lg rounded-lg mx-2 my-4 w-full">
        <div className='bg-pink-400 py-2 rounded-t-lg text-2xl text-center mb-3'>
          <h4 className=''>Reservasi Hari Ini</h4>
        </div>

        
        { reservasiLoading ?
            <div className='text-center pt-4 pb-8 '> 
              <BeatLoader color='#EC4899' loading={reservasiLoading} size={15} />
            </div>
            :
            Object.keys(reservasi).map(service => {
              return (
                reservasi[service].map((item, i) => {
                  return (
                    compareDate(item.tanggal_reservasi) ?
                    <div className='flex py-2 text-base' key={i}>
                      <div className='flex-1 text-left pl-4'>
                        {loadingUsers ? 
                          <BeatLoader color='#EC4899' loading={loadingUsers} size={6} />
                        :
                          <p className='capitalize'>{findUser(item.user_id)}</p>
                        }
                      </div>
                      <div className='flex-1 text-center text-sm my-auto'>
                        <p className={`inline px-1 rounded-lg ${colors(service)}`}>{jenis_pengajuan(service)}</p>
                      </div>
                      <div className='flex-1 my-auto text-center text-base font-bold'>
                        {!item.waktu ? '': item.waktu}
                      </div>
                    </div> : ''  
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


const mapStateToProps = (state) => {
  return {
    reservasi: state.reservasi.reservasi,
    reservasiLoading: state.reservasi.loading,
    users: state.users.users,
    loadingUsers: state.users.loading 
  }
}

export default connect(mapStateToProps, {
  getReservasi,
  getUsers
})(Reservasi)
