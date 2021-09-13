import React from 'react'
import { rhythm, darkMode, lightMode, breakpoints } from '../utils/typography'
import { Global, css } from '@emotion/react'
import styled from '@emotion/styled'
import useDarkMode from 'use-dark-mode'
import Header from './Header'

const globalStyles = css`
  html {
    letter-spacing: 0.01764705882rem;
    strong {
      font-weight: 600;
    }
  }

  body {
    color: ${lightMode.color};
  }

  a {
    text-decoration: none;
    color: ${lightMode.linkColor};

    &:visited {
      color: ${lightMode.linkColor};
    }

    .dark-mode & {
      color: ${darkMode.linkColor};
      text-decoration: none;

      &:visited {
        color: ${darkMode.linkColor};
      }
    }
  }

  hr {
    align-self: center;
    border: 0.01rem solid rgb(225, 225, 225);
    display: block;
    height: 0;
    margin: ${rhythm(1.5)} 0;

    .dark-mode & {
      border-color: ${darkMode.gray};
    }
  }

  button {
    background: none;
    border: 0;
    padding: 0;
    margin: 0;
    color: ${lightMode.color};

    /* * DARK MODE * */
    .dark-mode & {
      color: ${darkMode.color};
    }
  }

  em {
    color: ${lightMode.mutedColor};

    /* * DARK MODE * */
    .dark-mode & {
      color: ${darkMode.mutedColor};
    }
  }

  body.light-mode {
    transition: background-color 0.3s ease;
  }

  .gatsby-image-wrapper:before {
    width: 100%;
    height: 100%;
    content: '';
    display: block;
    top: 0;
    left: 0;
    position: absolute;
    z-index: 1;
  }

  .show-dark-mode {
    display: none;
  }

  .show-light-mode {
    display: initial;
  }

  /* * DARK MODE * */
  body.dark-mode {
    background: ${darkMode.background};
    color: ${darkMode.color};

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight: 400;
    }

    .gatsby-image-wrapper:before {
      background: rgba(0, 0, 0, 0.15);
    }
    .show-dark-mode {
      display: initial;
    }

    .show-light-mode {
      display: none;
    }
  }
`
const Body = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  padding-top: ${rhythm(2.75)};

  @media (min-width: ${breakpoints.sm}) {
    padding-top: ${rhythm(5.5)};
  }
`

function Layout({ location, title, children }) {
  const darkMode = useDarkMode(true)

  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        padding: `0 ${rhythm(3 / 4)}`,
      }}
    >
      <Global styles={globalStyles} />
      <Header location={location} title={title} darkMode={darkMode} />
      <Body>{children}</Body>
    </div>
  )
}

export default Layout
