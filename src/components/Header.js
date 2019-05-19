import React from 'react'
import { rhythm } from '../utils/typography'
import styled from '@emotion/styled'
import { Link, graphql, StaticQuery } from 'gatsby'
import Image from 'gatsby-image'

const HeaderWrapper = styled.div`
  align-items: center;
  background: #fff;
  border-bottom: 1px solid rgb(225, 225, 225);
  display: flex;
  height: 85px;
  left: 0;
  padding: 0 1rem;
  position: fixed;
  width: 100vw;
  z-index: 9;
`

function Header({ avatar, site, title }) {
  return (
    <HeaderWrapper>
      <Image
        fluid={avatar.childImageSharp.fluid}
        alt={site.siteMetadata.author}
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
    </HeaderWrapper>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
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
    `}
    render={data => <Header avatar={data.avatar} site={data.site} {...props} />}
  />
)
