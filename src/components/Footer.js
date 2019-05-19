import React from 'react'
import styled from '@emotion/styled'
import { rhythm } from '../utils/typography'
import { StaticQuery, graphql } from 'gatsby'

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${rhythm(2 / 3)};
  margin-top: ${rhythm(2.75)};
  a {
    flex: 1;
    margin-right: 40px;
    max-height: 40px;
    max-width: 40px;
    opacity: 0.5;
    &:last-child {
      margin-right: 0;
    }
  }
`

function Footer({ instagram, twitter, linkedin }) {
  return (
    <footer>
      <SocialIcons>
        <a href="https://www.instagram.com/joelbowen/" target="_blank">
          <img src={instagram.publicURL} />
        </a>
        <a href="https://twitter.com/JoelSocialized" target="_blank">
          <img src={twitter.publicURL} />
        </a>
        <a href="https://www.linkedin.com/in/joelbowen" target="_blank">
          <img src={linkedin.publicURL} />
        </a>
      </SocialIcons>
      <hr
        style={{
          alignSelf: 'center',
          border: '1px solid rgb(225, 225, 225)',
          display: 'block',
          height: 0,
          margin: '0 auto',
          maxWidth: '300px',
          width: '60%',
        }}
      />
      <p style={{ textAlign: 'center', marginTop: rhythm(1) }}>
        <a
          href="https://github.com/joelbowen/joel-dot-software"
          target="_blank"
        >
          See the code on <strong>Github</strong>
        </a>
      </p>
    </footer>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      query FooterLogos {
        linkedin: allFile(
          filter: {
            sourceInstanceName: { eq: "assets" }
            name: { eq: "linkedin" }
          }
        ) {
          edges {
            node {
              id
              publicURL
            }
          }
        }
        twitter: allFile(
          filter: {
            sourceInstanceName: { eq: "assets" }
            name: { eq: "twitter" }
          }
        ) {
          edges {
            node {
              id
              publicURL
            }
          }
        }
        instagram: allFile(
          filter: {
            sourceInstanceName: { eq: "assets" }
            name: { eq: "instagram" }
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
    render={data => (
      <Footer
        instagram={data.instagram.edges[0].node}
        twitter={data.twitter.edges[0].node}
        linkedin={data.linkedin.edges[0].node}
      />
    )}
  />
)
