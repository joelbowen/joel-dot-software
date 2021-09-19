import React, { useState } from 'react'
import styled from '@emotion/styled'
import { breakpoints, darkMode, lightMode, rhythm } from '../utils/typography'
import { BiTag } from 'react-icons/bi'
import { Collapse } from 'react-collapse'

const EntryContainer = styled.div`
  display: flex;
  flex: 1 0 50px;

  // Target repeat occurrence of this year
  &.year-${(props) => props.year} ~ .year-${(props) => props.year} {
    .year-dot,
    .year-name {
      display: none;
    }
  }

  &:first-of-type .timeline {
    margin-top: ${rhythm(1.5)};
    padding-top: 0;
  }

  h2,
  h3 {
    font-weight: 400;
  }

  &:nth-child(even) button {
    aside {
      order: 2;
      padding: 0 0 0 2rem;
    }
  }
`

const TimelineContainer = styled.aside`
  display: flex;
`

const Timeline = styled.div`
  display: none;
  @media (min-width: ${breakpoints.sm}) {
    padding-top: ${rhythm(1.5)};
    padding-right: 25px;
    border-left: 1px solid #ccc;
    display: flex;
    margin-left: 50px;
    transition: 0.15s all ease;
  }
  @media (min-width: ${breakpoints.xl}) {
    margin-left: -45px;
    padding-right: 0;
  }
`

const YearDot = styled.article`
  height: 10px;
  background: #ccc;
  border-radius: 100%;
  width: 10px;
  margin: 0 5px 0 -5px;
`

const Year = styled.span`
  margin: -5px 0 0 -60px;
  font-size: 0.75rem;
`

const EntryBtn = styled.button`
  border-radius: 15px;
  border: 1px solid transparent;
  color: ${lightMode.color};
  display: flex;
  text-align: left;
  padding: ${rhythm(1)} ${rhythm(1.25)} ${rhythm(1)} ${rhythm(0.75)};

  .ReactCollapse--collapse {
    transition: height 500ms;
  }

  &:hover {
    background: ${darkMode.mutedColor}1a;
    border: 1px solid #cccccc3f;
    cursor: pointer;
  }

  /* * DARK MODE * */
  .dark-mode & {
    color: ${darkMode.color};
    &:hover {
      border: 1px solid #cccccc10;
    }
  }
`

const Illustration = styled.aside`
  display: none;

  @media (min-width: ${breakpoints.lg}) {
    display: initial;
    flex: 2;
    padding: 0 2rem 0 0;

    img {
      margin-bottom: 0;
    }
  }
`

const Icon = styled.div`
  color: ${lightMode.mutedColor};
  flex: 0;
  min-width: 75px;

  svg {
    width: 50px;
    height: 50px;
  }

  @media (min-width: ${breakpoints.lg}) {
    ${(props) => (props.hideLg ? 'display: none' : '')}
  }

  /* * DARK MODE * */
  .dark-mode & {
    color: ${darkMode.mutedColor};
  }
`

const Entry = styled.div`
  display: flex;
  flex: 4;
  flex-direction: column;
`

const Position = styled.span`
  color: ${lightMode.mutedColor};
  margin-top: -${rhythm(3 / 4)};
  margin-bottom: ${rhythm(3 / 4)};

  /* * DARK MODE * */
  .dark-mode & {
    color: ${darkMode.mutedColor};
  }
`

const Tags = styled.ul`
  list-style-type: none;
  margin: 5px 0 14px -5px;
`

const Tag = styled.li`
  color: #fff;
  display: inline-block;
  padding: 5px 10px;
  margin: 5px;
  background: hsl(243deg 100% 69%);
  border-radius: 24px;
  font-size: 0.75rem;
  &:hover {
    background: hsl(243deg 100% 65%);
  }

  /* * DARK MODE * */
  .dark-mode & {
    color: ${darkMode.background};
    background: hsl(68deg 56% 50%);

    &:hover {
      background: hsl(68deg 56% 45%);
    }
  }
`

const HideOnDesktop = styled.div`
  @media (min-width: ${breakpoints.md}) {
    display: none;
  }
`

const ReadMoreCTA = styled.span`
  color: ${lightMode.mutedColor};
  text-decoration: underline;

  /* * DARK MODE * */
  .dark-mode & {
    color: ${darkMode.mutedColor};
  }
`

function WorkExample({
  icon,
  title,
  position,
  html,
  tags,
  year,
  context,
  image,
  imageDark,
}) {
  const [showingDetails, setShowingDetails] = useState(false)
  return (
    <EntryContainer className={`year-${year}`} year={year}>
      <TimelineContainer>
        <Timeline className="timeline">
          <YearDot className="year-dot" />
          <Year className="year-name">{year}</Year>
        </Timeline>
      </TimelineContainer>
      <EntryBtn onClick={() => setShowingDetails(!showingDetails)}>
        {image && imageDark ? (
          <Illustration>
            <img src={image.publicURL} className="show-light-mode" alt="" />
            <img src={imageDark.publicURL} className="show-dark-mode" alt="" />
          </Illustration>
        ) : null}
        <Icon hideLg={image && imageDark}>{icon}</Icon>
        <Entry>
          <h2>{title}</h2>
          <Position>
            <BiTag
              style={{ transform: 'rotate(180deg)', margin: '0 5px -2px 0' }}
            />
            {position}
          </Position>
          <article>
            <p>{context}</p>
          </article>
          <Collapse isOpened={showingDetails}>
            <article dangerouslySetInnerHTML={{ __html: html }} />
            <Tags>
              {tags.split(', ').map((t) => (
                <Tag key={t.toString()}>{t}</Tag>
              ))}
              <Tag key={year}>{year}</Tag>
            </Tags>
          </Collapse>
          <HideOnDesktop>
            <ReadMoreCTA onClick={() => setShowingDetails(!showingDetails)}>
              Read {showingDetails ? 'Less' : 'More'}
            </ReadMoreCTA>
          </HideOnDesktop>
        </Entry>
      </EntryBtn>
    </EntryContainer>
  )
}

export default WorkExample
