import React from 'react'
import { Link } from "gatsby"
import styles from './featuredItems.module.scss'
import FeaturedItemCard from '../featuredItemCard/featuredItemCard'
import ArrowButton from '../arrowButton/arrowButton'

const FeaturedItems = () => {
  return (
    <div className={styles.featuredItems}>
      <div className={styles.background}>
        <div className={styles.wrapper}>
          <h3 className={styles.heading}>Featured Foods</h3>
          <div className={styles.carousel}>
            <FeaturedItemCard image="featured1.png" title='Mediterranean Salad' info='1040kj' />
            <FeaturedItemCard image="featured2.png" title='Grilled Chicken Salad' info='980kj' imageSize='175px' />
            <FeaturedItemCard image="featured3.png" title='French Eggs Benedict' info='820kj' />
            <FeaturedItemCard image="featured4.png" title='Chicken Tomato Mix' info='1175kj' imageSize='1230kj' />
          </div>
          <div className={styles.order}>
            <Link to="#signup" className={styles.buttonText}>Order Now</Link>
            <ArrowButton />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedItems
