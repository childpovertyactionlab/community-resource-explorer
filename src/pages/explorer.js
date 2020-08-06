import React, { useState } from "react"
import Explorer from "cpal-components"

import { Col, Row, Collapse } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import { pages } from "../consts"
import Menu from "../components/menu"

const ExplorerPage = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <Layout
      disableFooter={true}
      disableHeader={true}
      activePageId={pages.EXPLORER.id}
    >
      <SEO title="Explorer" />
      <Menu
        activePageId={pages.EXPLORER.id}
        controlled={true}
        open={menuOpen}
        setMenuOpenHandler={setMenuOpen}
      />
      <Explorer toggleMenu={toggleMenu} />
    </Layout>
  )
}

export default ExplorerPage
