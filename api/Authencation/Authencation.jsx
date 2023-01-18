import auth from '../../firebaseConfig'
import {signOut} from "firebase/auth";
import {GoogleAuthProvider,signInWithPopup} from 'firebase/auth'

const googleProvider = new GoogleAuthProvider(); 

export const SignOut = async()=>{
    return await signOut(auth);
}

export const signInWithGoogle = async()=>{
    return await signInWithPopup(auth, googleProvider);
}


