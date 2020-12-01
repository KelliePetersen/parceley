import React from 'react'
import styles from './menuButton.module.scss'

const MenuButton = ({ styling, modalOpen, setModalOpen }) => {

  const handleModal = () => modalOpen ? setModalOpen(false) : setModalOpen(true)

  return (
    <button type="button" className={styles.menu} style={styling} aria-label="open menu" onClick={handleModal}>
      <div className={`${styles.line} ${modalOpen ? styles.cross : undefined}`}></div>
    </button>
  )
}

export default MenuButton
