import React from "react"

import { Row, Col } from "react-bootstrap"
import Menu from "./menu"

const HeroWide = ({ children, activePageId, imgSrc }) => {
  return (
    <Row>
      <Col xs={12} className="hero-wide">
        <Row>
          <Col className="menu-section" xs={12}>
            <span className="branding-mobile svg-base"></span>

            <div className="branding-md-up">
              <span className="site-logo svg-base"></span>
              <span className="site-title">Community Resource Explorer</span>
            </div>

            <Menu activePageId={activePageId} />
          </Col>
        </Row>

        <Row>
          <Col className="color-section" xs={12}>
            <Row>
              <Col className="dallas-isd" xs={2} md={1}>
                <span className="text">DALLAS ISD</span>
              </Col>
              <Col>
                <div className="content">{children}</div>
              </Col>
            </Row>

            <Row>
              <Col xs={12} className="p-0">
                <div className="image-section">
                  <img src={imgSrc} />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default HeroWide
