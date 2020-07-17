import React from "react"

import { Row, Col } from "react-bootstrap"

const Hero = ({ children }) => {
  return (
    <Row>
      <Col xs={12} className="hero">
        <div className="color-section">
          <div className="branding">
            <span className="site-logo svg-base"></span>
            <span className="site-title">Community Resource Explorer</span>
          </div>

          <div className="content">{children}</div>
        </div>

        <div className="image-section">
          <div className="menu-section">
            <span className="menu">
              <span className="menu-icon svg-base"></span>
              Menu
            </span>
          </div>

          <img />
        </div>
      </Col>
    </Row>
  )
}

export default Hero
