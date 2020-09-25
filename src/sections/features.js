import React from 'react'
import Image from '../components/image'
import AppDescription from '../components/appDescription/appDescription'
import styles from './features.module.scss'

const Features = () => {
  return (
    <section className={styles.features} id="features">
        <AppDescription />
        <div className={styles.image}>
          <Image filename="large.png" />
        </div>
      <div className={styles.background}></div>
    </section>
  )
}

export default Features
