import { connect } from 'react-redux'
import {getBedah} from '../../redux/bedah/bedahActions'

function BedahAdmin({ bedah }) {
  return (
    <>
      {bedah.map(({id, jenis_hewan, keluhan, hari, waktu}) => (
        <div key={id} className='mt-5 mx-3'>
          <h2>{jenis_hewan}</h2>
          <h2>{keluhan}</h2>
          <h2>{hari}</h2>
          <h2>{waktu}</h2>
        </div>
      ))}
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    bedah: state.bedah.bedah
  }
}


export default connect(mapStateToProps, { getBedah })(BedahAdmin)
