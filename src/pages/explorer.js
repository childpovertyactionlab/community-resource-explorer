import React, { useState } from "react"
import Explorer from "cpal-components"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"

import { Col, Row, Collapse } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import { pages } from "../consts"
import Menu from "../components/menu"

const ExplorerPage = ({ location }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  const { keywords, image, description } = pages.EXPLORER.meta
  const { name } = pages.EXPLORER

  return (
    <Layout
      disableFooter={true}
      disableHeader={true}
      activePageId={pages.EXPLORER.id}
      className="p-0"
    >
      <SEO
        url={location.href}
        title={name}
        keywords={keywords}
        image={image}
        description={description}
      />
      <Menu
        activePageId={pages.EXPLORER.id}
        controlled={true}
        open={menuOpen}
        setMenuOpenHandler={setMenuOpen}
        gaTrackingHandler={trackCustomEvent}
      />
      <Explorer toggleMenu={toggleMenu} />
    </Layout>
  )
}

export default ExplorerPage
