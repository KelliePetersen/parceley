import React from 'react'
import Image from '../image'
import RecipeCard from '../recipeCard/recipeCard'
import styles from './recipeMenu.module.scss'

const RecipeMenu = () => {
  return (
    <section className={styles.recipeMenu} id="recipes">
      <div className={styles.wrapper}>
        <h2 className={styles.heading}>Explore our menu</h2>
        <p className={styles.subheading}>A small preview of the meals available to our special test members.</p>
        <div className={styles.grid}>
          <RecipeCard image="burger.jpg" title="Grilled Salad" description="Real chicken" info="980kj" />
          <RecipeCard image="burger.jpg" title="Grilled Salad" description="Real chicken" info="980kj" />
          <RecipeCard image="burger.jpg" title="Grilled Salad" description="Real chicken" info="980kj" />
          <RecipeCard image="burger.jpg" title="Grilled Salad" description="Real chicken" info="980kj" />
          <RecipeCard image="burger.jpg" title="Grilled Salad" description="Real chicken" info="980kj" />
          <RecipeCard image="burger.jpg" title="Grilled Salad" description="Real chicken" info="980kj" />
          <RecipeCard image="burger.jpg" title="Grilled Salad" description="Real chicken" info="980kj" />
          <RecipeCard image="burger.jpg" title="Grilled Salad" description="Real chicken" info="980kj" />
        </div>
        <div className={styles.nuts}><Image filename="nuts2.png" /></div>
        <div className={styles.nutsBottom}><Image filename="nuts2.png" /></div>
      </div>
    </section>
  )
}

export default RecipeMenu
