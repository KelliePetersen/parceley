import React from 'react'
import ArrowButton from '../arrowButton/arrowButton'
import Image from '../image'
import styles from './introItemCard.module.scss'

const IntroItemCard = ({ image, title, description, info }) => {
  return (
    <div className={styles.card}>
      <div className={styles.image} >
        <Image filename={image} />
      </div>
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
      <p className={styles.info}>{info}</p>
      <ArrowButton styling={{position: 'absolute', bottom: '25px', right: '25px'}} />
    </div>
  )
}

export default IntroItemCard
