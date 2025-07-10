// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARpVZQ_mTMmQ9imkzcV51Vlcu9-8s5PWQ",
  authDomain: "cupid-6fd56.firebaseapp.com",
  projectId: "cupid-6fd56",
  storageBucket: "cupid-6fd56.firebasestorage.app",
  messagingSenderId: "745083606277",
  appId: "1:745083606277:web:a5233b7e935da1eaa0536c",
  measurementId: "G-95E33V1RDV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


 export const auth = getAuth(app)

 export const provider = new GoogleAuthProvider();

