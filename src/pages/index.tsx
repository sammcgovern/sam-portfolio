import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import MainSplash from "../Layouts/MainSplash"
import AboutMe from "../Layouts/AboutMe"
import Work from "../Layouts/WorkExamples"
import Contact from "../Layouts/Contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <MainSplash />
    <AboutMe />
    <Work />
    <Contact />
  </Layout>
)

export default IndexPage
