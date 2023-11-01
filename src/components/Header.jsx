import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <div className='flex justify-end'>
      <div className=' h-[80px] w-[295px] py-[16px] px-[20px] mt-3 mr-3  bg-gradient-to-r from-[#323232] via-[#1F1E1E] to-[#000000] border-[#969693] border-[0.2px]'>
        <Link to={"/"}>
        <button className='font-primary hover:border-b-4 border-red-600 hover:duration-700  bg-black text-white items-center py-[10px] px-[25px] text-[18px] '>Register</button></Link>
        <Link to={"/signin"}>
        <button className='font-primary bg-white hover:border-b-4 border-red-600 hover:duration-700  items-center py-[10px] px-[25px] text-[18px]'>Signin</button>
        </Link>
        </div>
        </div>
    </div>
  )
}

export default Header
