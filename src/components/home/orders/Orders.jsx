import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { AiOutlinePlusCircle } from "react-icons/ai";

const Orders = () => {
  const { user } = useSelector(store => store.login)
  const { menu } = useSelector(store => store.restaurants)
 console.log(user.orders)
  return (
    <div>
      {user.orders.length ? 
      <div >
      <h1 className='w-screen text-center'>All orders</h1>
      <section>
        {user.orders.map((item)=>{
          console.log(item)
          console.log(menu)
          const order = menu.filter((it)=> it.id == item.id)
        return <>
         <figure>
          <img src={order.img} alt="" />
          <div>
          <h1>{order.name}</h1>
          <p>{item.price}</p>
          </div>
        </figure> 
        </>
        })}
        
      </section> 
      </div>
      :
      <div className='flex flex-col h-screen items-center justify-center'>
      <NavLink className='text-blue-300' to={'/restaurants'}><AiOutlinePlusCircle className='text-5xl text-black'/></NavLink>
      <h1>Without Orders</h1>
      <h2>look at our <NavLink className='text-blue-300' to={'/restaurants'}> restaurants </NavLink> </h2>
      </div>
      }
    </div>
  )
}

export default Orders