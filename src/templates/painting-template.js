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
        <div className="page-title">
          <Title title={title} />
        </div>
        <div className={styles.imgContainer}>
          <Img fluid={image.fluid} alt={title} className={styles.painting} />
        </div>
        <div className={styles.info}>
          <div className={styles.desc}>
            <p><span>Size:</span> {size}</p>
            <p><span>Medium:</span> {medium}</p>
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