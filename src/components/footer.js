import React from 'react'
import BackToTop from './backToTop'
import SocialMedia from './socialMedia'
import styles from './footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <SocialMedia />
      <div className={styles.divider}></div>
      <div className={styles.flexbox}>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} Parceley <span className={styles.line}>|</span> 
          <span className={styles.attribution}>Design by <a href="https://www.parchot.com" target="_blank">Parchot</a></span>
        </p>
        <BackToTop />
      </div>
    </footer>
  )
}

export default Footer
