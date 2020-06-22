import React from "react"
import Hero from "../sections/hero"
import Intro from "../sections/intro"
import About from "../sections/about"
import Features from "../sections/features"
import FeaturesLeft from "../sections/featuresLeft"
import Testimonials from "../sections/testimonials"
import FeaturedItems from "../components/featuredItems/featuredItems"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Intro />
    <About />
    <FeaturedItems />
    <Features />
    <FeaturesLeft />
    <Testimonials />
  </Layout>
)

export default IndexPage
