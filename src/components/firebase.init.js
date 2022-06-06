// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC19Ji4H65dbnpyrDrEZJohAMTKzEKcp9A",
    authDomain: "motoflix-69da7.firebaseapp.com",
    projectId: "motoflix-69da7",
    storageBucket: "motoflix-69da7.appspot.com",
    messagingSenderId: "128647968254",
    appId: "1:128647968254:web:c6e66a7573e0088295bcaf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth