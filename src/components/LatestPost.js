import styled from '@emotion/styled'
import { StaticQuery, graphql, Link } from 'gatsby'
import { breakpoints, rhythm } from '../utils/typography'
import Abstract from './BlogPost/Abstract'
import IllustrationImgLight from '../../content/assets/illustrations/blog-01.svg'
import IllustrationImgDark from '../../content/assets/illustrations/blog-02.svg'

const LatestWrapper = styled.div`
  border-bottom: 1px solid #ccc;
  display: flex;
  margin-bottom: ${rhythm(3)};
  padding-bottom: ${rhythm(1.5)};
`

const PostPreview = styled.div`
  flex: 3;
`

const Illustration = styled.aside`
  display: none;

  @media (min-width: ${breakpoints.lg}) {
    display: initial;
    flex: 1;
    padding: 2rem;
  }
`

function LatestPost({ post }) {
  return (
    <LatestWrapper>
      <PostPreview>
        <h2>Latest Blog Post</h2>
        <Abstract post={post} />
      </PostPreview>
      <Illustration>
        <div className="show-light-mode">
          <IllustrationImgLight />
        </div>
        <div className="show-dark-mode">
          <IllustrationImgDark />
        </div>
        <div style={{ margin: '1rem 0', textAlign: 'right' }}>
          <Link to="/blog">SEE ALL POSTS</Link>
        </div>
      </Illustration>
    </LatestWrapper>
  )
}

export default (props) => (
  <StaticQuery
    query={graphql`
      query LatestPost {
        allMarkdownRemark(
          filter: { frontmatter: { type: { eq: "blog" } } }
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
    `}
    render={(data) => (
      <LatestPost post={data.allMarkdownRemark.edges[0].node} />
    )}
  />
)
