import React from 'react'
import { connect } from 'react-redux'
import Navbar from '../components/Navbar'
import { BeatLoader } from 'react-spinners'

const Profil = ({user, isLoading}) => {
  return (
    <div>
      <Navbar />
      <div className="max-w-md py-1 bg-white shadow-lg rounded-lg mx-5 my-4">
        <h4 className='text-pink-500 mt-3 mb-3 text-2xl text-center'>Profil</h4>
        <div className='px-3 text-lg text'>
          { isLoading ?
            <div className='text-center pt-4 pb-8 '> 
              <BeatLoader color='#EC4899' loading={isLoading} size={15} />
            </div>
           :
            <div>
              <p className='text-base font-bold text-pink-400 '>Nama</p>
              <p className='text-base text-black'>{user.nama}</p>
              <p className='text-base font-bold text-pink-400 mt-3'>No Hp</p>
              <p className='text-base text-black'>{user.no_hp}</p>
              <p className='text-base font-bold text-pink-400 mt-3'>Alamat</p>
              <p className='text-base text-black'>{user.alamat}</p>
              <p className='text-base font-bold text-pink-400 mt-3'>email</p>
              <p className='text-base text-black pb-8'>{user.email}</p>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.auth.user,
  isLoading: state.auth.isLoading
})

export default connect(mapStateToProps)(Profil)