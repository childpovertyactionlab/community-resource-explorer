import React from "react"
import { Col, Row } from "react-bootstrap"
import { graphql } from "gatsby"
import { Link as ScrollLink } from "react-scroll"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import InlineSvg from "../components/inlineSvg"
import { pages, stickyHeaderHeight } from "../consts"
import escapes from "../images/playground.jpg"
import portrait from "../images/child-portrait-3-4.jpg"
import ExplorerSteps from "../components/AnimatedScroll"
import PostTeaser from "../components/PostTeaser"

/**
 * Fetch data from yaml file for this page.
 */
export const query = graphql`
  query PageQuery {
    homeYaml {
      subtitle
      caption
      q {
        attribution
        superhead
        text
      }
    }
    sharedYaml {
      learnMore
      goToExplorer
      recentBlogPosts
      readPost
    }
    allMdx(sort: { fields: frontmatter___date, order: ASC }) {
      edges {
        node {
          body
          frontmatter {
            title
            date
            path
            showCaroItems
            caroItems {
              alt
              character1
              character2
              indexName
              src {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              stat1text
              stat2text
            }
            heroImage {
              childImageSharp {
                fluid(maxWidth: 1920) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            heroImageAlt
          }
          excerpt(truncate: true, pruneLength: 200)
        }
      }
    }
  }
`

const home = ({ data, location }) => {
  // console.log("home page data, ", data)
  const { keywords, image, description } = pages.HOME.meta
  const { name } = pages.HOME
  const posts = data.allMdx.edges.slice(-2) // most recent 2 posts
  console.log("posts, ", posts)

  return (
    <Layout id="home-page" activePageId={pages.HOME.id}>
      <SEO
        url={location.href}
        title={name}
        keywords={keywords}
        image={image}
        description={description}
      />

      <Hero activePageId={pages.HOME.id} imgSrc={portrait}>
        <div className="page-title-section">
          <p className="subtitle">{data.homeYaml.subtitle}</p>
        </div>
        <p
          className="caption"
          dangerouslySetInnerHTML={{ __html: data.homeYaml.caption }}
        ></p>
        <div className="hero-links caption">
          <ScrollLink to="page" smooth={true} offset={-stickyHeaderHeight - 48}>
            {data.sharedYaml.learnMore} <InlineSvg type="down-arrow-sm" />
          </ScrollLink>
          <a href="/explorer">
            {data.sharedYaml.goToExplorer} <InlineSvg type="down-arrow-sm" />
          </a>
        </div>
      </Hero>

      <Row id="page">
        <Col id="panelTwo" className="d-block d-md-flex" xs="12">
          <Col
            className="p-0 image-by-quote"
            xs={{ offset: 1, span: 10 }}
            md={{ offset: 1, span: 5 }}
            lg={{ offset: 2, span: 3 }}
            xl={{ offset: 2, span: 3 }}
          >
            <div
              className="escapes"
              style={{ backgroundImage: `url(${escapes})` }}
              alt="Escapes"
            />
          </Col>
          {/** Removed from below // md={{ offset: 1, span: 4 }} */}
          <Col
            xs={{ offset: 1, span: 10 }}
            md={{ offset: 0, span: 5 }}
            lg={{ offset: 0, span: 5 }}
            xl={{ offset: 0, span: 5 }}
            className="quote-by-image quote light no-bg p-0"
          >
            <div className="text">{data.homeYaml.q[0].text}</div>
            <div className="attribution">{data.homeYaml.q[0].attribution}</div>
          </Col>
        </Col>
        <ExplorerSteps />

        <Col xs={{ span: 11, offset: 1 }} className="recent p-0">
          <span className="custom-underline">
            {data.sharedYaml.recentBlogPosts}
          </span>
        </Col>

        {/** Dynamically populated list if first two blog posts */}
        {posts.map((el, i) => {
          return <PostTeaser key={`post-teaser-${i}`} indx={i} {...el.node} />
        })}
      </Row>
    </Layout>
  )
}

export default home
