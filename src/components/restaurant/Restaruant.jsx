import React, { useEffect, useState } from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from "framer-motion"
import { useDispatch, useSelector } from 'react-redux';
import { AiFillStar } from "react-icons/ai";
import SlidersBtns from '../home/Restaurants/slidersBtns/SlidersBtns';
import { filterCollection } from '../../services/filterCollections';
import { AiOutlineReload } from "react-icons/ai";
import './styles.scss'
import { getMenu, getMenuAsync, getRestaurantsAsync, toggleLoading } from '../../redux/actions/restaurantActions';
const btns = [
  {name: 'All', icon: '',  key: '', value: null },
  {name: 'Salates', key: 'type', value: 0 },
  {name: 'Pizza', key: 'type', value: 1},
  {name: 'More Food', key: '', value: 2 }  
]
const animation = {
  x: ["-400px", "0px"],
  transition: {
    duration: 1
  }
};
const variants = {
  enter: {
    ...animation
  },
  exit: {
    x: "0"
  }
};
 
const Restaruant = () => {
    const {resId} = useParams()
    const navigate = useNavigate()
    const {restaurants, loading, menu} = useSelector(store => store.restaurants)
    const [currentR, setCurrentR] = useState(restaurants.find((item)=> item.id == resId))
    const [btnSelected, setBtnSelected] = useState({name: 'All', icon: '',  key: '', v: null, current: 0 })
    const [loadingA, setLoading] = useState(false)
    const dispatch = useDispatch()
    useEffect(()=>{
    if(restaurants.length == 0){
      filterCollection({key: 'id',collectionName: 'restaurants', value: Number(resId)}).then((res)=>{
       setCurrentR(res.find((item)=> item.id == resId)) 
       console.log(res)
      })
    }
    },[])
    useEffect(()=>{
      setLoading(true)
      setTimeout(()=>{setLoading(false)},800)
      dispatch(getMenuAsync({type: btnSelected.v, key: 'restaurant', value: Number(resId), label: 'type'}))
    },[btnSelected])
    
    return (
    <motion.section
    className='absolute z-10 h-screen w-full bg-white p-3'
    initial={{ translateY: '-300px'}}
    transition={{ duration: 0.5 }}
    animate={{translateY: '0px'}}>
        <figure onClick={()=> navigate(-1)} className='p-2'>
            <IoIosArrowBack />
        </figure>
        <figure 
          className='flex p-4'>
            <img src={currentR?.img} className='imgres  w-1/2 ' />
            <div className='flex flex-col justify-center'>
              <h1 className='text-center text-xl'>{currentR?.name}</h1>
              <p className='text-sm'>{currentR?.description}</p>
              <figure className='flex'>
                {[...Array(5)].map((_, index) => (
                  <AiFillStar key={index} className={index + 1 > currentR?.calification ? 'text-gray-300' : 'text-yellow-300'} />
                ))}
              </figure>
              <h3>Work time {currentR?.workTime}</h3>
            </div>
          </figure>
          <SlidersBtns value={btnSelected} set={setBtnSelected} btns={btns}/>
          <motion.section 
           initial={!loadingA ? "enter" : "exit"}
           variants={variants}
           animate={loadingA ? "enter" : "exit"}
          className='w-full h-auto flex flex-wrap justify-center gap-3 p-4 m-0'>
          {loading ?  
          <div className='flex h-full justify-center items-center'> 
          <motion.figure
          initial={{ rotate: '0' }}
          transition={{ duration: 1.8}}
          animate={{ rotate: '800deg' }}
          className='mt-24'>
            <AiOutlineReload className='w-10 h-10 text-black text-8xl' />
            </motion.figure> 
          </div>
          :
          menu.map((item, index) =>(
            <motion.figure 
            whileHover={{ scale: 1.0 }} whileTap={{ scale: 0.8 }}
            onClick={()=>{navigate(`/dish/${item.id}`)}}
            key={index} className='card'>
              <img className='' src={item.img} />
              <h3>{item.name}</h3>
              <p className='text-gray '>{item.price}</p>
            </motion.figure>
          ))}
          </motion.section>
    </motion.section>
  )
}

export default Restaruant