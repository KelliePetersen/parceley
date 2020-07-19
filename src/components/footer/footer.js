import React from 'react'
import Logo from '../logo/logo'
import Nav from '../nav/nav'
import SocialMedia from '../socialMedia/socialMedia'
import BackToTop from '../backToTop/backToTop'
import styles from './footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <Logo />
        <div className={styles.hidden}><Nav styling={{marginLeft: 'auto', width: '500px'}} /></div>
        <p className={styles.text}>Anywhere, anytime. Enjoy your sweet meal.</p>
        <div className={styles.social}>
          <SocialMedia />
        </div>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.flexbox}>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} Parceley <span className={styles.line}>|</span> 
          <span className={styles.attribution}>Design by
            <a href="https://www.parchot.com" target="_blank" rel="noreferrer"> Parchot</a>
          </span>
        </p>
        <div className={styles.backToTop}><BackToTop /></div>
      </div>
    </footer>
  )
}

export default Footer
