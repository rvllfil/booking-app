function Bedah() {
  return (
    <>
      <div className="max-w-md py-1 bg-white shadow-lg rounded-lg mx-5 my-4">
        <h4 className='mt-3 mb-3 text-2xl text-center'>Bedah</h4>
      </div>
      <div className="max-w-md pt-4 pb-6 px-2 bg-white shadow-lg rounded-lg mx-5 mt-4 mb-10">
        <form className='px-3'>
          <div className='mt-2'>
            <label className="block text-gray-700 mb-2" htmlFor="username">
              Jenis Hewan
            </label>
            <input
              className="mt-1 block w-full rounded-lg border-1 border-pink-500 focus:outline-none focus:border-white focus:ring-4 focus:ring-pink-400 focus:ring-opacity-60 placeholder-gray-300"
              id="username" type="text" placeholder="kucing/anjing/dll" />
          </div>
          <label className="block text-gray-700 mb-2" htmlFor="username">
            Catatan Dokter
          </label>
          <input
            className="mt-1 block w-full rounded-lg border-1 border-pink-500 focus:outline-none focus:border-white focus:ring-4 focus:ring-pink-400 focus:ring-opacity-60 placeholder-gray-300"
            id="username" type="text" placeholder="penyakit apa, dll" />
          <label className="block py-2">
            <span className="text-gray-700">Pilih Hari</span>
            <select
              className="block w-full mt-1 rounded-lg border-1 border-pink-500 focus:outline-none focus:border-white focus:ring-4 focus:ring-pink-400 focus:ring-opacity-60">
              <option>Senin </option>
              <option>Selasa </option>
              <option>Rabu </option>
              <option>Kamis </option>
            </select>
          </label>
          <label className="block py-2">
            <span className="text-gray-700">Pilih Waktu</span>
            <select
              className="block w-full mt-1 rounded-lg border-1 border-pink-500 focus:outline-none focus:border-white focus:ring-4 focus:ring-pink-400 focus:ring-opacity-60">
              <option>05:00-07:00</option>
              <option>12:00-13:00</option>
              <option>16:00-21:00</option>
            </select>
          </label>
          <button
            className="mt-5 px-5 py-2 w-full text-lg text-white rounded-lg bg-gradient-to-br from-rose-500 to-pink-500 focus:ring-4 focus:ring-pink-500 focus:ring-opacity-50">
            Booking
          </button>
        </form>
      </div>
    </>
  )
}

export default Bedah
