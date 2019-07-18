import React from 'react'
import { graphql } from 'gatsby'
import Contact from '../components/Contact'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

import Hero from '../components/Hero'


const contact = ({ data }) => {
  return (
    <Layout>
      <SEO title="contact" desc="Contact form to send us a message" />
      <Hero img={data.image.childImageSharp.fluid} />
      <Contact />
    </Layout>
  )
}

export const query = graphql`
  query {
    image: file(relativePath:{eq: "contact_hero.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  } 
`

export default contact
