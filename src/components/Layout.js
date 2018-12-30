import React from 'react'
import Image from 'gatsby-image'
import { Link, graphql, StaticQuery } from 'gatsby'
import { rhythm, scale } from '../utils/typography'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`

    return (
      <StaticQuery
        query={layoutQuery}
        render={data => (
          <div
            style={{
              marginLeft: `auto`,
              marginRight: `auto`,
              maxWidth: rhythm(24),
              padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
            }}
          >
            <div style={{ display: 'flex' }}>
              <Image
                fixed={data.avatar.childImageSharp.fixed}
                alt={data.site.siteMetadata.author}
                style={{
                  marginRight: rhythm(1 / 2),
                  marginBottom: 0,
                  minWidth: 50,
                  borderRadius: `100%`,
                }}
              />
              <h1
                style={{
                  ...scale(1.5),
                  marginBottom: rhythm(1.5),
                  marginTop: 0,
                }}
              >
                <Link
                  style={{
                    boxShadow: `none`,
                    textDecoration: `none`,
                    color: `inherit`,
                  }}
                  to={`/`}
                >
                  {title}
                </Link>
              </h1>
            </div>
            {children}
            <footer>
              © 2018, Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
            </footer>
          </div>
        )}
      />
    )
  }
}

export const layoutQuery = graphql`
  query layoutQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 81, height: 81) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Layout
