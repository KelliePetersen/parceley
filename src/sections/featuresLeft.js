import React from 'react'
import styles from './features.module.scss'
import AppDescription from '../components/appDescription/appDescription'

const FeaturesLeft = () => {
  return (
    <section className={styles.features}>
      <div style={{marginLeft: '-100px', position: 'relative'}}>
        <div className={styles.background} style={{right: '-75px', width: '800px'}}></div>
        <div className={styles.phone}></div>
        <div className={styles.phone} style={{marginLeft: '30px', position: 'relative', top: '40px'}}></div>
      </div>
      <AppDescription />
    </section>
  )
}

export default FeaturesLeft
