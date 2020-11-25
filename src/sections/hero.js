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
            Sign up for the most affordable, healthy meal kits in America.
            Gluten, vegan, and animal-cruelty free.
          </p>
          <SignUp />
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.image}>
            <div className={styles.main}><Image loading="eager" filename="hero.png" /></div>
            <div className={styles.nuts}><Image loading="eager" filename="nuts2.png" noBlur="true" /></div>
            <div className={styles.nutsBottom}><Image loading="eager" filename="nuts3.png" noBlur="true" /></div>
            <div className={styles.parsley}><Image loading="eager" filename="parsley3.png" noBlur="true" /></div>
            <div className={styles.herbs}><Image loading="eager" filename="herbs.png" noBlur="true" /></div>
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
