import React from 'react'
import Image from '../image'
import RecipeCard from '../recipeCard/recipeCard'
import styles from './recipeMenu.module.scss'

const recipes = [
  {
    id: 1,
    image: "burger.jpg",
    title: "Vegan Burger",
    description: "Quality imitation meat with low-fat baked fries",
    info: "1460kj"
  },
  {
    id: 2,
    image: "chicken.jpg",
    title: "Barramundi",
    description: "Served with balsamic glaze & cucumber salad",
    info: "1050kj"
  },
  {
    id: 3,
    image: "sushi.jpg",
    title: "Seafood Platter",
    description: "Locally sourced seafood served with garlic sauce",
    info: "1230kj"
  },
  {
    id: 4,
    image: "taco.jpg",
    title: "Spicy Pork Tacos",
    description: "Chinese-Spanish infusion with triple seasonings",
    info: "875kj"
  },
  {
    id: 5,
    image: "salad.jpg",
    title: "Greeniers Salad",
    description: "A beautiful salad prepared with edible flowers",
    info: "760kj"
  },
  {
    id: 6,
    image: "oatmeal.jpg",
    title: "Heather's Oatmeal",
    description: "Oatmeal made with fresh whole fruit",
    info: "960kj"
  },
  {
    id: 7,
    image: "nachos.jpg",
    title: "Loaded Nachos",
    description: "A light snack for when you want to treat yourself",
    info: "1375kj"
  },
  {
    id: 8,
    image: "drinks.jpg",
    title: "Fruit Cocktails",
    description: "Prepared with a choice of alcohol",
    info: "580kj"
  }
]

const RecipeMenu = () => {
  return (
    <section className={styles.recipeMenu} id="recipes">
      <div className={styles.wrapper}>
        <h2 className={styles.heading}>Explore our menu</h2>
        <p className={styles.subheading}>A small preview of the meals available to our special test members.</p>
        <div className={styles.nuts}><Image filename="nuts2.png" noBlur="true" /></div>
        <div className={styles.nutsBottom}><Image filename="nuts2.png" noBlur="true" /></div>
        <div className={styles.grid}>
          {recipes.map(recipe => 
            <RecipeCard key={recipe.id} image={recipe.image} title={recipe.title} description={recipe.description} info={recipe.info} />
          )}
        </div>
      </div>
    </section>
  )
}

export default RecipeMenu
