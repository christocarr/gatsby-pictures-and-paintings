import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Hero from "../components/Hero"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="cancelled" desc="Your purchase was cancelled" />
      <Hero img={data.image.childImageSharp.fluid} />
      <h2>Your transaction was cancelled.</h2>
      <p>Your card has not been charged.</p>
      <AniLink fade to="/gallery">
        Gallery
      </AniLink>
    </Layout>
  )
}

export const query = graphql`
  query {
    image: file(relativePath: { eq: "cancelled_hero.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
