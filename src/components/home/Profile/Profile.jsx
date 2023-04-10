import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { auth } from '../../../firebase/firebaseConfig'
import { logOutAsync } from '../../../redux/actions/loginActions'
import { CiUser } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Profile = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  

  const handleLogOut = () => {
    Swal.fire({
      title: '¿Estás seguro de cerrar sesión?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Cerrar',
      cancelButtonText: 'Permanecer'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(logOutAsync())
        navigate('/')  
      }
    }
    )
  }
  return (
    <section className='p-10 flex flex-col gap-8'>
      <figure className='w-full flex flex-col items-center justify-center'>
        <img className='rounded-full w-20 h-20' src={auth.currentUser?.photoURL} alt="" />
        <h1>{auth.currentUser?.displayName}</h1>
      </figure>
      <section className='flex flex-col gap-5'>
        <article className='flex items-center justify-between bg-gray-100 rounded-lg p-3'>
          <span className='text-md flex items-center gap-5'><CiUser className='text-xl' /> Account edit</span>
          <IoIosArrowForward className='text-xl' />
        </article>
        <article className='flex items-center justify-between bg-gray-100 rounded-lg p-3'>
          <span onClick={handleLogOut} className='text-md flex items-center gap-5'><CiUser className='text-xl' /> LogOut</span>
        </article>
      </section>
    </section>
  )
}

export default Profile