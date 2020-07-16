import React from "react"
import Hero from "../sections/hero"
import Intro from "../sections/intro"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Intro />
  </Layout>
)

export default IndexPage
