import React, { useState } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { Link } from "gatsby"
import * as styles from "../css/navbar.module.css"
import { FaBars } from "react-icons/fa"
import logo from "../images/PandP_logo_50px_high.png"

const Navbar = () => {
  const [isOpen, setNav] = useState(false)

  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.center}>
        {/* <AniLink fade to="/">
					<img src={logo} alt="logo" />
				</AniLink> */}
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <button className={styles.menuButton} onClick={toggleNav}>
          <FaBars className={styles.menuIcon} />
        </button>
      </div>
      <ul
        className={
          isOpen
            ? `${styles.navLinks} ${styles.showNav} `
            : `${styles.navLinks}`
        }
      >
        {/* <AniLink fade to="/">
					Home
				</AniLink>
				<AniLink fade to="/gallery">
					Gallery
				</AniLink>
				<AniLink fade to="/contact">
					Contact
				</AniLink> */}
        <Link to="/">Home</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact</Link>
      </ul>
    </nav>
  )
}

export default Navbar
