

import React from 'react'
import Header from '../components/Header/Header'
import Layout from '../components/MainLayout/Layout'
import {signInWithGoogle,SignOut} from '../api/Authencation/Authencation'

import { useSelector } from 'react-redux'
const Home = () => {
  const CurUser = useSelector(state=>state.User)
  console.log('cur user',CurUser)

  const siginIn = async()=>{
    try {
      return await signInWithGoogle();     
    } catch (err) {
      console.log(err)
    }
  }

  const signOut = async ()=>{
    console.log("out")
    return await SignOut()
  }
  
  return (
    <Layout>
        <Header/>
        <>
          <button onClick={()=>siginIn()}>Googlebutton</button>
        </>
        <hr></hr>
        <>
        <button onClick={()=>signOut()}>logout</button>
        </>
        {
          <h1>{CurUser.success ? CurUser.payload.displayName : "false"}</h1>
        }
              
    </Layout>
  )
}

export default Home
