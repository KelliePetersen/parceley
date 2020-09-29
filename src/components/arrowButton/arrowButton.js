import React from 'react'
import { Link } from "gatsby"
import styles from './arrowButton.module.scss'

const ArrowButton = ({ styling }) => {
  return (
    <Link to="#signup" style={{color: 'white'}}>
      <button type="button" className={styles.button} style={styling}>
        &rarr;
      </button>
    </Link>
  )
}

export default ArrowButton
