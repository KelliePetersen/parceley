import React from 'react'
import styles from './socialMedia.module.scss'

const SocialMedia = ({ styling }) => {
  return (
    <div className={styles.container} style={styling}>
      <a target="_blank" href="https://www.instagram.com/parchotsoftware" className={styles.social}>
        <div className={styles.instagram}></div>
      </a>
      <a target="_blank" href="https://www.facebook.com/parchotsoftware" className={styles.social}>
        <div className={styles.facebook}></div>
      </a>
      <a target="_blank" href="https://www.twitter.com/parchotsoftware" className={styles.social}>
        <div className={styles.twitter}></div>
      </a>
    </div>
  )
}

export default SocialMedia
