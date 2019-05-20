import React from 'react'
import { rhythm } from '../utils/typography'
import { Global, css } from '@emotion/core'
import fontFiles from '../fonts'
import Footer from './Footer'
import Header from './Header'

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
    font-family: 'Lato';
    font-style: normal;
    font-weight: 800;
    src: local('Lato'), url(${fontFiles.LatoBlack}) format('ttf');
  }
  @font-face {
    font-family: 'Lato-Light';
    font-style: normal;
    font-weight: light;
    src: local('Lato-Light'), url(${fontFiles.LatoLight}) format('ttf');
  }
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
`

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
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
        <Header title={title} />
        <Body>{children}</Body>
        <Footer />
      </div>
    )
  }
}

export default Layout
