import Navbar from "../components/Navbar"

function RawatInap() {
  return (
    <>
      <Navbar backButton={true}/>
      <div className="max-w-md py-1 bg-white shadow-lg rounded-lg mx-5 my-4">
        <h4 className='mt-3 mb-3 text-2xl text-center'>Rawat Inap</h4>
      </div>
      <div className="max-w-md pt-4 pb-6 px-2 bg-white shadow-lg rounded-lg mx-5 mt-4 mb-10">
        <form className='px-3'>
          <label className="block py-2">
            <span className="text-gray-700">Jenis Rawat Inap</span>
            <select
              className="block w-full mt-1 rounded-lg border-1 border-pink-500 focus:outline-none focus:border-white focus:ring-4 focus:ring-pink-400 focus:ring-opacity-60">
              <option>Rawat Inap Sakit</option>
              <option>Rawat Inap Sehat</option>
            </select>
          </label>
          <div className='mt-2'>
            <label className="block text-gray-700 mb-2" htmlFor="username">
              Jumlah Kucing
            </label>
            <input
              className="mt-1 block w-full rounded-lg border-1 border-pink-500 focus:outline-none focus:border-white focus:ring-4 focus:ring-pink-400 focus:ring-opacity-60 placeholder-gray-300"
              id="username" type="number" placeholder="0" onKeyDown={ e=> ( e.key === 'e' || e.key === '.' ) &&
            e.preventDefault() }/>
          </div>
          <div className='grid grid-cols-2 gap-2 mt-2'>
            <label className="block py-2 ">
              <span className="text-gray-700">Mulai</span>
              <input type='date' placeholder='Masukan Tanggal'
                className="mt-1 block w-full rounded-lg border-1 border-pink-500 focus:outline-none focus:border-white focus:ring-4 focus:ring-pink-400 focus:ring-opacity-60"
                rows="3"></input>
            </label>
            <label className="block py-2 ">
              <span className="text-gray-700">Sampai</span>
              <input type='date' placeholder='Masukan Tanggal'
                className="mt-1 block w-full rounded-lg border-1 border-pink-500 focus:outline-none focus:border-white focus:ring-4 focus:ring-pink-400 focus:ring-opacity-60"
                rows="3"></input>
            </label>
          </div>
          <div className='mt-4 flex text-xs text-pink-500'>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <p className='ml-2'>Rawat inap hanya dilakukan untuk hewan peliharaan kucing</p>
          </div>

          <button
            className="mt-4 px-5 py-2 w-full text-lg text-white rounded-lg bg-gradient-to-br from-rose-500 to-pink-500 focus:ring-4 focus:ring-pink-500 focus:ring-opacity-50">
            Booking
          </button>
        </form>
      </div>
    </>
  )
}

export default RawatInap
