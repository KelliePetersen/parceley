import React from 'react'
import styles from './recipeMenu.module.scss'

const RecipeMenu = () => {
  return (
    <section className={styles.recipeMenu} id="recipes">
      <div className={styles.wrapper}>
        <h2 className={styles.heading}>Explore our menu</h2>
        <div className={styles.tab}>
          <button type="button" className={styles.tablink}>Breakfast</button>
          <button type="button" className={styles.tablink}>Lunch</button>
          <button type="button" className={styles.tablink}>Dinner</button>
          <button type="button" className={styles.tablink}>Dessert</button>
          <button type="button" className={styles.tablink} style={{marginRight: '0'}}>Snacks</button>
        </div>
        <div className={styles.grid}>
          <div style={{height: '300px', width: '250px', backgroundColor: '#333'}}></div>
          <div style={{height: '300px', width: '250px', backgroundColor: '#333'}}></div>
          <div style={{height: '300px', width: '250px', backgroundColor: '#333'}}></div>
          <div style={{height: '300px', width: '250px', backgroundColor: '#333'}}></div>
          <div style={{height: '300px', width: '250px', backgroundColor: '#333'}}></div>
          <div style={{height: '300px', width: '250px', backgroundColor: '#333'}}></div>
          <div style={{height: '300px', width: '250px', backgroundColor: '#333'}}></div>
          <div style={{height: '300px', width: '250px', backgroundColor: '#333'}}></div>
        </div>
      </div>
    </section>
  )
}

export default RecipeMenu
