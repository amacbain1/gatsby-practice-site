import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi Beautiful</h1>
    <p>Have fun with this new cool tool.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam assumenda tenetur velit quae cupiditate voluptatibus in sit. Commodi, qui sunt aliquam quasi ea dolores itaque. Voluptatem quaerat exercitationem iusto animi!
    </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
