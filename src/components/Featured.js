import React from 'react'
import styled from '@emotion/styled'
import Image from 'gatsby-image'
import { rhythm } from '../utils/typography'
import { StaticQuery, graphql } from 'gatsby'

const FeaturedWrapper = styled.div`
  margin-bottom: ${rhythm(2.75)};

  @media (min-width: 620px) {
    display: flex;
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
`

const WatchCTA = styled.strong`
  display: none;
  @media (min-width: 345px) {
    display: inline-block;
  }
`
const FeaturedText = styled.h3`
  color: #000;
  display: -webkit-box;
  font-size: ${rhythm(3 / 4)};
  font-family: Lato;
  font-weight: 300;
  line-height: 1.5;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  @media (min-width: 325px) {
    -webkit-line-clamp: 3;
  }
`

function Featured({ images, videos }) {
  return (
    <FeaturedWrapper>
      <FeaturedItems>
        {images.map(image => (
          <FeaturedItemWrapper key={image.node.id}>
            <Image fluid={image.node.localFile.childImageSharp.fluid} />
          </FeaturedItemWrapper>
        ))}
      </FeaturedItems>
      <FeaturedItems>
        <FeaturedItemWrapper>
          <a href="https://www.instagram.com/p/BohW3wknX7J" target="_blank">
            <Image
              fluid={videos[0].node.childImageSharp.fluid}
              alt="Featured Video"
            />
          </a>
        </FeaturedItemWrapper>
        <FeaturedItemWrapper
          style={{
            alignItems: 'center',
            flex: `0 0 66%`,
            display: 'flex',
            justifyContent: 'center',
            padding: `0 ${rhythm(2 / 3)}`,
            maxWidth: '400px',
          }}
        >
          <FeaturedText>
            <WatchCTA>WATCH:</WatchCTA> Creating “Jake Knapp” for Wily’s Design
            Sprint Bootcamp. (
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

export default props => (
  <StaticQuery
    query={graphql`
      query FeaturedItems {
        allInstaNode(sort: { order: DESC, fields: timestamp }, limit: 3) {
          edges {
            node {
              id
              timestamp
              localFile {
                childImageSharp {
                  fluid(maxWidth: 250, maxHeight: 250) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
        allFile(
          filter: {
            sourceInstanceName: { eq: "assets" }
            name: { eq: "featured-video" }
          }
        ) {
          edges {
            node {
              id
              childImageSharp {
                fluid(maxWidth: 250, maxHeight: 250) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Featured
        images={data.allInstaNode.edges}
        videos={data.allFile.edges}
        {...props}
      />
    )}
  />
)
