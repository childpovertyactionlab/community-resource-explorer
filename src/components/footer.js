import React, { useState } from "react"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import CustomLink from "../components/customLink"
import { navigate } from "gatsby"
import { menuPages } from "../consts"
import twitterIcon from "../images/twitter.svg"

const Footer = () => {
  
  return (
    <Row noGutters className="footer">
      <Col xs={{ span: 10, offset: 1 }}>
        <div className="content">
          
          <div className="branding-row">
            <div className="logo-wrapper">
              <span className="cre-logo"></span>
              <p className="motto">All Dallas neighborhoods should have what they need to thrive.</p>
            </div>
            <span className="cpal-logo"></span>
          </div>

          <div className="pages-row">
            {menuPages.map(p => {
              return <span onClick={() => navigate(p.path)}>{p.name}</span>
            })}
            <img src={twitterIcon} />
          </div>

          <div className="footnotes-row">
            <span>Map made possible by Mapbox</span>
            <span>Site by Hyperobjekt</span>
          </div>
        </div>
      </Col>
    </Row>
  )
}

export default Footer
