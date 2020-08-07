import React, { useState } from 'react'
import { rhythm } from '../utils/typography'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'
import { Link, graphql, StaticQuery } from 'gatsby'
import Image from 'gatsby-image'

const fadeIn = keyframes`
  from { opacity: 0 }
  to { opacity: 1 }
`

const MobileNav = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.97);
  text-align: right;
  opacity: 1;

  animation: ${fadeIn} 0.25s ease;
`

const MobileNavBtn = styled.button`
  background: none;
  border: none;
  text-align: right;

  &:hover {
    cursor: pointer;
  }
`

const HideOnMobile = styled.div`
  @media (max-width: 749px) {
    display: none;
  }
`

const HideOnDesktop = styled.div`
  @media (min-width: 750px) {
    display: none;
  }
`

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
  flex-direction: column;
  justify-content: space-between;
  margin: auto 0;
  text-align: center;

  a {
    color: #000;
    margin-bottom: 1rem;
    text-decoration: none;
    font-size: 1.5rem;
  }

  @media (min-width: 750px) {
    flex-direction: row;
    justify-content: flex-start;
    margin: initial;
    padding-left: 20px;
    text-align: left;

    a {
      margin-left: 27px;
      margin-top: 1rem;
      font-size: 1rem;
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

function Navigation({ title, hideNav, location }) {
  if (hideNav) {
    return (
      <Nav style={{ justifyContent: 'flex-end' }}>
        <a href="/">Home</a>
      </Nav>
    )
  }
  return (
    <Nav>
      {location && location.pathname === '/' ? null : <Link to="/">Home</Link>}
      <Link to="/#skills">Skills</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/talks">Talks</Link>
    </Nav>
  )
}

function Header({ avatar, site, title, hideNav, location }) {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

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
            alt="Joel Bowen's Headshot"
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
          <HideOnMobile>
            <Navigation hideNav={hideNav} location={location} />
          </HideOnMobile>
        </Content>
        <HideOnDesktop>
          <MobileNavBtn onClick={() => setShowMobileMenu(true)}>
            &#9776;
          </MobileNavBtn>
        </HideOnDesktop>
      </Container>
      {showMobileMenu && (
        <MobileNav>
          <MobileNavBtn onClick={() => setShowMobileMenu(false)}>
            CLOSE
          </MobileNavBtn>
          <Navigation hideNav={hideNav} location={location} />
        </MobileNav>
      )}
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
