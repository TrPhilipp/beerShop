import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Nav.module.css'

const ROUTES = {
  HOME_PAGE: '/',
  CATALOG: '/catalog',
  ABOUT: '/about',
}

const Nav = () => {
  return (
    <div className={classes.nav}>
      <Link className={classes.nav__link} to={ROUTES.HOME_PAGE}>
        Home
      </Link>
      <Link className={classes.nav__link} to={ROUTES.CATALOG}>
        Catalog
      </Link>
      <Link className={classes.nav__link} to={ROUTES.ABOUT}>
        About
      </Link>
    </div>
  )
}

export default Nav
