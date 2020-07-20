import React from 'react'
import styles from './intro.module.scss'
import IntroItemCard from '../components/introItemCard/introItemCard'

const Intro = () => {
  return (
    <section className={styles.intro}>
      <div className={styles.wrapper}>
        <div style={{marginLeft: 'auto'}}>
          <IntroItemCard image='bowl-small.png' title='Grilled Chicken Salad' description='Real chicken' info='980kj' />
        </div>
        <IntroItemCard image='bowl-small.png' title='Grilled Chicken Salad' description='Real chicken' info='980kj' />
        <div className={styles.container}>
          <h2 className={styles.heading}>Delicious food <br />is waiting for you</h2>
          <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Maec enas pharetra sit amet nunc in pulvinar edgar.  adipiscing elit. Pharetra sit amet nunc in barlet.</p>
        </div>
      </div>
    </section>
  )
}

export default Intro
