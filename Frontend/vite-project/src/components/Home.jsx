import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from "./Home.module.css";
function Home() {
  return (
    <>
    <div className={styles.home}>
    <li> <NavLink to="/signup"> Signup </NavLink></li>
    <li> <NavLink to="/login"> Login </NavLink></li>
    </div>
   
    
    </>
  )
}

export default Home