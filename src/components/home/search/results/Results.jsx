import React from 'react'
import { useNavigate } from 'react-router-dom'

const Results = ({img, name, price, id}) => {
  const navigate = useNavigate()
    return (
    <figure onClick={()=>navigate(`/dish/${id}`)} className='flex gap-3 items-center w-full h-1/5'>
        <img src={img} alt="" className='w-1/5 rounded-md h-16 object-cover'/>
        <div className='flex flex-col gap-2'>
            <h2>{name}</h2>
            <p className='text-gray-400'>${price}</p>
        </div>
    </figure>
  )
}

export default Results