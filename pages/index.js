
import { useState, useEffect } from 'react';
import router from 'next/router'
const Home = () => {



  useEffect(() => {

    router.push('/index.html')
  }, [])
  return (
    <div>

    </div>
  )
}
export default Home