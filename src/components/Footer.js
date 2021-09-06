import React from 'react'
import styled from '@emotion/styled'
import { darkMode, lightMode, rhythm } from '../utils/typography'
import { StaticQuery, graphql, Link } from 'gatsby'
import {
  RiInstagramLine,
  RiLinkedinBoxFill,
  RiTwitterFill,
} from 'react-icons/ri'
import BackTopTop from './BackToTop'

const SocialIcons = styled.div`
  display: flex;
  font-size: 3rem;
  justify-content: center;
  margin-bottom: ${rhythm(1)};
  margin-top: ${rhythm(3.5)};
  a {
    flex: 1;
    margin-right: 40px;
    max-height: 40px;
    max-width: 40px;

    &:last-child {
      margin-right: 0;
    }
  }
  svg {
    color: ${lightMode.color}6f;
    margin-bottom: ${rhythm(1)};
  }

  /* * DARK MODE * */
  .dark-mode & svg {
    color: ${darkMode.color}6f;
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

function Footer({ showGitHub }) {
  return (
    <footer style={{ marginTop: 'auto' }}>
      <SocialIcons>
        <a href="https://www.instagram.com/joelbowen/" target="_blank">
          <RiInstagramLine />
        </a>
        <a href="https://twitter.com/joeldotsoftware" target="_blank">
          <RiTwitterFill />
        </a>
        <a href="https://www.linkedin.com/in/joelbowen" target="_blank">
          <RiLinkedinBoxFill />
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

export default Footer
