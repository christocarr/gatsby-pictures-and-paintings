import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

const Template = ({ data }) => {
  console.log(data.painting)
  return (
    <Layout>
      <section>
        painting
      </section>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    painting: contentfulPainting(slug: {eq: $slug}) {
      title
      price
    }
}
`

export default Template