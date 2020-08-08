import React, { useState } from "react"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import CustomLink from "../components/customLink"
import { navigate } from "gatsby"
import { pages } from "../consts"

const SignUpBar = ({ }) => {
  const [emailValue, setEmailValue] = useState("")
  const [emailValid, setEmailValid] = useState(true)
  
  const submit = () => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
    const valid = emailRegex.test(emailValue)

    setEmailValid(valid)
    if (!valid) {
      return
    } else {
      navigate(pages.SIGNUP.path, { state: { emailValue } })
    }
  }
  return (
    <Row noGutters>
      <Col xs={12} className="sign-up-bar">
        <div className="content">
          <Form.Label className="email-label">Subscribe to our <span className="no-break">e-mail</span> updates</Form.Label>
          <div className="email-input-wrapper">
            <Form.Control onChange={e => setEmailValue(e.target.value)} className="email-input" type="email" placeholder="Enter your e-mail address" />
          {!emailValid && <p className="feedback">
            Please provide a valid email.
          </p>}
          </div>
          <CustomLink onClick={submit} type="right-arrow-thin">Subscribe</CustomLink>
        </div>
      </Col>
    </Row>
  )
}

export default SignUpBar
