import React from 'react'
import { Link } from "gatsby"
import styles from './modalMenu.module.scss'

const ModalMenu = ({ modalOpen, setModalOpen }) => {

  return (
    <nav className={`${styles.modal} ${modalOpen ? styles.modalActive : undefined}`}>
      <ul className={styles.list}>
        <li><Link onClick={() => setModalOpen(false)} to="/#">Home</Link></li>
        <li><Link onClick={() => setModalOpen(false)} to="/#about">About</Link></li>
        <li><Link onClick={() => setModalOpen(false)} to="/#features">Features</Link></li>
        <li><Link onClick={() => setModalOpen(false)} to="/#recipes">Recipes</Link></li>
        <li><Link onClick={() => setModalOpen(false)} to="/#testimonials">Testimonials</Link></li>
        <li style={{marginTop: '20px'}}><Link onClick={() => setModalOpen(false)} to="/#signup" className={styles.cta}>Sign Up</Link></li>
      </ul>
    </nav>
  )
}

export default ModalMenu
