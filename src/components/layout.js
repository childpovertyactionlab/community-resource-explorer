/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"

import { Container, Row, Col } from "react-bootstrap"

import Header from "./header"
import Navbar from "./navBar"
import StickyHeader from "./stickyHeader"

const Layout = ({ children, pageInfo, activePageId, id }) => (
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
        <Container fluid className="main">
          {/* TODOxx: remove */}
          {!id && (
            <Row noGutters className="justify-content-center">
              <Col>
                <Header siteTitle={data.site.siteMetadata.title} />
              </Col>
            </Row>
          )}
          {/* TODOxx: remove */}
          {!id && <Navbar pageInfo={pageInfo} />}
          <StickyHeader activePageId={activePageId} />
          <Row noGutters>
            <Col className="p-0">
              {/* <Container className="mt-5"> */}
              <main id={id}>{children}</main>
              {/* </Container> */}
            </Col>
          </Row>
        </Container>

        {/* <Container fluid className="px-0">
          <Row noGutters>
            <Col className="footer-col">
              <footer>
                <span>
                  © {new Date().getFullYear()}, Built with
                  {` `}
                  <a href="https://www.gatsbyjs.org">Gatsby</a>
                </span>
              </footer>
            </Col>
          </Row>
        </Container> */}
      </>
    )}
  />
)

export default Layout
