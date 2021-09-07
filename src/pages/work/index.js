import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import PageWrapper from '../../components/PageWrapper'
import { rhythm } from '../../utils/typography'
import WorkExample from '../../components/WorkExample'
import {
  RiAuctionLine,
  RiBuildingLine,
  RiCalendarTodoLine,
  RiGamepadLine,
  RiHospitalLine,
  RiLightbulbLine,
  RiParkingBoxLine,
  RiSearchLine,
  RiStockLine,
} from 'react-icons/ri'
import { BiBeer, BiPyramid } from 'react-icons/bi'
import Footer from '../../components/Footer'

const ContentWrapper = styled.div`
  margin: 0 auto;
  max-width: 750px;
`

const WorkContainer = styled.div`
  margin-top: ${rhythm(3)};
`

const icons = {
  BiBeer,
  BiPyramid,
  RiAuctionLine,
  RiBuildingLine,
  RiCalendarTodoLine,
  RiGamepadLine,
  RiHospitalLine,
  RiLightbulbLine,
  RiParkingBoxLine,
  RiSearchLine,
  RiStockLine,
}

function Work({ data, location }) {
  return (
    <PageWrapper>
      <Layout location={location}>
        <ContentWrapper>
          <h1>Some of my work</h1>
          <p>
            These work examples should give insight into the types of projects
            I&apos;ve been privileged to help bring to life.
          </p>
          <p>
            This list is not exhaustive but represents some of the highlights of
            the last ten years.
          </p>
          <em>
            I have chosen to omit the names of companies and coworkers out of
            respect for their privacy preferences.
          </em>
          <WorkContainer>
            {data.allMarkdownRemark.edges.map((e, index) => (
              <WorkExample
                context={e.node.frontmatter.context}
                icon={
                  icons[e.node.frontmatter.icon]
                    ? icons[e.node.frontmatter.icon]()
                    : null
                }
                html={e.node.html}
                key={e.node.frontmatter.title}
                position={e.node.frontmatter.position}
                tags={e.node.frontmatter.tags}
                title={e.node.frontmatter.title}
                year={e.node.frontmatter.year}
              />
            ))}
          </WorkContainer>
        </ContentWrapper>
      </Layout>
      <Footer />
    </PageWrapper>
  )
}

export default Work

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "work-example" } } }
      sort: { fields: frontmatter___year, order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            position
            tags
            icon
            year
            context
          }
          html
        }
      }
    }
  }
`
