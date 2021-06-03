import { useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router'
import { BeatLoader } from 'react-spinners'
import { getOneRawatInap, editRawatInap } from '../redux/rawatInap/rawatInapActions'
import { getUser } from '../redux/users/usersActions'
import { moment } from './elements/func'


const PengajuanRawatInap = ({
  id,
  rawatInap,
  user,
  getUser,
  getOneRawatInap,
  editRawatInap,
  isLoadingRawatInap,
  isLoadingUser
}) => {  
  useEffect(() => {
    getOneRawatInap(id)
  }, [getOneRawatInap, id])
 
  useEffect(() => {
    if(!isLoadingRawatInap) {
      getUser(rawatInap.user_id)
    }
  }, [getUser, rawatInap, isLoadingRawatInap])


  const history = useHistory()
  const onSubmit = (e) => {
    e.preventDefault()
    editRawatInap(
      id, 
      { 
        status: 'diterima', 
        tanggal_reservasi: rawatInap.tanggal_masuk
      },
      history
    )
  }

  const onTolak = () => {
    if(window.confirm("apakah anda yang yakin?")) {
      editRawatInap(
        id, 
        {
          status:'ditolak', 
          tanggal_reservasi: rawatInap.tanggal_masuk 
        }, 
        history)
    }
  }
  
  return (
    <>
      {
        isLoadingRawatInap ? 
        <div className='text-center pt-4 pb-8 '> 
          <BeatLoader color='#EC4899' loading={isLoadingRawatInap} size={15} />
        </div> :
        <div>
          <p className='mt-2 text-lg font-bold text-pink-400 '>Nama</p>
          {  isLoadingUser ? 
          <div> 
            <BeatLoader color='#EC4899' loading={isLoadingUser} size={8} />
          </div> :
          <>
            <p className='text-lg text-black'>{user.nama}</p>
          </>
          }
          <p className='mt-2 text-lg font-bold text-pink-400 '>Jenis Rawat Inap</p>
          <p className='text-lg text-black'>{rawatInap.jenis_rawat_inap}</p>
          <p className='mt-2 text-lg font-bold text-pink-400 '>Jumlah</p>
          <p className='text-lg text-black'>{rawatInap.jumlah}</p>
          <p className='mt-2 text-lg font-bold text-pink-400 '>Tanggal Masuk</p>
          <p className='text-lg text-black'>{moment(rawatInap.tanggal_masuk)}</p>
          <p className='mt-2 text-lg font-bold text-pink-400 '>Tanggal Keluar</p>
          <p className='mb-10 text-lg text-black'>{moment(rawatInap.tanggal_keluar)}</p>
          <form action="post" onSubmit={onSubmit}>
          <div className='flex flex-row-reverse'>
              <button
                type='submit'
                className="order-last mt-5 px-5 py-2 w-1/3 text-lg text-white rounded-lg bg-gradient-to-br from-rose-500 to-pink-500 focus:ring-4 focus:ring-pink-500 focus:ring-opacity-50">
                Terima
              </button>
              <button
                type='button'
                className="ml-5 mt-5 px-5 py-2 w-1/3 text-lg text-white rounded-lg bg-red-500 focus:ring-4 focus:ring-pink-500 focus:ring-opacity-50"
                onClick={onTolak}
              >
                Tolak
              </button>
            </div>
          </form>
        </div>
      }      
    </>
  )
}

const mapStateToProps = state => ({
  user: state.users.users,
  rawatInap: state.rawat_inap.rawatInap,
  isLoadingRawatInap: state.rawat_inap.loading,
  isLoadingUser: state.users.loading 
})

export default connect(mapStateToProps, {
  getUser,
  getOneRawatInap,
  editRawatInap
})(PengajuanRawatInap)
