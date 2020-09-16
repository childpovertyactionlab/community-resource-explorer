import React, { useState } from "react"

import { Row, Col } from "react-bootstrap"
import { menuPages } from "../consts"
import { navigate } from "gatsby"
import InlineSvg from "./inlineSvg"

const Menu = ({ activePageId, controlled, setMenuOpenHandler, open }) => {
  let [menuOpen, setMenuOpen] = useState(false)

  if (controlled) {
    // if the component is controlled (for Explorer), use the passed in handler and state. otherwise operate as normal
    menuOpen = open
    setMenuOpen = setMenuOpenHandler
  }

  const toggleMenuOpen = () => setMenuOpen(!menuOpen)
  const closeMenu = () => setMenuOpen(false)

  const getMenuPanel = () => {
    return (
      <Row
        noGutters
        className="menu-panel"
        onWheel={closeMenu}
        onScroll={closeMenu}
      >
        <div className="logo"></div>
        <div
          className="close-menu"
          onClick={closeMenu}
          onKeyDown={closeMenu}
          tabindex="0"
          role="button"
        >
          <InlineSvg type="x" />
          Close
        </div>
        <Col className="dallas-isd" xs={1}>
          {/* <span className="text">DALLAS ISD</span> */}
        </Col>

        <Col className="menu-page-names-col" xs={11} md={6} xl={5}>
          <div className="menu-page-names-container">
            {menuPages
              .filter(p => !p.footerOnly)
              .map(page => {
                const nameClasses =
                  "menu-page-name" + (page.id === activePageId ? " active" : "")
                const navigateToPage = () => {
                  closeMenu()
                  navigate(page.path)
                }
                return (
                  <div
                    onClick={navigateToPage}
                    className={nameClasses}
                    key={page.id}
                    onKeyDown={navigateToPage}
                    tabindex="0"
                    role="button"
                  >
                    {page.name}
                  </div>
                )
              })}
          </div>
        </Col>
        <Col className="equipped" xs={0} md={5} xl={{ offset: 1, span: 4 }}>
          <p className="text">
            All Dallas neighborhoods should have what they need to thrive.
          </p>
        </Col>
        <Col
          className="mask"
          onClick={closeMenu}
          onWheel={closeMenu}
          onScroll={closeMenu}
        ></Col>
      </Row>
    )
  }

  const getMenuButton = () => {
    if (controlled) {
      return
    }
    return (
      <span
        onClick={toggleMenuOpen}
        onKeyDown={toggleMenuOpen}
        className="menu-icon-group"
        role="button"
        tabindex="0"
      >
        <span className="menu-icon svg-base"></span>
        Menu
      </span>
    )
  }

  const classes = "menu-component" + (menuOpen ? " open" : "")

  return (
    <div className={classes}>
      {getMenuButton()}
      {getMenuPanel()}
    </div>
  )
}

export default Menu
