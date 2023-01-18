import { doc, getDoc, setDoc,Timestamp,serverTimestamp } from 'firebase/firestore'
import {db} from '../../firebaseConfig'

const CollectionName = "Users"
// add user collection
export const adduser = async({uid,displayName,emailVerified, isAnonymous,phoneNumber, photoURL})=>{
    // init new user
    const initUser = {
        uid:uid,
        displayName:displayName,
        emailVerified:emailVerified,
        isAnonymous:isAnonymous,
        phoneNumber:phoneNumber,
        photoURL:photoURL,
        joinDate:serverTimestamp(),
        lv:0,
    }
    return await setDoc(doc(db, CollectionName, uid), initUser) 
}

export const getuser = async({uid})=>{
    const docRef = doc(db, CollectionName, uid);   
    return  await getDoc(docRef);
}

