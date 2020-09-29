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
          <RecipeCard image="burger.jpg" title="Vegan Burger" description="Quality imitation meat with low-fat baked fries" info="1460kj" />
          <RecipeCard image="chicken.jpg" title="Barramundi" description="Served with balsamic glaze &amp; cucumber salad" info="1050kj" />
          <RecipeCard image="sushi.jpg" title="Seafood Platter" description="Locally sourced seafood served with garlic sauce" info="1230kj" />
          <RecipeCard image="taco.jpg" title="Spicy Pork Tacos" description="Chinese-Spanish infusion" info="980kj" />
          <RecipeCard image="salad.jpg" title="Greeniers Salad" description="A beautiful salad prepared with edible flowers" info="980kj" />
          <RecipeCard image="oatmeal.jpg" title="Heather's Oatmeal" description="Oatmeal made with fresh whole fruit" info="980kj" />
          <RecipeCard image="nachos.jpg" title="Loaded Nachos" description="A treat for cheatday" info="1375kj" />
          <RecipeCard image="drinks.jpg" title="Fruit Cocktails" description="Prepared with a choice of alcohol" info="980kj" />
        </div>
        <div className={styles.nuts}><Image filename="nuts2.png" /></div>
        <div className={styles.nutsBottom}><Image filename="nuts2.png" /></div>
      </div>
    </section>
  )
}

export default RecipeMenu
