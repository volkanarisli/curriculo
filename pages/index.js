import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
const Home = () => {


  const getProfile = async () => {
    const data = await axios.post('/api/fetchProfileInfo', { code })
    console.log(data)
  }
  // useEffect(() => {
  // const getAccessToken = async () => {
  //   const data = await axios.post('/api/fetchProfileInfo', { code })
  //   console.log(data)
  // }
  //   const { query: { code } } = router
  //   setCode(code)
  //   if (!code) return
  //   getAccessToken();
  //   return () => {

  //   }
  // }, [router])
  return (
    <div>
      <button onClick={getProfile}>Deneme</button>
    </div>
  )
}
export default Home