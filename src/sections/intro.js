import React from 'react'
import styles from './intro.module.scss'

const Intro = () => {
  return (
    <section className={styles.intro} id="about">
      <div className={styles.wrapper}>
        <div style={{width: '300px', height: '450px', backgroundColor: '#333'}}></div>
        <div style={{width: '300px', height: '450px', backgroundColor: '#333'}}></div>
        <div className={styles.container}>
          <h2 className={styles.heading}>Delicious food <br />is waiting for you</h2>
          <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Maec enas pharetra sit amet nunc in pulvinar edgar.  adipiscing elit. Pharetra sit amet nunc in barlet.</p>
        </div>
      </div>
    </section>
  )
}

export default Intro
