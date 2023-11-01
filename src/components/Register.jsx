import React from 'react'
import Particle from './Particle'
import {toast} from 'react-toastify'

const Register = () => {


  const handleRegister = (e) => {
    e.prventDefault()
    toast('You are registered successfully')
  }

  return (
    <div>
      <Particle/>
     
    <section className='mt-[200px]'>
        
       <div className=''>
        <section className='flex justify-center'>        
          <div className='h-[100px] w-[350px] absolute '>
          <h1 className='text-[35px] text-center  bg-gradient-to-r from-[#323232] via-[#1F1E1E] to-[#000000]  text-white rounded-md py-[20px] font-primary border-[#969693] border-[0.2px]'>Register</h1>
        </div>
        </section>

        <section className='flex justify-center'>        

        <div className='h-[430px] w-[400px] bg-gradient-to-r from-[#323232] via-[#1F1E1E] to-[#000000] mt-[35px] rounded-md border-[0.2px] border-[#969693]'>
          <form onSubmit={handleRegister}>
          <h1 className='font-primary w-[320px] bg-white rounded-md m-auto border-[#969693] mt-24 border-[0.2px]'>
            <input placeholder='Your name' type='text' className='p-[10px] w-full rounded-md focus:outline-none' required/>
          </h1>
          <h1 className='font-primary w-[320px] m-auto bg-white rounded-md my-12 border-[#969693] border-[0.2px]'>
            <input placeholder='Your email' type='email' className='p-[10px] w-full rounded-md focus:outline-none' required/>
          </h1>
          <h1 className='font-primary w-[320px] m-auto bg-white rounded-md border-[#969693] border-[0.2px]'>
            <input placeholder='Your password' type='password' className='p-[10px]  w-full rounded-md focus:outline-none' required/>
          </h1>
          <section className='flex justify-center mt-10'>
          <button className='font-primary bg-white rounded-md items-center py-[10px] px-[25px] border-[#969693] border-[0.2px]' value="Apply">Register</button>
          </section>
          </form>
            
        </div>
        </section>
       </div>

    </section>
    </div>
  )
}

export default Register
