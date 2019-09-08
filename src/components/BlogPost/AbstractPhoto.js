import React from 'react'
import { Link } from 'gatsby'
import Image from 'gatsby-image'
import styled from '@emotion/styled'
import { rhythm } from '../../utils/typography'

const AbstractPhotoWrapper = styled.div`
  flex: 1;
  margin-bottom: ${rhythm(1)};
  margin-right: ${rhythm(1)};

  @media (min-width: 620px) {
    margin-bottom: ${rhythm(1 / 2)};
    max-width: 265px;
  }
`

function AbstractPhoto({ post }) {
  if (!post.frontmatter.photo) {
    return null
  }

  return (
    <AbstractPhotoWrapper>
      <Link style={{ boxShadow: `none` }} to={post.fields.slug}>
        <Image
          fluid={post.frontmatter.photo.childImageSharp.fluid}
          alt={post.frontmatter.photoDescription}
        />
      </Link>
    </AbstractPhotoWrapper>
  )
}

export default AbstractPhoto
