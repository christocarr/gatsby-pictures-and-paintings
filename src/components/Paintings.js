//get all contentful paintings

import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import PaintingList from './PaintingList'

const getPaintings = graphql`
  query {
    paintings: allContentfulPainting {
      edges {
        node {
          title
          id
          slug
          price
          size
          medium
          image {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`

const Paintings = () => {
  const { paintings } = useStaticQuery(getPaintings)
  
  return (
    <div>
      <PaintingList paintings={ paintings } />
    </div>
  )

}

export default Paintings