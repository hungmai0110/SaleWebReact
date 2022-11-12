// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, createUserWithEmailAndPassword}from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKGRLikfr_JeNu4MHA_ZrsISbY6vayYY0",
  authDomain: "hungmike-c6685.firebaseapp.com",
  projectId: "hungmike-c6685",
  storageBucket: "hungmike-c6685.appspot.com",
  messagingSenderId: "1054849881861",
  appId: "1:1054849881861:web:1ef64e21f20a440feb496c",
  measurementId: "G-VT9LHK3PQ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth=getAuth(app)
console.log(auth);
