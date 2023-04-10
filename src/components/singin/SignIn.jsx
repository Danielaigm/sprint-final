import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import icon from '../../assets/logo.png'
import cel from '../../assets/phone.svg'
import { motion } from 'framer-motion'
import { NavLink, useNavigate } from 'react-router-dom'
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import Swal from 'sweetalert2';
import { auth } from '../../firebase/firebaseConfig'
const SignIn = () => {
  const [ind, setInd] = useState('+')
  const generateRecaptcha = () =>{
    try {
      window.recaptchaVerifier = new RecaptchaVerifier('recaptch-container', {
        'size': 'invisible',
        'callback': () => {
        }
      }, auth )
    } catch (error) {
      console.log(error)
    }
  }
  const sendSms = (ind, number, recaptchaVerifier) =>{
    signInWithPhoneNumber(auth, `${ind}${number}`, recaptchaVerifier)
    .then((response)=>{
      window.confirmationResult = response,
      Swal.fire('Excelente', `Te enviaremos un mensaje para confirmar a  ${number}`, 'success').then(()=>{
        navigate('/verifycode')
      })
      })
      .catch((error)=> {
        console.log(error)
        Swal.fire('Ops!', `Ocurrió un error al realizar tu solicitud ${error.message}`, 'error')
      })
  }
  const handleInput = ({target}) =>{
    setInd(target.value)  
    if(target.value == '' || target.value.split('')[0] !== '+'){
      setInd('+')
    }
  }
  const navigate = useNavigate()
  const { register, handleSubmit, formState: {errors}} = useForm()
  const onSubmit = (data) =>{
    generateRecaptcha()
    const appVerifier = window.recaptchaVerifier;
    sendSms(data.ind, data.number, appVerifier)
  }
  
  return (
    <motion.section 
    initial={{translateX: '-400px'}}
    transition={{duration: 1}}
    animate={{translateX: '0px'}}
    className='h-screen p-4 flex flex-col gap-5'>
        <article className='flex flex-col gap-3 items-center text-center'>
            <img src={icon} className='w-2/6' alt="" />
            <h3 className='font-medium text-xl'> Sing in</h3>
            <p className='font-light'>Login or create an account with your phone number to start ordering</p>
        </article>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-between h-96 items-center'>
            <label className='flex gap-3 px-3 py-0.5 border-b border-yellow-200'>
            <img src={cel} alt="" />
            <input {...register('ind', {required: 'Es necesario un indicador de país', pattern: {value: /^[+0-9]{3}$/, message: 'Se necesita un identificador de país'}})} maxLength={3} className='w-2/12 outline-none' type="text" value={ind} onInput={(e)=> handleInput(e)} />
            <input {...register('number', {required: 'Ingrese algún número', pattern: { value: /^[0-9]{10}$/, message: 'Ingresa un número valido'}})} className='outline-none' maxLength={10} type="text" placeholder="Phone number" />
            </label>
            <div className='flex flex-col items-center'>
            {errors.number ? <span className='text-red-500'>{errors.number.message}</span> : <></>}
            {errors.ind ? <span className='text-red-500'>{errors.ind.message}</span> : <></>}
            </div>
            <div className='flex  w-full text-sm p-4'>
              <span>
              También puedes 
               <NavLink to='/loginwithemail' className='text-blue-500 '> ingresar con tu Correo y contraseña</NavLink>
              </span>
            </div>
            <button className='p-4 bg-yellow-300 rounded-md w-11/12 flex items-center justify-center font-semibold h-11'>Login</button>
        </form>

        <div id='recaptch-container'></div>
    
    </motion.section>
  )
}

export default SignIn