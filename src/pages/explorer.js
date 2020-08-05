import React from "react"
import Explorer from "cpal-components"

import { Col, Row, Collapse } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import { pages } from "../consts"
// <Row noGutters className="">
//   <Col
//     className=""
//     xs={{ offset: 0, span: 12 }}
//     md={{ offset: 5, span: 7 }}
//   ></Col>
// </Row>
//
// <Layout id="faqs-page" activePageId={pages.EXPLORER.id}>
//   <SEO title="Explorer" />
//   <Explorer />
// </Layout>

const ExplorerPage = () => {
  return (
    <>
      <SEO title="Explorer" />
      <Explorer />
    </>
  )
}

export default ExplorerPage
