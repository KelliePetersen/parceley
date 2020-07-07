import React from 'react'
import { Link } from "gatsby"
import styles from './logo.module.scss'

const Logo = () => {
  return (
    <Link className={styles.logo} to="/#">Parc<span>e</span>l<span>e</span>y</Link>
  )
}

export default Logo
