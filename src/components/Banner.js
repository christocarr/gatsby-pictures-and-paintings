import React from "react"

import * as styles from "../css/banner.module.css"

const Banner = ({ title, children }) => {
  return (
    <div className={styles.banner}>
      <h1>{title}</h1>
      <h3>
        Original <span className={styles.bullet}>&#8226;</span> Affordable{" "}
        <span className={styles.bullet}>&#8226;</span> Art
      </h3>
      {children}
    </div>
  )
}

export default Banner
