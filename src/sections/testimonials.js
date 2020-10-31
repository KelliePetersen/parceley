import React from 'react'
import Image from '../components/image'
import ReviewCard from '../components/reviewCard/reviewCard'
import styles from './testimonials.module.scss'

const Testimonials = () => {
  return (
    <section className={styles.testimonials} id="testimonials">
      <h2>What people are saying</h2>
      <p className={styles.subheading}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
        Maec enas pharetra sit amet nunc.</p>
      <div className={styles.grid}>
      <div style={{position: 'relative', left: '-50px', top: '20px'}}>
        <ReviewCard image="person2.jpg" name="Jane Doe" location="NY, USA" />
      </div>
      <div style={{position: 'relative'}}>
        <ReviewCard 
          image="person1.jpg" name="Jane Doe" 
          location="NY, USA" 
          description="Lorem ipsum dolor sit amet, con
          adipisc elit. Maec enas pharet
          sit amet nunc consectur."
        />
        <div className={styles.spinach}><Image filename="spinach.png" /></div>
      </div>
      <div style={{position: 'relative', top: '50px', left: '40px'}}>
        <ReviewCard image="person3.jpg" name="Jane Doe" location="NY, USA" />
      </div>
      <ReviewCard image="person4.jpg" name="Jane Doe" location="NY, USA" />
      <div style={{position: 'relative', top: '50px', left: '70px'}}>
        <ReviewCard image="person5.jpg" name="Jane Doe" location="NY, USA" />
      </div>
      <div style={{position: 'relative', top: '20px', left: '70px'}}>
        <ReviewCard image="person6.jpg" name="Jane Doe" location="NY, USA" />
      </div>
      </div>
    </section>
  )
}

export default Testimonials
