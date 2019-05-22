import React from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import Featured from '../components/Featured'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Accomplishments from '../components/Accomplishments'
import Education from '../components/Education'
import Footer from '../components/Footer'
import LatestPost from '../components/LatestPost'

const CURRENT_YEAR = new Date().getFullYear()
const START_YEAR = 2006

const ContentWrapper = styled.div`
  margin: 0 auto;
  max-width: 750px;
`

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <div>
        <Layout location={this.props.location} title={siteTitle}>
          <SEO
            title="About Me"
            keywords={[`blog`, `gatsby`, `javascript`, `react`]}
          />
          <Bio />
          <Featured />
          <ContentWrapper>
            <LatestPost />
            <Skills currentYear={CURRENT_YEAR} startYear={START_YEAR} />
            <Experience />
            <Accomplishments />
            <Education currentYear={CURRENT_YEAR} startYear={START_YEAR} />
          </ContentWrapper>
        </Layout>
        <Footer showGitHub />
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
