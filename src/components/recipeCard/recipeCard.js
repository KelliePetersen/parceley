import React from 'react'
import ArrowButton from '../arrowButton/arrowButton'
import Image from '../image'
import styles from './recipeCard.module.scss'

const RecipeCard = ({ image, title, description, info }) => {
  return (
    <div className={styles.card}>
      <div className={styles.image} >
        <Image filename={image} />
      </div>
      <div className={styles.container}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.info}>{info}</p>
        <ArrowButton styling={{position: 'absolute', bottom: '20px', right: '20px'}} />
      </div>
    </div>
  )
}

export default RecipeCard
