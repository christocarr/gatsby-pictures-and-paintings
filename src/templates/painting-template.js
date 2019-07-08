import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Img from 'gatsby-image'
import Title from '../components/Title'

import styles from '../css/product.module.css'

const Template = ({ data }) => {
  const { title, price, image, size, medium } = data.painting
  return (
    <Layout>
      <Hero img={image.fluid} />
      <section>
        <Title title={title} />
        <div className={styles.imgContainer}>
          <Img fluid={image.fluid} alt={title} className={styles.painting} />
        </div>
        <div className={styles.info}>
          <div className={styles.desc}>
            <p>{`Size: ${size}`}</p>
            <p>{`Medium: ${medium}`}</p>
          </div>
          <div className={styles.price}>
            <p>{`£${price}`}</p>
            <button className={styles.buyButton}>Buy Now</button>
        </div>
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