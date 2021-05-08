import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { Link } from "gatsby"

import * as styles from "../css/footer.module.css"

const Footer = () => {
  return (
    <footer>
      <p className={styles.credit}>
        Developed by <a href="https://www.iamchriscarr.com">Chris Carr</a>
      </p>
      <p className={styles.copyright}>
        &copy; Richard Carr 2021 - All rights reserved
      </p>
      <ul className={styles.footerNav}>
        {/* <AniLink fade to="/">Home</AniLink>
        <AniLink fade to="/gallery">Gallery</AniLink>
        <AniLink fade to="/contact">Contact</AniLink> */}
        <Link to="/">Home</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact</Link>
      </ul>
    </footer>
  )
}

export default Footer
