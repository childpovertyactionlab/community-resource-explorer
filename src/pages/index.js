import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { pages } from "../consts"
import Menu from "../components/menu"

// Client-side only import for cpal-components (contains echarts which needs DOM)
const ClientOnlyExplorer = React.lazy(() => import("cpal-components"))

const IndexPage = ({ location }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

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
      />
      {isClient && (
        <React.Suspense fallback={<div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading Explorer...</div>}>
          <ClientOnlyExplorer toggleMenu={toggleMenu} />
        </React.Suspense>
      )}
    </Layout>
  )
}

export default IndexPage
