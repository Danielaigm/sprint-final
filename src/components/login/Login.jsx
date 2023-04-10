import React, { useState } from 'react'
import img1 from '../../assets/cel.svg'
import img2 from '../../assets/man.svg'
import img3 from '../../assets/car.svg'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const imgs = [
  {
    img: img1,
    info: 'Choose what to eat choosing from a variety restaurants from the list'
  },
  {
    img: img2,
    info: 'Choose where you want to deliver by indicating on the map' 
  },
  {
    img: img3,
    info: 'We will deliver as soon as possible'
  }
]

const Login = () => {
  const { isLogged } = useSelector(store => store.login)
  const [step, setStep] = useState(0)
const navigate = useNavigate()
  const handleNext = () => {
    if(step < 2){
      setStep(step + 1)
    }else{
      if(isLogged){
        navigate('/restaurants')
      }else{
        navigate('/signIn')
      }
    }
  }
  const variants = {
    enter: { x: 1000 },
    center: { x: 0 },
    exit: { x: -1000 },
  };
  return (
    <div className='container flex flex-col items-center justify-center p-3'>
      <section className='flex flex-col text-center h-2/3 items-center justify-center'>
      <motion.img 
      key={step}
      variants={variants}
      initial='enter'
      animate='center'
      exit='exit'
      transition={{ type: "spring", stiffness: 300, damping: 100 }}
      className='self-center' src={imgs[step].img} alt="" /> 
      <p className='mt-6 mb-10'>{imgs[step].info}</p>
      </section>
      <figure className='flex w-screen h-12 justify-center gap-2'>
        <span onClick={()=> setStep(0)} className={`block h-3 ${step == 0 ? 'w-8 bg-yellow-300' : 'w-3 bg-yellow-200'} rounded-full `}></span>
        <span onClick={()=> setStep(1)} className={`block h-3 ${step == 1 ? 'w-8 bg-yellow-300' : 'w-3 bg-yellow-200'} rounded-full `}></span>
        <span onClick={()=> setStep(2)} className={`block h-3 ${step == 2 ? 'w-8 bg-yellow-300' : 'w-3 bg-yellow-200'} rounded-full `}></span>
      </figure>
      <button onClick={handleNext} className='p-4 bg-yellow-300 rounded-md w-80 flex items-center justify-center font-semibold h-11'>Next</button>
    </div>
  )
}

export default Login