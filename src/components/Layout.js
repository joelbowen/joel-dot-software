import React from 'react'
import { rhythm } from '../utils/typography'
import { Global, css } from '@emotion/react'
import styled from '@emotion/styled'
import Header from './Header'

const globalStyles = css`
  html {
    letter-spacing: 0.01764705882rem;
    strong {
      font-weight: 800;
    }
  }

  hr {
    align-self: center;
    border: 0.03rem solid rgb(225, 225, 225);
    display: block;
    height: 0;
    margin: ${rhythm(1.5)} 0;
  button {
    background: none;
    border: 0;
    padding: 0;
    margin: 0;
    color: ${lightMode.color};
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

function Layout({ location, title, children, hideNav }) {
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        padding: `0 ${rhythm(3 / 4)}`,
      }}
    >
      <Global styles={globalStyles} />
      <Header
        location={location}
        title={title}
        hideNav={hideNav}
      />
      <Body>{children}</Body>
    </div>
  )
}

export default Layout
