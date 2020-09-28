import React from 'react'
import Image from '../components/image'
import AppDescription from '../components/appDescription/appDescription'
import styles from './features.module.scss'

const Features = () => {
  return (
    <section className={styles.features} id="features">
        <AppDescription />
        <div className={styles.image}>
          <div className={styles.nuts}><Image filename="nuts.png" /></div>
          <div className={styles.parsley}><Image filename="parsley.png" /></div>
         <div className={styles.plate}><Image filename="large.png" /></div>
        </div>
      <div className={styles.background}></div>
    </section>
  )
}

export default Features
