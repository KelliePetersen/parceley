import React from 'react'
import styles from './menuButton.module.scss'

const MenuButton = ({ styling, modalOpen, setModalOpen }) => {
  return (
    <button type="button" className={styles.menu} style={styling} aria-label="open menu">
      <div className={styles.line}></div>
    </button>
  )
}

export default MenuButton
