import React from 'react'
import { Link } from "gatsby"
import styles from './arrowButton.module.scss'

const ArrowButton = ({ styling }) => {
  return (
    <button type="button" className={styles.button} style={styling}>
      <Link to="#signup" style={{color: 'white'}}>&rarr;</Link>
    </button>
  )
}

export default ArrowButton
