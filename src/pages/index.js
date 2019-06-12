import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Button from '../components/BuyButton'

const Gallery = () => {

  const data = useStaticQuery(graphql`
    query {
      allStripeSku {
        edges {
          node {
            product {
              name
            }
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
            <li key={edge.node.id}>
              <img src={edge.node.image} alt={edge.node.product.name}/>
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
