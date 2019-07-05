import React from 'react'
import Img from 'gatsby-image'

import styles from '../css/painting.module.css'

const Painting = ({ painting }) => {
  const { title, id, slug, price, size, medium, image } = painting

  return (
    <div className={styles.paintingContainer}>
      <h3>{title}</h3>
      <Img fluid={image.fluid} />
    </div>
  )
}

export default Painting