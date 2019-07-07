import React from 'react'
import Img from 'gatsby-image'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import styles from '../css/painting.module.css'

const Painting = ({ painting }) => {
  const { title, id, slug, price, size, medium, image } = painting

  return (
      <div className={styles.paintingContainer}>
        <h3>{title}</h3>
        <Img fluid={image.fluid} />
        <AniLink fade to="/" className={styles.btnDetails}>Details</AniLink>
      </div>

  )
}

export default Painting