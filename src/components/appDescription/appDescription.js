import React from 'react'
import styles from './appDescription.module.scss'

const AppDescription = () => {
  return (
    <div className={styles.appDescription}>
      <h2 className={styles.heading}>Delicious food <br />is waiting for you</h2>
      <p className={styles.subheading}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> 
      Maec enas pharetra sit amet nunc.</p>
      <div className={styles.card}>
        <div className={styles.icon}></div>
        <div>
          <h4 className={styles.title}>Lorem Ipsum</h4>
          <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Maec enas pharetra sit amet nunc.</p>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.icon}></div>
        <div>
          <h4 className={styles.title}>Lorem Ipsum</h4>
          <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Maec enas pharetra sit amet nunc.</p>
        </div>
      </div>
    </div>
  )
}

export default AppDescription
