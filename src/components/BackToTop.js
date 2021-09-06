import React from 'react'
import styled from '@emotion/styled'
import { rhythm } from '../utils/typography'
import { StaticQuery, graphql } from 'gatsby'
import { IoTriangle } from 'react-icons/io5'

const Wrapper = styled.div`
  margin-top: ${rhythm(2.75)};
`

const Button = styled.button`
  align-items: center;
  background: rgb(225, 225, 225);
  border: 0;
  display: flex;
  height: 44px;
  justify-content: center;
  width: 100vw;

  svg {
    margin-left: 10px;
  }

  &:hover {
    cursor: pointer;
  }
`

function BackToTop() {
  return (
    <Wrapper>
      <Button onClick={() => window.scrollTo(0, 0)} role="button">
        back to top
        <IoTriangle />
      </Button>
    </Wrapper>
  )
}

export default BackToTop
