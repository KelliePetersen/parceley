import React from 'react'
import { Link } from "gatsby"
import styles from './logo.module.scss'

const Logo = ({ styling }) => {
  return (
    <Link className={styles.logo} to="/#" style={styling}>parceley</Link>
  )
}

export default Logo
