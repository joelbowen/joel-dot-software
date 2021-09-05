import React from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'

import PageWrapper from '../components/PageWrapper'
import Layout from '../components/Layout'
import Bio from '../components/Bio'
import SEO from '../components/seo'
import Featured from '../components/Featured'
import Skills from '../components/Skills'
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
    const { data, location } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <PageWrapper>
        <Layout location={location} title={siteTitle}>
          <SEO
            title="About Me"
            keywords={[`blog`, `gatsby`, `javascript`, `react`]}
            imageUrl={`https://joel.software${data.avatar.publicURL}`}
          />
          <Bio />
          <Featured />
          <ContentWrapper>
            <LatestPost />
            <Skills currentYear={CURRENT_YEAR} startYear={START_YEAR} />
          </ContentWrapper>
        </Layout>
        <Footer showGitHub />
      </PageWrapper>
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
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      publicURL
    }
  }
`
