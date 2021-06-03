import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router'
import { BeatLoader } from 'react-spinners'
import { getOnePemeriksaanVisit, editPemeriksaanVisit } from '../redux/pemeriksaan/pemeriksaanActions'
import { getUser } from '../redux/users/usersActions'
import { moment } from './elements/func'

const PengajuanPVisit = ({
  id, 
  pvisit, 
  user, 
  getUser, 
  getOnePemeriksaanVisit,
  editPemeriksaanVisit, 
  isLoadingPVisit, 
  isLoadingUser
}) => {
  useEffect(() => {
    getOnePemeriksaanVisit(id)
  }, [getOnePemeriksaanVisit, id])

  useEffect(() => {
    if(!isLoadingPVisit) {
      getUser(pvisit.user_id)
    }
  }, [getUser, pvisit, isLoadingPVisit])

  const [message, setMessage] = useState('')
  const [data, setData] = useState({
    waktu: '',
    status: '',
  })
  
  const validate = () => {
    let err = {}
    let isValid = true
    if (!data.waktu) {
      isValid = false
      err.waktu = 'Harap masukan waktu.'
    }
    setMessage(err)
    return isValid
  }

  const onChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
      'status': 'diterima'
    })
  }

  const history = useHistory()
  const onSubmit = (e) => {
    e.preventDefault()
    
    if(validate()){
      console.log(data)
      editPemeriksaanVisit(id, data, history)
    }
  }

  const onTolak = () => {
    if(window.confirm("apakah anda yang yakin?")) {
      editPemeriksaanVisit(id, { status:'ditolak' }, history)
    }
  }

  return (
    <>
      {
        isLoadingPVisit ? 
        <div className='text-center pt-4 pb-8 '> 
          <BeatLoader color='#EC4899' loading={isLoadingPVisit} size={15} />
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
          <p className='mt-2 text-lg font-bold text-pink-400 '>Jenis Hewan</p>
          <p className='text-lg text-black'>{pvisit.jenis_hewan}</p>
          <p className='mt-2 text-lg font-bold text-pink-400 '>Jumlah Hewan</p>
          <p className='text-lg text-black'>{pvisit.jumlah_hewan}</p>
          <p className='mt-2 text-lg font-bold text-pink-400 '>Tanggal Reservasi</p>
          <p className='text-lg text-black'>{moment(pvisit.tanggal_reservasi)}</p>
          <p className='mt-2 text-lg font-bold text-pink-400 '>Alamat</p>
          <p className='text-lg text-black'>{pvisit.alamat}</p>
          
          <form action="post" onSubmit={onSubmit}>
            <div className='mt-5'>
              <label className="text-xl block text-gray-700 mb-2">
                Waktu
              </label>
              <input
                className="mt-1 block w-full rounded-lg border-1 border-pink-500 focus:outline-none focus:border-white focus:ring-4 focus:ring-pink-400 focus:ring-opacity-60 placeholder-gray-300"
                type="text" placeholder="Waktu" onChange={onChange} name='waktu'/>
              <div className='text-xs text-red-500'>{message.waktu}</div>
            </div>
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
  pvisit: state.pemeriksaan_visit.pemeriksaan_visit,
  isLoadingPVisit: state.pemeriksaan_visit.loading,
  isLoadingUser: state.users.loading 
})

export default connect(mapStateToProps, {
  getUser,
  getOnePemeriksaanVisit,
  editPemeriksaanVisit
})(PengajuanPVisit)
