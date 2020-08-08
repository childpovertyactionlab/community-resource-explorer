import React, { useState } from "react"

import { Col, Row, Form, Button } from "react-bootstrap"
import Layout from "../components/layout"
import Helmet from "react-helmet"
import SEO from "../components/seo"
import Hero from "../components/hero"
import { pages } from "../consts"
import _ from "lodash"
import { navigate } from "gatsby"

const ThankYou = ({ location }) => {
  const [secs, setSecs] = useState(5);

  const int = setInterval(() => {
    if (secs > 0) {
      setSecs(secs - 1)
    }
    if (secs === 1) {
      clearInterval(int)
      navigate(pages.HOME.path)
      return
    }
  }, 950) // one New York second

  const { keywords, image, description } = pages.THANKS.meta
  const { name } = pages.THANKS

  return (
    <Layout id="thank-you-page" activePageId={pages.THANKS.path}>
      <SEO
        url={location.href}
        title={name}
        keywords={keywords}
        image={image}
        description={description}
      />
      <Row id="page">
        <Col
          xs={{ offset: 1, span: 10 }}
          md={{ offset: 2, span: 8 }}
          // xl={{ offset: 4, span: 4 }}
        >
          <h2>Thank you!</h2>
          <h4>Redirecting home in {secs}...</h4>
        </Col>
      </Row>
    </Layout>
  )
}

export default ThankYou
