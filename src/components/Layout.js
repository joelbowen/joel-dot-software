import React from 'react'
import Image from 'gatsby-image'
import { Link, graphql, StaticQuery } from 'gatsby'
import { rhythm, scale } from '../utils/typography'
import { Global, css } from '@emotion/core'
import fontFiles from '../fonts'

const globalStyles = css`
  @font-face {
    font-family: 'Marion';
    font-style: normal;
    font-weight: normal;
    src: local('Marion'), local('Marion-Regular'),
      url(${fontFiles.MarionRegular}) format('ttf');
  }
  @font-face {
    font-family: 'Marion-Bold';
    font-style: normal;
    font-weight: bold;
    src: local('Marion-Bold'), url(${fontFiles.MarionBold}) format('ttf');
  }
  @font-face {
    font-family: 'Marion-Italic';
    font-style: italic;
    font-weight: normal;
    src: local('Marion-Italic'), url(${fontFiles.MarionItalic}) format('ttf');
  }
  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: normal;
    src: local('Lato'), local('Lato-Regular'),
      url(${fontFiles.LatoRegular}) format('ttf');
  }
  @font-face {
    font-family: 'Lato-Bold';
    font-style: normal;
    font-weight: bold;
    src: local('Lato-Bold'), url(${fontFiles.LatoBold}) format('ttf');
  }
  @font-face {
    font-family: 'Lato-Light';
    font-style: normal;
    font-weight: light;
    src: local('Lato-Light'), url(${fontFiles.LatoLight}) format('ttf');
  }
`
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
              padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
            }}
          >
            <Global styles={globalStyles} />
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: rhythm(2.75),
              }}
            >
              <Image
                fluid={data.avatar.childImageSharp.fluid}
                alt={data.site.siteMetadata.author}
                style={{
                  marginRight: rhythm(2 / 3),
                  marginBottom: 0,
                  minWidth: 50,
                  borderRadius: `100%`,
                }}
              />
              <h1
                style={{
                  fontSize: rhythm(3 / 4),
                  marginBottom: 0,
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
        fluid(maxWidth: 81) {
          ...GatsbyImageSharpFluid
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
