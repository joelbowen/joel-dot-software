import React from 'react'
import { rhythm } from '../utils/typography'
import styled from '@emotion/styled'
import { Link, graphql, StaticQuery } from 'gatsby'
import Image from 'gatsby-image'

const HeaderWrapper = styled.div`
  background: #fff;
  border-bottom: 1px solid rgb(225, 225, 225);
  display: flex;
  height: 65px;
  left: 0;
  padding: 0 1rem;
  position: fixed;
  width: 100vw;
  z-index: 9;

  @media (min-width: 620px) {
    height: 95px;
  }
`
const Container = styled.div`
  align-items: center;
  display: flex;
  margin: 0 auto;
  max-width: 1024px;
  width: 100%;
`

const Content = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  height: 100%;
  justify-content: space-between;

  @media (min-width: 620px) {
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
  }

  @media (min-width: 750px) {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
`

const ProfilePhoto = styled.div`
  min-width: 40px;
  margin-right: ${rhythm(2 / 3)};

  @media (min-width: 620px) {
    min-width: 65px;
  }
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  display: none;

  a {
    color: #000;
  }

  @media (min-width: 620px) {
    display: inherit;
    width: 100%;
  }

  @media (min-width: 750px) {
    justify-content: flex-start;
    padding-left: 20px;

    a {
      margin-left: 27px;
      text-decoration: none;
    }
  }

  @media (min-width: 900px) {
    padding-left: 70px;

    a {
      margin-left: 57px;
      text-decoration: none;
    }
  }
`

const MobileNavBtn = styled.button`
  background: none;
  border: none;
  display: none; // @TODO mobile menu is not ready yet
  font-size: 0.75rem;
`
function Navigation({ title, isBlogEntry }) {
  if (title === '404' || isBlogEntry) {
    return (
      <Nav style={{ justifyContent: 'flex-end' }}>
        <a href="/">Home</a>
      </Nav>
    )
  }
  return (
    <Nav>
      <a href="#skills">Skills</a>
      <a href="#experience">Experience</a>
      <a href="#accomplishments">Accomplishments</a>
      <a href="#education">Education</a>
    </Nav>
  )
}

function Header({ avatar, site, title, isBlogEntry }) {
  return (
    <HeaderWrapper>
      <Container>
        <ProfilePhoto>
          <Image
            fluid={avatar.childImageSharp.fluid}
            alt={site.siteMetadata.author}
            style={{
              marginBottom: 0,
              width: '100%',
              borderRadius: `100%`,
            }}
          />
        </ProfilePhoto>
        <Content>
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
              Joel.Software
            </Link>
          </h1>
          <MobileNavBtn>MENU</MobileNavBtn>
          <Navigation title={title} isBlogEntry={isBlogEntry} />
        </Content>
      </Container>
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
