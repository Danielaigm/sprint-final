import React, { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase/firebaseConfig'
import NoAuth from '../components/noAuth/NoAuth'

const PrivateRoutes = ({children}) => {
  const [userAuth, setUserAuth] = useState(false)
  useEffect(() => {
    onAuthStateChanged(auth, (user)=> {
        if(user){
            setUserAuth(true)
        }else{
            setUserAuth(false)
        }
    })
  }, [])

  return (
    <>
    {userAuth ? 
    children:
      <NoAuth/>
    }
    </>
  )
  
}

export default PrivateRoutes