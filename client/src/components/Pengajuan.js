import { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { BeatLoader } from 'react-spinners'
import { getPengajuan } from '../redux/pengajuan/pengajuanActions'
import { getUsers } from '../redux/users/usersActions'

const Pengajuan = ({pengajuan, getPengajuan, getUsers, isLoadingPengajuan, isLoadingUsers, users}) => {

  useEffect(() => {
    getPengajuan()
  }, [getPengajuan])

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
          {/* // <div>
          //   <div>{template_nam}</div>
          //   {
          //     templates[template_name].items.map(item => {
          //       return(<div>{item}</div>)
          //     })
          //   }
          // </div> */}
        
        
        <div className='pb-6'></div>
      </div> 
    </>  
  )
}

const colors = (text) => {
  let color
  if (text === 'pemeriksaan_visit'){
    color = 'bg-green-400 bg-opacity-60'
  } else if (text === 'bedah'){
    color = 'bg-blue-400 bg-opacity-60'
  } else if (text === 'rawat_inap'){
    color = 'bg-yellow-400 bg-opacity-60'
  }
  return color
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

const mapStateToProps = state => ({
  pengajuan: state.pengajuan.pengajuan,
  isLoadingPengajuan: state.pengajuan.loading,
  users: state.users.users,
  isLoadingUsers: state.users.loading 
})

export default connect(mapStateToProps, {
  getPengajuan,
  getUsers
})(Pengajuan)
