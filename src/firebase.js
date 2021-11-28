// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD-cOoYg9jUacz41PX4LsqJraEEjVcbPkQ",
    authDomain: "zooh-bd84e.firebaseapp.com",
    projectId: "zooh-bd84e",
    storageBucket: "zooh-bd84e.appspot.com",
    messagingSenderId: "526403495521",
    appId: "1:526403495521:web:8afbfd79ce8974804dec20",
    measurementId: "G-35K5SQRZQL"
};

initializeApp(firebaseConfig)
// const app = initializeApp(firebaseConfig);
// Initialize Firebase

export const db = getFirestore();