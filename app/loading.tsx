import React from 'react'

const loading = () => {
  return (
    <div>
    <div className="w-full h-screen flex flex-col justify-center items-center">
        <h1 className="text-9xl text-slate-200">Loading ..</h1>
    <i className="fa-duotone fa-3x text-[#F9AA5E] animate-sping fa-loader"></i>
    </div>
    </div>
  )
}

export default loading