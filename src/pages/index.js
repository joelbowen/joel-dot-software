import React from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import PageWrapper from '../components/PageWrapper'
import Layout from '../components/Layout'
import Intro from '../components/Intro'
import Seo from '../components/seo'
import Featured from '../components/Featured'
import AboutMe from '../components/AboutMe'
import Footer from '../components/Footer'
import LatestPost from '../components/LatestPost'

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
          <Seo
            title="About Me"
            keywords={[`blog`, `gatsby`, `javascript`, `react`]}
            imageUrl={`https://joel.software${data.avatar.publicURL}`}
          />
          <Intro />
          <Featured />
          <ContentWrapper>
            <LatestPost />
            <AboutMe />
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
    avatar: file(absolutePath: { regex: "/profile-icon-02.png/" }) {
      publicURL
    }
  }
`
