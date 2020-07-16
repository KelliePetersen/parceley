import React from 'react'
import { Link } from "gatsby"
import styles from './nav.module.scss'

const Nav = ({ styling }) => {
  return (
    <nav className={styles.nav} style={styling}>
      <ul className={styles.list}>
        <li><Link to="/#">Home</Link></li>
        <li><Link to="/#about">About</Link></li>
        <li><Link to="/#features">Features</Link></li>
        <li><Link to="/#services">Recipes</Link></li>
        <li><Link to="/#contact">Contact</Link></li>
        <li><Link to="/#signup" className={styles.cta}>Sign Up</Link></li>
      </ul>
    </nav>
  )
}

export default Nav
