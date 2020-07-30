import React from "react"

import { Row, Col } from "react-bootstrap"
import Menu from "./menu"

const Hero = ({ children, activePageId }) => {
  return (
    <Row>
      <Col xs={12} className="hero p-0">
        <div className="color-section">
          <div className="branding">
            <span className="site-logo svg-base"></span>
            <span className="site-title">Community Resource Explorer</span>
          </div>

          <div className="content">{children}</div>
        </div>

        <div className="image-section">
          <div className="menu-section">
            <span className="site-logo-mobile svg-base"></span>
            <Menu activePageId={activePageId} />
          </div>

          <img className="hero-image" />
        </div>
      </Col>
    </Row>
  )
}

export default Hero
