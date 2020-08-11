/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import clsx from "clsx"
import { Container, Row, Col, Form, Button } from "react-bootstrap"

import Header from "./header"
import Navbar from "./navBar"
import StickyHeader from "./stickyHeader"
import SignUpBar from "./signUpBar"
import Footer from "./footer"

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
