import React from 'react'
import styles from './recipeMenu.module.scss'

const RecipeMenu = () => {
  return (
    <section className={styles.recipeMenu} id="recipes">
      <h2 className={styles.heading}>Expore our menu</h2>
      <div className={styles.tab}>
        <button type="button" className={styles.tablink}>Breakfast</button>
        <button type="button" className={styles.tablink}>Lunch</button>
        <button type="button" className={styles.tablink}>Dinner</button>
        <button type="button" className={styles.tablink}>Dessert</button>
        <button type="button" className={styles.tablink}>Snacks</button>
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
    </section>
  )
}

export default RecipeMenu
