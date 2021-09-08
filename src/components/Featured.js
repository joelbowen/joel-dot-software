import React from 'react'
import styled from '@emotion/styled'
import { GatsbyImage } from 'gatsby-plugin-image'
import { darkMode, lightMode, rhythm } from '../utils/typography'
import { StaticQuery, graphql } from 'gatsby'

const FeaturedWrapper = styled.div`
  margin-bottom: ${rhythm(2.75)};

  @media (min-width: 620px) {
    display: flex;
    margin-left: -4px;
  }

  @media (min-width: 1024px) {
    margin: 0 calc(calc(750px - 1024px) / 2) ${rhythm(2.75)};
  }
`

const FeaturedItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 620px) {
    flex: 1;
    justify-content: flex-end;
    &:last-child {
      justify-content: flex-start;
    }
  }
`

const FeaturedItemWrapper = styled.div`
  flex: 0 0 33%;
  max-height: 200px;
  max-width: 200px;
  padding: 2px;
  align-items: ${(props) =>
    props.align === 'center' ? 'center' : 'flex-start'};
  @media (min-width: 620px) {
    align-items: flex-start;
  }
  @media (min-width: 1024px) {
    padding: 0 0 10px 10px;
  }

  a .gatsby-image-wrapper:hover {
    :before {
      background: rgba(255, 255, 255, .25);
    }
  }

  /* * DARK MODE * */
  .dark-mode & a .gatsby-image-wrapper:hover {
    :before {
      background: rgba(255, 255, 255, .1);

    }
  }
`

const WatchCTA = styled.h3`
  color: ${lightMode.color};
  display: none;
  font-weight: 400;
  margin: 0 0 0.5rem;
  @media (min-width: 345px) {
    display: block;
  }

  /* * DARK MODE * */
  .dark-mode & {
    color: ${darkMode.color};
  }
`
const FeaturedText = styled.aside`
  color: ${lightMode.mutedColor};
  display: -webkit-box;
  font-size: ${rhythm(0.6)};
  font-weight: 400;
  line-height: 1.5;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  @media (min-width: 325px) {
    -webkit-line-clamp: 3;
  }

  /* * DARK MODE * */
  .dark-mode & {
    color: ${darkMode.mutedColor}af;
  }
`

function Featured({ images, videos }) {
  return (
    <FeaturedWrapper>
      <FeaturedItems>
        {images.map((image) => (
          <FeaturedItemWrapper key={image.node.id}>
            <GatsbyImage image={image.node.childImageSharp.gatsbyImageData} />
          </FeaturedItemWrapper>
        ))}
      </FeaturedItems>
      <FeaturedItems>
        <FeaturedItemWrapper>
          <a href="https://www.instagram.com/p/BohW3wknX7J" target="_blank">
            <GatsbyImage
              image={videos[0].node.childImageSharp.gatsbyImageData}
              alt="Featured Video"
            />
          </a>
        </FeaturedItemWrapper>
        <FeaturedItemWrapper
          align="center"
          style={{
            flex: `0 0 66%`,
            display: 'flex',
            justifyContent: 'center',
            padding: `0 ${rhythm(2 / 3)}`,
            maxWidth: '400px',
          }}
        >
          <FeaturedText>
            <WatchCTA>Featured</WatchCTA> Creating “Jake Knapp” for Wily’s
            Design Sprint Bootcamp. (
            <a href="https://www.instagram.com/p/BohW3wknX7J" target="_blank">
              link
            </a>
            )
          </FeaturedText>
        </FeaturedItemWrapper>
      </FeaturedItems>
    </FeaturedWrapper>
  )
}

export default (props) => (
  <StaticQuery
    query={graphql`
      query FeaturedItems {
        pictures: allFile(
          filter: {
            sourceInstanceName: { eq: "assets" }
            name: { glob: "featured-img-*" }
          }
        ) {
          edges {
            node {
              id
              childImageSharp {
                gatsbyImageData(width: 250, height: 250, layout: CONSTRAINED)
              }
            }
          }
        }
        video: allFile(
          filter: {
            sourceInstanceName: { eq: "assets" }
            name: { eq: "featured-video" }
          }
        ) {
          edges {
            node {
              id
              childImageSharp {
                gatsbyImageData(width: 250, height: 250, layout: CONSTRAINED)
              }
            }
          }
        }
      }
    `}
    render={(data) => (
      <Featured
        images={data.pictures.edges}
        videos={data.video.edges}
        {...props}
      />
    )}
  />
)
