import React from 'react'
import styled from '@emotion/styled'
import { rhythm } from '../utils/typography'

const Intro = styled.h2`
  text-align: center;
  font-size: ${rhythm(3 / 4)};
  font-weight: 400;
  line-height: 2;
  margin-bottom: ${rhythm(2.75)};
`
function Bio() {
  return (
    <div
      style={{
        display: `flex`,
        flexDirection: 'column',
        marginBottom: rhythm(2.75),
        paddingTop: rhythm(5.5),
        letterSpacing: rhythm(1 / 60),
      }}
    >
      <Intro>
        <strong style={{ display: 'block' }}>
          I am passionate about people,
        </strong>
        I love scalability, great user experience, thoughtful security, and
        elegant design patterns.
      </Intro>
      <hr
        style={{
          alignSelf: 'center',
          border: '1px solid rgb(225, 225, 225)',
          display: 'block',
          height: 0,
          margin: 0,
          maxWidth: '300px',
          width: '60%',
        }}
      />
    </div>
  )
}

export default Bio
