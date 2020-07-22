import React, { useState } from "react"

import { Row, Col } from "react-bootstrap"
import { menuPages } from "../consts"

const Menu = ({ activePageId }) => {

  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenuOpen = () => setMenuOpen(!menuOpen)

  const getMenuPanel = () => {

    return (
      <Row noGutters className="menu-panel">
        <div className="logo"></div>
        <div className="close-menu" onClick={toggleMenuOpen}>Close</div>
        <Col
          className="dallas-isd"
          xs={1}
        >
          <span className="text">DALLAS ISD</span>
        </Col>

        <Col
          className="menu-page-names-col"
          xs={5}
        >
          <div className="menu-page-names-container">
            {menuPages.map(page => {
              const nameClasses = "menu-page-name" + 
                ((page.id === activePageId) ? " active" : "")
              return (
                <div className={nameClasses} key={page.id}>{page.name}</div>
              )
            })}
          </div>
        </Col>
        <Col
          className="equipped"
        >
          <div className="text">
            <div>All Dallas neighborhoods</div>
            <div>should be equipped to thrive.</div>
          </div>
        </Col>
      </Row>
    )
  }

  let classes = "menu"
  if (menuOpen) {
    classes += " open"
  }

  return (
    <div className={classes}>
      <span onClick={toggleMenuOpen}>
        <span className="menu-icon svg-base"></span>
        Menu
      </span>

      {getMenuPanel()}
    </div>
  )
}

export default Menu
