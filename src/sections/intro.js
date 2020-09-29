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
          <h2 className={styles.heading}>Your food <br />is waiting for you</h2>
          <p className={styles.text}>We offer a selection of over 40 meals each week. Don't miss out on the meal of your
          lifetime. Join us now to know when Parceley is available in your area.</p>
        </div>
      </div>
    </section>
  )
}

export default Intro
