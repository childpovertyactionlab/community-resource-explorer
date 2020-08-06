import React from "react"

import { Col, Row, Collapse } from "react-bootstrap"
import Layout from "../components/layout"
import Helmet from "react-helmet"
import SEO from "../components/seo"
import Hero from "../components/hero"
import { pages } from "../consts"
import _ from "lodash"

const DEBUG = true

const SignUp = ({ location }) => {

  const email = _.get(location, 'state.emailValue', '')

  return (
    <Layout id="signup-page" activePageId={pages.SIGNUP.id} disableSignup={true}>
      <Helmet>
        <meta HTTP-EQUIV="Content-type" CONTENT="text/html; charset=UTF-8" />
      </Helmet>

      <Row id="page">
        <Col
          xs={{ offset: 1, span: 10 }}
        >
          <form action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST">
            <h2>
              Almost done!
            </h2>
            <p>
              We'd love to know more about you. You can enter additional info below, or{' '}
              <input className="inline-submit" type="submit" name="submit" value="click here" />
              {' '}to finish and submit only your email address.
            </p>

            <input type="hidden" name="oid" value="00D1U00000110AJ" />
            <input type="hidden" name="retURL" value="https://dallasisd.resourceexplorer.org/" />

            {DEBUG && <>
              <input type="hidden" name="debug" value="1" />
              <input type="hidden" name="debugEmail" value="j.maas.howard@gmail.com" />
            </>}

            <label for="first_name">First Name</label><input id="first_name" maxlength="40" name="first_name" size="20" type="text" /><br />

            <label for="last_name">Last Name</label><input id="last_name" maxlength="80" name="last_name" size="20" type="text" /><br />

            <label for="email">Email</label><input defaultValue={email} id="email" maxlength="80" name="email" size="20" type="text" /><br />

            <label for="company">Organization</label><input id="company" maxlength="40" name="company" size="20" type="text" /><br />

            <label>Neighborhood</label><input id="00N1U00000VNkxU" maxlength="255" name="00N1U00000VNkxU" size="20" type="text" /><br />

            <input className="form-submit" type="submit" name="submit" value="Submit" />

          </form>
        </Col>
      </Row>
    </Layout>
  )
}

export default SignUp
