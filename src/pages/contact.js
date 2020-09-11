import React, { useState } from "react"

import { Col, Row, Form, Button } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { pages, salesForceUrl } from "../consts"

import _ from "lodash"


// "I have questions about why (and by whom) the Community Resource Explorer was built, who funds it, etc."
// "display FAQs from the “background” section below this menu"

// "I have questions about the data: how it was calculated, where it came from, which schools are included, etc."
// "display FAQs from the “about the data” section"

// "The data does not match my personal experience"
// "Display FAQ item: “The data for my neighborhood doesn’t match my personal experience. Why might that be ?”"

// "I’d like to stay informed about the Resource Explorer"
// "FAQ item: “How can I stay informed about updates to the CRE?”"

// "I’d like to share insights about my neighborhood to help improve the Resource Explorer"
// "FAQ item: “I have insight about my neighborhood that I would like to share.How can I do that?”"

// "I am interested in applying the Resource Explorer to schools outside of Dallas ISD. Whom should I talk to?"
// "FAQ item: “I am interested in the CRE for schools outside of Dallas ISD.Who should I talk to ?”"

// "I need help with using the website or something’s not working"
// "This creates a form that routes to us instead of CPAL. I will set these forms up in Netlify and share the code to incorporate soon."

// "Another reason"
// "Skips FAQ items, just goes to the regular form"

// NOTE: the keys in this object are used as classes to determine what displays (eg certain faqs, a form).
// Update the class accordingly if the key name is changed.
const selectOptions = {
  "none": {
    text: ""
  },
  "why-built": {
    text: "I have questions about why (and by whom) the Community Resource Explorer was built, who funds it, etc."
  },
  "how-data": {
    text: "I have questions about the data: how it was calculated, where it came from, which schools are included, etc."
  },
  "my-experience": {
    text: "The data does not match my personal experience"
  },
  "stay-informed": {
    text: "I’d like to stay informed about the Resource Explorer"
  },
  "share-insights": {
    text: "I’d like to share insights about my neighborhood to help improve the Resource Explorer"
  },
  "expand-cre": {
    text: "I am interested in applying the Resource Explorer to schools outside of Dallas ISD. Whom should I talk to?"
  },
  "bug-report": {
    text: "I need help with using the website or something’s not working"
  },
  "something-else": {
    text: "Another reason"
  },
}


const Contact = ({ location }) => {

  let [showClass, setShowClass] = useState("none")

  
  const onSubmit = e => {
    // console.log(e)
    // const options = { 
    //   oid: "00D1U00000110AJ", 
    //   first_name: "f", 
    //   last_name: "l", 
    //   email: "o@e", 
    //   company: "b", 
    //   "00N1U00000VNkxU": ""
    // }
    // fetch(salesForceUrl, {
    //   method: 'POST',
    //   mode: 'cors',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(options)
    // })
    // alert('sub')

    const formData = new FormData()
    formData.append("oid", "00D1U00000110AJ")
    formData.append("00D1U00000110AJ", "")
    formData.append("first_name", "f")
    formData.append("last_name", "l")
    formData.append("email", "o@e")
    console.log(formData)

    fetch(salesForceUrl, {
      method: 'POST',
      mode: 'cors',
      body: formData
    })
    .then(x => console.log("!!", x))
    .catch(err => console.error("??", err))
    // alert('sub')
  }

  const updatePage = e => {
    console.log(e.target.value)
    setShowClass(e.target.value)
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
      <Row id="page" class={showClass}>
        <Col
          xs={{ offset: 1, span: 10 }}
          md={{ offset: 2, span: 8 }}
          // xl={{ offset: 4, span: 4 }}
        >
          <label htmlFor="why-contact">I am reaching out because:</label>
          <select name="why-contact" onChange={updatePage}>
            {_.map(selectOptions, (v,k) => {
              return <option value={k} key={k}>{v.text}</option>
            })}
          </select>

          <div className="conditional-content why-built-content">
            "why-built"
          </div>

          <div className="conditional-content how-data-content">
            "how-data"
          </div>

          <div className="conditional-content my-experience-content">
            "my-experience"
          </div>

          <div className="conditional-content stay-informed-content">
            "stay-informed"
          </div>

          <div className="conditional-content share-insights-content">
            "share-insights"
          </div>

          <div className="conditional-content expand-cre-content">
            "expand-cre"
          </div>

          <div className="conditional-content bug-report-content">
            "bug-report"
          </div>

          <div className="conditional-content something-else-content">
            <Form
              id="contact-form"
              name="cre-contact"
              method="POST"
              // data-netlify="true"
              // action="/thank-you"
              onSubmit={onSubmit}
              >
              <h1>Contact us</h1>
              <Form.Group controlId="formGroupName">
                <Form.Label name="name">Name</Form.Label>
                <Form.Control required type="name" placeholder="Enter name" />
              </Form.Group>

              <Form.Group controlId="formGroupEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                />
              </Form.Group>

              <Form.Group controlId="formGroupSubject">
                <Form.Label>Subject</Form.Label>
                <Form.Control required name="subject" type="subject" />
              </Form.Group>

              <Form.Group controlId="formGroupMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  required
                  name="message"
                  type="message"
                  as="textarea"
                  rows="8"
                />
              </Form.Group>

              <Button variant="primary" size="lg" type="submit">
                Submit
              </Button>
            </Form>
          </div>
          
        </Col>
      </Row>
    </Layout>
  )
}

export default Contact
