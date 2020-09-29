import React from 'react'
import styles from './socialMedia.module.scss'

const SocialMedia = ({ styling }) => {
  return (
    <div className={styles.container} style={styling}>
      <a target="_blank" rel="noreferrer" href="https://www.instagram.com/parchotsoftware" className={styles.social} aria-label="instagram"
        style={{marginLeft: '0'}}
      >
        <div className={styles.instagram}></div>
      </a>
      <a target="_blank" rel="noreferrer" href="https://www.facebook.com/parchotsoftware" className={styles.social} aria-label="facebook">
        <div className={styles.facebook}></div>
      </a>
      <a target="_blank" rel="noreferrer" href="https://www.twitter.com/parchotsoftware" className={styles.social} aria-label="twitter">
        <div className={styles.twitter}></div>
      </a>
    </div>
  )
}

export default SocialMedia
