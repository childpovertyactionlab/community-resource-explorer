import React, { useState } from "react"

import { Row, Col } from "react-bootstrap"
import { menuPages } from "../consts"
import { navigate } from "gatsby"
import InlineSvg from "./inlineSvg"
import { a11yClick } from "../utils/a11yClick"

const Menu = ({ activePageId, controlled, setMenuOpenHandler, open, inactive }) => {
  let [menuOpen, setMenuOpen] = useState(false)

  if (controlled) {
    // if the component is controlled (for Explorer), use the passed in handler and state. otherwise operate as normal
    menuOpen = open
    setMenuOpen = setMenuOpenHandler
  }

  const toggleMenuOpen = e => {
    if (a11yClick(e)) {
      setMenuOpen(!menuOpen)
    }
  }
  const closeMenu = () => setMenuOpen(false)
  const checkAndCloseMenu = e => {
    if (a11yClick(e)) {
      setMenuOpen(false)
    }
  }

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
          onClick={checkAndCloseMenu}
          onKeyDown={checkAndCloseMenu}
          tabIndex={(menuOpen && !inactive) ? 0 : -1}
          role="button"
          aria-label="close menu"
        >
          <InlineSvg type="x" />
          Close
        </div>
        <Col className="dallas-isd" xs={1}>
          {/* <span className="text">DALLAS ISD</span> */}
        </Col>

        <Col className="menu-page-names-col" xs={11} md={6} xl={5}>
          <nav className="menu-page-names-container">
            {menuPages
              .filter(p => !p.footerOnly)
              .map(page => {
                const nameClasses =
                  "menu-page-name" + (page.id === activePageId ? " active" : "")
                const navigateToPage = e => {
                  if (a11yClick(e)) { 
                    closeMenu()
                    navigate(page.path)
                  }
                }
                return (
                  <div
                    onClick={navigateToPage}
                    className={nameClasses}
                    key={page.id}
                    onKeyDown={navigateToPage}
                    // tabIndex="0"
                    tabIndex={menuOpen ? 0 : -1}
                    role="button"
                  >
                    {page.name}
                  </div>
                )
              })}
          </nav>
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
        aria-label="open menu"
        aria-expanded={menuOpen}
        tabIndex={inactive ? -1 : 0}
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
