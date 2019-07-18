import React from 'react'
import { Helmet } from 'react-helmet'

import favicon from '../images/favicon.png'

const SEO = ({ title, desc }) => {
  return (
    <Helmet title={title} link={[{rel: 'icon', type: 'image/png', sizes: '16x16', href: `${favicon}` }]}>
      <html lang="en" />
      <meta name="description" content={desc} />
    </Helmet>
  )
}

export default SEO