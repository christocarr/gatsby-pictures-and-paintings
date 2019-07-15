import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import canceledImg from '../images/canceled_hero.jpg'

const Canceled = () => {
  return (
  <Layout>
    <Hero img={canceledImg} />
    Success
  </Layout>
  )
}

export default Canceled