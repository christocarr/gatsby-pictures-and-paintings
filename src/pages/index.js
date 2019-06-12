import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Button from '../components/buy-button'

const Gallery = () => {

  const data = useStaticQuery(graphql`
    query {
      allStripeSku {
        edges {
          node {
            image
            id
          }
        }
      }
    }
  `)

  return (
    <div>
      <ul>
        {data.allStripeSku.edges.map((edge) => {
          return (
            <li>
              <img src={edge.node.image} />
              <Button id={edge.node.id} />
            </li>
          )
        })}
      </ul>
      <h2></h2>
      
    </div>
  )
}

export default Gallery
