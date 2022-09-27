// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3iREXVq4kSrMsUJ8TKk6rGmMQxPz83Zw",
  authDomain: "hotel-ap.firebaseapp.com",
  projectId: "hotel-ap",
  storageBucket: "hotel-ap.appspot.com",
  messagingSenderId: "1047008560262",
  appId: "1:1047008560262:web:8d035a610e1f3760f97d07",
  measurementId: "G-YKR7JJN3TY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app)
export {auth, db};

/*import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyA3iREXVq4kSrMsUJ8TKk6rGmMQxPz83Zw",
    authDomain: "hotel-ap.firebaseapp.com",
    projectId: "hotel-ap",
    storageBucket: "hotel-ap.appspot.com",
    messagingSenderId: "1047008560262",
    appId: "1:1047008560262:web:8d035a610e1f3760f97d07",
    measurementId: "G-YKR7JJN3TY"
  };

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app)
export {auth, db};*/