import React, { useState } from 'react'
import { Link } from 'gatsby'
import styles from '../css/navbar.module.css'
import { faBars } from 'react-icons/fa'

const Navbar = () => {

  const [isOpen, setNav] = useState(false)

  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.center}>
        <div>
          <h1>Logo</h1>
          <button className={styles.icon} onClick={toggleNav}>
            <faBars />
          </button>
        </div>
        <ul className={isOpen ? `${styles.navLinks} ${styles.showNav} ` : `${styles.navLinks}`}>
          <Link to="/">Home</Link>
        </ul>
      </div>  
    </nav>
  )
}

export default Navbar