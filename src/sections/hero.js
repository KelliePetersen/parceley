import React from 'react'
import Image from '../components/image'
import SignUp from '../components/signUp/signUp'
import SocialMedia from '../components/socialMedia/socialMedia'
import styles from './hero.module.scss'

const Hero = () => {
  return (
    <div className={styles.hero} id="hero">
      <div className={styles.container}>
        <h1 className={styles.heading}>
          Delicious food <br />is waiting for you
        </h1>
        <p className={styles.subheading}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
          Maec enas pharetra sit amet nunc in pulvinar.
        </p>
        <SignUp />
      </div>
      <div className={styles.background}>
        <div className={styles.image}>
          <Image filename="bowl3.png" />
        </div>
      </div>
      <div className={styles.scroll}>
        <div className={styles.icon}></div>
        <p style={{display: 'inline-block', margin: '0'}} >Scroll Down</p>
      </div>
      <SocialMedia styling={{position: 'absolute', bottom: '50px', right: '50px'}} />
    </div>
  )
}

export default Hero
