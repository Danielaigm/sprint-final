import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import time from '../../../assets/time.svg'
import { IoIosArrowBack } from "react-icons/io";
import { motion } from 'framer-motion'
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateOrderAsync } from '../../../redux/actions/loginActions';

const animation = {
    translateY: "3px",
    transition: {
      duration: 0.2
    }
  };
  const variants = {
    enter: {
      ...animation
    },
    exit: {
        translateY: "-30px"
    }
  };
const Dishes = () => {
    const navigate = useNavigate()
    const { dishId } = useParams()
    const { menu } = useSelector(store => store.restaurants)
    const { error } = useSelector(store => store.login)
    const [dish, setDish] = useState(menu.find((item)=> item.id == dishId))
    const [hover, setHover] = useState(false)
    const [counter, setCounter] = useState(0)
    const [price, setPrice] = useState(0)
    const [aditions, setAditions] = useState([])
   const dispatch = useDispatch()
    const handlePrice = (data) =>{  
      if(data.target.checked){
        setPrice(price + data.price)
        setAditions([...aditions, data.target.value])
      }else{
        setPrice(price - data.price)
        const array = aditions.filter(item => item !== data.target.value)
        setAditions(array)
      }
    }
    useEffect(() => {
      console.log(aditions)
    }, [aditions])
    
    const handleAdd = () =>{
      Swal.fire({title: 'sure to add this order?',
      showCancelButton: true,
      confirmButtonText: 'Add',
      confirmButtonColor: '#ffdf00',
      cancelButtonColor: '#aaa'
    }).then((res)=>{ 
      if(res.isConfirmed){
      dispatch(updateOrderAsync({value: {id: dishId, amount: counter , price: price, aditions: aditions}, delete: false}))
      if(!error.status){
        toast.success("Added to order", {
          position: "top-right",
          autoClose: 1300,
          hideProgressBar: true,
        });
      }
      }
  })
    }
  const handleCounter = (type) =>{
    if(type == '+'){
      setCounter(counter+1)
      if(counter+1 == 1){
        setPrice(price + dish.price)
      }else{
        setPrice(price*(counter+1))
      }
    }else{
      if(counter-1 > 0){
        setCounter(counter-1)
        const minPrice = price / counter
        setPrice(price - minPrice)
      }else if(counter-1 == 0){
        setCounter(counter-1)
        setPrice(price - dish.price)
      }
    }
  }
  return (
    <div className='absolute lef-2 top-2 w-full h-full bg-white z-10'>
        <img src={dish.img} onMouseLeave={()=> setHover(false)} onMouseEnter={()=> setHover(true)} className='w-full h-1/2 object-cover rounded-md' />
        <motion.div 
        initial={ !hover ? "enter" : "exit"}
        variants={variants}
        onMouseEnter={()=> setHover(true)}
        animate={hover ? "enter" : "exit"}
        className='absolute cursor-pointer top-2 left-2 text-white flex items-center' onClick={()=>{navigate(-1)}}>
        <IoIosArrowBack className='text-2xl' />
        <span className='font-semibold'>Back</span>
        </motion.div>
        <section className='p-4 flex flex-col justify-between h-1/2 items-center'>
            <div className='flex flex-col gap-3'>
            <article className='flex w-full justify-between'>
            <h1 className='font-semibold text-xl'>{dish.name}</h1>
            <figure className='flex w-1/5 items-center gap-2'>
            <img src={time} alt="" />
            <p>10-15</p>
            </figure>
            </article>
            <p>{dish.description}</p>
            <section>
            <h3 className='text-gray-400'>Aditional Ingredients</h3>
                {dish.aditions.map((item, ind)=>(
                    <figure key={ind} className='flex justify-between'>
                        <div className='flex gap-4'>
                        <input value={item.name} onInput={(e)=> handlePrice({price: item.price, target: e.target})} type="checkbox" />
                        <h2>{item.name}</h2>
                        </div>
                        <p>${item.price}</p>
                    </figure>
                ))}
            </section>
            </div>
            <div className='flex gap-2 w-full items-center gap-5 justify-center'>
                <figure className='flex gap-7 bg-gray-300 w-1/3 p-2 rounded-md justify-center'>
                    <span className='cursor-pointer ' onClick={()=> handleCounter('-')}>-</span>
                    <p>{counter}</p>
                    <span className='cursor-pointer' onClick={()=> handleCounter('+')}>+</span>
                </figure>
                    <button disabled={counter == 0 ? true : false} onClick={()=> handleAdd()} className='p-2 bg-yellow-400 rounded-md flex justify-between w-1/2'>Add <span>${price}</span></button>
            </div>
        </section>
        <ToastContainer />
    </div>
  )
}

export default Dishes