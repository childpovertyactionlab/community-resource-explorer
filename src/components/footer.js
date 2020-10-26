import React from "react"
import { Col, Row } from "react-bootstrap"
import { navigate } from "gatsby"
import { menuPages } from "../consts"
import { a11yClick } from "../utils/a11yClick"

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
              const handleClick = e => {
                if (a11yClick(e)) {
                  navigate(p.path)
                }
              }
              return (
                <span
                  key={p.id}
                  onClick={handleClick}
                  onKeyDown={handleClick}
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
            <span>
              <a
                href="https://hyperobjekt.com"
                target="_blank"
                rel="noreferrer"
              >
                Site by Hyperobjekt
              </a>
            </span>
          </div>
        </div>
      </Col>
    </Row>
  )
}

export default Footer
