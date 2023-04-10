import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { ImLocation } from "react-icons/im";
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { motion } from "framer-motion"
import { updateLocationAsync } from '../../../redux/actions/loginActions';
import Swal from 'sweetalert2';
const UpdateLocation = () => {
    const { register, handleSubmit } = useForm()
    const { user, error, loading } = useSelector(store => store.login)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onSubmit = (data) => {
        dispatch(updateLocationAsync(data.location))
    }

    useEffect(()=>{
        if(error.status){
        Swal.fire('Ops!', 'Error al actualizar la locación', 'error')
        }else if(error.status === false){
            Swal.fire('Excelente', 'Se ha actualizado tu locación exitosamente', 'success').then(()=>{
                navigate(-1)
            })
        }
    },[error])
    return (
        <motion.section
            initial={{ translateX: '-400px' }}
            transition={{ duration: 0.7 }}
            animate={{ translateX: '0px' }}
            className='absolute z-10 flex flex-col items-center w-full h-full bg-white'>
            <div onClick={() => navigate(-1)} className='self-start p-4'>
                <IoIosArrowBack className='text-2xl' />
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col h-full w-full justify-between p-10'>
                <div className='flex flex-col gap-8'>
                    <span className='flex items-center text-center gap-5'><ImLocation className='text-3xl text-yellow-300' /> Current Location: <br /> {user.location}</span>
                    <label className='flex gap-5'>
                        <ImLocation className='text-3xl text-yellow-300' />
                        <input {...register('location', {required: ''})} type="text" className='w-full border-b-2' placeholder='Your new location' />
                    </label>
                </div>
                <button disabled={loading} className='p-4 bg-yellow-300 rounded-md w-11/12 flex items-center justify-center font-semibold h-11' type='submit'>Update Location</button>
            </form>
        </motion.section>
    )
}

export default UpdateLocation