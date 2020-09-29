import React from 'react'
import { Link } from "gatsby"
import styles from './backToTop.module.scss'

const BackToTop = () => {
  return (
    <Link to="#" style={{color: 'white'}}>
      <button type="button" className={styles.button}>
        &uarr;
      </button>
    </Link>
  )
}

export default BackToTop
