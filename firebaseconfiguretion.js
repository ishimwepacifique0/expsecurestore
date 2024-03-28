// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjmkygdL_NFtM_OdC9MzrcMd2v2PMrjD8",
  authDomain: "done-346c4.firebaseapp.com",
  projectId: "done-346c4",
  storageBucket: "done-346c4.appspot.com",
  messagingSenderId: "706275954627",
  appId: "1:706275954627:web:8418dc87aa0c0af5167776"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(app)
export const FIREBASE_DB = getFirestore(app)