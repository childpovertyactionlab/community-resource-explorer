import React from "react"

import { Col, Row } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import InlineSvg from "../components/inlineSvg"
import { pages, stickyHeaderHeight } from "../consts"
import escapes from "../images/playground.jpg"
import kids from "../images/kids-playing.png"
import bank from "../images/bank.png"
import portrait from "../images/child-portrait-3:4.png"
import { navigate } from "gatsby"
import CustomLink from "../components/customLink"
import { Link } from "react-scroll"
import ExplorerSteps from "../components/AnimatedScroll/ExplorerSteps"

const q1 = {
  superhead: "",
  text: `Our neighborhoods are a tremendous asset to our city. However, some communities are well-appointed with resources, like grocery stores, doctor’s offices, and park space, but many others are not.`,
  attribution:
    "The Community Resource Explorer visualizes these assets and disparities.",
}
const q2 = {
  superhead: `Voices from the Community`,
  text: `There is no safe place for students just to be young people in the community.`,
  attribution: "Dallas ISD Trustee",
}
const q3 = {
  superhead: `Voices from the Community`,
  text: `Not having enough banks is an issue. In some parts of the north, there's a bank on every corner. The reason why many businesses were able to get a PPP [loan] was because they had a relationship with a bank . . . You need physical bank locations in the neighborhood to serve community needs.`,
  attribution: "Pleasant Grove Resident",
}

const home = ({ location }) => {
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
          <p className="subtitle">
            All Dallas neighborhoods should have what they need to{" "}
            <span className="">thrive.</span>
          </p>
        </div>
        <p className="caption">
          The Community Resource Explorer is{" "}
          <span className="p-emphasis">
            a data tool that reveals where assets and needs exist
          </span>{" "}
          so individuals and institutions can have the greatest impact.
        </p>
        <div className="hero-links caption">
          <Link to="page" smooth={true} offset={-stickyHeaderHeight}>
            <a href="">
              Learn more <InlineSvg type="down-arrow-sm" />
            </a>
          </Link>
          <a href="/explorer">
            Go to the Explorer <InlineSvg type="down-arrow-sm" />
          </a>
        </div>
      </Hero>

      <Row id="page">
        <Col
          className="p-0 image-by-quote" // 2nd panel image ------------------------------------
          xs={{ offset: 2, span: 8 }}
          md={{ offset: 1, span: 4 }}
          lg={{ offset: 2, span: 3 }}
          xl={{ offset: 2, span: 3 }}
        >
          <div
            className="escapes"
            style={{ backgroundImage: `url(${escapes})` }}
            alt="Escapes"
          />
        </Col>

        <Col
          xs={{ offset: 1, span: 10 }} // 2nd panel text -----------------------------------------
          // md={{ offset: 1, span: 4 }}
          md={{ offset: 0, span: 6 }}
          lg={{ offset: 0, span: 5 }}
          xl={{ offset: 0, span: 5 }}
          className="quote-by-image quote light no-bg p-0"
        >
          <div className="text">{q1.text}</div>
          <div className="attribution">{q1.attribution}</div>
        </Col>

        <ExplorerSteps />

        <Col xs={{ span: 11, offset: 1 }} className="recent p-0">
          <span className="custom-underline">Recent blog</span> posts
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
              How we’re informing policy and community understanding in Dallas.
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
              More than ever, Dallas students need reliable broadband. Here's
              how the CRE is helping.
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
