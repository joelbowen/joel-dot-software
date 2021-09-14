import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import styled from '@emotion/styled'

const AbstractPhotoWrapper = styled.div`
  flex: 1;
`

function AbstractPhoto({ post }) {
  if (!post.frontmatter.photo) {
    return null
  }

  return (
    <AbstractPhotoWrapper>
      <Link style={{ boxShadow: `none` }} to={`/blog${post.fields.slug}`}>
        <GatsbyImage
          image={post.frontmatter.photo.childImageSharp.gatsbyImageData}
          alt={post.frontmatter.photoDescription}
        />
      </Link>
    </AbstractPhotoWrapper>
  )
}

export default AbstractPhoto
