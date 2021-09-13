import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { PageWrapper } from '../components/_Containers'

function PrivacyPolicy({ data, location }) {
  const html = {
    __html: JSON.parse(data.allIubendaDocument.edges[0].node.content)
      ?.privacyPolicy?.content,
  }
  return (
    <PageWrapper>
      <Layout location={location}>
        <div dangerouslySetInnerHTML={html} style={{ marginTop: '1rem' }} />
      </Layout>
    </PageWrapper>
  )
}

export default PrivacyPolicy

export const query = graphql`
  {
    allIubendaDocument {
      edges {
        node {
          id
          content
        }
      }
    }
  }
`
