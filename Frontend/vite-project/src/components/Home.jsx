import React from 'react'
import { NavLink } from 'react-router-dom'
function Home() {
  return (
    <>
    <li> <NavLink to="/signup"> Signup </NavLink></li>
    <li> <NavLink to="/login"> Login </NavLink></li>
    
    </>
  )
}

export default Home