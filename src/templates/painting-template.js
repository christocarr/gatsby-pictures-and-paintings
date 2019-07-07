import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Img from 'gatsby-image'

import styles from '../css/product.module.css'

const Template = ({ data }) => {
  const { title, price, image, size, medium } = data.painting
  console.log(image.fluid)
  return (
    <Layout>
      <section>
        <h3>{title}</h3>
        <div className={styles.imgContainer}>
          <Img fluid={image.fluid} alt={title} className={styles.painting} />
        </div>
        <div className={styles.info}>
          <p>{size}</p>
          <p>{medium}</p>
          <p>{`£${price}`}</p>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    painting: contentfulPainting(slug: {eq: $slug}) {
      title
      price
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      size
      medium
    }
}
`

export default Template