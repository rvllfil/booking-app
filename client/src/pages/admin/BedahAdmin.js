import { useEffect } from 'react'
import { connect } from 'react-redux'
import Table from '../../components/TableBedah'
import {getBedah} from '../../redux/bedah/bedahActions'

function BedahAdmin({ bedah, getBedah }) {
  useEffect(() => {
    getBedah()
  }, [getBedah])
  
  const bedahs = bedah.bedah
  return (
    <>
      <div className="overflow-x-auto w-full">
        {/* TableBedah */}
        <table
          className="mx-auto max-w-4xl w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300 overflow-hidden">
          <thead className="bg-rose-200">
            <tr className="text-black text-left">
              <th className="font-semibold text-sm uppercase px-6 py-4">
                Nama Member
              </th>
              <th className="font-semibold text-sm uppercase px-6 py-4">
                Jenis Hewan
              </th>
              <th className="font-semibold text-sm uppercase px-6 py-4 text-center">
                Keluhan
              </th>
              <th className="font-semibold text-sm uppercase px-6 py-4 text-center">
                Hari
              </th>
              <th className="font-semibold text-sm uppercase px-6 py-4 text-center">
                Waktu
              </th>
              <th className="font-semibold text-sm uppercase px-6 py-4 text-center">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
          {bedahs.map(({_id, jenis_hewan, keluhan, hari, waktu, status}) => (        
            <Table 
              key={_id}
              jenis_hewan={jenis_hewan}
              keluhan={keluhan}
              hari={hari}
              waktu={waktu}
              status={status}    
            />
          ))}
          </tbody>
        </table>
      </div>
      
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    bedah: state.bedah
  }
}


export default connect(mapStateToProps, { getBedah })(BedahAdmin)
