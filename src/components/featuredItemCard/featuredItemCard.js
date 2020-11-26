import React from 'react'
import Image from '../image'
import styles from './featuredItemCard.module.scss'

const FeaturedItemCard = ({ image, title, info, imageSize }) => {
  return (
    <div className={styles.card}>
      <div className={styles.image} style={{width: imageSize, height: imageSize, left: `calc(-${imageSize} / 2)`}} >
        <Image filename={image} />
      </div>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.info}>{info}</p>
    </div>
  )
}

export default FeaturedItemCard
