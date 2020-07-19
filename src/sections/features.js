import React from 'react'
import Image from '../components/image'
import AppDescription from '../components/appDescription/appDescription'
import styles from './features.module.scss'

const Features = () => {
  return (
    <section className={styles.features} id="features">
      <div className={styles.wrapper} style={{marginLeft: 'auto', marginRight: 'auto', columnGap: '0'}}>
        <AppDescription />
        <div style={{position: 'relative'}}>
          <div className={styles.background} style={{left: 'auto'}}></div>
          <Image filename="bowl3.png" styling={{width: '550px'}} />
        </div>
      </div>
    </section>
  )
}

export default Features
