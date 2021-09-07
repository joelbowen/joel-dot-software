import { graphql, StaticQuery } from 'gatsby'
import React from 'react'
import OffsetAnchor from './OffsetAnchor'

function Skills({ html }) {
  return (
    <div>
      <OffsetAnchor id="about-me" />
      <div dangerouslySetInnerHTML={html} />
    </div>
  )
}

export default (prps) => (
  <StaticQuery
    query={graphql`
      query AboutMe {
        allMarkdownRemark(
          filter: { frontmatter: { title: { eq: "about-me" } } }
        ) {
          edges {
            node {
              __html: html
            }
          }
        }
      }
    `}
    render={(data) => <Skills html={data.allMarkdownRemark.edges[0].node} />}
  />
)
