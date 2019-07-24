import React from 'react'
import { Router, Redirect } from '@reach/router'

function Talks() {
  // Temporarily redirecting, this page should be a repository of talks eventually //
  return (
    <Redirect from="talks" to="talks/scaling-your-team-with-graphql" noThrow />
  )
}

export default Talks
