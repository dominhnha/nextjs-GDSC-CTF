import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { setUser, removeUser } from '../../redux/slices/Userslice'
import { useAuthState } from "react-firebase-hooks/auth";
import { handleSetUser } from '../../redux/Actions/Actions'
import auth from '../../firebaseConfig'
import { getuser, adduser } from '../../api/Firestore/Firestore'
import { async } from '@firebase/util';
import { setLevel } from '../../redux/slices/Levelslice';
const UserLayout = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const dishpath = useDispatch()
    // check status user
    useEffect(() => {
        const handleGetUser = async () => {
            try {
                if (user) {
                    const initUser = {
                        displayName: user.displayName,
                        emailVerified: user.emailVerified,
                        isAnonymous: user.isAnonymous,
                        phoneNumber: user.phoneNumber,
                        photoURL: user.photoURL,
                        uid: user.uid
                    }
                    // handle firebase store
                    await getuser(initUser)
                        .then(async (e) => {
                            if (e.exists()) {
                                dishpath(setLevel(e.data().lv))
                            } else {
                                // user null 
                                const ref = await adduser(initUser)
                                handleGetUser()
                            }
                        })
                    dishpath(setUser(
                        handleSetUser(initUser)
                    ))
                }
                else {
                    // user null
                    dishpath(removeUser())
                }
                return true;
            } catch (error) {
                console.log(error)

            }

        }
        handleGetUser();
    }, [user])
    return (
        <div key={1}>{children}</div>
    )
}



export default UserLayout