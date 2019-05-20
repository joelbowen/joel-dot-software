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
    const posts = data.allMarkdownRemark.edges

    return (
      <div>
        <Layout location={this.props.location} title={siteTitle}>
          <SEO
            title="About Me"
            keywords={[`blog`, `gatsby`, `javascript`, `react`]}
          />
          <Bio />
          <Featured />
          {/* {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          )
        })} */}
          <ContentWrapper>
            <Skills currentYear={CURRENT_YEAR} startYear={START_YEAR} />
            <Experience />
            <Accomplishments />
            <Education currentYear={CURRENT_YEAR} startYear={START_YEAR} />
          </ContentWrapper>
        </Layout>
        <Footer />
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
