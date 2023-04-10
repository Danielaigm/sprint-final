import React, { useEffect, useState } from 'react'
import { ImLocation } from "react-icons/im";
import Sliders from './sliders/Sliders';
import SlidersBtns from './slidersBtns/SlidersBtns';
import { motion } from 'framer-motion';
import './styles.scss'
import { auth } from '../../../firebase/firebaseConfig';
import { AiFillStar } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toggleError } from '../../../redux/actions/loginActions';
import { getRestaurantsAsync } from '../../../redux/actions/restaurantActions';
import { AiOutlineReload } from "react-icons/ai";
import hamburger from '../../../assets/hamburguer.svg'
import pizza from '../../../assets/pizza.svg'
const animation = {
  x: ["-300px", "0px"],
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
const btns = [
  {name: 'All', icon: '',  key: '', value: null },
  {name: 'Fast Food', icon: hamburger, key: 'type', value: 1 },
  {name: 'Pizza', icon: pizza, key: 'type', value: 2},
  {name: 'More Pizza', icon: pizza,key: '', value: null }  
]
const Restaurants = () => {
 
  const [btnSelected, setbtnSelected] = useState({key: '', v: null, current: 0})
  const { user } = useSelector(store => store.login)
  const { restaurants, loading } = useSelector(store => store.restaurants)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleLocation = () => {
    navigate('/updatelocation')
  }
  useEffect(() => {
    dispatch(toggleError(null))
  }, [])
  useEffect(() => {
    console.log(btnSelected)
    dispatch(getRestaurantsAsync({ key: btnSelected.key, value: btnSelected.v }))
  }, [btnSelected])

  useEffect(() => {
    console.log(restaurants)
    if (!restaurants.length) {
      dispatch(getRestaurantsAsync({ key: '', value: null }))
    }

  }, [restaurants])
  return (
    <motion.div className='container flex flex-col gap-2 p-5 '
      initial={{ translateX: '-400px' }}
      transition={{ duration: 0.7 }}
      animate={{ translateX: '0px' }}
    >
      <figure onClick={handleLocation} className='flex '>
        <ImLocation className='text-3xl text-yellow-300' />
        <div>
          <h3 className='text-xs text-yellow-300'>DELIVER TO</h3>
          <h3 className='text-xs'>{user.location ? user.location : ''}</h3>
        </div>
      </figure>
      <Sliders />
      <h2>Restaurants and cafes</h2>
      <SlidersBtns set={setbtnSelected} value={btnSelected} btns={btns} />
      <section className='restaurants h-5/8 w-full flex flex-col gap-8'>
        {restaurants.length !== 0 ?
        <motion.div 
        initial={!loading ? "enter" : "exit"}
        variants={variants}
        animate={loading ? "enter" : "exit"}
        className='flex flex-col gap-4'
        >
    {restaurants.map((item, ind) => (
          <motion.figure 
          onClick={()=> {setTimeout(()=>{
            navigate(`/restaurant/${item.id}`)
          },80) }}
          whileHover={{ scale: 1.0 }} whileTap={{ scale: 0.8 }}
          className='flex ' key={ind}>
            <img src={item.img} className='imgres  w-1/2 ' />
            <div className='flex flex-col justify-center'>
              <h1>{item.name}</h1>
              <figure className='flex'>
                {[...Array(5)].map((_, index) => (
                  <AiFillStar key={index} className={index + 1 > item.calification ? 'text-gray-300' : 'text-yellow-300'} />
                ))}
              </figure>
              <h3>Work time {item.workTime}</h3>
            </div>
          </motion.figure>
        ))    } 
        </motion.div>
        :
        <div className='flex h-full justify-center items-center'> 
        <motion.figure
        initial={{ rotate: '0' }}
        transition={{ duration: 1.8}}
        animate={{ rotate: '800deg' }}
        className='mt-24'>
          <AiOutlineReload className='w-10 h-10 text-black text-8xl' />
          </motion.figure> 
        </div>
        }
      </section>
    </motion.div>
  )
}

export default Restaurants