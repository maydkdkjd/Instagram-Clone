// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkIoh1hNYBM15PzGi3lf7G39ZVv-QwLZU",
  authDomain: "instagram-114f1.firebaseapp.com",
  projectId: "instagram-114f1",
  storageBucket: "instagram-114f1.appspot.com",
  messagingSenderId: "337198437218",
  appId: "1:337198437218:web:b63864815228f89943923b"
};

// Initialize Firebase
const App = initializeApp(firebaseConfig);
export const db = getFirestore(App)
export const auth = getAuth(App)