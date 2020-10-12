/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import clsx from "clsx"
import { Container, Row, Col } from "react-bootstrap"
import favicon from "../images/menu-logo.svg"
import Helmet from "react-helmet"
import StickyHeader from "./stickyHeader"
import SignUpBar from "./signUpBar"
import Footer from "./footer"
import MdxQuote from "./MdxQuote"

const Layout = ({
  children,
  pageInfo,
  activePageId,
  id,
  disableHeader,
  disableFooter,
  ...props
}) => {
  // console.log("layout loaded", props.location)
  const shortcodes = { MdxQuote }
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <MDXProvider components={shortcodes}>{children}</MDXProvider>
          <Helmet>
            <link rel="icon" href={favicon} />
            <script
              crossorigin="anonymous"
              src="https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver%2CIntersectionObserverEntry"
            ></script>
          </Helmet>
          <Container fluid className={clsx("main", props.className)}>
            {!disableHeader && <StickyHeader activePageId={activePageId} />}
            <Row noGutters>
              <Col className="p-0">
                {/* <Container className="mt-5"> */}
                <main id={id} className="main-contents">
                  {children}
                </main>
                {/* </Container> */}
              </Col>
            </Row>
          </Container>

          <Container fluid className="px-0">
            {!disableFooter && <SignUpBar />}
            {!disableFooter && <Footer />}
          </Container>
        </>
      )}
    />
  )
}

export default Layout
