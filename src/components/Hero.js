import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const Hero = ({ img, className, children, home }) => {
  return (
    <BackgroundImage className={className} fluid={img} home={home}>
      {children}
    </BackgroundImage>
  )
}

export default styled(Hero)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: ${props => (props.home ? "80vh" : "20vh")};
  background-position: center;
  background-size: cover;
`
