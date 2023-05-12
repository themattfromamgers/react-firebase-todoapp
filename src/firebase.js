// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9s6Js4MX2CZI82jUw0NjCWonI4tbtAxg",
  authDomain: "todo-app-30bb0.firebaseapp.com",
  projectId: "todo-app-30bb0",
  storageBucket: "todo-app-30bb0.appspot.com",
  messagingSenderId: "19771512806",
  appId: "1:19771512806:web:2958c0d7a32bb0d76ea827",
  measurementId: "G-S1BX1CNS2B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)