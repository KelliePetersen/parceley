import React from 'react'
import { Link } from "gatsby"
import styles from './backToTop.module.scss'

const BackToTop = () => {
  return (
    <button type="button" className={styles.button}>
      <Link to="#" style={{color: 'white'}}>&uarr;</Link>
    </button>
  )
}

export default BackToTop
