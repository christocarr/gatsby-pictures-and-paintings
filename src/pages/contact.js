import React from 'react'
import { graphql } from 'gatsby'
import Contact from '../components/Contact'
import Layout from '../components/Layout'


const contact = ({ data }) => {
  return (
    <Layout>
      <Contact />
    </Layout>
  )
}

// export const query = graphql`
  
// `

export default contact
