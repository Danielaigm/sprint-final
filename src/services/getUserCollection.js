import { collection, getDocs, query, where } from "firebase/firestore"
import { dataBase } from "../firebase/firebaseConfig"

const collectionName = 'users'
const usersCollection = collection(dataBase, collectionName)
export const getUserCollection = async (uid) => {
  const user = []
  try {
    const q = query(usersCollection, where("uid", "==", uid))
    const userDocs = await getDocs(q)
    userDocs.forEach((doc) => {
      user.push({
        id: doc.id,
        ...doc.data()
      })
    })
    return user[0]
  } catch (error) {
    console.log(error)
  }
}
