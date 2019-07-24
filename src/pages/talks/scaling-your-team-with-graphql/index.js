import React from 'react'
import Layout from '../../../components/Layout'
import SEO from '../../../components/seo'
import { graphql } from 'gatsby'

function TalkContent({ data }) {
  return (
    <Layout hideNav>
      <SEO
        title="Scaling Your Team with GraphQL: Why Relationships Matter"
        description="GraphQL Conf 2019 just wrapped up in Berlin where I was fortunate to hear meet thoughtful leaders on these and other subjects related to GraphQL. So, whether you're brand new to GraphQL or have an active project using GraphQL, I'd like to share some of what I have learned so you can be productive with GraphQL and your teams - while keeping relationships at the center of our work. "
        imageUrl={`https://joel.software${data.featuredPhoto.publicURL}`}
        keywords={[
          'GraphQL',
          'GraphQL Conf 2019',
          'Scaling with GraphQL',
          'Principles of GraphQL',
          'API Design',
          'Tooling',
        ]}
      />
      <div style={{ textAlign: 'center', margin: '0 auto', maxWidth: '750px' }}>
        <div
          style={{
            left: 0,
            width: '100%',
            height: '0',
            position: 'relative',
            paddingBottom: '75%',
            paddingTop: '38px',
          }}
        >
          <iframe
            src="//www.slideshare.net/slideshow/embed_code/key/lSBp6ISg3xmrSP"
            frameBorder="0"
            marginWidth="0"
            marginHeight="0"
            scrolling="no"
            style={{
              border: '1px solid #ccc',
              borderWidth: '1px',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              position: 'absolute',
            }}
            allowFullScreen
            title="Scaling Your Team with GraphQL: Why Relationships Matter"
          />
        </div>
        <div style={{ marginTop: '25px' }}>
          <strong>
            <a
              href="//www.slideshare.net/BowenJoel/scaling-your-team-with-graphql-why-relationships-matter"
              title="Scaling Your Team With GraphQL: Why Relationships Matter"
              target="_blank"
            >
              Scaling Your Team With GraphQL: Why Relationships Matter
            </a>
          </strong>{' '}
          from{' '}
          <strong>
            <a href="//www.slideshare.net/BowenJoel" target="_blank">
              Joel Bowen
            </a>
          </strong>
        </div>
      </div>
    </Layout>
  )
}

export default TalkContent

export const query = graphql`
  {
    featuredPhoto: file(
      absolutePath: { regex: "/scaling-your-team-with-graphql/" }
    ) {
      publicURL
    }
  }
`
