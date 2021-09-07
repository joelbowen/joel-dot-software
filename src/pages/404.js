import React from 'react'

import Layout from '../components/Layout'
import Seo from '../components/seo'

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location} title="404">
        <Seo title="404: Not Found" />
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ marginTop: '100px' }}>Not Found</h1>
          <p>Whoops! Looks like that page doesn&apos;t exist.</p>
        </div>
      </Layout>
    )
  }
}

export default NotFoundPage
