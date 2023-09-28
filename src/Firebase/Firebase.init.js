// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAjW7RfivIdjZsOon9FbYDLV_qmrCybWfw",
    authDomain: "college-booking-faciliti-b53e6.firebaseapp.com",
    projectId: "college-booking-faciliti-b53e6",
    storageBucket: "college-booking-faciliti-b53e6.appspot.com",
    messagingSenderId: "418132761306",
    appId: "1:418132761306:web:2ecc8c246ca0aae12ce3e3"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const  auth =getAuth(app);

export default auth;