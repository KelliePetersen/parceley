import React from 'react'
import Image from '../image'
import styles from './aboutCard.module.scss'

const AboutCard = ({ image, title, description }) => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <div className={styles.icon}><Image filename={image} /></div>
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  )
}

export default AboutCard
