import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDss8c37CKXnL-BdEhxZuSbZLsZwS75r2M",
    authDomain: "sprint4-50906.firebaseapp.com",
    projectId: "sprint4-50906",
    storageBucket: "sprint4-50906.appspot.com",
    messagingSenderId: "409594306771",
    appId: "1:409594306771:web:40f1c9d211ebb38be77426",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const dataBase = getFirestore(app);
