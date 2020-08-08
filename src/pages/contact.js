import React from "react"

import { Col, Row, Form, Button } from "react-bootstrap"
import Layout from "../components/layout"
import Helmet from "react-helmet"
import SEO from "../components/seo"
import Hero from "../components/hero"
import { pages } from "../consts"
import _ from "lodash"
import { navigate } from "gatsby"

const Contact = ({ location }) => {

  const onSubmit = e => {
    console.log(pages.THANKS.path)
    navigate(pages.THANKS.path)
  }

  const { keywords, image, description } = pages.CONTACT.meta
  const { name } = pages.CONTACT

  return (
    <Layout id="contact-page" activePageId={pages.CONTACT.id}>
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
          <h1>Contact us</h1>
          <Form onSubmit={onSubmit} name="cre-contact" method="POST" data-netlify="true">
            <Form.Group controlId="formGroupName">
              <Form.Label name="name">Name</Form.Label>
              <Form.Control required type="name" placeholder="Enter name" />
            </Form.Group>
            
            <Form.Group controlId="formGroupEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control required name="email" type="email" placeholder="Enter your email address" />
            </Form.Group>

            <Form.Group controlId="formGroupSubject">
              <Form.Label>Subject</Form.Label>
              <Form.Control required name="subject" type="subject" />
            </Form.Group>

            <Form.Group controlId="formGroupMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control required name="message" type="message" as="textarea" rows="8" />
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

export default Contact
