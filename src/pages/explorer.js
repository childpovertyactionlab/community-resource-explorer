import React from "react"
import Explorer from "cpal-components"

import { Col, Row, Collapse } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import { pages } from "../consts"

const ExplorerPage = ({ ...props }) => {
  return (
    <Layout
      disableFooter={true}
      disableHeader={true}
      activePageId={pages.EXPLORER.id}
    >
      <SEO title="Explorer" />
      <Explorer toggleMenu={props.toggleMenu} />
    </Layout>
  )
}

export default ExplorerPage
