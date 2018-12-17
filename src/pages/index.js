import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <h1>Hi, my name is Paul Jonathan </h1>
    <p>THis is a practice to learn React Apps</p>
      <div style={{ maxWidth: '150px', marginBottom: '5rem' }}>
      <Image />
     </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
