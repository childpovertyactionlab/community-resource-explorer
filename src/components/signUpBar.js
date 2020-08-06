import React, { useState } from "react"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import CustomLink from "../components/customLink"

const SignUpBar = ({ }) => {
  const [emailValue, setEmailValue] = useState("")
  const [emailValid, setEmailValid] = useState(true)
  
  const submit = () => {
    console.log(emailValue)
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
    const valid = emailRegex.test(emailValue)
    console.log(valid)
    setEmailValid(valid)
    if (!valid) {
      return
    } else {
      console.log("GO!")
    }
  }
  return (
    <Row noGutters>
      <Col xs={12} className="sign-up-bar">
        <div className="contents">
          <Form.Label className="email-label">Subscribe to our e-mail updates</Form.Label>
          <div className="email-input-wrapper">
            <Form.Control onChange={e => setEmailValue(e.target.value)} className="email-input" type="email" placeholder="Enter your e-mail address" />
          {!emailValid && <p className="feedback">
            Please provide a valid state.
          </p>}
          </div>
          <CustomLink onClick={submit} type="right-arrow-thin">Subscribe</CustomLink>
        </div>
      </Col>
    </Row>
  )
}

export default SignUpBar
