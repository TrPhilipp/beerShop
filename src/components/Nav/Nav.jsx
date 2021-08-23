import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
  return (
    <div className="nav">
      <Link className="nav__link" to={'/'}>
        Home
      </Link>
      <Link className="nav__link" to={'/catalog'}>
        Catalog
      </Link>
      <Link className="nav__link" to={'/about'}>
        About
      </Link>
    </div>
  )
}

export default Nav
