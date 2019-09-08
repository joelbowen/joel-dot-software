import React from 'react'
import { graphql } from 'gatsby'
import PageWrapper from '../components/PageWrapper'
import Layout from '../components/Layout'

function PrivacyPolicy({ data }) {
  const html = {
    __html: data.allIubendaDocument.edges[0].node.content,
  }
  return (
    <PageWrapper>
      <Layout>
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
          title
        }
      }
    }
  }
`
