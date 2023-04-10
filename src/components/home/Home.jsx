import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import FooterHome from './footerHome/FooterHome'
import './styles.scss'
import { useDispatch } from 'react-redux'
import { toggleError } from '../../redux/actions/loginActions'
const Home = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(toggleError(null))
},[])
  return (
    <div className='container'>
      <section className=''>
        <Outlet/>
      </section>
      <section className='absolute bottom-0'>
        <FooterHome/>
      </section>
    </div>
  )
}

export default Home