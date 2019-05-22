import React from 'react'
import styled from '@emotion/styled'
import { rhythm } from '../utils/typography'
import { StaticQuery, graphql } from 'gatsby'

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
  img {
    margin: 0;
    width: 1rem;
  }
`

function BackToTop({ triangleSVG }) {
  return (
    <Wrapper>
      <Button onClick={() => window.scrollTo(0, 0)}>
        back to top
        <img
          src={triangleSVG.publicURL}
          style={{ marginLeft: rhythm(1 / 2) }}
        />
      </Button>
    </Wrapper>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      query BackToTopQuery {
        triangle: allFile(
          filter: {
            sourceInstanceName: { eq: "assets" }
            name: { eq: "triangle" }
          }
        ) {
          edges {
            node {
              id
              publicURL
            }
          }
        }
      }
    `}
    render={data => <BackToTop triangleSVG={data.triangle.edges[0].node} />}
  />
)
