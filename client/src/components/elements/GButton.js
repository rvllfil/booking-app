import React from 'react'

const GButton = ({onChange, data, groomData}) => {
  const disable = (waktu) => {
    let result = false
    if(groomData.length > 0){
      groomData.map(data => {
        if(data.waktu === waktu) {
          result = true
        }
        return result
      })
    }
    return result
  }
  const penuh = () => {
    if(groomData.length >= 6){
      return true
    }
  }
  const click = (waktu) => data.waktu === waktu ?'px-5 py-2 w-full text-lg text-white rounded-lg bg-gradient-to-br from-rose-500 to-pink-500 focus:outline-none focus:ring-4 focus:ring-pink-500 focus:ring-opacity-50':'px-5 py-2 w-full text-lg text-black bg-white ring-4 ring-pink-400 rounded-lg text-xl'
  
  const opacity = (waktu) => disable(waktu) ? 'opacity-25' : ''

  return (
    <>
    <div className='mt-4 mx-2 grid grid-cols-2 gap-4'>
      <button 
      value='07:00' 
      onClick={onChange} 
      className={ `${click('07:00')} ${opacity('07:00')}`}
      disabled={disable('07:00')}
      >
        07:00
      </button>
      <button 
      value='07:30' 
      onClick={onChange} 
      className={ `${click('07:30')} ${opacity('07:30')}`}
      disabled={disable('07:30')}
      >
        07:30
      </button>
      <button 
      value='08:00' 
      onClick={onChange} 
      className={ `${click('08:00')} ${opacity('08:00')}`}
      disabled={disable('08:00')}
      >
        08:00
      </button>
      <button 
      value='08:30' 
      onClick={onChange} 
      className={ `${click('08:30')} ${opacity('08:30')}`}
      disabled={disable('08:30')}
      >
        08:30
      </button>
      <button 
      value='09:00' 
      onClick={onChange} 
      className={ `${click('09:00')} ${opacity('09:00')}`}
      disabled={disable('09:00')}
      >
        09:00
      </button>
      <button 
      value='09:30' 
      onClick={onChange} 
      className={ `${click('09:30')} ${opacity('09:30')}`}
      disabled={disable('09:30')}
      >
        09:30
      </button>
    </div>
    {
      penuh() ? <div className='mt-5 flex items-center text-base text-red-500'>
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <p className='ml-2 text-lg'>Reservasi grooming untuk minggu ini sudah penuh</p>
    </div>:''
    }
     
    </>
  )
}

export default GButton
