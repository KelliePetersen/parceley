import React from 'react'
import styles from './menuButton.module.scss'

const MenuButton = ({ styling }) => {
  return (
    <button type="button" className={styles.menu} style={styling}>
      <div className={styles.line}></div>
    </button>
  )
}

export default MenuButton