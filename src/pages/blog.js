import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Abstract from '../components/BlogPost/Abstract'
import Footer from '../components/Footer'
import { PageWrapper } from '../components/_Containers'

function Blog({
  data: {
    allMarkdownRemark: { edges: blogs },
  },
  location,
}) {
  return (
    <PageWrapper>
      <Layout location={location}>
        <div style={{ maxWidth: '1024px' }}>
          <h1 style={{ marginTop: '1rem' }}>Blog Posts</h1>
          {blogs.map(({ node: post }) => (
            <article key={post.id}>
              <Abstract post={post} />
            </article>
          ))}
        </div>
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
                gatsbyImageData(
                  width: 400
                  height: 300
                  layout: CONSTRAINED
                  transformOptions: { cropFocus: CENTER }
                )
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
