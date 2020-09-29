import React from 'react'
import Image from '../image'
import styles from './aboutCard.module.scss'

const AboutCard = ({ image, title, description }) => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <div className={styles.icon}><Image filename={image} /></div>
      </div>
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
    </div>
  )
}

export default AboutCard
