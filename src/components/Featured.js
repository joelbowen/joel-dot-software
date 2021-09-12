import React from 'react'
import styled from '@emotion/styled'
import { StaticImage } from 'gatsby-plugin-image'
import { breakpoints, darkMode, lightMode, rhythm } from '../utils/typography'

const FeaturedWrapper = styled.div`
  margin-bottom: ${rhythm(2.75)};

  @media (min-width: ${breakpoints.sm}) {
    display: flex;
    margin-left: -4px;
  }

  @media (min-width: ${breakpoints.xl}) {
    margin: 0 -5vw ${rhythm(2.75)};
  }
`

const FeaturedItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: ${breakpoints.sm}) {
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
  @media (min-width: ${breakpoints.sm}) {
    align-items: flex-start;
  }
  @media (min-width: ${breakpoints.lg}) {
    padding: 0 0 10px 10px;
  }

  a .gatsby-image-wrapper:hover {
    :before {
      background: rgba(255, 255, 255, 0.25);
    }
  }

  /* * DARK MODE * */
  .dark-mode & a .gatsby-image-wrapper:hover {
    :before {
      background: rgba(255, 255, 255, 0.1);
    }
  }
`

const WatchCTA = styled.h3`
  color: ${lightMode.color};
  font-weight: 400;
  margin: 0 0 0.5rem;
  display: block;

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
  -webkit-line-clamp: 3;

  /* * DARK MODE * */
  .dark-mode & {
    color: ${darkMode.mutedColor}af;
  }
`

function Featured() {
  return (
    <FeaturedWrapper>
      <FeaturedItems>
        <FeaturedItemWrapper>
          <StaticImage
            src="../../content/assets/newborn.jpg"
            alt="A man holds a newborn baby"
          />
        </FeaturedItemWrapper>
        <FeaturedItemWrapper>
          <StaticImage
            src="../../content/assets/graphql-switzerland.jpg"
            alt="A backpack with the GraphQL logo sits atop a swiss mountain"
          />
        </FeaturedItemWrapper>
        <FeaturedItemWrapper>
          <StaticImage
            src="../../content/assets/grill-cart.jpg"
            alt="A cedar grill cart"
          />
        </FeaturedItemWrapper>
        <FeaturedItemWrapper>
          <StaticImage
            src="../../content/assets/milling-lumber.jpg"
            alt="A man in a helmet holds a red cedar slab"
          />
        </FeaturedItemWrapper>
        <FeaturedItemWrapper>
          <StaticImage
            src="../../content/assets/github-desk-walnut.jpg"
            alt="The Github Octocat logo is embedded in a walnut table"
          />
        </FeaturedItemWrapper>
        <FeaturedItemWrapper>
          <StaticImage
            src="../../content/assets/denver.jpg"
            alt="The word Denver is lit up in lights"
          />
        </FeaturedItemWrapper>
      </FeaturedItems>
      <FeaturedItems>
        <FeaturedItemWrapper>
          <a href="https://www.instagram.com/p/BohW3wknX7J" target="_blank">
            <StaticImage
              src="../../content/assets/featured-video.jpg"
              alt="Preview thumbnail of the featured video - a man uses a handheld cnc"
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

export default Featured
