import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Hero from "../components/Hero"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="success" desc="Purchase was successful" />
      <Hero img={data.image.childImageSharp.fluid} />
      <section>
        <h2>Thank you for your purchase!</h2>
        <AniLink fade to="/">
          Home
        </AniLink>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    image: file(relativePath: { eq: "success_hero.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
