import React from 'react'
import Img from 'gatsby-image'

const Painting = ({ painting }) => {
  const { title, id, slug, price, size, medium, image } = painting
  console.log(image.fluid)
  return (
    <div>
      <h1>{title}</h1>
      <Img fluid={image.fluid} />
    </div>
  )
}

export default Painting