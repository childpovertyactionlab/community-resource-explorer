import React from "react"

import { Row, Col } from "react-bootstrap"
import Menu from "./menu"

const SchoolHero = ({ children, activePageId, wide = false }) => {
  const getHero = () => {
    if (wide) {
      return (
        <Col xs={12} className="school-hero hero-wide m-0 p-0">
          <Row>
            <Col className="menu-section p-0" xs={12}>
              <a className="logo-link" aria-label="Go home" href="/">
                <span className="branding-mobile svg-base"></span>
              </a>

              <div className="branding-md-up">
                <a className="logo-link" aria-label="Go home" href="/">
                  <span className="site-logo svg-base"></span>
                  <span className="site-title">
                    Community Resource Explorer
                  </span>
                </a>
              </div>

              <Menu activePageId={activePageId} />
            </Col>
            {children}
          </Row>
        </Col>
      )
    }
    return (
      <Col xs={12} className="hero-square p-0">
        <div className="color-section">
          <div className="branding">
            <a className="logo-link" aria-label="Go home" href="/">
              <span className="site-logo svg-base"></span>
              <span className="site-title">Community Resource Explorer</span>
            </a>
          </div>

          <div className="content">{children}</div>
        </div>

        <div className="image-section">
          <div className="menu-section">
            <span className="site-logo-mobile svg-base"></span>
            <Menu activePageId={activePageId} />
          </div>
        </div>
      </Col>
    )
  }

  return <Row id="hero">{getHero()}</Row>
}

export default SchoolHero
