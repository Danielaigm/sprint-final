import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import icon from '../../../assets/logo.png'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toggleError, verifyCodeAsync } from '../../../redux/actions/loginActions'
import { auth } from '../../../firebase/firebaseConfig'
import Swal from 'sweetalert2'
const InsertCode = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const { error } = useSelector(store => store.login)
  const dispatch = useDispatch()
  console.log(error)
  const navigate = useNavigate()

  const onSubmit = (data) => {
    const code = data.a + data.b + data.c + data.d + data.e + data.f
    dispatch(verifyCodeAsync(code))
  }
  useEffect(() => {
    if (error.status ) {
      Swal.fire('Ops!', `Ocurrió un error al realizar tu solicitud ${error.message}`, 'error')
    }else if(error.status === false) {
      Swal.fire('Excelente', `Hemos verificado tu número de teléfono`, 'success').then(() => {
        if (auth.currentUser.displayName && auth.currentUser.photoURL) {
          navigate('/restaurants')
        } else {
          dispatch(toggleError(null))
          navigate('/createaccount')
        }
      })
    }
  }, [error])

  return (
    <motion.section
      initial={{ translateY: '400px' }}
      transition={{ duration: 1 }}
      animate={{ translateY: '0px' }}
      className='h-screen p-4 flex flex-col gap-5'>
      <article className='flex flex-col gap-3 items-center text-center'>
        <img src={icon} className='w-2/6' alt="" />
        <h3 className='font-medium text-xl'>Verification</h3>
        <p className='font-light'>Enter the four digit code from SMS <br /> SMS not recevied Send again?</p>
      </article>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-between h-96 items-center'>
        <label className='flex gap-3 px-3 py-0.5 justify-center'>
          <input maxLength={1} autoFocus {...register('a', { required: 'is required' })} className='w-1/12 border-b-2 outline-none focus:border-b focus:border-black text-center' type="text" />
          <input maxLength={1} {...register('b', { required: 'is required' })} className='w-1/12 border-b-2 outline-none focus:border-b focus:border-black text-center' type="text" />
          <input maxLength={1} {...register('c', { required: 'is required' })} className='w-1/12 border-b-2 outline-none focus:border-b focus:border-black text-center' type="text" />
          <input maxLength={1} {...register('d', { required: 'is required' })} className='w-1/12 border-b-2 outline-none focus:border-b focus:border-black text-center' type="text" />
          <input maxLength={1} {...register('e', { required: 'is required' })} className='w-1/12 border-b-2 outline-none focus:border-b focus:border-black text-center' type="text" />
          <input maxLength={1} {...register('f', { required: 'is required' })} className='w-1/12 border-b-2 outline-none focus:border-b focus:border-black text-center' type="text" />
        </label>
        <button type='submit' className='p-4 bg-yellow-300 rounded-md w-11/12 flex items-center justify-center font-semibold h-11'>Confirm code</button>
      </form>
    </motion.section>
  )
}

export default InsertCode