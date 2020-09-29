import React from 'react'
import styles from './appDescription.module.scss'

const AppDescription = ({ heading, subheading, firstListHeading, firstListText, secondListHeading, secondListText }) => {
  return (
    <div className={styles.appDescription}>
      <h2 className={styles.heading}>{heading}</h2>
      <p className={styles.subheading}>{subheading}</p>
      <div className={styles.card}>
        <div className={styles.icon}></div>
        <div>
          <h4 className={styles.title}>{firstListHeading}</h4>
          <p className={styles.description}>{firstListText}</p>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.icon}></div>
        <div>
          <h4 className={styles.title}>{secondListHeading}</h4>
          <p className={styles.description}>{secondListText}</p>
        </div>
      </div>
    </div>
  )
}

export default AppDescription
