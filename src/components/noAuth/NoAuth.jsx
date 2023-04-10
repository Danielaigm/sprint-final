import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaUserAltSlash } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const NoAuth = () => {
    const navigate = useNavigate()
  return (
    <section className='absolute z-10 flex flex-col justify-center items-center w-full h-full bg-white'>
        <section className='flex flex-col h-1/2 justify-between '>
        <div className='p-5 flex flex-col gap-4 items-center'>
        <FaUserAltSlash className='text-8xl'/>
        <h2 className='text-xl'>You are not logged in</h2>
        </div>
        <article className='flex gap-5'>
        <button onClick={()=> navigate('/login')} className='p-4 bg-yellow-300 rounded-md w-11/12 flex items-center justify-center font-semibold h-11 '>Login</button>
        <button onClick={()=> navigate(-1)} className='p-4 bg-red-300 rounded-md w-11/12 flex items-center justify-center font-semibold h-11'>Back</button>
        </article>
        </section>
    </section>
  )
}

export default NoAuth