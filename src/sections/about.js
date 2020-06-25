import React from 'react'
import AboutCard from '../components/aboutCard/aboutCard'
import styles from './about.module.scss'

const About = () => {
  return (
    <section className={styles.about} id="about">
      <h2 className={styles.heading}>How it works</h2>
      <p className={styles.subheading}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      <br /> Maec enas pharetra sit amet nunc.</p>
      <div className={styles.grid}>
        <AboutCard 
          title="Pick Meals" 
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maec enas pharetra sit amet nunc."
        />
        <AboutCard 
          title="Choose Offers" 
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maec enas pharetra sit amet nunc."
        />
        <AboutCard 
          title="Fast Delivery" 
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maec enas pharetra sit amet nunc."
        />
      </div>
    </section>
  )
}

export default About
