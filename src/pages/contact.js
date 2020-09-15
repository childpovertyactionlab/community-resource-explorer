import React, { useState } from "react"

import { Col, Row, Form, Button } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { pages, salesForceUrl, faqSectionMap, faqQuestionMap } from "../consts"

import _ from "lodash"
import { QuestionGroup } from "./faq"
import { SignUpForm } from "./signup"


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
const conditionalOptions = {
  "none": {
    text: "",
  },
  "why-built": {
    text: "I have questions about why (and by whom) the Community Resource Explorer was built, who funds it, etc.",
    questions: faqSectionMap.backgroundSection.questions
  },
  "how-data": {
    text: "I have questions about the data: how it was calculated, where it came from, which schools are included, etc.",
    questions: faqSectionMap.aboutSection.questions
  },
  "my-experience": {
    text: "The data does not match my personal experience",
    questions: [faqQuestionMap.myNeighborhood]
  },
  "stay-informed": {
    text: "I’d like to stay informed about the Resource Explorer",
    questions: [faqQuestionMap.stayInformed]
  },
  "share-insights": {
    text: "I’d like to share insights about my neighborhood to help improve the Resource Explorer",
    questions: [faqQuestionMap.neighborhoodInsight]
  },
  "expand-cre": {
    text: "I am interested in applying the Resource Explorer to schools outside of Dallas ISD. Whom should I talk to?",
    questions: [faqQuestionMap.expandCre]
  },
  "contact-form-hyper": {
    text: "I need help with using the website or something’s not working",
    formName: "troubleshooting"
  },
  "contact-form-cpal": {
    text: "Another reason",
    formName: "cre-contact"
  },
}


const Contact = ({ location }) => {

  let [conditionalOption, setConditionalOption] = useState("none")
  let [expandedMap, setExpandedMap] = useState({})
  
  const onSubmit = e => {
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

    // const formData = new FormData()
    // formData.append("oid", "00D1U00000110AJ")
    // formData.append("00D1U00000110AJ", "")
    // formData.append("first_name", "f")
    // formData.append("last_name", "l")
    // formData.append("email", "o@e")

    // fetch(salesForceUrl, {
    //   method: 'POST',
    //   mode: 'cors',
    //   body: formData
    // })
    // alert('sub')
    // e.preventDefault()
    if (document.getElementById('newsletter-toggle').value !== "on") {
      return
    } 
    
    ['first_name', 'last_name', 'email'].forEach(fieldName => {
      const field = document.querySelector(`#contact-form .${fieldName}`)
      const newsletterField = document.querySelector(`#newsletter-form .${fieldName}`)
      newsletterField.value = field.value
    })

    document.querySelector('#newsletter-form form').submit()
  }

  const updatePage = e => {
    setConditionalOption(e.target.value)
  }

  const toggleExpansion = (uid, expand) => {
    setExpandedMap({
      ...expandedMap,
      [uid]: expand,
    })
  }

  const { keywords, image, description } = pages.CONTACT.meta
  const { name } = pages.CONTACT
  
  const getContactForm = conditionalOption => {
    const { formName } = conditionalOptions[conditionalOption]
    return (
        <>
        <Form
          id="contact-form"
          name={formName}
          method="POST"
          data-netlify="true"
          // action="/thank-you"
          onSubmit={onSubmit}
        >
          <h1>Contact us</h1>
          <Form.Group controlId="formGroupFirstName">
            <Form.Label className="required" name="first_name">First Name</Form.Label>
            <Form.Control required className="first_name" type="name" placeholder="Enter first name" />
          </Form.Group>

          <Form.Group controlId="formGroupLastName">
            <Form.Label className="required" name="last_name">Last Name</Form.Label>
            <Form.Control required className="last_name" type="name" placeholder="Enter last name" />
          </Form.Group>

          <Form.Group controlId="formGroupEmail">
            <Form.Label className="required">Email</Form.Label>
            <Form.Control
              required
              className="email"
              name="email"
              type="email"
              placeholder="Enter your email address"
            />
          </Form.Group>

          <Form.Group controlId="formGroupSubject">
            <Form.Label className="required">Subject</Form.Label>
            <Form.Control required name="subject" type="subject" />
          </Form.Group>

          <Form.Group controlId="formGroupMessage">
            <Form.Label className="required">Message</Form.Label>
            <Form.Control
              required
              name="message"
              type="message"
              as="textarea"
              rows="8"
            />
          </Form.Group>

          <Form.Group controlId="formGroupNewsletter">
            <Form.Label>Subscribe to our email updates</Form.Label>
            <input id="newsletter-toggle" type="checkbox" />
          </Form.Group>

          <Button variant="primary" size="lg" type="submit">
            Submit
          </Button>
        </Form>

        <div id="newsletter-form">
          <SignUpForm withoutSubmit={true} />
        </div>
      </>
    )
  }

  const getFaqSection = conditionalOption => {
    const { questions } = conditionalOptions[conditionalOption]
    if (!questions) {
      return
    }

    // single questions should default to expanded
    const invertExpansionMap = questions.length < 2

    return (
      <QuestionGroup
        questions={questions}
        toggleExpansion={toggleExpansion}
        expandedMap={expandedMap}
        invertExpansionMap={invertExpansionMap}
        groupId={conditionalOption}
      />)
  }

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
          <label htmlFor="why-contact">I am reaching out because:</label>
          <Form.Control as="select" custom name="why-contact" onChange={updatePage}>
            {_.map(conditionalOptions, (v,k) => {
              return <option value={k} key={k}>{v.text}</option>
            })}
          </Form.Control>

          <div className="conditional-content why-built-content">
            {conditionalOption.startsWith("contact-form") ?
              getContactForm(conditionalOption) :
              getFaqSection(conditionalOption)}
          </div>
          
        </Col>
      </Row>
    </Layout>
  )
}

export default Contact
