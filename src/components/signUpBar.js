import React, { useState } from "react"
import { Row, Col, Form } from "react-bootstrap"
import CustomLink from "../components/customLink"
import { navigate } from "gatsby"
import { pages } from "../consts"
import comerica from "../images/comericabank-logo.svg"

const SignUpBar = ({ ...props }) => {
  const [emailValue, setEmailValue] = useState("")
  const [emailValid, setEmailValid] = useState(true)

  const submit = () => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i
    // don't test email for now (tests in SignUp)
    // const valid = emailRegex.test(emailValue)
    const valid = true

    setEmailValid(valid)
    if (!valid) {
      return
    } else {
      navigate(pages.SIGNUP.path, { state: { emailValue } })
    }
  }
  return (
    <Row noGutters>
      <Col xs={12} id="sign-up-bar" className="sign-up-bar">
        <div className="content">
          <div className="subscribe-wrapper">
            <Form.Label className="email-label">
              Subscribe to our <span className="no-break">e-mail</span> updates
            </Form.Label>

            <div className="email-inputs-row">
              <div className="email-input-wrapper">
                <Form.Control
                  type="email"
                  onChange={e => setEmailValue(e.target.value)}
                  className="email-input"
                  placeholder="Enter your e-mail address"
                  aria-label="subscribe to email updates"
                />
                {!emailValid && (
                  <p aria-hidden={emailValid} className="feedback">Please provide a valid email.</p>
                )}
              </div>

              <CustomLink onClick={submit} type="right-arrow-thin">
                Subscribe
              </CustomLink>
            </div>
          </div>

          <div className="funder-wrapper">
            <a
              href="https://www.comerica.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img alt="comerica bank logo" src={comerica} />
            </a>
            <p className="text">
              The Community Resource Explorer is powered by Comerica Bank.
            </p>
          </div>
        </div>
      </Col>
    </Row>
  )
}

export default SignUpBar
