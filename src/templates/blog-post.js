import React from 'react'
import { Link, graphql } from 'gatsby'
import Image from 'gatsby-image'
import styled from '@emotion/styled'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import { rhythm, scale, sansFont } from '../utils/typography'
import Footer from '../components/Footer'

const ContentWrapper = styled.div`
  margin: 0 auto;
  max-width: 750px;
`
const Post = styled.article`
  hr {
    border-top: 4px dotted #cecece;
    background: none;
  }
`
const Title = styled.h1`
  margin-bottom: 0;
  margin-top: 1rem;
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
        {post.frontmatter.photoDescription && (
          <em>{post.frontmatter.photoDescription}</em>
        )}
        <br />
        {post.frontmatter.photoCredit && (
          <em>
            Photo Credit:{' '}
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
        <Layout location={this.props.location} title={siteTitle}>
          <Post>
            <SEO
              title={post.frontmatter.title}
              description={post.frontmatter.description || post.excerpt}
              imageUrl={`https://joel.software${post.frontmatter.photo.publicURL}`}
              keywords={
                post.frontmatter.keywords
                  ? post.frontmatter.keywords.split(',')
                  : undefined
              }
              tags={[
                ['author', 'Joel Bowen'],
                ['date', post.frontmatter.date],
              ]}
            />
            <ContentWrapper>
              <Title>{post.frontmatter.title}</Title>
              <Subtitle>{post.frontmatter.subtitle}</Subtitle>
              <time
                style={{
                  ...scale(-1 / 5),
                  display: `inline-block`,
                  marginBottom: rhythm(2),
                  marginTop: rhythm(-1),
                }}
                dateTime={post.frontmatter.date}
              >
                {post.frontmatter.dateString}
              </time>
              {post.frontmatter.lastUpdated ? (
                <time
                  style={{
                    ...scale(-2 / 5),
                    display: `block`,
                    marginBottom: rhythm(2),
                    marginTop: rhythm(-2),
                    color: '#bcc',
                    fontStyle: 'italic',
                  }}
                  dateTime={post.frontmatter.lastUpdated}
                >
                  Updated: {post.frontmatter.lastUpdatedString}
                </time>
              ) : null}
            </ContentWrapper>
            <FeaturedPhoto post={post} />

            <ContentWrapper>
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
              <a
                href="https://www.joel.pub/newsletter"
                target="_blank"
                alt="Sign up for my newsletter"
              >
                Click here to get notified when I post new content
              </a>{' '}
              <ul
                style={{
                  background: '#7AAB4F20',
                  display: `flex`,
                  flexWrap: `wrap`,
                  justifyContent: `space-between`,
                  listStyle: `none`,
                  padding: '2rem',
                  margin: `${rhythm(1)} 0`,
                }}
              >
                {previous && (
                  <li>
                    <h3>Previous Post</h3>

                    <Link to={previous.fields.slug} rel="prev">
                      ← {previous.frontmatter.title}
                    </Link>
                  </li>
                )}
                {next && (
                  <li>
                    <h3>Next Post</h3>
                    <Link to={next.fields.slug} rel="next">
                      {next.frontmatter.title} →
                    </Link>
                  </li>
                )}
              </ul>
            </ContentWrapper>
          </Post>
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
        date
        dateString: date(formatString: "MMMM DD, YYYY")
        lastUpdated
        lastUpdatedString: lastUpdated(formatString: "MMMM DD, YYYY")
        keywords
        photo {
          childImageSharp {
            fluid(maxWidth: 1024, maxHeight: 500) {
              ...GatsbyImageSharpFluid
            }
          }
          publicURL
        }
        photoDescription
        photoCredit
        photoCreditLink
      }
    }
  }
`
