import React from 'react'

function TableBedah({id, jenis_hewan, keluhan, hari, waktu, status}) {
  return (
    <>
      <tr>
        <td className="px-3 py-2">
          <div className="flex items-center space-x-3">
            <div>
              <p>
                Jane Doe
              </p>
              <p className="text-gray-500 text-sm font-semibold tracking-wide">
                jane20doe@mail.com
              </p>
            </div>
          </div>
        </td>
        <td className="px-3 py-2">
          <p>
            {jenis_hewan}
          </p>
        </td>
        <td className="px-3 py-2">
          <span className="rounded-full">
            {keluhan}
          </span>
        </td>
        <td className="px-3 py-2">
          <span className="rounded-full">
            {hari}
          </span>
        </td>
        <td className="px-3 py-2">
          <span className="rounded-full">
            {waktu}
          </span>
        </td>
        <td className="px-3 py-2">
          <span className="text-yellow-800 bg-yellow-200 rounded-full">
            {status}
          </span>
        </td>
      </tr>
    </>
  )
}

export default TableBedah
