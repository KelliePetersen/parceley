import React from 'react'
import Image from '../image'
import styles from './recipeCard.module.scss'

const RecipeCard = ({ image, title, description, info }) => {
  return (
    <div className={styles.card}>
      <div className={styles.image} >
        <Image filename={image} />
      </div>
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
      <p className={styles.info}>{info}</p>
    </div>
  )
}

export default RecipeCard
