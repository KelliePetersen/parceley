import React from 'react'
import styles from './appDetails.module.scss'

const AppDetails = () => {
  return (
    <section className={styles.appDetails} id="appDetails">
      <div className={styles.wrapper}>
        <div>
          <div className={styles.background}></div>
          <div className={styles.phone}></div>
          <div className={styles.phone}></div>
        </div>
        <div>
          <h2 className={styles.heading}>Delicious food is waiting for you</h2>
          <p className={styles.subheading}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Maec enas pharetra sit amet nunc.</p>
          <div className={styles.card}>
            <div className={styles.icon}></div>
            <h4 className={styles.title}>Lorem Ipsum</h4>
            <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Maec enas pharetra sit amet nunc.</p>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}></div>
            <h4 className={styles.title}>Lorem Ipsum</h4>
            <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Maec enas pharetra sit amet nunc.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AppDetails
