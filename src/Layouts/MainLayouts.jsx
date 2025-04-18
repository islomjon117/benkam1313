import React from 'react'
import { Outlet } from 'react-router-dom'

import Navbar from "../components/navbar/Navbar"
import Footer from '../components/footer/Footer'

const MainLayouts = () => {
  return (
    <>
      <nav>
        <Navbar/>
      </nav>
      <main>
        <Outlet/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default MainLayouts