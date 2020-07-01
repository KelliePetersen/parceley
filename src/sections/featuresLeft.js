import React from 'react'
import styles from './features.module.scss'
import AppDescription from '../components/appDescription'

const FeaturesLeft = () => {
  return (
    <section className={styles.features}>
      <div className={styles.wrapper} style={{gridTemplateColumns: 'max-content max-content'}}>
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
