import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDlmO-EzLbA3TkBCPLx7zZhPTvE8JT2E2o",
    authDomain: "twitter-clone-yt-dae54.firebaseapp.com",
    projectId: "twitter-clone-yt-dae54",
    storageBucket: "twitter-clone-yt-dae54.appspot.com",
    messagingSenderId: "643948034106",
    appId: "1:643948034106:web:71124ba3dd7933a1181d03",
    measurementId: "G-8TBJHHYR2W"
  };
  
  // Initialize Firebase
 initializeApp(firebaseConfig)

  export default getFirestore();