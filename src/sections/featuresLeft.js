import React from 'react'
import Image from '../components/image'
import styles from './features.module.scss'
import AppDescription from '../components/appDescription/appDescription'

const FeaturesLeft = () => {
  return (
    <section className={`${styles.features} ${styles.featuresLeft}`}>
      <div className={styles.phoneContainer}>
        <div className={styles.background} style={{right: '-50px', width: '750px'}}></div>
        <div className={styles.phone}>
          <Image filename="mobile1.png" />
          <div className={styles.basil}><Image filename="basil4.png" /></div>
        </div>
        <div className={styles.phone} style={{marginLeft: '30px', position: 'relative', top: '40px'}}>
          <Image filename="mobile2.png" />
        </div>
      </div>
      <div className={styles.appDescription}><AppDescription /></div>
    </section>
  )
}

export default FeaturesLeft
