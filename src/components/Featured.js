import React from 'react'
import styled from '@emotion/styled'
import { StaticImage } from 'gatsby-plugin-image'
import { breakpoints, darkMode, lightMode, rhythm } from '../utils/typography'

const FeaturedWrapper = styled.div`
  margin-bottom: ${rhythm(2.75)};

  @media (min-width: ${breakpoints.md}) {
    display: flex;
  }
`

const FeaturedItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: ${breakpoints.md}) {
    flex: 1;
    justify-content: flex-end;
    &:last-child {
      justify-content: flex-start;
    }
  }
`

const FeaturedItemWrapper = styled.div`
  flex: 1 1 30%;
  padding: 2px;

  @media (min-width: ${breakpoints.md}) {
    flex: 1 1 15%;
    max-height: ${breakpoints.xl / 6};
    max-width: ${breakpoints.xl / 6};
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
const FeaturedLinkWrapper = styled(FeaturedItemWrapper)`
  order: 7;

  @media (min-width: ${breakpoints.md}) {
    order: initial;
  }
`

const FeaturedCTAWrapper = styled(FeaturedItemWrapper)`
  order: 8;
  flex: 2 0 60%;
  display: flex;
  justify-content: center;
  padding: 0.5rem;

  @media (min-width: ${breakpoints.md}) {
    flex: 2 0 28%;
    order: initial;
  }

  @media (min-width: ${breakpoints.lg}) {
    padding: 1rem;
  }
`

const FeaturedCTA = styled.aside`
  color: ${lightMode.mutedColor};
  display: flex;
  flex-direction: column;
  font-weight: 400;
  justify-content: center;

  /* * DARK MODE * */
  .dark-mode & {
    color: ${darkMode.mutedColor}af;
  }
`

const FeaturedTitle = styled.h3`
  color: ${lightMode.color};
  font-weight: 400;
  display: none;

  @media (min-width: ${breakpoints.lg}) {
    display: block;
  }

  /* * DARK MODE * */
  .dark-mode & {
    color: ${darkMode.color};
  }
`

const FeaturedFiller = styled(FeaturedItemWrapper)`
  display: none;
  @media (min-width: ${breakpoints.md}) {
    display: initial;
    flex: 2 0 45%;
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
        <FeaturedLinkWrapper>
          <a href="https://www.instagram.com/p/BohW3wknX7J" target="_blank">
            <StaticImage
              src="../../content/assets/featured-video.jpg"
              alt="Preview thumbnail of the featured video - a man uses a handheld cnc"
            />
          </a>
        </FeaturedLinkWrapper>
        <FeaturedCTAWrapper>
          <FeaturedCTA>
            <FeaturedTitle>Featured Video</FeaturedTitle>
            <span>
              <a href="https://www.instagram.com/p/BohW3wknX7J" target="_blank">
                Creating “Jake Knapp” for Wily’s Design Sprint Bootcamp.
              </a>
            </span>
          </FeaturedCTA>
        </FeaturedCTAWrapper>
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
        <FeaturedFiller>&nbsp;</FeaturedFiller>
      </FeaturedItems>
    </FeaturedWrapper>
  )
}

export default Featured
