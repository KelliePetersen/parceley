import React from 'react'
import ReviewCard from '../components/reviewCard'
import styles from './testimonials.module.scss'

const Testimonials = () => {
  return (
    <section className={styles.testimonials} id="testimonials">
      <h2>What people are saying</h2>
      <p className={styles.subheading}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
        Maec enas pharetra sit amet nunc.</p>
      <div className={styles.grid}>
      <ReviewCard name="Jane Doe" location="NY, USA" />
      <ReviewCard 
        name="Jane Doe" 
        location="NY, USA" 
        description="Lorem ipsum dolor sit amet, con
        adipisc elit. Maec enas pharet
        sit amet nunc consectur."
      />
      <ReviewCard name="Jane Doe" location="NY, USA" />
      <ReviewCard name="Jane Doe" location="NY, USA" />
      <ReviewCard name="Jane Doe" location="NY, USA" />
      <ReviewCard name="Jane Doe" location="NY, USA" />
      </div>
    </section>
  )
}

export default Testimonials
