import React from 'react'
import styles from './about.module.scss'

const About = () => {
  return (
    <section className={styles.about}>
      <h2 className={styles.heading}>How it works</h2>
      <p className={styles.subheading}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      <br /> Maec enas pharetra sit amet nunc.</p>
      <div className={styles.grid}>
        <div style={{width: '300px', height: '300px', backgroundColor: '#333'}}></div>
        <div style={{width: '300px', height: '300px', backgroundColor: '#333'}}></div>
        <div style={{width: '300px', height: '300px', backgroundColor: '#333'}}></div>
      </div>
    </section>
  )
}

export default About
