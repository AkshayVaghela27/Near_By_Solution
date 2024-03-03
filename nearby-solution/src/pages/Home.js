import React, { useContext } from 'react'
import { authContext } from '../context/context'
import Navbar from './Navbar'

const Home=() => {
  const {currentUser} = useContext(authContext)
  return (
     <Navbar/>
  )
}

export default Home;