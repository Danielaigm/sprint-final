import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { NavLink, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { loginWithEmail } from '../../../redux/actions/loginActions'
import Swal from 'sweetalert2'
const LoginWithEmail = () => {
    const {error, user, loading} = useSelector(store => store.login)
    const {register, handleSubmit, formState: {errors}} =useForm()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const onSubmit = (data) => {
      dispatch(loginWithEmail(data))
    }
    useEffect(() => {
        if(error.status){
            Swal.fire({
                icon: 'error',
                title: 'An error occurred while logging in',
                text: 'Try again'
            })
          }else if(error.status === false){
            Swal.fire({
                icon: '',
                title: 'Login success',
                text: `Welcome ${user.name}`
            }).then(()=>{
                navigate('/restaurants')
            })
          }
    }, [error])
    
    return (
        <>
        <motion.section 
        initial={{translateX: '-400px'}}
        transition={{duration: 1}}
        animate={{translateX: '0px'}}
        className='flex flex-col gap-12 p-8 h-screen'>
            <h1 className='font-bold text-3xl'>Login</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col h-full justify-between'>
                <div className='flex flex-col gap-3'>
                    <label className='flex flex-col border-b'>
                        <span className='text-xs text-gray-400'>EMAIL</span>
                        <input {...register('email')}  className='p-1 outline-none focus:border-b focus:border-black' type="text" />
                    </label>
                    <label className='flex flex-col border-b'>
                        <span className='text-xs text-gray-400'>PASSWORD</span>
                        <input {...register('password')} className='p-1 outline-none focus:border-b focus:border-black' type="password" />
                    </label>
                </div>
               
                    <span>¿Aún no tienes cuenta? Puedes <NavLink to='/createaccount' className='text-blue-300'>Crear una</NavLink></span>
                
                <button disabled={loading} type='submit' className={`p-4 bg-yellow-300 rounded-md w-11/12 flex items-center justify-center mx-auto font-semibold h-11 ${loading ? 'bg-red-300' : ''}`}>Login</button>
            </form>
        </motion.section>
        
        </>
    )
}

export default LoginWithEmail