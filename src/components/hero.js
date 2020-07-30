import React from "react"

import { Row, Col } from "react-bootstrap"
import Menu from "./menu"

const Hero = ({ children, activePageId, imgSrc, wide=false }) => {
  
  const getHero = () => {
    if (wide) {
      return (
        <Col xs={12} className="hero-wide">
          <Row>
            <Col className="menu-section p-0" xs={12}>
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
                <Col className="p-0">
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
      )
    }
    return (
      <Col xs={12} className="hero-square p-0">
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
    )
  }

  return (
    <Row>
      {getHero()}
    </Row>
  )
}

export default Hero
