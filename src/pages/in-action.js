import React, { useState } from "react"
// import { Link } from "gatsby"
import { useStaticQuery, graphql, navigateTo } from "gatsby"

import Layout from "../components/layout"
import { Accordion, Button, Card, Col, Row, Collapse } from "react-bootstrap"
import SEO from "../components/seo"
// import { Link } from "react-scroll"
import Hero from "../components/hero"
import CustomLink from "../components/customLink"
import { pages } from "../consts"

import soccer from "../images/soccer.png"

const Faqs = () => {
  const [expandedMap, setState] = useState({})

  const toggleExpansion = (uid, expand) => {
    setState({
      ...expandedMap,
      [uid]: expand,
    })
  }

  const [hidden, setHidden] = useState(false)
  const toggleHidden = () => setHidden(!hidden)

  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: {
          extension: { eq: "png" }
          relativeDirectory: { eq: "blogEntries" }
        }
      ) {
        edges {
          node {
            id
            publicURL
            name
          }
        }
      }
    }
  `)

  return (
    <Layout id="blog" activePageId={pages.ACTION.id}>
      <SEO title="Explorer in Action" />

      {/* TODO: pages.BLOG.id */}
      <Hero activePageId={pages.ACTION.id} imgSrc={soccer}>
        <div className="headline">
          How we’re informing policy and community understanding in Dallas
        </div>
        <CustomLink
          onClick={() => navigateTo(pages.ISD.path)}
          underlined={false}
        >Read post</CustomLink>
      </Hero>

      <Row id="page" noGutters>
        <Col xs={{ span: 11, offset: 1 }} className="recent p-0">
          <span className="custom-underline">Recent blog</span> posts
        </Col>

        {data.allFile.edges.map(b => {
          // console.log(b)
          const src = b.node.publicURL
          return (
            <Row className="post-section">
              <Col
                className="post-image p-0"
                xs={{ span: 10, offset: 1 }}
                md={{ span: 4, offset: 1 }}
              >
                <figure>
                  <img src={src} />
                </figure>
              </Col>

              <Col
                className="post-details p-0"
                xs={{ span: 10, offset: 1 }}
                md={{ span: 6, offset: 0 }}
                xl={{ span: 4, offset: 0 }}
              >
                <div className="post-title">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>

                <div className="post-contents">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna
                  vitae nulla pretium, cras tellus, at morbi tristique. Ac
                  ipsum, egestas ligula duis ipsum pellentesque{" "}
                </div>

                <CustomLink>Read post</CustomLink>
              </Col>
            </Row>
          )
        })}

        <Col xs={12} className="load-more text-center">
          <Button variant="outline-dark">Load more posts</Button>
        </Col>
      </Row>
    </Layout>
  )
}

export default Faqs
