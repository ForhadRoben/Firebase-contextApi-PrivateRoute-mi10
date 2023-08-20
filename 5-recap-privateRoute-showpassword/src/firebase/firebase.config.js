// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB6pLhjfRcmVrFkJLH9MTAf-a2eAgwS1q0",
    authDomain: "react-authentication-dfa08.firebaseapp.com",
    projectId: "react-authentication-dfa08",
    storageBucket: "react-authentication-dfa08.appspot.com",
    messagingSenderId: "1095634299694",
    appId: "1:1095634299694:web:f9897b98c0cd18487468bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;