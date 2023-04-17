import React from "react"
import { useNavigate } from "react-router-dom"
import styles from './navbar.module.css'
const Navbar=()=>{
  const navigate=useNavigate()
    return(
        <>


<nav className={`${styles.nav}`}>
  <ul className={`menu ${styles.menu}`}>
    <li className={`menu headings ${styles.headings}`}><p className={`menu headingLink ${styles.headingLink}`} onClick={()=>navigate('/')}>Home</p></li>
    <li className={`menu headings ${styles.headings}`}><a href="#0" className={`menu headingLink ${styles.headingLink}`} onClick={()=>navigate('/about')}>About</a></li>
    <li className={`menu headings ${styles.headings}`}><a href="/contact"  className={`menu headingLink ${styles.headingLink}`}>Contact</a></li>

    <li className={`menu headings ${styles.headings}`}><a href="#0" className={`menu headingLink ${styles.headingLink}`}>Schedule</a>
      <ul className={`subMenu ${styles.subMenu}`}>
        <li className={`menu subMenuHeading ${styles.subMenuHeading}`}><a href="#0">-</a></li>
        <li className={`menu subMenuHeading ${styles.subMenuHeading}`}><a href="#0">-</a></li>
        <li className={`menu subMenuHeading ${styles.subMenuHeading}`}><a href="#0">-</a></li>
      </ul>
    </li>

    <li className={`menu headings ${styles.headings}`}><a href="#0" className={`menu headingLink ${styles.headingLink}`}>Profile</a>
      <ul className={`subMenu ${styles.subMenu}`}>
        <li className={`menu subMenuHeading ${styles.subMenuHeading}`}><p style={{textDecoration:'underline' ,color:'#2375D8'}} onClick={()=>navigate('/profile')}>View Profile</p></li>
        <li className={`menu subMenuHeading ${styles.subMenuHeading}`}><a href="/">Log Out</a></li>
      </ul>
    </li>

  </ul>
</nav>




{/* 


<ul class={`nav nav-tabs bg-info ${styles.nav}`}>

<li class="nav-item">
    <a class="nav-link" href="#">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">About Us</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Term Schedule</a>
  </li>
  <li class="nav-item">
  <a class="nav-link" href="#">Contact</a>
  </li>
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Profile</a>
    <ul class="dropdown-menu">
      <li><a class="view-profile" href="=/profile">Profile</a></li>
      <li><a class="logout" href="/">Logout</a></li>
    </ul>
  </li>
</ul> */}
        </>
    )
    
}

export default Navbar