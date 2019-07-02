import React, { useState } from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import styles from '../css/navbar.module.css'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {

  const [isOpen, setNav] = useState(false)

  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.center}>
        <h1 className={styles.logo}>Logo</h1>
        <button className={styles.menuButton} onClick={toggleNav}>
          <FaBars className={styles.menuIcon}/>
        </button>
      </div>
      <ul className={isOpen ? `${styles.navLinks} ${styles.showNav} ` : `${styles.navLinks}`}>
        <AniLink fade to="/">Home</AniLink>
        <AniLink fade to="/gallery">Gallery</AniLink>
      </ul>
    </nav>
  )
}

export default Navbar