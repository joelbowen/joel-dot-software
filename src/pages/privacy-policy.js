import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

function PrivacyPolicy({ data }) {
  const html = {
    __html: data.allIubendaDocument.edges[0].node.content,
  }
  return (
    <Layout>
      <div dangerouslySetInnerHTML={html} />
    </Layout>
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
