import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { rhythm } from '../../utils/typography'
import AbstractPhoto from './AbstractPhoto'

const Abstract = styled.p`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 6;

  @media (min-width: 620px) {
    -webkit-line-clamp: 4;
    margin: 0;
  }
`

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 620px) {
    flex-direction: row;
  }
`

const MobileCTA = styled.p`
  margin-top: -${rhythm(1 / 2)};
  text-align: right;
  @media (min-width: 620px) {
    display: none;
  }
`

function BlogPostAbstract({ post }) {
  return (
    <PostWrapper>
      <AbstractPhoto post={post} />
      <article style={{ flex: 1 }}>
        <Link
          style={{
            display: 'block',
            fontWeight: '800',
            boxShadow: `none`,
            marginBottom: rhythm(1 / 4),
          }}
          to={post.fields.slug}
        >
          <h3 style={{ margin: 0 }}>{post.frontmatter.title}</h3>
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
