import React from 'react'
import styles from './featuredItems.module.scss'
import FeaturedItemCard from '../featuredItemCard/featuredItemCard'

const FeaturedItems = () => {
  return (
    <div className={styles.featuredItems}>
      <div className={styles.wrapper}>
        <h3 className={styles.heading}>Featured Foods</h3>
        <div className={styles.carousel}>
          <FeaturedItemCard image="featured1.png" title='Grilled Chicken Salad' info='980kj' />
          <FeaturedItemCard image="featured2.png" title='Grilled Chicken Salad' info='980kj' imageSize='175px' />
          <FeaturedItemCard image="featured3.png" title='Grilled Chicken Salad' info='980kj' />
          <FeaturedItemCard image="featured4.png" title='Grilled Chicken Salad' info='980kj' imageSize='150px' />
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
