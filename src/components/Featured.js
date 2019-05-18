import React from 'react'
import styled from '@emotion/styled'
import Image from 'gatsby-image'
import { rhythm } from '../utils/typography'
import { StaticQuery, graphql } from 'gatsby'

const FeaturedWrapper = styled.div`
  margin-bottom: ${rhythm(2.75)};
`

const FeaturedItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const FeaturedItemWrapper = styled.div`
  flex: 0 0 33%;
  max-height: 150px;
  max-width: 150px;
`

const FeaturedText = styled.h3`
  font-size: ${rhythm(3 / 4)};
  font-family: Lato;
  font-weight: 200;
  line-height: 1.5;
  margin: 0;
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
          <a href="https://www.instagram.com/p/BohW3wknX7J" target="_new">
            <Image fluid={videos[0].node.childImageSharp.fluid} />
          </a>
        </FeaturedItemWrapper>
        <FeaturedItemWrapper
          style={{
            alignItems: 'center',
            flex: `0 0 66%`,
            display: 'flex',
            justifyContent: 'center',
            padding: rhythm(2 / 3),
            maxWidth: '300px',
          }}
        >
          <FeaturedText>
            <strong>WATCH:</strong> Creating the “Jake” for Wily’s Design Sprint
            Bootcamp.
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
                  fluid(maxWidth: 150, maxHeight: 150) {
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
                fluid(maxWidth: 150, maxHeight: 150) {
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
