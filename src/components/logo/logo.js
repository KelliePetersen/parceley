import React from 'react'
import { Link } from "gatsby"
import Image from '../image'
import styles from './logo.module.scss'

const Logo = ({ styling }) => {
  return (
    <Link className={styles.logo} to="/#" style={styling}>
      <div className={styles.image}>
        <Image filename="logo.png" />
      </div>
      parceley
    </Link>
  )
}

export default Logo
