import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/layout.css'

const Layout = ({ children }) => {
  return (
    <main>
      <Navbar />
        { children }
      <Footer />
    </main>
  )
}

export default Layout