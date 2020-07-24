import React from "react"

import { Row, Col } from "react-bootstrap"
import Menu from "./menu"

const HeroWide = ({ children, activePageId, imgSrc }) => {
  return (
    <Row noGutters>
      <Col xs={12} className="hero-wide">
        
        <Row noGutters>
          <Col className="menu-section" xs={12}>
            <span className="site-logo-mobile svg-base"></span>

            <div className="branding">
              <span className="site-logo svg-base"></span>
              <span className="site-title">Community Resource Explorer</span>
            </div>

            <Menu activePageId={activePageId} />
          </Col>
        </Row>

        <Row noGutters>
          <Col className="color-section" xs={12}>
            <div className="content">{children}</div>

            <div className="image-section">
              <img src={imgSrc}/>
            </div>

          </Col>
        </Row>
        
      </Col>
    </Row>
  )
}

export default HeroWide
