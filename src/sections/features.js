import React from 'react'
import Image from '../components/image'
import AppDescription from '../components/appDescription/appDescription'
import styles from './features.module.scss'

const Features = () => {
  return (
    <section className={styles.features} id="features">
        <AppDescription 
          heading="Lose weight with our 12-week meal plan"
          subheading="Our plan is rich in protein and essential vitamins, while being low in fats and sugars.
          This study-backed diet will make you healthier than ever!"
          firstListHeading="Lose weight"
          firstListText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Maec enas pharetra sit amet nunc."
          secondListHeading="Build muscle"
          secondListText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Maec enas pharetra sit amet nunc."
        />
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
