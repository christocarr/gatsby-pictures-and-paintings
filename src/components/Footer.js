import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { Link } from 'gatsby'

import styles from '../css/footer.module.css'

const Footer = () => {
  return (
    <footer>
      <p className={styles.credit}>Developed by <Link to="https://iamchriscarr.com">Chris Carr</Link></p>
      <p className={styles.copyright}>
        &copy; Richard Carr 2019 - All rights reserved
      </p>
      <ul className={styles.footerNav}>
        <AniLink fade to="/">Home</AniLink>
        <AniLink fade to="/gallery">Gallery</AniLink>
        <AniLink fade to="/contact">Contact</AniLink>
      </ul>
    </footer>
  )
}

export default Footer
