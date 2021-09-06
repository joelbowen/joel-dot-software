import React, { useEffect, useState } from 'react'
import { rhythm, darkMode, lightMode } from '../utils/typography'
import { Global, css } from '@emotion/react'
import styled from '@emotion/styled'
import Header from './Header'
import { Helmet } from 'react-helmet'

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
  }
`
const Body = styled.div`
  margin: 0 auto;
  max-width: 1024px;
  padding-top: ${rhythm(2.75)};

  @media (min-width: 620px) {
    padding-top: ${rhythm(5.5)};
  }
`

function Layout({ location, title, children }) {
  const [theme, setTheme] = useState(
    localStorage.getItem('siteTheme') || 'dark'
  )

  function toggleTheme() {
    const isDark = theme === 'dark'

    if (isDark) {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  useEffect(() => {
    localStorage.setItem('siteTheme', theme)
  }, [theme])

  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        padding: `0 ${rhythm(3 / 4)}`,
      }}
    >
      <Global styles={globalStyles} />
      <Helmet
        bodyAttributes={{
          class: theme === 'dark' ? 'dark-mode' : 'light-mode',
        }}
      />
      <Header
        location={location}
        title={title}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <Body>{children}</Body>
    </div>
  )
}

export default Layout
