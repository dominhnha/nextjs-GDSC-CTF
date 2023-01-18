

import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../componets/Header/Header'
import Layout from '../componets/MainLayout/Layout'


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
