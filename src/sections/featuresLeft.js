import React from 'react'
import styles from './featuresLeft.module.scss'
import AppDescription from '../components/appDescription'

const FeaturesLeft = () => {
  return (
    <section className={styles.featuresLeft} id="features">
      <div className={styles.wrapper}>
        <div style={{position: 'relative'}}>
          <div className={styles.background}></div>
          <div className={styles.phone}></div>
          <div className={styles.phone} style={{marginLeft: '40px', position: 'relative', top: '40px'}}></div>
        </div>
        <AppDescription />
      </div>
    </section>
  )
}

export default FeaturesLeft
