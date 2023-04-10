import React, { useEffect } from 'react'
import icon from '../../assets/logo.png'
import {motion} from 'framer-motion'
import { useNavigate } from 'react-router-dom'
const isLogged = false
const Loading = () => {
    
    const navigate = useNavigate()
    useEffect(() => {
        const timer = setTimeout(() => {
            if(isLogged) {
                navigate('/restaurants')
            }else{
                navigate('/login')
            }
        }, 2500);
        return () => clearTimeout(timer);
      }, []);
    
  return (
    <motion.div 
    initial={{ translateX: '-400px' }}
    transition={{ duration: 1 }}
    animate={{ translateX: '0px' }}
    className='w-screen h-screen bg-yellow-300 grid place-items-center'>
        <motion.img 
        initial={{marginRight: '-500px', width:'20%'}} 
        transition={{duration: 2}}
        animate={{marginRight: '0px', width:'50%'}}
       className='w-1/2' src={icon} alt="" />
    </motion.div>
  )
}

export default Loading