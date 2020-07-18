import React from 'react'
import styles from './menuButton.module.scss'

const MenuButton = () => {
  return (
    <button type="button" className={styles.menu}>
      <div className={styles.line}></div>
    </button>
  )
}

export default MenuButton
