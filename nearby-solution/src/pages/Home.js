import React, { useContext, useEffect } from 'react'
import { authContext } from '../context/context'
import Navbar from '../components/Layout/Navbar'
const Home=() => {
  const {currentUser} = useContext(authContext)
  useEffect(()=>{
    sessionStorage.removeItem('id');
  },[])
  return (
     <div>Home page</div>
  )
}

export default Home;