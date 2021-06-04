import { useEffect } from 'react'
import { connect } from 'react-redux'
import { getPemeriksaanVisit } from '../../redux/pemeriksaan/pemeriksaanActions'
import { getUsers } from '../../redux/users/usersActions'
import { BeatLoader } from 'react-spinners'
import Navbar from '../../components/Navbar'
import { tanggal } from '../../components/elements/func'

const BedahAdmin = ({
  pemeriksaan_visit,
  getPemeriksaanVisit,
  loadingPVisit,
  users,
  getUsers,
  loadingUsers
}) => {
  
  useEffect(() => {
    getPemeriksaanVisit()
    getUsers()
  }, [getPemeriksaanVisit, getUsers])
  
  const findUser = (id) => {
    try {
      return (users.find(i => i._id === id).nama)
    } catch(e) {
      
    }
    
  } 

  return (
    <>
      <Navbar backButton={true} />
      <div className="py-1 bg-white shadow-lg rounded-lg mx-2 my-4 sm:px-6 mx-2 lg:px-8 mx-2">
        <h4 className='mt-3 mb-3 text-2xl text-center'>Daftar Reservasi Pemeriksaan Visit</h4>
      </div>
      <div className="flex flex-col shadow-lg mx-1 bg-white">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-pink-400">
                <tr>
                  <th
                    scope="col"
                    className="px-2 py-3 text-left text-xs font-bold text-black uppercase tracking-wider"
                  >
                    Nama
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-3 text-left text-xs font-bold text-black uppercase tracking-wider"
                  >
                    Tanggal Reservasi
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-3 text-left text-xs font-bold text-black uppercase tracking-wider"
                  >
                    Waktu
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-3 text-left text-xs font-bold text-black uppercase tracking-wider"
                  >
                    Alamat
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-3 text-left text-xs font-bold text-black uppercase tracking-wider"
                  >
                    Jenis Hewan
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-3 text-left text-xs font-bold text-black uppercase tracking-wider"
                  >
                    Jumlah Hewan
                  </th>
                </tr>
              </thead>
              {
                  loadingPVisit ? 
                    <>
                    </> 
                  :
                  <tbody className="bg-white divide-y divide-gray-300">
                  {pemeriksaan_visit.filter(item => item.status === 'diterima').map((item, index) => {
                    return (
                      <tr key={index}>
                        <td className="px-2 py-4 whitespace-nowrap text-sm text-black capitalize">
                          {loadingUsers ? 
                            <BeatLoader color='#EC4899' loading={loadingUsers} size={2} />:
                            findUser(item.user_id)
                          }
                        </td>
                        <td className="px-2 py-4 whitespace-nowrap text-sm text-black">
                          {tanggal(item.tanggal_reservasi)}
                        </td>
                        <td className="px-2 py-4 whitespace-nowrap text-sm text-black">
                          {item.waktu}
                        </td>
                        <td className="px-2 py-4 whitespace-nowrap text-sm text-black capitalize">
                          {item.alamat}
                        </td>
                        <td className="px-2 py-4 whitespace-nowrap text-sm text-black capitalize">
                          {item.jenis_hewan}
                        </td>
                        <td className="px-2 py-4 whitespace-nowrap text-sm text-black capitalize">
                          {item.jumlah_hewan}
                        </td>
                      </tr>   
                    )
                  })}
                  </tbody>
                } 
                
              
            </table>
          </div>
        </div>
      </div>
      {
        loadingPVisit && (
        <div className='text-center w-50'>
          <BeatLoader color='#EC4899' loading={loadingPVisit} size={15} />  
        </div>)
      }
    </div>
      

      
      
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    pemeriksaan_visit: state.pemeriksaan_visit.pemeriksaan_visit,
    loadingPVisit: state.pemeriksaan_visit.loading,
    users: state.users.users,
    loadingUsers: state.users.loading 
  }
}

export default connect(mapStateToProps, {
  getPemeriksaanVisit,
  getUsers
})(BedahAdmin)
