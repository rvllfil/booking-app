import { useEffect, useState } from "react";
import { connect } from "react-redux"
import { addGrooming, getGrooming } from "./../redux/grooming/groomingActions"
import { useHistory } from 'react-router-dom'
import Navbar from "../components/Navbar";
import GButton from "../components/elements/GButton";

function Grooming({
  grooming,
  getGrooming,
  addGrooming,
  groomingLoading
}) {

  useEffect(() => {
    getGrooming()
  }, [getGrooming])


  const [groomingData, setGroomingData] = useState({})

  const initData = {
    waktu: '',
    booked_at: generateDate(),
    tanggal_reservasi: getReservasiDate(generateDate(), 'jumat')
  }

  const [data, setData] = useState(initData)

  useEffect(() => {
    if(!groomingLoading) {
      if(grooming) {
        setGroomingData(groomFilter(grooming, data))
      }
    }
  }, [groomingLoading, grooming, data])

  const waktuChange = (e) => {
    setData({
      ...data,
      waktu: e.target.value
    })
  }  

  const initMsg = {
    waktu: '',
  }

  const [message, setMessage] = useState(initMsg)

  const history = useHistory()

  // console.log("data : ", data)
  // console.log("error : ", message.waktu)


  const validate = () => {
    let err = {}
    let isValid = true
    if (!data.waktu) {
      isValid = false
      err.waktu = 'Harap Pilih Waktu.'
    }
    setMessage(err)
    return isValid
  }

  const onSubmit = (e) => {
    setMessage(initMsg)
    if (validate()){
      console.log(data)
      try {
        addGrooming(data, history)
        setData(initData)
        alert('Berhasil!')
      } catch(err) {
        alert(err.message || err)
      }
    }
  }

  return (
    <>
      <Navbar backButton={true}/>
      <div className="max-w-md py-1 bg-white shadow-lg rounded-lg mx-5 my-4">
        <h4 className='mt-3 text-2xl text-center'>Grooming</h4>
        <div className='mt-5 mb-3 flex items-center text-base text-pink-500 px-5'>
          <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <p className='ml-2 text-lg'>Grooming hanya di hari Jum'at, reservasi dapat dilakukan 2 hari sebelum grooming</p>
        </div>
      </div>
      <div className="max-w-md pt-4 pb-6 px-2 bg-white shadow-lg rounded-lg mx-5 mt-4 mb-10">
        <div className='text-xl text-center'>Pilih Waktu</div>
        <GButton 
          onChange={waktuChange}
          data={data}
          groomData={groomingData}
        />
        <div className='mt-4 text-xl text-red-500'>{message.waktu}</div>
        <button 
          className="mt-8 px-5 py-2 w-full text-lg text-white rounded-lg bg-gradient-to-br from-rose-500 to-pink-500 focus:ring-4 focus:ring-pink-500 focus:ring-opacity-50"
          type='button'
          onClick={onSubmit}
        >
          Booking
        </button>
      </div>
    </>
  )
} 

const day = (hari) => {
  let num = 0
  if(hari.toLowerCase() === 'senin') num = 1
  else if(hari.toLowerCase() === 'selasa') num = 2
  else if(hari.toLowerCase() === 'rabu') num = 3
  else if(hari.toLowerCase() === 'kamis') num = 4
  else if(hari.toLowerCase() === 'jumat') num = 5
  else if(hari.toLowerCase() === 'sabtu') num = 6
  else if(hari.toLowerCase() === 'minggu') num = 7  
  return num
}

const generateDate = () => {
  const date = Date.now()
  const newDate = new Date(date)
  return newDate
}

const getReservasiDate = (booked_date, days) => {
  days = day(days)
  let dateSub
  let result = new Date(booked_date)
  if(result.getDay() < days) {
    dateSub = days - result.getDay()    
  } else if(result.getDay() >= days) {
    dateSub = (days + 7) - result.getDay()
  }
  result.setDate(result.getDate() + dateSub)
  return result
}

const mapStateToProps = (state) => {
  return {
    grooming: state.grooming.grooming,
    groomingLoading: state.grooming.loading
  }
} 

const date = (text) => {
  let d = new Date(text)
  let tanggal = d.getDate()+'-'+d.getMonth()+'-'+d.getFullYear()
  return tanggal
}


const groomFilter = (grooming, data) => {
  let result = grooming.filter(groom => {
    let res
    if(date(groom.tanggal_reservasi) === date(data.tanggal_reservasi)){
      res = {...res, groom}
    }
    return res
  })
  return result 
}

export default connect(mapStateToProps,{
  addGrooming,
  getGrooming
})(Grooming)
