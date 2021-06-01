import { connect } from 'react-redux'
import { getJanjiTemu } from '../redux/janjiTemu/actions'
import Navbar from '../components/Navbar'
import { useEffect } from 'react'
import { BeatLoader } from 'react-spinners'
import JanjiRawatInap from '../components/JanjiRawatInap'
import JanjiPVisit from '../components/JanjiPVisit'
import JanjiBedah from '../components/JanjiBedah'
import JanjiPKlinik from '../components/JanjiPKlinik'

const JanjiTemu = ({
  janji,
  getJanjiTemu,
  janjiLoading,
  user,
  userLoading
}) => {
  useEffect(() => {
    if(!userLoading) {
      getJanjiTemu(user._id)
    }
  }, [userLoading, user, getJanjiTemu])

  const view = (service, data) => {
    if(service === 'rawat_inap') {
      return <JanjiRawatInap data={data} service={service}/>
    } else if(service === 'pemeriksaan_visit') {
      return <JanjiPVisit data={data} service={service}/>
    } else if(service === 'pemeriksaan_klinik') {
      return <JanjiPKlinik data={data} service={service}/>
    }else if(service === 'bedah') {
      return <JanjiBedah data={data} service={service}/>
    } 
  }

  return (
    <>
     <Navbar backButton={true} />
      <div className="max-w-md py-1 bg-white shadow-lg rounded-lg mx-5 my-4">
        <h4 className='mt-3 mb-3 text-2xl text-center'>Daftar Janji Temu</h4>
      </div>
      { janjiLoading ?
      <div className="max-w-md pt-4 pb-6 px-2 bg-white shadow-lg rounded-lg mx-5 mt-3">
        <div className='text-center pt-4 pb-8 '> 
          <BeatLoader color='#EC4899' loading={janjiLoading} size={15} />
        </div>
      </div> :
          Object.keys(janji).map(service => {
            return (
              janji[service].map((item, i) => {
                return (
                  !item.tanggal_reservasi 
                  ? 
                  <div key={i} className="max-w-md pt-4 pb-4 px-2 bg-white shadow-lg rounded-lg mx-5 mt-3">
                    {view(service, item)}
                  </div> 
                  :
                  compareDate(date(item.tanggal_reservasi)) ? 
                  <div key={i} className="max-w-md pt-4 pb-4 px-2 bg-white shadow-lg rounded-lg mx-5 mt-3">
                    {view(service, item)}
                  </div> 
                  :<div key={i}>{service}</div>       
                )
              })
            )
          })
        }
       
    </>
  )
}

const compareDate = (date1) => {
  let date2 = Date.now()
  if(date2 > date1) {
    return false
  } else if(date2 < date1) {
    return true
  } 
}

const date = (date) => {
  let result = new Date(date)
  return result.getTime() 
}

const mapStateToProps = (state) => {
  return {
    janji: state.janjiTemu.janjiTemu,
    janjiLoading: state.janjiTemu.loading,
    user: state.auth.user,
    userLoading: state.auth.loading
  }
}

export default connect(mapStateToProps, {
  getJanjiTemu
})(JanjiTemu)