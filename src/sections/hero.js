import React from 'react'
import Image from '../components/image'
import SignUp from '../components/signUp/signUp'
import SocialMedia from '../components/socialMedia/socialMedia'
import styles from './hero.module.scss'

const Hero = () => {
  return (
    <div className={styles.hero} id="hero">
      <div className={styles.container}>
        <div className={styles.textbox}>
          <h1 className={styles.heading}>
            Delicious food <br />is waiting for you
          </h1>
          <p className={styles.subheading}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
            Maec enas pharetra sit amet nunc in pulvinar.
          </p>
          <SignUp />
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.image}>
            <Image filename="hero.png" />
            <div className={styles.nuts}><Image filename="nuts2.png" /></div>
            <div className={styles.nutsBottom}><Image filename="nuts3.png" /></div>
            <div className={styles.parsley}><Image filename="parsley3.png" /></div>
            <div className={styles.herbs}><Image filename="herbs.png" /></div>
          </div>
        </div>
      </div>
      <div className={styles.background} />
      <SocialMedia styling={{position: 'absolute', bottom: '50px', right: '50px'}} />
    </div>
  )
}

export default Hero
