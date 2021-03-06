import { StaticQuery, graphql, Link } from 'gatsby'
import { rhythm } from '../utils/typography'
import Abstract from './BlogPost/Abstract'

function LatestPost({ post }) {
  return (
    <div style={{ marginBottom: rhythm(1) }}>
      <h2>Latest Post</h2>
      <Abstract post={post} />
      <div style={{ margin: '1rem 0', textAlign: 'right', fontSize: '14px' }}>
        <Link to="/blog">SEE ALL POSTS</Link>
      </div>
      <hr />
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
