import React from 'react'
import styles from './footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.divider}></div>
      <p className={styles.copyright}>
        © {new Date().getFullYear()} Parceley <span className={styles.line}>|</span> 
        <span className={styles.attribution}>Design by <a href="https://www.parchot.com" target="_blank">Parchot</a></span>
      </p>
    </footer>
  )
}

export default Footer
