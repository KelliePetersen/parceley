import React from 'react'
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
      <div className={styles.icon} />
    </div>
  )
}

export default IntroItemCard
