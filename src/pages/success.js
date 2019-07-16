import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

export default ({ data }) => {
  return (
  <Layout>
    <Hero img={data.image.childImageSharp.fluid} />
    <section>
      <h2>Thank you for your purchase!</h2>
      <AniLink fade to="/">Home</AniLink>
    </section>
  </Layout>
  )
}

export const query = graphql`
  query {
    image: file(relativePath: {eq: "success_hero.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`