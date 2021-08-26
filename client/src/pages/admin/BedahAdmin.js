import { useEffect } from 'react'
import { connect } from 'react-redux'
import { getBedah } from '../../redux/bedah/bedahActions'
import { getUsers } from '../../redux/users/usersActions'
import { BeatLoader } from 'react-spinners'
import Navbar from '../../components/Navbar'
import { tanggal } from '../../components/elements/func'

const BedahAdmin = ({
  bedah,
  getBedah,
  loadingBedah,
  users,
  getUsers,
  loadingUsers
}) => {
  
  useEffect(() => {
    getBedah()
    getUsers()
  }, [getBedah, getUsers])
  
  const findUser = (id) => {
    try {
      return (users.find(i => i._id === id).nama)
    } catch(e) {
      
    }
    
  } 

  return (
    <>
      <Navbar backButton={true} />
      <div className='lg:px-24'>
        <div className="py-1 bg-white shadow-lg rounded-lg mx-2 my-4 sm:px-6 lg:px-8">
          <h4 className='mt-3 mb-3 text-2xl lg:text-4xl text-center'>Daftar Reservasi Bedah</h4>
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
                      className="px-2 py-3 text-left text-xs lg:text-lg font-bold text-black uppercase tracking-wider"
                    >
                      Nama
                    </th>
                    <th
                      scope="col"
                      className="px-2 py-3 text-left text-xs lg:text-lg font-bold text-black uppercase tracking-wider"
                    >
                      Tanggal Reservasi
                    </th>
                    <th
                      scope="col"
                      className="px-2 py-3 text-left text-xs lg:text-lg font-bold text-black uppercase tracking-wider"
                    >
                      Waktu
                    </th>
                    <th
                      scope="col"
                      className="px-2 py-3 text-left text-xs lg:text-lg font-bold text-black uppercase tracking-wider"
                    >
                      Jenis Hewan
                    </th>
                    <th
                      scope="col"
                      className="px-2 py-3 text-left text-xs lg:text-lg font-bold text-black uppercase tracking-wider"
                    >
                      Keluhan
                    </th>
                  </tr>
                </thead>
                {
                    loadingBedah ? 
                      <>
                      </> 
                    :
                    <tbody className="bg-white divide-y divide-gray-300">
                    {bedah.filter(item => item.status === 'diterima').map((item, index) => {
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
                            {item.jenis_hewan}
                          </td>
                          <td className="px-2 py-4 whitespace-nowrap text-sm text-black capitalize">
                            {item.keluhan}
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
          loadingBedah && (
          <div className='text-center w-50'>
            <BeatLoader color='#EC4899' loading={loadingBedah} size={15} />  
          </div>)
        }
      </div>
    </div>
      

      
      
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    bedah: state.bedah.bedah,
    loadingBedah: state.bedah.loading,
    users: state.users.users,
    loadingUsers: state.users.loading 
  }
}

export default connect(mapStateToProps, {
  getBedah,
  getUsers
})(BedahAdmin)
