import React from "react"

import { Col, Row } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import InlineSvg from "../components/inlineSvg"
import { pages, stickyHeaderHeight } from "../consts"
import escapes from "../images/playground.jpg"
// import kids from "../images/kids-playing.png"
// import bank from "../images/bank.png"
import portrait from "../images/child-portrait-3-4.jpg"
// import { navigate } from "gatsby"
import CustomLink from "../components/customLink"
import ExplorerSteps from "../components/AnimatedScroll"
import { Link, graphql } from "gatsby"
import { Link as ScrollLink } from "react-scroll"

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
  }
`

const home = ({ data, location }) => {
  console.log("home page data, ", data)
  const { keywords, image, description } = pages.HOME.meta
  const { name } = pages.HOME

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

        {/* TODOcms: pinned blog post here, dynamically create below */}

        <Col
          className="post-section p-0"
          xs={{ span: 10, offset: 1 }}
          md={{ span: 5, offset: 1 }}
        >
          <figure className="post-image forest p-0">
            {/* <img src={forest} /> */}
          </figure>

          <div className="post-details p-0">
            <div className="post-title">
              <Link to={pages.ISD.path}>
                How the CRE is informing policy and community understanding in
                Dallas
              </Link>
            </div>

            <div className="post-contents">
              Dallas ISD has courageously recognized that “intentional decisions
              . . .have led to racial and economic segregation that produced
              major inequities that persist to this day” and is determined to
              right the wrongs of the past.{" "}
            </div>

            <CustomLink linkTo={pages.ISD.path}>Read post</CustomLink>
          </div>
        </Col>
        <Col
          className="post-section second p-0"
          xs={{ span: 10, offset: 1 }}
          md={{ span: 5, offset: 0 }}
        >
          <figure className="post-image computer p-0">
            {/* <img src={computer} /> */}
          </figure>

          <div className="post-details p-0">
            <div className="post-title">
              <Link to={pages.OPERATION.path}>
                More than ever, Dallas students need reliable broadband. Here's
                how the CRE is helping.
              </Link>
            </div>

            <div className="post-contents">
              In 2020, access to the internet is a must-have utility. But
              despite the internet's apparent ubiquity, 42% of Dallas households
              lack fixed internet access, according to Census data.{" "}
            </div>

            <CustomLink linkTo={pages.OPERATION.path}>Read post</CustomLink>
          </div>
        </Col>
      </Row>
    </Layout>
  )
}

export default home
