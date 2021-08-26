import { useEffect } from 'react'
import { connect } from 'react-redux'
import { getUsers } from '../../redux/users/usersActions'
import { BeatLoader } from 'react-spinners'
import Navbar from '../../components/Navbar'
import { moment } from '../../components/elements/func'

const Members = ({
  users,
  getUsers,
  loadingUsers
}) => {
  
  useEffect(() => {
    getUsers()
  }, [getUsers])

  return (
    <>
      <Navbar backButton={true} />
      <div className='lg:px-24'>
        <div className="py-1 bg-white shadow-lg rounded-lg mx-2 my-4 sm:px-6 lg:px-8">
          <h4 className='mt-3 mb-3 text-2xl lg:text-4xl text-center'>Daftar Member</h4>
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
                        className="px-2 py-3 text-left text-sm lg:text-lg font-bold text-black uppercase tracking-wider"
                      >
                        Nama
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 text-left text-sm lg:text-lg font-bold text-black uppercase tracking-wider"
                      >
                        Alamat
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 text-left text-sm lg:text-lg font-bold text-black uppercase tracking-wider"
                      >
                        No. HP
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 text-left text-sm lg:text-lg font-bold text-black uppercase tracking-wider"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 text-left text-sm lg:text-lg font-bold text-black uppercase tracking-wider"
                      >
                        Bergabung Tanggal
                      </th>
                    </tr>
                  </thead>
                  {
                      loadingUsers ? 
                        <>
                        </> 
                      :
                      <tbody className="bg-white divide-y divide-gray-300">
                      {users.filter(user => user.role === 'member').map((user, index) => {
                        return (
                          <tr key={index}>
                            <td className="px-2 py-4 whitespace-nowrap text-sm lg:text-lg text-black capitalize">
                              {user.nama}
                            </td>
                            <td className="px-2 py-4 whitespace-nowrap text-sm lg:text-lg text-black capitalize">
                              {user.alamat}
                            </td>
                            <td className="px-2 py-4 whitespace-nowrap text-sm lg:text-lg text-black">
                              {user.no_hp}
                            </td>
                            <td className="px-2 py-4 whitespace-nowrap text-sm lg:text-lg text-black">
                              {user.email}
                            </td>
                            <td className="px-2 py-4 whitespace-nowrap text-sm lg:text-lg text-black">
                              {moment(user.tanggal_registrasi)}
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
            loadingUsers && (
            <div className='text-center w-50'>
              <BeatLoader color='#EC4899' loading={loadingUsers} size={15} />  
            </div>)
          }
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    users: state.users.users,
    loadingUsers: state.users.loading 
  }
}

export default connect(mapStateToProps, {
  getUsers
})(Members)
