import React from 'react'
import styled from '@emotion/styled'
import { darkMode, lightMode, rhythm } from '../utils/typography'
import { IoTriangle } from 'react-icons/io5'

const Wrapper = styled.div`
  margin-top: ${rhythm(2.75)};
`

const Button = styled.button`
  align-items: center;
  background: ${lightMode.gray}3f;
  display: flex;
  height: 44px;
  justify-content: center;
  width: 100%;

  svg {
    margin-left: 10px;
  }

  &:hover {
    cursor: pointer;
    background: ${lightMode.linkColor}15;
  }

  /* * DARK MODE * */
  .dark-mode & {
    background: ${darkMode.gray}1f;
    border-top: 1px solid ${darkMode.gray};
    color: ${darkMode.color};

    &:hover {
      background: ${darkMode.gray}3f;
    }
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
