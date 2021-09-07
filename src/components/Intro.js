import React from 'react'
import styled from '@emotion/styled'
import { rhythm } from '../utils/typography'
import { graphql, StaticQuery } from 'gatsby'

const Intro = styled.h2`
  text-align: center;
  font-size: ${rhythm(0.75)};
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: ${rhythm(2.75)};

  em {
    font-size: ${rhythm(0.7)};
  }
`

function Bio({ introAsHtml }) {
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
      <Intro dangerouslySetInnerHTML={introAsHtml} />
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

export default (props) => (
  <StaticQuery
    query={graphql`
      query Intro {
        allMarkdownRemark(
          filter: { frontmatter: { title: { eq: "intro" } } }
          limit: 1
        ) {
          edges {
            node {
              __html: html
            }
          }
        }
      }
    `}
    render={(data) => (
      <Bio introAsHtml={data.allMarkdownRemark.edges[0].node} />
    )}
  />
)
