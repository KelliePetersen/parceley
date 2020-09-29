import React from 'react'
import Image from '../image'
import styles from './reviewCard.module.scss'

const ReviewCard = ({ image, name, location, description }) => {
  return (
    <div className={`${styles.card} ${description ? undefined : styles.smallCard}`}>
      <div className={styles.image}><Image filename={image} /></div>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.location}>{location}</p>
      <p className={styles.description}>{description}</p>
      <div>
        <div className={styles.star}>★</div>
        <div className={styles.star}>★</div>
        <div className={styles.star}>★</div>
        <div className={styles.star}>★</div>
        <div className={styles.star}>★</div>
      </div>
    </div>
  )
}

export default ReviewCard
