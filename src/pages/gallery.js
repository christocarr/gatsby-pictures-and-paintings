import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import { graphql } from 'gatsby'
import Paintings from '../components/Paintings'

export default ({ data }) => (
  <Layout>
    <Hero img={data.image.childImageSharp.fluid} />
    <Paintings />
  </Layout>
)

export const query = graphql`
  query {
    image: file(relativePath: {eq: "gallery-hero.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
