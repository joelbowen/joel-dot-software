import styled from '@emotion/styled'
import { breakpoints } from '../utils/typography'

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

export const ContentWrapper = styled.div`
  margin: 0 auto;
  max-width: 700px;

  // Break out of the content-wrapper container when needed
  .expand-lg {
    display: flex;
    flex-direction: column;

    @media (min-width: ${breakpoints.md}) {
      padding-left: 1.1475rem;
      padding-right: 1.1475rem;
      margin-left: calc((-100vw + 700px) / 2);
      margin-right: calc((-100vw + 700px) / 2);
    }

    @media (min-width: ${breakpoints.lg}) {
      margin-left: calc(-${(breakpoints.lgVal - 700) / 2}px);
      margin-right: calc(-${(breakpoints.lgVal - 700) / 2}px);
    }
  }

  // Break out of the content-wrapper container when needed
  .expand-xl {
    display: flex;
    flex-direction: column;

    @media (min-width: ${breakpoints.md}) {
      padding-left: 1.1475rem;
      padding-right: 1.1475rem;
      margin-left: calc((-100vw + 700px) / 2);
      margin-right: calc((-100vw + 700px) / 2);
    }

    @media (min-width: ${breakpoints.xl}) {
      margin-left: calc(-${(breakpoints.xlVal - 700) / 2}px);
      margin-right: calc(-${(breakpoints.xlVal - 700) / 2}px);
    }
  }

  // Break out of the content-wrapper container when needed
  .expand-xxl {
    display: flex;
    flex-direction: column;

    @media (min-width: ${breakpoints.md}) {
      padding-left: 1.1475rem;
      padding-right: 1.1475rem;
      margin-left: calc((-100vw + 700px) / 2);
      margin-right: calc((-100vw + 700px) / 2);
    }

    @media (min-width: ${breakpoints.xxl}) {
      margin-left: -${(breakpoints.xxlVal - 700) / 2}px;
      margin-right: -${(breakpoints.xxlVal - 700) / 2}px;
    }
  }
`
