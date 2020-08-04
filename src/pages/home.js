import React from "react"

import { Col, Row } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import { pages } from "../consts"
import goalie from "../images/goalie-blurred.png"
import portrait from "../images/child-portrait-3:4.png"
import CustomCarousel from "../components/customCarousel"

const items = [
  { 
    src: goalie,
    alt: 's1',
    stat1num: 85,
    stat2num: 76,
    stat1text: 'Lorem ipsum dolor sit amet, consectetur adipiscing 1',
    stat2text: 'profoundundity lies within',
  },
  { 
    src: portrait,
    alt: 's2',
    stat1num: 85,
    stat2num: 76,
    stat1text: 'Lorem ipsum dolor sit amet, consectetur adipiscing 2',
    stat2text: 'profoundundity lies within',
  },
  { 
    src: goalie,
    alt: 's3',
    stat1num: 85,
    stat2num: 76,
    stat1text: 'Lorem ipsum dolor sit amet, consectetur adipiscing 3',
    stat2text: 'profoundundity lies within',
  },
  { 
    src: portrait,
    alt: 's4',
    stat1num: 85,
    stat2num: 76,
    stat1text: 'Lorem ipsum dolor sit amet, consectetur adipiscing 4',
    stat2text: 'profoundundity lies within',
  },
  { 
    src: goalie,
    alt: 's5',
    stat1num: 85,
    stat2num: 76,
    stat1text: 'Lorem ipsum dolor sit amet, consectetur adipiscing 5',
    stat2text: 'profoundundity lies within',
  },
]

const home = () => {
  return (
    <Layout id="home-page" activePageId={pages.HOME.id}>
      <SEO title="Home" />

      <Hero activePageId={pages.HOME.id} imgSrc={portrait}>
        <div className="page-title-section">
          <p className="subtitle">
            All Dallas neighborhoods should have what they need to <span className="emphasis">thrive.</span>
          </p>
        </div>
        <p className="caption">The Community Resource Explorer reveals where assets and needs exist so individuals and institutions can have the greatest impact.</p>
      </Hero>

      <Row id="page">
        <Col
          className="stat-section p-0"
          xs={{ offset: 0, span: 12 }}
        >
          <CustomCarousel items={items} />
        </Col>
        <Col
          className=""
          xs={{ offset: 0, span: 12 }}
          md={{ offset: 5, span: 7 }}
        >
          next
        </Col>
        <Col
          className=""
          xs={{ offset: 0, span: 12 }}
          md={{ offset: 5, span: 7 }}
        >
          section
        </Col>
      </Row>
    </Layout>
  )
}

export default home
