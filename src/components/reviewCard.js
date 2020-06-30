import React from 'react'
import Image from './image'
import styles from './reviewCard.module.scss'

const ReviewCard = ({ image, name, location, description }) => {
  return (
    <div className={styles.card}>
      <div className={styles.image}><Image filename={image} /></div>
      <h4 className={styles.name}>{name}</h4>
      <p className={styles.location}>{location}</p>
      <p className={styles.description}>{description}</p>
    </div>
  )
}

export default ReviewCard
