import React, { useState } from "react"
// import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import { Accordion, Button, Card, Col, Row, Collapse } from "react-bootstrap"
import SEO from "../components/seo"
// import { Link } from "react-scroll"
import Hero from "../components/hero"
import CustomLink from "../components/link"

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
    <Layout pageInfo={{ pageName: "blog" }} id="blog">
      <SEO title="Blog" />

      <Hero>
        <div className="headline">
          How we’re informing policy and community understanding in Dallas
        </div>
        <CustomLink underlined={false}>Read post</CustomLink>
      </Hero>

      <Row noGutters id="page">
        <Col xs={{ span: 11, offset: 1 }} className="recent">
          <span className="custom-underline">Recent blog</span> posts
        </Col>

        {data.allFile.edges.map(b => {
          // console.log(b)
          const src = b.node.publicURL
          return (
            <Row noGutters className="post-section">
              <Col xs={{ span: 8, offset: 1 }}>
                <Row>
                  <Col xs={6} className="post-image">
                    <figure>
                      <img src={src} />
                    </figure>
                  </Col>
                  <Col xs={6} className="post-details">
                    <div className="post-title">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </div>
                    <div className="post-contents">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Urna vitae nulla pretium, cras tellus, at morbi tristique.
                      Ac ipsum, egestas ligula duis ipsum pellentesque{" "}
                    </div>
                    <CustomLink>Read post</CustomLink>
                  </Col>
                </Row>
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
