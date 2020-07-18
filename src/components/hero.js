import React from 'react'
import styles from './hero.module.scss'

const Hero = () => {
  return (
    <div className={styles.hero} id="hero">
      <div className={styles.container}>
        <h1 className={styles.heading}>
          Delicious food <br />is waiting for you
        </h1>
        <p className={styles.subheading}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maec enas pharetra sit amet nunc in pulvinar.
        </p>
        <div>
          placeholder
        </div>
      </div>
    </div>
  )
}

export default Hero
