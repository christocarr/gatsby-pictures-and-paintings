import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import PaintingList from "./PaintingList"
import Title from "../components/Title"

import * as styles from "../css/gallery.module.css"

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
          available
          image {
            fluid {
              ...GatsbyContentfulFluid
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
    <section>
      <div className="page-title">
        <Title title="Gallery" />
      </div>
      <div className={styles.galleryContainer}>
        <PaintingList paintings={paintings} />
      </div>
    </section>
  )
}

export default Paintings
