import React from 'react'
import { rhythm } from '../utils/typography'
import { Global, css } from '@emotion/core'
import styled from '@emotion/styled'
import Footer from './Footer'
import Header from './Header'

const globalStyles = css`
  /**
   * Fonts were downloaded from, and css snippets copied from
   * https://google-webfonts-helper.herokuapp.com
   */

  /* yrsa-regular - latin */
  @font-face {
    font-family: 'Yrsa';
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/yrsa-v4-latin/yrsa-v4-latin-regular.eot'); /* IE9 Compat Modes */
    src: local('Yrsa Regular'), local('Yrsa-Regular'),
      url('/fonts/yrsa-v4-latin/yrsa-v4-latin-regular.eot?#iefix')
        format('embedded-opentype'),
      /* IE6-IE8 */ url('/fonts/yrsa-v4-latin/yrsa-v4-latin-regular.woff2')
        format('woff2'),
      /* Super Modern Browsers */
        url('/fonts/yrsa-v4-latin/yrsa-v4-latin-regular.woff') format('woff'),
      /* Modern Browsers */
        url('/fonts/yrsa-v4-latin/yrsa-v4-latin-regular.ttf') format('truetype'),
      /* Safari, Android, iOS */
        url('/fonts/yrsa-v4-latin/yrsa-v4-latin-regular.svg#Yrsa') format('svg'); /* Legacy iOS */
  }
  /* yrsa-600 - latin */
  @font-face {
    font-family: 'Yrsa';
    font-style: normal;
    font-weight: 600;
    src: url('/fonts/yrsa-v4-latin/yrsa-v4-latin-600.eot'); /* IE9 Compat Modes */
    src: local('Yrsa SemiBold'), local('Yrsa-SemiBold'),
      url('/fonts/yrsa-v4-latin/yrsa-v4-latin-600.eot?#iefix')
        format('embedded-opentype'),
      /* IE6-IE8 */ url('/fonts/yrsa-v4-latin/yrsa-v4-latin-600.woff2')
        format('woff2'),
      /* Super Modern Browsers */
        url('/fonts/yrsa-v4-latin/yrsa-v4-latin-600.woff') format('woff'),
      /* Modern Browsers */ url('/fonts/yrsa-v4-latin/yrsa-v4-latin-600.ttf')
        format('truetype'),
      /* Safari, Android, iOS */
        url('/fonts/yrsa-v4-latin/yrsa-v4-latin-600.svg#Yrsa') format('svg'); /* Legacy iOS */
  }
  /* lato-regular - latin */
  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/lato-v15-latin/lato-v15-latin-regular.eot'); /* IE9 Compat Modes */
    src: local('Lato Regular'), local('Lato-Regular'),
      url('/fonts/lato-v15-latin/lato-v15-latin-regular.eot?#iefix')
        format('embedded-opentype'),
      /* IE6-IE8 */ url('/fonts/lato-v15-latin/lato-v15-latin-regular.woff2')
        format('woff2'),
      /* Super Modern Browsers */
        url('/fonts/lato-v15-latin/lato-v15-latin-regular.woff') format('woff'),
      /* Modern Browsers */
        url('/fonts/lato-v15-latin/lato-v15-latin-regular.ttf')
        format('truetype'),
      /* Safari, Android, iOS */
        url('/fonts/lato-v15-latin/lato-v15-latin-regular.svg#Lato')
        format('svg'); /* Legacy iOS */
  }
  /* lato-italic - latin */
  @font-face {
    font-family: 'Lato';
    font-style: italic;
    font-weight: 400;
    src: url('/fonts/lato-v15-latin/lato-v15-latin-italic.eot'); /* IE9 Compat Modes */
    src: local('Lato Italic'), local('Lato-Italic'),
      url('/fonts/lato-v15-latin/lato-v15-latin-italic.eot?#iefix')
        format('embedded-opentype'),
      /* IE6-IE8 */ url('/fonts/lato-v15-latin/lato-v15-latin-italic.woff2')
        format('woff2'),
      /* Super Modern Browsers */
        url('/fonts/lato-v15-latin/lato-v15-latin-italic.woff') format('woff'),
      /* Modern Browsers */
        url('/fonts/lato-v15-latin/lato-v15-latin-italic.ttf')
        format('truetype'),
      /* Safari, Android, iOS */
        url('/fonts/lato-v15-latin/lato-v15-latin-italic.svg#Lato')
        format('svg'); /* Legacy iOS */
  }
  /* lato-900 - latin */
  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 900;
    src: url('/fonts/lato-v15-latin/lato-v15-latin-900.eot'); /* IE9 Compat Modes */
    src: local('Lato Black'), local('Lato-Black'),
      url('/fonts/lato-v15-latin/lato-v15-latin-900.eot?#iefix')
        format('embedded-opentype'),
      /* IE6-IE8 */ url('/fonts/lato-v15-latin/lato-v15-latin-900.woff2')
        format('woff2'),
      /* Super Modern Browsers */
        url('/fonts/lato-v15-latin/lato-v15-latin-900.woff') format('woff'),
      /* Modern Browsers */ url('/fonts/lato-v15-latin/lato-v15-latin-900.ttf')
        format('truetype'),
      /* Safari, Android, iOS */
        url('/fonts/lato-v15-latin/lato-v15-latin-900.svg#Lato') format('svg'); /* Legacy iOS */
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
  padding-top: ${rhythm(2.75)};
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
        <Header location={location} title={title} />
        <Body>{children}</Body>
      </div>
    )
  }
}

export default Layout
