import React from "react"
import Img from "gatsby-image"
import SoldRibbon from "../components/SoldRibbon"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { Link } from "gatsby"

import * as styles from "../css/painting.module.css"

const Painting = ({ painting }) => {
  const { title, slug, available, image } = painting

  return (
    <div className={styles.paintingContainer}>
      <h4>{title}</h4>
      <Img fluid={image.fluid} />
      {/* <AniLink fade to={`/paintings/${slug}`} className={styles.btnDetails}>
				Details
			</AniLink> */}
      <Link to={`/paintings/${slug}`} className={styles.btnDetails}>
        Details
      </Link>
      {available === false && <SoldRibbon />}
    </div>
  )
}

export default Painting
