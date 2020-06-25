import React from 'react'
import { Link } from "gatsby"
import styles from './logo.module.scss'

const Logo = () => {
  return (
    <Link className={styles.logo} to="/#">parceley</Link>
  )
}

export default Logo
