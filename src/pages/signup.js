import React from "react"

import { Col, Row, Collapse } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import { pages } from "../consts"
import _ from "lodash"

const SignUp = ({ location }) => {

  return (
    <Layout activePageId={pages.SIGNUP.id} disableSignup={true}>
      <Row id="page">
        <Col
          className=""
          xs={{ offset: 0, span: 12 }}
          md={{ offset: 5, span: 7 }}
        >{_.get(location, 'state.emailValue', 'none')}</Col>
      </Row>
    </Layout>
  )
}

export default SignUp
