import React from 'react'
import Image from '../components/image'
import AppDescription from '../components/appDescription/appDescription'
import styles from './features.module.scss'

const Features = () => {
  return (
    <section className={styles.features} id="features">
        <AppDescription />
        <div className={styles.image}>
          <Image filename="bowl3.png" styling={{width: '570px'}} />
        </div>
      <div className={styles.background} style={{left: 'auto'}}></div>
    </section>
  )
}

export default Features
