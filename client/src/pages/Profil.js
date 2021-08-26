import React from 'react'
import { connect } from 'react-redux'
import Navbar from '../components/Navbar'
import { BeatLoader } from 'react-spinners'

const Profil = ({user, isLoading}) => {
  return (
    <>
      <Navbar />
      <div className='min-w-screen flex justify-center'>
        <div className="max-w-md py-1 bg-white shadow-lg rounded-lg mx-5 my-4 w-full">
          <h4 className='text-pink-500 mt-3 mb-3 text-2xl text-center lg:text-4xl'>Profil</h4>
          <div className='px-3 text-lg text'>
            { isLoading ?
              <div className='text-center pt-4 pb-8 '> 
                <BeatLoader color='#EC4899' loading={isLoading} size={15} />
              </div>
            :
              <div>
                <p className='text-base font-bold text-pink-400 lg:text-2xl'>Nama</p>
                <p className='text-base text-black lg:text-2xl'>{user.nama}</p>
                <p className='text-base font-bold text-pink-400 mt-3 lg:text-2xl'>No Hp</p>
                <p className='text-base text-black lg:text-2xl'>{user.no_hp}</p>
                <p className='text-base font-bold text-pink-400 mt-3 lg:text-2xl'>Alamat</p>
                <p className='text-base text-black lg:text-2xl'>{user.alamat}</p>
                <p className='text-base font-bold text-pink-400 mt-3 lg:text-2xl'>email</p>
                <p className='text-base text-black pb-8 lg:text-2xl'>{user.email}</p>
              </div>
            }
          </div>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = state => ({
  user: state.auth.user,
  isLoading: state.auth.isLoading
})

export default connect(mapStateToProps)(Profil)