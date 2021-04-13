import React from 'react'

function Input() {
  return (
    <div className="relative flex w-full flex-wrap items-stretch mb-3 px-3">
      <input type="text" placeholder="" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 shadow outline-none focus:outline-none focus:ring focus:ring-rose-400 focus:border-pink-400 w-full pr-10"/>
      <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
      <i className="fas fa-user"></i>
      </span>
    </div>
  )
}

export default Input
