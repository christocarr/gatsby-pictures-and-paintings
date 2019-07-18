import React from 'react'
import { Helmet } from 'react-helmet'

const SEO = ({ title, desc }) => {
  return (
    <Helmet title={title}>
      <html lang="en" />
      <meta name="description" content={desc} />
    </Helmet>
  )
}

export default SEO