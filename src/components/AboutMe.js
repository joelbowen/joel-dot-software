import styled from '@emotion/styled'
import { graphql, StaticQuery } from 'gatsby'
import React from 'react'
import OffsetAnchor from './OffsetAnchor'
import { breakpoints } from '../utils/typography'

const Container = styled.article`
  .img-float-left,
  .img-float-right {
    @media (min-width: ${breakpoints.sm}) {
      width: 50%;
      max-width: 200px;
      padding: 1rem;
      transition: margin 0.3s ease;
    }

    p {
      margin-bottom: 0;
    }
  }

  .img-float-right {
    @media (min-width: ${breakpoints.sm}) {
      float: right;
    }

    @media (min-width: ${breakpoints.lg}) {
      margin-right: -10vw;
    }

    @media (min-width: ${breakpoints.xl}) {
      margin-right: -15vw;
    }

    @media (min-width: ${breakpoints.xxl}) {
      margin-right: -360px;
    }
  }

  .img-float-left {
    @media (min-width: ${breakpoints.sm}) {
      float: left;
    }

    @media (min-width: ${breakpoints.lg}) {
      margin-left: -10vw;
    }

    @media (min-width: ${breakpoints.xl}) {
      margin-left: -15vw;
    }

    @media (min-width: ${breakpoints.xxl}) {
      margin-left: -360px;
    }
  }
`

function Skills({ html }) {
  return (
    <Container>
      <OffsetAnchor id="about-me" />
      <div dangerouslySetInnerHTML={html} />
    </Container>
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
