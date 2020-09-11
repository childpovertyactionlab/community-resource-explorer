import React from "react"

import { Col, Row, Form, Button } from "react-bootstrap"
import Layout from "../components/layout"
import Helmet from "react-helmet"
import SEO from "../components/seo"
import { pages, salesForceUrl } from "../consts"
import _ from "lodash"

const DEBUG = true

const SignUp = ({ location }) => {
  // TODO: if !email, have alternate text to "Almost"
  const email = _.get(location, "state.emailValue", "")

  const { keywords, image, description } = pages.SIGNUP.meta
  const { name } = pages.SIGNUP

  const onSubmit = e => {
    console.log(e)
    debugger
  }

  return (
    <Layout
      id="signup-page"
      activePageId={pages.SIGNUP.id}
      disableFooter={true}
    >
      <SEO
        url={location.href}
        title={name}
        keywords={keywords}
        image={image}
        description={description}
      />
      <Helmet>
        <meta HTTP-EQUIV="Content-type" CONTENT="text/html; charset=UTF-8" />
      </Helmet>

      <Row id="page">
        <Col
          xs={{ offset: 1, span: 10 }}
          md={{ offset: 2, span: 8 }}
          // xl={{ offset: 4, span: 4 }}
        >
          <Form
            action={salesForceUrl}
            method="POST"
            onSubmit={onSubmit}
          >
            <h2>Almost done!</h2>
            <p>
              We'd love to know more about you. You can enter additional info
              below, or{" "}
              <input
                className="inline-submit"
                type="submit"
                name="submit"
                value="click here"
              />{" "}
              to finish and submit only your email address.
            </p>

            <input type="hidden" name="oid" value="00D1U00000110AJ" />
            <input
              type="hidden"
              name="retURL"
              // value="https://dallasisd.resourceexplorer.org/thank-you"
            />

            {DEBUG && (
              <>
                <input type="hidden" name="debug" value="1" />
                <input type="hidden" name="debugEmail" value="hoshmn@msn.com" />
              </>
            )}

            <Form.Group>
              <Form.Label name="first_name">First Name</Form.Label>
              <Form.Control id="first_name" name="first_name" type="text" />
            </Form.Group>

            <Form.Group>
              <Form.Label name="last_name">Last Name</Form.Label>
              <Form.Control id="last_name" name="last_name" type="text" />
            </Form.Group>

            <Form.Group>
              <Form.Label className="required">Email</Form.Label>
              <Form.Control
                required
                defaultValue={email}
                name="email"
                type="email"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label name="company">Organization</Form.Label>
              <Form.Control id="company" name="company" type="text" />
            </Form.Group>

            <Form.Group>
              <Form.Label name="neighborhood">Neighborhood</Form.Label>
              <Form.Control
                id="00N1U00000VNkxU"
                name="00N1U00000VNkxU"
                type="text"
              />
            </Form.Group>

            <Button variant="primary" size="lg" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Layout>
  )
}

export default SignUp
