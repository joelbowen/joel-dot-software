import React from 'react'
import { Link, graphql } from 'gatsby'
import Image from 'gatsby-image'
import styled from '@emotion/styled'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import { rhythm, scale, sansFont } from '../utils/typography'
import Footer from '../components/Footer'

const ContentWrapper = styled.div`
  margin: 0 auto;
  max-width: 750px;
`
const Title = styled.h1`
  margin-bottom: 0;
`
const Subtitle = styled.h2`
  font-family: ${sansFont};
  font-size: 1rem;
  color: rgb(125, 125, 125);
`
function FeaturedPhoto({ post }) {
  if (!post.frontmatter.photo) {
    return null
  }

  return (
    <div>
      <Image
        fluid={post.frontmatter.photo.childImageSharp.fluid}
        alt={post.frontmatter.photoDescription}
      />
      <p
        style={{
          color: 'rgb(125, 125, 125)',
          fontSize: '0.75rem',
          marginTop: '1rem',
          textAlign: 'center',
        }}
      >
        {post.frontmatter.photoCredit && (
          <em>
            Credit:{' '}
            <a
              href={post.frontmatter.photoCreditLink}
              target="_blank"
              alt={`See more photos from ${post.frontmatter.photoCredit}`}
            >
              {post.frontmatter.photoCredit}
            </a>
          </em>
        )}
      </p>
    </div>
  )
}
class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <div>
        <Layout location={this.props.location} title={siteTitle} isBlogEntry>
          <article>
            <SEO
              title={post.frontmatter.title}
              description={post.frontmatter.description || post.excerpt}
            />
            <ContentWrapper>
              <Title>{post.frontmatter.title}</Title>
              <Subtitle>{post.frontmatter.subtitle}</Subtitle>
              <time
                style={{
                  ...scale(-1 / 5),
                  display: `block`,
                  marginBottom: rhythm(2),
                  marginTop: rhythm(-1),
                }}
                datetime={post.frontmatter.date}
              >
                {post.frontmatter.datestring}
              </time>
            </ContentWrapper>
            <FeaturedPhoto post={post} />

            <ContentWrapper>
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
              <hr
                style={{
                  marginBottom: rhythm(1),
                }}
              />
              <ul
                style={{
                  display: `flex`,
                  flexWrap: `wrap`,
                  justifyContent: `space-between`,
                  listStyle: `none`,
                  padding: 0,
                }}
              >
                <li>
                  {previous && (
                    <Link to={previous.fields.slug} rel="prev">
                      ← {previous.frontmatter.title}
                    </Link>
                  )}
                </li>
                <li>
                  {next && (
                    <Link to={next.fields.slug} rel="next">
                      {next.frontmatter.title} →
                    </Link>
                  )}
                </li>
              </ul>
            </ContentWrapper>
          </article>
        </Layout>
        <Footer />
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        subtitle
        description
        datestring: date(formatString: "MMMM DD, YYYY")
        date
        photo {
          childImageSharp {
            fluid(maxWidth: 1024, maxHeight: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        photoDescription
        photoCredit
        photoCreditLink
      }
    }
  }
`
