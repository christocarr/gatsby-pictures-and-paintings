import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

export default ({ data }) => (
  <Layout>
    <Hero img={data.defaultBcg.childImageSharp.fluid}>
  {/* <Paintings /> component goes here */} 
  </Layout>
)

/* get contentful image instead of local image */
export const query = graphql`
  query {
    defaultBcg: file(relativePath: {eq: "default.jpg"}) {
      childImageSharp {
        fluid(maxWidth:4160, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
