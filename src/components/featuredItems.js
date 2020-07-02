import React from 'react'
import styles from './featuredItems.module.scss'

const FeaturedItems = () => {
  return (
    <div className={styles.featuredItems}>
      <div className={styles.wrapper}>
        <h3 className={styles.heading}>Featured Foods</h3>
        <div className={styles.carousel}>
          <div style={{width: '20%', height: '150px', backgroundColor: '#333'}}></div>
          <div style={{width: '20%', height: '150px', backgroundColor: '#333'}}></div>
          <div style={{width: '20%', height: '150px', backgroundColor: '#333'}}></div>
          <div style={{width: '20%', height: '150px', backgroundColor: '#333'}}></div>
        </div>
        <div className={styles.arrows}>

        </div>
      </div>
    </div>
  )
}

export default FeaturedItems
