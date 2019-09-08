import React from 'react'
import styled from '@emotion/styled'
import { rhythm } from '../utils/typography'
import aboutMeList from '../../content/aboutMe'

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
        paddingTop: rhythm(2.75),
        letterSpacing: rhythm(1 / 60),
      }}
    >
      <Intro>
        <strong style={{ display: 'block' }}>{aboutMeList[0]}</strong>
        {aboutMeList[1]}
      </Intro>
      <hr
        style={{
          margin: 0,
          maxWidth: '300px',
          width: '60%',
        }}
      />
    </div>
  )
}

export default Bio
