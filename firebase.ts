// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDa33bVNAndNszAU5V6vMITiV6QQeznwrE",
  authDomain: "zotion-334.firebaseapp.com",
  projectId: "zotion-334",
  storageBucket: "zotion-334.firebasestorage.app",
  messagingSenderId: "652008695517",
  appId: "1:652008695517:web:269c400477c7bdf4129d34"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);


export  { db};

