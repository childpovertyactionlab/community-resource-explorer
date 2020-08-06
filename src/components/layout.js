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

const Layout = ({ children, pageInfo, activePageId, id, ...props }) => (
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
          <StickyHeader activePageId={activePageId} />
          <Row noGutters>
            <Col className="p-0">
              {/* <Container className="mt-5"> */}
              <main id={id} className="main-contents">{children}</main>
              {/* </Container> */}
            </Col>
          </Row>
        </Container>

        <Container fluid className="px-0">
          <SignUpBar />
        </Container>
      </>
    )}
  />
)

export default Layout
