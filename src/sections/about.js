import React from 'react'
import Image from '../components/image'
import AboutCard from '../components/aboutCard/aboutCard'
import styles from './about.module.scss'

const About = () => {
  return (
    <section className={styles.about} id="about">
      <h2 className={styles.heading}>How it works</h2>
      <p className={styles.subheading}>Just open the app, choose your food, 
      and wait for it be delivered straight to your doorstep.</p>
      <div className={styles.grid}>
        <AboutCard
          image="groceries.png"
          title="Choose Meals" 
          description="Choose your meals (and dietary preferences) on the Parceley App. We handle everything from there."
        />
        <AboutCard
          image="truck.png"
          title="Safe Delivery" 
          description="Our insulated boxes are hard to damage. Safely delivered by priority express, so you never miss a meal."
        />
        <AboutCard
          image="food.png"
          title="Easy to Prepare" 
          description="We make it easy. Each meal takes less than an hour to prepare &amp; cook, with enough servings to last for days."
        />
        <div className={styles.nuts}><Image filename="nuts4.png" /></div>
        <div className={styles.parsley}><Image filename="parsley2.png" /></div>
      </div>
    </section>
  )
}

export default About
