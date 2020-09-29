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
          Fresh. Free range. <br /> Food for the <span className={styles.headingFocus}>future</span>.
          </h1>
          <p className={styles.subheading}>
            Sign up to try to most affordable, healthy meal kits in Australia.
            Gluten, vegan, and animal-cruelty free.
          </p>
          <SignUp />
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.image}>
            <div className={styles.main}><Image filename="hero.png" /></div>
            <div className={styles.nuts}><Image filename="nuts2.png" /></div>
            <div className={styles.nutsBottom}><Image filename="nuts3.png" /></div>
            <div className={styles.parsley}><Image filename="parsley3.png" /></div>
            <div className={styles.herbs}><Image filename="herbs.png" /></div>
          </div>
        </div>
      </div>
      <div className={styles.background} />
      <div className={styles.social}>
        <SocialMedia />
      </div>
    </div>
  )
}

export default Hero
