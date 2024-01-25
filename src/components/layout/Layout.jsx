
import React from 'react'
import scss from './Layout.module.scss'
import Main from './main/Main'
import Header from './header/Header'
import Footer from './footer/Footer'

const Layout = () => {
  return (
    <div className={scss.layout}>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default Layout