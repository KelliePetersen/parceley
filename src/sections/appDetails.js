import React from 'react'
import styles from './appDetails.module.scss'

const AppDetails = () => {
  return (
    <section className={styles.appDetails} id="features">
      <div className={styles.wrapper}>
        <div style={{position: 'relative'}}>
          <div className={styles.background}></div>
          <div className={styles.phone}></div>
          <div className={styles.phone} style={{marginLeft: '40px', position: 'relative', top: '40px'}}></div>
        </div>
        <div>
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
      </div>
    </section>
  )
}

export default AppDetails
