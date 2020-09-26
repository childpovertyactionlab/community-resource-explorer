import React from "react"
import { Col, Row } from "react-bootstrap"
import { navigate } from "gatsby"
import { Link } from "gatsby"
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
              <p className="motto">
                All Dallas neighborhoods should have what they need to thrive.
              </p>
            </div>
            <span className="cpal-logo"></span>
          </div>

          <div className="pages-row">
            {menuPages.map(p => {
              return (
                <span
                  key={p.id}
                  onClick={() => navigate(p.path)}
                  onKeyDown={() => navigate(p.path)}
                  role="button"
                  tabIndex="0"
                >
                  {p.name}
                </span>
              )
            })}
            {/** <img alt="Share on Twitter" src={twitterIcon} /> */}
          </div>

          <div className="footnotes-row">
            <span>Map made possible by Mapbox</span>
            <span><a href="https://hyperobjekt.com" target="_blank" rel="noreferrer">Site by Hyperobjekt</a></span>
          </div>
        </div>
      </Col>
    </Row>
  )
}

export default Footer
