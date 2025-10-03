import React from 'react'
import Header from '../components/header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer'

const Layout = () => {
  return (
    <div>
    <Header />

    <main className='max-w-[1350px] mx-auto'>
      <Outlet />
    </main>
    <Footer />
    </div>
  )
}

export default Layout