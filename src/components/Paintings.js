//get all contentful paintings

import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import PaintingList from './PaintingList'

import styles from '../css/gallery.module.css'

const getPaintings = graphql`
  query {
    paintings: allContentfulPainting {
      edges {
        node {
          title
          id
          slug
          price
          size
          medium
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

const Paintings = () => {
  const { paintings } = useStaticQuery(getPaintings)
  
  return (
    <div className={styles.galleryContainer}>
      <PaintingList paintings={ paintings } />
    </div>
  )

}

export default Paintings