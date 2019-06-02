import React from 'react'
import { rhythm } from '../utils/typography'
import { Global, css } from '@emotion/core'
import styled from '@emotion/styled'
import Footer from './Footer'
import Header from './Header'

const globalStyles = css`
  html {
    letter-spacing: 0.01764705882rem;
    strong {
      font-weight: 800;
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

class Layout extends React.Component {
  render() {
    const { location, title, children, isBlogEntry } = this.props
    const rootPath = `${__PATH_PREFIX__}/`

    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          padding: `0 ${rhythm(3 / 4)}`,
        }}
      >
        <Global styles={globalStyles} />
        <Header location={location} title={title} isBlogEntry={isBlogEntry} />
        <Body>{children}</Body>
      </div>
    )
  }
}

export default Layout
