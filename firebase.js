// Import the functions you need from the SDKs you need
import { getDatabase } from "firebase/database";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3fXNxjm863w5xut_i6pdZYSm7ZuzYKyc",
  authDomain: "capstone-8fc0e.firebaseapp.com",
  databaseURL: "https://capstone-8fc0e-default-rtdb.firebaseio.com",
  projectId: "capstone-8fc0e",
  storageBucket: "capstone-8fc0e.appspot.com",
  messagingSenderId: "446090463700",
  appId: "1:446090463700:web:a5765ccfc1d09355b46e41",
  measurementId: "G-KK3JSHV2YM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getDatabase(app);