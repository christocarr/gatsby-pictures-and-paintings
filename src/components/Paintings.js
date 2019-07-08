import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import PaintingList from './PaintingList'
import Title from '../components/Title'

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
    <section className={styles.galleryContainer}>
      <Title title="Gallery" />
      <PaintingList paintings={ paintings } />
    </section>
  )

}

export default Paintings