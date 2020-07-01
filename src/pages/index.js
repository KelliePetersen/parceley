import React from "react"
import Hero from "../sections/hero"
import Intro from "../sections/intro"
import FeaturesLeft from "../sections/featuresLeft"
import Testimonials from "../sections/testimonials"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Intro />
    <FeaturesLeft />
    <Testimonials />
  </Layout>
)

export default IndexPage
