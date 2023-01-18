// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC30B9oDOYEebvWCiOdx1AelMX-9Ym9wUc",
  authDomain: "gdsc-ctf-5a010.firebaseapp.com",
  projectId: "gdsc-ctf-5a010",
  storageBucket: "gdsc-ctf-5a010.appspot.com",
  messagingSenderId: "189236686010",
  appId: "1:189236686010:web:3a4c66a8d9b2739290e683",
  measurementId: "G-C48ZDGWVNN"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

export default auth