import React from 'react'
import Image from './image'
import styles from '../styles/featuredItemCard.module.scss'

const FeaturedItemCard = ({ image, title, info }) => {
  return (
    <div className={styles.card}>
      <Image filename={image} />
      <p className={styles.title}>{title}</p>
      <p className={styles.info}>{info}</p>
    </div>
  )
}

export default FeaturedItemCard
