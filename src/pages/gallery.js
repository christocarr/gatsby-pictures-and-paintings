import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import { graphql } from 'gatsby';

export default ({ data }) => (
  <Layout>
    <Hero img={data.image.childImageSharp.fluid} />
  {/* <Paintings /> component goes here */} 
  </Layout>
)

/* get contentful image instead of local image */
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
