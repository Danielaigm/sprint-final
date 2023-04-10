import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateEmail, updatePassword, updatePhoneNumber, updateProfile } from "firebase/auth"
import { addDoc, collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { auth, dataBase } from "../../firebase/firebaseConfig"
import { getUserCollection } from "../../services/getUserCollection";
import { loginTypes } from "../types/types"


const collectionName = 'users';
const userCollection = collection(dataBase, collectionName);

export const loginUser = (user, error) => {
  return {
    type: loginTypes.LOGIN,
    payload: {
      user,
      error
    }
  }
}

const toggleLoading = () => {
  return {
    type: loginTypes.TOGGLE_LOADING,
  }
}

export const toggleError = (data) => {
  return {
    type: loginTypes.TOGGLE_ERROR,
    payload: data
  }
}

export const verifyCodeAsync = (code) => {
  return (dispatch) => {
    window.confirmationResult.confirm(code).then(async (result) => {
      const user = result.user.auth.currentUser;
      const userCollection = await getUserCollection(user.uid);
      dispatch(loginUser({
        ...userCollection
      }, { status: false, message: '' }))
    }).catch((error) => {
      console.log(error)
      dispatch(loginUser({}, { status: true, message: error.message }))
    })
  }
}

export const loginWithEmail = (user) => {
  console.log(user)
  return async (dispatch) => {
    dispatch(toggleLoading())
    try {
      const email = user.email
      const password = user.password
      const userAuth = await signInWithEmailAndPassword(auth, email, password)
      const userCollection = await getUserCollection(userAuth.user.uid);
      console.log(userCollection)
      dispatch(loginUser({
        ...userCollection,
      }, { status: false, message: '' }))
      dispatch(toggleLoading())
    } catch (error) {
      dispatch(toggleLoading())
      dispatch(loginUser({}, { status: true, message: error.message }))
    }
  }
}
export const createUserWithEmailAndPasswordAsync = (data) => {
  return (dispatch) => {
    createUserWithEmailAndPassword(auth, data.email, data.password).then(async ({ user }) => {
      console.log(user)
      await updateProfile(auth.currentUser, {
        displayName: data.name,
        photoURL: data.photo,
        phoneNumber: data.phone
      });
      const newUser = {
        uid: user.auth.currentUser.uid,
        name: data.name,
        email: user.auth.currentUser.email,
        photo: data.photo,
        location: data.location,
        phone: data.phone,
        birthday: data.birthday,
        typeUser: 'client',
        orders: [{}],
        recentSearchs: []
      }
      console.log(newUser)
      const userDocs = await addDoc(userCollection, newUser)
      dispatch(loginUser({ ...newUser, id: userDocs.id }, { status: false, message: '' }))
    }).catch(error => {
      console.log(error)
      dispatch(loginUser({}, { status: true, message: error.message }))
    })
  }
}

export const createUserWithEmailAsync = (data) => {
  return async (dispatch) => {
    dispatch(toggleLoading())
    try {
      const { user } = await createUserWithEmailAndPassword(auth, data.email, data.password)
      console.log(user)
      await updateProfile(auth.currentUser, {
        displayName: data.name,
        photoURL: data.photo,
        phoneNumber: data.phone
      });
      await updatePhoneNumber(auth.currentUser, data.phone)
      const newUser = {
        uid: user.uid,
        name: data.name,
        email: user.email,
        photo: data.photo,
        location: data.location,
        phone: data.phone,
        birthday: data.birthday,
        typeUser: 'client',
        orders: [{}],
        recentSearchs: []
      }
      console.log(newUser)
      const userDocs = await addDoc(userCollection, newUser)
      dispatch(toggleLoading())
      dispatch(loginUser({ ...newUser, id: userDocs.id }, { status: false, message: '' }))
    } catch (error) {
      console.log(error)
      dispatch(toggleLoading())
      dispatch(loginUser({}, { status: true, message: error.message }))
    }
  }
}

export const updateProfileAsync = (user) => {
  return async (dispatch) => {
    dispatch(toggleLoading())
    try {
      console.log(user)
      const userAuth = auth.currentUser
      await updateProfile(userAuth, {
        displayName: user.name,
        photoURL: user.photo,
        phoneNumber: user.phone
      });
      await updatePassword(userAuth, user.password)
      await updateEmail(userAuth, user.email)
      //
      const newUser = {
        uid: userAuth.uid,
        name: user.name,
        email: user.email,
        photo: user.photo,
        location: user.location,
        number: userAuth.phoneNumber,
        birthday: user.birthday,
        typeUser: 'client'
      }
      console.log(newUser)
      const userDocs = await addDoc(userCollection, newUser)
      dispatch(toggleLoading())
      dispatch(loginUser({
        ...newUser,
        id: userDocs.id
      }, { status: false, message: '' }))
    } catch (error) {
      dispatch(toggleLoading())
      dispatch(loginUser({}, { status: true, message: error.message }))
    }

  }
}

const updateLocation = (data) => {
  return {
    type: loginTypes.UPDATE_LOCATION,
    payload: data
  }
}

export const updateLocationAsync = (location) => {
  return async (dispatch) => {
    const currentUser = auth.currentUser;
    dispatch(toggleLoading())
    let lastLocation = '';
    let id;
    try {
      const q = query(userCollection, where("uid", "==", currentUser.uid))
      const userDoc = await getDocs(q)
      userDoc.forEach((user) => {
        id = user.id
        lastLocation = user.data().location
      })
      const userRef = doc(dataBase, collectionName,id)
      await updateDoc(userRef, {location: location})
      dispatch(updateLocation(location))
      dispatch(toggleError(false))
      dispatch(toggleLoading())
    } catch (error) {
      console.log(error)
      dispatch(toggleError(true))
      dispatch(toggleLoading())
      dispatch(updateLocation(lastLocation))
    }
  }
}

export const recentSearchs = (data)=>{
  return {
    type: loginTypes.RECENT_SEARCH,
    payload: data
  }
}

export const updateRecentAsync = (data) => {
  return async (dispatch) => {
    const currentUser = auth.currentUser;
    dispatch(toggleLoading())
    let id;
    let array;
    try {
      const q = query(userCollection, where("uid", "==", currentUser.uid))
      const userDoc = await getDocs(q)
      userDoc.forEach((user) => {
        id = user.id
        array = user.data().recentSearchs
      })
      if(data.delete){
        array = array.filter((item)=> item !== data.value)
      }else{
        if(array[0] == ''){
          array = [data.value]
        }else{
          array = [...array, data.value]
        }
      }
      const userRef = doc(dataBase, collectionName,id)
      await updateDoc(userRef, {recentSearchs: array})
      dispatch(recentSearchs(array))
      dispatch(toggleError(false))
      dispatch(toggleLoading())
    } catch (error) {
      console.log(error)
      dispatch(toggleError(true))
      dispatch(toggleLoading()) 
    }
  }
}

const updateOrder = (data) =>{
  return {
    type: loginTypes.UPDATE_ORDERS,
    payload: data
  }
}

export const updateOrderAsync = (data) =>{
  return async (dispatch) => {
    const currentUser = auth.currentUser;
    dispatch(toggleLoading())
    let id;
    let array;
    try {
      const q = query(userCollection, where("uid", "==", currentUser.uid))
      const userDoc = await getDocs(q)
      userDoc.forEach((user) => {
        id = user.id
        array = user.data().orders
      })
      if(data.delete){
        array = array.filter((item)=> item !== data.value)
      }else{
        if(!array.length){
          array = [data.value]
        }else{
          array = [...array, data.value]
        }
      }
      const userRef = doc(dataBase, collectionName,id)
      await updateDoc(userRef, {orders: array})
      dispatch(updateOrder(array))
      dispatch(toggleError(false))
      dispatch(toggleLoading())
    } catch (error) {
      console.log(error)
      dispatch(toggleError(true))
      dispatch(toggleLoading()) 
    }
  }
}

const logOut = () => {
  return {
    type: loginTypes.LOGOUT,
  }
}

export const logOutAsync = () => {
  return async (dispatch) => {
    try {
      await signOut(auth)
      dispatch(logOut())
    } catch (error) {
      console.log(error)
    }
  }
}

