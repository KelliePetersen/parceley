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
          title="Pick Meals" 
          description="Choose your meals (and dietary preferences) on the Parceley App. We handle everything from there."
        />
        <AboutCard 
          title="Choose Offers" 
          description="Special offers will be available every week, giving you unique or even free food."
        />
        <AboutCard 
          title="Fast Delivery" 
          description="Our insulated boxes are delivered by priority express, so you never miss a meal."
        />
        <div className={styles.nuts}><Image filename="nuts4.png" /></div>
        <div className={styles.parsley}><Image filename="parsley2.png" /></div>
      </div>
    </section>
  )
}

export default About
