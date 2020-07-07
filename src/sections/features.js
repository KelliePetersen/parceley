import React from 'react'
import Image from '../components/image'
import AppDescription from '../components/appDescription/appDescription'
import styles from './features.module.scss'

const Features = () => {
  return (
    <section className={styles.features} id="features">
      <div className={styles.wrapper}>
        <AppDescription />
        <div style={{position: 'relative'}}>
          <div className={styles.background}></div>
          <Image filename="bowl3.png" styling={{width: '550px'}} />
        </div>
      </div>
    </section>
  )
}

export default Features
