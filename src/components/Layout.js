import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Footer from './Footer'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/layout.css'

const Layout = ({ children }) => {
  return (
    <>
      <main>
        <Navbar />
          <Hero />
          { children }
      </main>
      <Footer />
    </>
  )
}

export default Layout