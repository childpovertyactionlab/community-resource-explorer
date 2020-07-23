import React from "react"

import { Col, Row, Collapse } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import { pages } from "../consts"

const Faqs = () => {
  return (
    <Layout pageInfo={{ pageName: "faqs" }} id="faqs-page">
      <SEO title="FAQs" />

      <Hero activePageId={pages.FAQ.id}>
        <div className="page-title-section">
          <div className="title">Frequently Asked Questions</div>
          <div className="subtitle">
            Have questions about our data or the explorer?
          </div>
        </div>
      </Hero>

      <Row noGutters className="">
        <Col
          className=""
          xs={{ offset: 0, span: 12 }}
          md={{ offset: 5, span: 7 }}
        >
        </Col>
      </Row>
    </Layout>
  )
}

export default Faqs
