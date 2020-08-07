import React from 'react'
import styled from '@emotion/styled'
import { rhythm } from '../utils/typography'
import { StaticQuery, graphql, Link } from 'gatsby'
import BackTopTop from './BackToTop'

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${rhythm(1)};
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
const GitHubLink = () => (
  <div>
    <hr
      style={{
        margin: '0 auto',
        maxWidth: '300px',
        width: '60%',
      }}
    />
    <p style={{ textAlign: 'center', marginTop: rhythm(1) }}>
      <a href="https://github.com/joelbowen/joel-dot-software" target="_blank">
        See the code on <strong>Github</strong>
      </a>
    </p>
  </div>
)

function Footer({ instagram, twitter, linkedin, showGitHub }) {
  return (
    <footer style={{ marginTop: 'auto' }}>
      <SocialIcons>
        <a href="https://www.instagram.com/joelbowen/" target="_blank">
          <img src={instagram.publicURL} alt="Instragram Logo" />
        </a>
        <a href="https://twitter.com/JoelSocialized" target="_blank">
          <img src={twitter.publicURL} alt="Twitter Logo" />
        </a>
        <a href="https://www.linkedin.com/in/joelbowen" target="_blank">
          <img src={linkedin.publicURL} alt="LinkedIn Logo" />
        </a>
      </SocialIcons>
      {showGitHub ? (
        <GitHubLink />
      ) : (
        <p style={{ paddingTop: rhythm(2 / 3) }} />
      )}
      <div
        style={{
          fontSize: '.75rem',
          margin: '1.5rem auto',
          maxWidth: '750px',
          textAlign: 'center',
        }}
      >
        <Link to="/privacy-policy">Privacy Policy</Link>
        <span style={{ width: '10px', display: 'inline-block' }} />
        <a
          href="https://www.joel.pub/newsletter"
          target="_blank"
          alt="Sign up for my newsletter"
        >
          Mailing List
        </a>
      </div>
      <BackTopTop />
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
        {...props}
      />
    )}
  />
)
