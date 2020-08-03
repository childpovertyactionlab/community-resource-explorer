import React from "react"

import { Col, Row, Collapse } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import { pages } from "../consts"
import portrait from "../images/child-portrait-3:4.png"

const home = () => {
  return (
    <Layout id="home-page" activePageId={pages.HOME.id}>
      <SEO title="Home" />

      <Hero activePageId={pages.HOME.id} imgSrc={portrait}>
        <div className="page-title-section">
          <p className="subtitle">
            All Dallas neighborhoods should have what they need to <span className="emphasis">thrive.</span>
          </p>
        </div>
        <p className="caption">The Community Resource Explorer reveals where assets and needs exist so individuals and institutions can have the greatest impact.</p>
      </Hero>

      <Row noGutters className="">
        <Col
          className=""
          xs={{ offset: 0, span: 12 }}
          md={{ offset: 5, span: 7 }}
        ></Col>
      </Row>
    </Layout>
  )
}

export default home
