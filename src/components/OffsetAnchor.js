import React from 'react'
import styled from '@emotion/styled'

const Anchor = styled.a`
  display: block;
  position: relative;
  top: -120px;
  visibility: hidden;
`

function OffsetAnchor(props) {
  return <Anchor {...props} />
}

export default OffsetAnchor
