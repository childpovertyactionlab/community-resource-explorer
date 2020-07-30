import React, { useState } from "react"

import { Row, Col } from "react-bootstrap"
import { menuPages } from "../consts"
import { Link, navigate } from "gatsby"
import InlineSvg from "./inlineSvg"

const Menu = ({ activePageId }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenuOpen = () => setMenuOpen(!menuOpen)

  const getMenuPanel = () => {
    return (
      <Row noGutters className="menu-panel">
        <div className="logo"></div>
        <div className="close-menu" onClick={toggleMenuOpen}>
          <InlineSvg type="x" />
          Close
        </div>
        <Col className="dallas-isd" xs={1}>
          <span className="text">DALLAS ISD</span>
        </Col>

        <Col className="menu-page-names-col" xs={5}>
          <div className="menu-page-names-container">
            {menuPages.map(page => {
              const nameClasses =
                "menu-page-name" + (page.id === activePageId ? " active" : "")
              return (
                <div
                  onClick={() => navigate(page.path)}
                  className={nameClasses}
                  key={page.id}
                >
                  {page.name}
                </div>
              )
            })}
          </div>
        </Col>
        <Col className="equipped">
          <div className="text">
            <div>All Dallas neighborhoods<br></br>should have what they need<br></br>to thrive.</div>
          </div>
        </Col>
      </Row>
    )
  }

  const classes = "menu-component" + (menuOpen ? " open" : "")

  return (
    <div className={classes}>
      <span onClick={toggleMenuOpen} className="menu-icon-group">
        <span className="menu-icon svg-base"></span>
        Menu
      </span>

      {getMenuPanel()}
    </div>
  )
}

export default Menu
