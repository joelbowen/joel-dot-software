import { StaticQuery, graphql, Link } from 'gatsby'
import Image from 'gatsby-image'
import styled from '@emotion/styled'

import { rhythm } from '../utils/typography'

const Abstract = styled.p`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 6;

  @media (min-width: 620px) {
    -webkit-line-clamp: 4;
    margin: 0;
  }
`

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 620px) {
    flex-direction: row;
  }
`

const FeaturedPhotoWrapper = styled.div`
  flex: 1;
  margin-bottom: ${rhythm(1)};

  @media (min-width: 620px) {
    margin-bottom: ${rhythm(1 / 2)};
    max-width: 265px;
  }
`
const Content = styled.div`
  flex: 1;

  @media (min-width: 620px) {
    padding-left: 1rem;
  }
`
const MobileCTA = styled.p`
  margin-top: -${rhythm(1 / 2)};
  text-align: right;
  @media (min-width: 620px) {
    display: none;
  }
`

function LatestPost({ post }) {
  return (
    <div style={{ marginBottom: rhythm(1) }}>
      <h2>Latest Post</h2>
      <PostWrapper>
        <FeaturedPhotoWrapper>
          <Link style={{ boxShadow: `none` }} to={post.fields.slug}>
            <Image
              fluid={post.frontmatter.photo.childImageSharp.fluid}
              alt={post.frontmatter.photoDescription}
            />
          </Link>
        </FeaturedPhotoWrapper>
        <Content>
          <Link
            style={{
              display: 'block',
              fontWeight: '800',
              boxShadow: `none`,
              marginBottom: rhythm(1 / 4),
            }}
            to={post.fields.slug}
          >
            {post.frontmatter.title}
          </Link>
          <Abstract
            dangerouslySetInnerHTML={{
              __html: post.frontmatter.description || post.excerpt,
            }}
          />
          <MobileCTA>
            <Link style={{ boxShadow: `none` }} to={post.fields.slug}>
              Continue Reading
            </Link>
          </MobileCTA>
        </Content>
      </PostWrapper>
      <hr
        style={{
          marginBottom: rhythm(1.5),
        }}
      />
    </div>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      query LatestPost {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1
        ) {
          edges {
            node {
              excerpt
              fields {
                slug
              }
              frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
                description
                photo {
                  childImageSharp {
                    fluid(maxWidth: 400, maxHeight: 200) {
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
        }
      }
    `}
    render={data => <LatestPost post={data.allMarkdownRemark.edges[0].node} />}
  />
)
