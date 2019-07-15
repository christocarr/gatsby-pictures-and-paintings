import React from 'react'
import Img from 'gatsby-image'
import SoldRibbon from '../components/SoldRibbon'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import styles from '../css/painting.module.css'

const Painting = ({ painting }) => {
  const { title, slug, available, image } = painting

  return (
      <div className={styles.paintingContainer}>
        <h4>{title}</h4>
        <Img fluid={image.fluid} />
        <AniLink fade to={`/paintings/${slug}`} className={styles.btnDetails}>Details</AniLink>
        {available === false && <SoldRibbon />}
      </div>

  )
}

export default Painting