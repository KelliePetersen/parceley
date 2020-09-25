import React from 'react'
import Image from '../components/image'
import styles from './intro.module.scss'
import IntroItemCard from '../components/introItemCard/introItemCard'

const Intro = () => {
  return (
    <section className={styles.intro}>
      <div className={styles.wrapper}>
        <div className={styles.nuts}><Image filename="nuts5.png" /></div>
        <div style={{marginLeft: 'auto'}}>
          <IntroItemCard image='medium1.png' title='Premier Platter' description='Freshly grown produce with free-range eggs' info='875kj' />
        </div>
        <IntroItemCard image='medium2.png' title='Grilled Chicken' description='Real chicken with triple seasonings' info='1020kj' />
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
