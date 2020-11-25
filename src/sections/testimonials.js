import React from 'react'
import Image from '../components/image'
import ReviewCard from '../components/reviewCard/reviewCard'
import styles from './testimonials.module.scss'

const Testimonials = () => {
  return (
    <section className={styles.testimonials} id="testimonials">
      <h2>What people are saying</h2>
      <p className={styles.subheading}>Parceley comes highly rated, recommended and revered by everybody involved in closed testing.</p>
      <div className={styles.grid}>
      <div className={styles.one}>
        <ReviewCard 
          image="person1.jpg" name="Sarah Wilson" 
          location="NY, USA" 
          description="Parceley is the best mealprep app I've ever tried. 
          I'm finally able to stick to a diet due to how great it tastes!"
        />
        <div className={styles.spinach}><Image filename="spinach.png" noBlur="true" /></div>
      </div>
      <div className={styles.two}>
        <ReviewCard image="person2.jpg" name="Geoff Hardley" location="GA, USA" />
      </div>
      <div className={styles.three}>
        <ReviewCard image="person3.jpg" name="Erik Leoldsen" location="CA, USA" />
      </div>
      <div className={styles.four}>
        <ReviewCard image="person4.jpg" name="Jennifer Parker" location="BC, Canada" />
      </div>
      <div className={styles.five}>
        <ReviewCard image="person5.jpg" name="Adam Smith" location="NY, USA" />
      </div>
      <div className={styles.six}>
        <ReviewCard image="person6.jpg" name="Paul Ramsey" location="AB, Canada" />
      </div>
      </div>
    </section>
  )
}

export default Testimonials
