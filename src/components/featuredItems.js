import React from 'react'
import styles from './featuredItems.module.scss'
import FeaturedItemCard from './featuredItemCard'

const FeaturedItems = () => {
  return (
    <div className={styles.featuredItems}>
      <div className={styles.wrapper}>
        <h3 className={styles.heading}>Featured Foods</h3>
        <div className={styles.carousel}>
          <FeaturedItemCard image="bowl-small.png" title='Grilled Chicken Salad' info='980kj' />
          <FeaturedItemCard image="bowl-small.png" title='Grilled Chicken Salad' info='980kj' />
          <FeaturedItemCard image="bowl-small.png" title='Grilled Chicken Salad' info='980kj' />
          <FeaturedItemCard image="bowl-small.png" title='Grilled Chicken Salad' info='980kj' />
        </div>
        <div className={styles.arrows}>
          <button type="button" className={`${styles.arrow} ${styles.arrowLeft}`}>&larr;</button>
          <button type="button" className={`${styles.arrow} ${styles.arrowRight}`}>&rarr;</button>
        </div>
      </div>
    </div>
  )
}

export default FeaturedItems
