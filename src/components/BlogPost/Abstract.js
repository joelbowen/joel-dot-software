import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { breakpoints, rhythm } from '../../utils/typography'
import AbstractPhoto from './AbstractPhoto'

const Abstract = styled.p`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 6;

  @media (min-width: ${breakpoints.sm}) {
    -webkit-line-clamp: 6;
    margin: 0;
  }
`

const PhotoWrapper = styled.div`
  @media (min-width: ${breakpoints.sm}) {
    padding-top: 2rem;
    padding-right: 1rem;
    flex: 1;
  }

  @media (min-width: ${breakpoints.md}) {
    padding-top: 1rem;
  }
`

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  @media (min-width: ${breakpoints.sm}) {
    flex-direction: row;
  }

  @media (min-width: ${breakpoints.md}) {
    margin-bottom: 0;
  }
`

const MobileCTA = styled.p`
  margin-top: -${rhythm(1 / 2)};
  text-align: right;
  @media (min-width: ${breakpoints.sm}) {
    display: none;
  }
`

const Title = styled.h3`
  margin: 1.5rem 0 0;

  @media (min-width: ${breakpoints.md}) {
    margin: 0.5rem 0 0;
  }
`

function BlogPostAbstract({ post }) {
  return (
    <PostWrapper>
      <PhotoWrapper>
        <AbstractPhoto post={post} />
      </PhotoWrapper>
      <article style={{ flex: 2 }}>
        <Link
          style={{
            display: 'block',
            fontWeight: '800',
            boxShadow: `none`,
            marginBottom: rhythm(1 / 4),
          }}
          to={`/blog${post.fields.slug}`}
        >
          <Title>{post.frontmatter.title}</Title>
        </Link>
        <Abstract
          dangerouslySetInnerHTML={{
            __html: post.frontmatter.description || post.excerpt,
          }}
        />
        <MobileCTA style={{ display: 'none' }}>
          <Link style={{ boxShadow: `none` }} to={post.fields.slug}>
            Continue Reading
          </Link>
        </MobileCTA>
      </article>
    </PostWrapper>
  )
}

export default BlogPostAbstract
