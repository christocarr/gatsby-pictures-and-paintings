import React, { useEffect } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Img from 'gatsby-image'
import Title from '../components/Title'

import styles from '../css/product.module.css'

const Template = ({ data }) => {

  let stripe;
  useEffect(() => {
    stripe = window.Stripe("pk_test_JrzXSCBHT21whkB2gZLAEhmN00zHgJkpLZ", {

    })
  })
  const redirectToCheckout = async () => {
    const {error} = await stripe.redirectToCheckout({
      items: [{sku: sku, quantity: 1}],

      successUrl: "https://pictures-and-paintings.netlify.com/success",
      cancelUrl: "https://pictures-and-paintings.netlify.com/canceled"
    })
    console.warn(error)
  }

  const { title, price, image, size, medium, sku } = data.painting
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
          </div>
        </div>
        <button className={styles.buyButton} onClick={redirectToCheckout}>Buy Now</button>
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
      sku
    }
}
`

export default Template