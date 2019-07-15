import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import successImg from '../images/success_hero.jpg'

const Success = () => {
  return (
  <Layout>
    <Hero img={successImg} />
    Success
  </Layout>
  )
}

export default Success