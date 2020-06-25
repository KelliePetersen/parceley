import React from "react"
import Hero from "../sections/hero"
import Intro from "../sections/intro"
import About from "../sections/about"
import Features from "../sections/features"
import FeaturesLeft from "../sections/featuresLeft"
import Testimonials from "../sections/testimonials"
import FeaturedItems from "../components/featuredItems/featuredItems"
import RecipeMenu from "../components/recipeMenu/recipeMenu"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <About />
    <Intro />
    <FeaturedItems />
    <Features />
    <FeaturesLeft />
    <RecipeMenu />
    <Testimonials />
  </Layout>
)

export default IndexPage
