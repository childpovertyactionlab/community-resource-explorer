import React, { useState } from "react"
// import { Link } from "gatsby"
import { useStaticQuery, graphql, navigate } from "gatsby"

import Layout from "../../components/layout"
import { Accordion, Button, Card, Col, Row, Collapse } from "react-bootstrap"
import SEO from "../../components/seo"
// import { Link } from "react-scroll"
import Hero from "../../components/hero"
import CustomLink from "../../components/customLink"
import { pages } from "../../consts"

import soccer from "../../images/soccer.png"

// TODOcms activate when we have more posts than can be shown at once
const SHOW_MORE_BUTTON = false

const InAction = ({ location }) => {
  const [expandedMap, setState] = useState({})

  const toggleExpansion = (uid, expand) => {
    setState({
      ...expandedMap,
      [uid]: expand,
    })
  }

  const [hidden, setHidden] = useState(false)
  const toggleHidden = () => setHidden(!hidden)

  // TODOcms update
  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: {
          extension: { eq: "jpg" }
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

  const { keywords, image, description } = pages.ACTION.meta
  const { name } = pages.ACTION

  return (
    <Layout id="blog" activePageId={pages.ACTION.id}>
      <SEO
        url={location.href}
        title={name}
        keywords={keywords}
        image={image}
        description={description}
      />

      {/* TODO: pages.BLOG.id */}
      <Hero activePageId={pages.ACTION.id} imgSrc={soccer}>
      <div className="title">The Explorer in Action</div>
        <div className="headline">
          How we’re informing policy and community understanding in Dallas
        </div>
        <CustomLink
          linkTo={pages.ISD.path}
          underlined={false}
        >Read post</CustomLink>
      </Hero>

      <Row id="page" noGutters>
        <Col xs={{ span: 11, offset: 1 }} className="recent p-0">
          <span className="custom-underline">More recent</span> posts
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
                More than ever, Dallas students need reliable broadband. Here's how the CRE is helping.
                </div>

                <div className="post-contents">
                In 2020, access to the internet is a must-have utility. But despite the internet's apparent ubiquity, 42% of Dallas households lack fixed internet access, according to Census data.
                {" "}
                </div>

                <CustomLink linkTo={pages.OPERATION.path}>Read post</CustomLink>
              </Col>
            </Row>
          )
        })}

        {SHOW_MORE_BUTTON && <Col xs={12} className="load-more text-center">
          <Button variant="outline-dark">Load more posts</Button>
        </Col>}
      </Row>
    </Layout>
  )
}

export default InAction
