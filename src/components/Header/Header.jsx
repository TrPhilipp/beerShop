import React from 'react'
import './Header.css'
import Nav from './../Nav/Nav'

const Header = () => {
  return (
    <div className="header">
      <div className="header__name">Shop name</div>
      <Nav />
    </div>
  )
}

export default Header
