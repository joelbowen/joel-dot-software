import React, { useEffect, useState } from 'react'
import { breakpoints, darkMode, lightMode, rhythm } from '../utils/typography'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import { Link } from 'gatsby'
import { HiSun, HiMoon } from 'react-icons/hi'

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
  background: rgba(255, 255, 255, 0.95);
  text-align: right;
  opacity: 1;

  animation: ${fadeIn} 0.25s ease;

  && a {
    color: ${lightMode.mutedColor};
  }

  /* * DARK MODE * */
  .dark-mode & {
    background: rgba(0, 0, 0, 0.9);

    a {
      color: ${darkMode.mutedColor};
    }
  }
`

const MobileNavBtn = styled.button`
  color: ${lightMode.mutedColor};
  margin-right: 1rem;
  text-align: left;

  &:hover {
    cursor: pointer;
  }
  /* * DARK MODE * */
  .dark-mode & {
    color: ${lightMode.mutedColor};
  }
`

const HideOnMobile = styled.div`
  @media (max-width: ${breakpoints.mdVal - 1}px) {
    display: none;
  }
`

const HideOnDesktop = styled.div`
  @media (min-width: ${breakpoints.md}) {
    display: none;
  }
`

const HeaderWrapper = styled.div`
  background: #fff;
  border-bottom: 1px solid rgb(225, 225, 225);
  display: flex;
  height: 65px;
  left: 0;
  padding: 0 1.5rem 0 1rem;
  position: fixed;
  width: 100vw;
  z-index: 9;

  @media (min-width: ${breakpoints.md}) {
    align-items: flex-end;
  }

  @meda (min-width: 1100px) {
    padding: 0 1rem;
  }

  /* * DARK MODE * */
  .dark-mode & {
    background: ${darkMode.background};
    border-color: ${darkMode.gray};
  }
`

const SiteTitle = styled.h1`
  font-size: ${rhythm(3 / 4)};
  margin: 0;

  /* * DARK MODE * */
  .dark-mode & {
    font-weight: 400;
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

  @media (min-width: ${breakpoints.sm}) {
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
  }

  @media (min-width: ${breakpoints.md}) {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
`

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: auto 0;
  text-align: center;

  a {
    color: ${lightMode.color};
    padding: 1rem 1.5rem;
    text-decoration: none;
    font-size: 1.5rem;

    &:hover,
    &:active,
    &:focus {
      background: ${lightMode.linkColor}10;
    }
    &.active {
      color: ${lightMode.linkColor};
      border-bottom: 2px solid ${lightMode.linkColor};
    }
  }

  @media (min-width: ${breakpoints.md}) {
    flex-direction: row;
    justify-content: flex-start;
    margin: initial;
    padding-left: 20px;
    text-align: left;

    a {
      font-size: 1rem;
    }
  }

  @media (min-width: ${breakpoints.lg}) {
    padding-left: 70px;
  }

  /* * DARK MODE * */
  .dark-mode & a {
    color: ${darkMode.color};
    &:hover,
    &:active,
    &:focus {
      background: ${darkMode.color}05;
    }
    &.active {
      color: ${darkMode.linkColor};
      border-bottom: 2px solid ${darkMode.linkColor};
    }
  }
`

const ToggleThemeBtn = styled.button`
  border-radius: 100%;
  color: ${lightMode.mutedColor};
  height: 40px;
  width: 40px;
  margin: auto 0 auto auto;
  font-size: ${rhythm(1)};
  svg {
    position: relative;
    top: 5px;
  }

  &:hover,
  &:active,
  &:focus {
    background: #cccccc3f;
    color: ${lightMode.color};
    cursor: pointer;
  }

  .dark-mode-toggle {
    display: none;
  }

  /* * DARK MODE * */
  .dark-mode & {
    color: ${darkMode.mutedColor};
    &:hover,
    &:active,
    &:focus {
      background: ${darkMode.color}15;
      color: ${darkMode.color};
    }

    .dark-mode-toggle {
      display: inline-block;
    }
    .light-mode-toggle {
      display: none;
    }
  }
`

function isHome(location) {
  if (!location || location.hash === '#about-me') {
    return false
  } else if (location.pathname === '/') {
    return true
  }

  return false
}

function isAboutMe(location) {
  if (!location || location.hash !== '#about-me') {
    return false
  }

  return true
}

function isNested(location, parent) {
  const pattern = `\/${parent}\/.*|\/${parent}`
  const re = new RegExp(pattern, 'g')
  return re.test(location.pathname)
}

function Navigation({ location }) {
  return (
    <Nav>
      <Link to="/" className={isHome(location) ? 'active' : ''}>
        home
      </Link>
      <Link to="/#about-me" className={isAboutMe(location) ? 'active' : ''}>
        about
      </Link>
      <Link to="/work" activeClassName="active">
        work
      </Link>
      <Link to="/blog" className={isNested(location, 'blog') ? 'active' : ''}>
        blog
      </Link>
      <Link
        to="/talks/scaling-your-team-with-graphql/"
        className={isNested(location, 'talks') ? 'active' : ''}
      >
        talks
      </Link>
    </Nav>
  )
}

function Header({ location, darkMode }) {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  useEffect(() => {
    setShowMobileMenu(false)
  }, [location?.hash])

  return (
    <HeaderWrapper>
      <Container>
        <HideOnDesktop>
          <MobileNavBtn onClick={() => setShowMobileMenu(true)}>
            &#9776;
          </MobileNavBtn>
        </HideOnDesktop>
        <Content>
          <SiteTitle>
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to="/"
            >
              joel.software
            </Link>
          </SiteTitle>
          <HideOnMobile>
            <Navigation location={location} />
          </HideOnMobile>
        </Content>
        <ToggleThemeBtn onClick={darkMode.toggle}>
          <HiSun className="dark-mode-toggle" />
          <HiMoon className="light-mode-toggle" />
        </ToggleThemeBtn>
      </Container>
      {showMobileMenu && (
        <MobileNav>
          <MobileNavBtn onClick={() => setShowMobileMenu(false)}>
            CLOSE
          </MobileNavBtn>
          <Navigation location={location} />
        </MobileNav>
      )}
    </HeaderWrapper>
  )
}

export default Header
