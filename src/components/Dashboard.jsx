import React, { useEffect } from 'react'
import {AiOutlineUser} from "react-icons/ai"
import {FiLogOut} from "react-icons/fi"

const Dashboard = () => {

    useEffect(()=>{
        if(!localStorage.getItem('selfToken'))
        return window.location.href = "/signin"
    },[])

  return (
    <div>
      <section className='flex float-right border-gray-400'> 
      <a href='/signin'>
        <div className='flex items-center border-2 rounded-md cursor-pointer border-gray-500 mr-[30px] mt-[20px] py-[8px] px-[15px] text-[20px] gap-2'>
          <AiOutlineUser/> <p>Logout</p> <FiLogOut/> 
        </div>
        </a>
      </section>
    </div>

  )
}

export default Dashboard
