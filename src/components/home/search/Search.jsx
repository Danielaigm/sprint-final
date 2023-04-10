import React, { useEffect, useState } from 'react'
import { BsSearch } from "react-icons/bs";
import { FiRotateCcw } from "react-icons/fi";
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { getMenu, getMenuAsync } from '../../../redux/actions/restaurantActions';
import Results from './results/Results';
import { updateRecentAsync } from '../../../redux/actions/loginActions';
import { MdAutoDelete, MdDelete } from "react-icons/md";



const Search = () => {
  const dispatch = useDispatch()
  const {user} = useSelector(store => store.login)
  const { menu } = useSelector(store=> store.restaurants)
  const [btnInput, setbtnInput] = useState(false)
  useEffect(() => {
    dispatch(getMenu([]))
  }, [])

const {register, handleSubmit, watch} = useForm()
const onSubmit = (data) =>{
  const valid = data.v === false ? false : true
  console.log(data)
  dispatch(getMenuAsync({type: data.name, label: 'name'}))
  setbtnInput(true)
  if(valid){
    console.log(data.name)
    dispatch(updateRecentAsync({delete: false, value: data.name}))
  }
}
  return (
    <motion.div className='p-5 flex flex-col gap-5'
      initial={{ translateX: '-400px' }}
      transition={{ duration: 0.7 }}
      animate={{ translateX: '0px' }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className='rounded-lg bg-gray-100 flex justify-between items-center p-3 gap-3 w-5/8'>
          <div className='flex items-center gap-3'>
          <BsSearch />
          <input {...register('name')} onInput={()=>setbtnInput(false)} type="text" className='bg-transparent outline-none' placeholder='Search for a dish' />
          </div>
          <div className='flex items-center'>
          {btnInput ?<MdDelete onClick={()=> window.location.reload()} />: ''}
          <button type='submit'></button>
          </div>
        </label>
      </form>
      {!menu.length ? 
      <>
        {user.recentSearchs.length ? <section>
        <h2 className='text-xl text-black-100'>Recent searches</h2>
        <section>
          {user.recentSearchs.map((item, ind)=>(   
          <div key={ind} onClick={()=> onSubmit({name: item, v: false})} className='flex justify-between'>
            <div className='flex items-center gap-3'>
            <FiRotateCcw />
            <p>{item}</p>
            </div>
            <MdAutoDelete onClick={()=> dispatch(updateRecentAsync({delete: true, value: item}))}/>
          </div>
          ))}
        </section>
        </section> : 
        <div></div>
        }
      </>
      :
      <section className='h-96 overflow-y-scroll w-full'>
        {menu.map((item)=>( 
        <Results id={item.id} img={item.img} name={item.name} price={item.price}/>
        ))}
      </section>
    }
      
    </motion.div>
  )
}

export default Search