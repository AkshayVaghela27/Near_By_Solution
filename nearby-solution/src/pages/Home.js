import React, { useContext } from 'react'
import { authContext } from '../context/context'
import Navbar from '../components/Layout/Navbar'
const Home=() => {
  const {currentUser} = useContext(authContext)
  return (
     <div>Home page</div>
  )
}

export default Home;