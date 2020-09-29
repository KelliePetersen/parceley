import React from 'react'
import { Link } from "gatsby"
import styles from './modalMenu.module.scss'

const ModalMenu = () => {

  return (
    <nav className={styles.modal} style={styling}>
      <ul className={styles.list}>
        <li><Link to="/#">Home</Link></li>
        <li><Link to="/#about">About</Link></li>
        <li><Link to="/#features">Features</Link></li>
        <li><Link to="/#recipes">Recipes</Link></li>
        <li><Link to="/#testimonials">Testimonials</Link></li>
        <li><Link to="/#signup" className={styles.cta}>Sign Up</Link></li>
      </ul>
    </nav>
  )
}

export default ModalMenu
