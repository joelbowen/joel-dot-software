import React from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'

import PageWrapper from '../components/PageWrapper'
import Layout from '../components/Layout'
import Abstract from '../components/BlogPost/Abstract'
import Footer from '../components/Footer'

const ContentWrapper = styled.div`
  margin: 0 auto;
  max-width: 750px;
`

function Blog({
  data: {
    allMarkdownRemark: { edges: blogs },
  },
  location,
}) {
  return (
    <PageWrapper>
      <Layout location={location}>
        <ContentWrapper>
          <h1 style={{ marginTop: '1rem' }}>Blog Posts</h1>
          {blogs.map(({ node: post }) => (
            <article style={{ marginBottom: '2rem' }} key={post.id}>
              <Abstract post={post} />
            </article>
          ))}
        </ContentWrapper>
      </Layout>
      <Footer />
    </PageWrapper>
  )
}

export default Blog

export const query = graphql`
  {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "blog" } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 1000
    ) {
      edges {
        node {
          id
          excerpt
          timeToRead
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            photo {
              childImageSharp {
                gatsbyImageData(width: 400, height: 200, layout: CONSTRAINED)
              }
            }
            photoDescription
            photoCredit
            photoCreditLink
          }
        }
      }
    }
  }
`
