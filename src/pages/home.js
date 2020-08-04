import React from "react"

import { Col, Row } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import { pages } from "../consts"
import goalie from "../images/goalie-blurred.png"
import escapes from "../images/fire-escapes.png"
import kids from "../images/kids-playing.png"
import portrait from "../images/child-portrait-3:4.png"
import CustomCarousel from "../components/customCarousel"

const caroItems = [
  { 
    src: goalie,
    alt: 's1',
    stat1num: 85,
    stat2num: 76,
    stat1text: 'Lorem ipsum dolor sit amet, consectetur adipiscing 1',
    stat2text: 'profoundundity lies within',
  },
  { 
    src: goalie,
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
    src: goalie,
    alt: 's4',
    stat1num: 85,
    stat2num: 76,
    stat1text: 'Lorem ipsum dolor sit amet, consectetur adipiscing 4',
    stat2text: 'profoundundity lies within',
  },
  { 
    src: portrait,
    alt: 's5',
    stat1num: 85,
    stat2num: 76,
    stat1text: 'Lorem ipsum dolor sit amet, consectetur adipiscing 5',
    stat2text: 'profoundundity lies within',
  },
]

const q1 = {
  text: `Affordable housing is one of [our] greatest needs. Other economic hardships stem from that. If my housing isn't affordable, everything else is less affordable.`,
  attribution: "Pleasant Grove assistant principal",
}
const q2 = {
  text: `There is no safe place for students just to be young people in the community.`,
  attribution: "Dallas ISD Trustee",
}
const q3 = {
  text: `Not having enough banks is an issue. In some parts of the north, there's a bank on every corner. The reason why many businesses were able to get a PPP [loan] was because they had a relationship with a bank . . . You need physical bank locations in the neighborhood to serve community needs.`,
  attribution: "Pleasant Grove Resident",
}

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
          className="p-0"
          xs={{ offset: 2, span: 8 }}
          // md={{ offset: 1, span: 5 }}
          md={{ offset: 1, span: 3 }}
        >
          <img src={escapes} />
        </Col>

        <Col
          xs={{ offset: 1, span: 10 }}
          // md={{ offset: 1, span: 4 }}
          md={{ offset: 1, span: 6 }}
          className="quote light no-bg p-0"
        >
          <div className="text">
            “{q1.text}”
          </div>
          <div className="attribution">
            {q1.attribution}
          </div>
        </Col>

        <Col
          className="stat-section p-0"
          xs={{ offset: 0, span: 12 }}
        >
          <CustomCarousel items={caroItems} />
        </Col>


        <Col
          className="p-0"
          xs={{ offset: 2, span: 8 }}
          // md={{ offset: 1, span: 5 }}
          md={{ offset: 1, span: 3 }}
        >
          <img src={kids} />
        </Col>

        <Col
          xs={{ offset: 1, span: 10 }}
          // md={{ offset: 1, span: 4 }}
          md={{ offset: 1, span: 6 }}
          className="quote light no-bg p-0"
        >
          <div className="text">
            “{q1.text}”
          </div>
          <div className="attribution">
            {q1.attribution}
          </div>
        </Col>

      </Row>
    </Layout>
  )
}

export default home
