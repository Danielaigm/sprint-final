import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from '../components/home/Home'
import Loading from '../components/loading/Loading'
import Restaurants from '../components/home/Restaurants/Restaurants'
import Profile from '../components/home/Profile/Profile'
import Search from '../components/home/search/Search'
import Orders from '../components/home/orders/Orders'
import Login from '../components/login/Login'
import SingIn from '../components/singin/SignIn'
import InsertCode from '../components/singin/insertCode/InsertCode'
import CreateAccount from '../components/singin/createAccocunt/CreateAccount'
import LoginWithEmail from '../components/login/loginWithEmail/LoginWithEmail'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase/firebaseConfig'
import { useDispatch } from 'react-redux'
import { loginUser, toggleError } from '../redux/actions/loginActions'
import PrivateRoutes from './PrivateRoutes'
import { getUserCollection } from '../services/getUserCollection'
import UpdateLocation from '../components/home/updateLocation/UpdateLocation'
import Restaruant from '../components/restaurant/Restaruant'
import Dishes from '../components/restaurant/dishes/Dishes'
const RouterDom = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        onAuthStateChanged(auth, (user => {
            if (user) {
                getUserCollection(user.uid).then((response) => {
                    dispatch(loginUser(response, { status: null, message: '' }))
                }).catch((error) => {
                    dispatch(loginUser({}, { status: true, message: error.message }))
                })
            } else {
                console.log('not logged')
            }
        }))
    }, [])
   
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} >
                    <Route path='/' element={<Loading />} />
                    <Route path='restaurants' element={<Restaurants />} />
                    <Route path='profile' element={<PrivateRoutes><Profile /></PrivateRoutes>} />
                    <Route path='search' element={<Search />} />
                    <Route path='orders' element={<Orders />} />
                    <Route path='updatelocation' element={<UpdateLocation />} />
                    <Route path='restaurant/:resId' element={<Restaruant/>}/>
                    <Route path='dish/:dishId' element={<Dishes/>}/>
                </Route>
                <Route path='/login' element={<Login />} />
                <Route path='/loginwithemail' element={<LoginWithEmail />} />
                <Route path='/signin' element={<SingIn />} />
                <Route path='/verifycode' element={<InsertCode />} />
                <Route path='/createaccount' element={<CreateAccount />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouterDom