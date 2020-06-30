import React from 'react'
import Image from './image'
import styles from './reviewCard.module.scss'

const ReviewCard = ({ image, name, location, description }) => {
  return (
    <div className={styles.card}>
      <div className={styles.image}><Image filename={image} /></div>
      <h4 className={styles.name}>{name}</h4>
      <p className={styles.location}>{location}</p>
      <p className={description ? styles.description : styles.empty}>{description}</p>
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
