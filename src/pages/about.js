import React from "react"

import { Col, Row, Collapse } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import { pages } from "../consts"
import CustomLink from "../components/customLink"
import number1 from "../images/number-1.svg"
import number2 from "../images/number-2.svg"
import number3 from "../images/number-3.svg"
import number4 from "../images/number-4.svg"
import number5 from "../images/number-5.svg"

// TODO - add svgs for 5+ if more points desired
const numberedPoints = [
  { n: number1, p: 'Generating data insights to break big problems into small, actionable ones;'}, 
  { n: number2, p: 'Facilitating cross-sector, collective action based on data insights;'}, 
  { n: number3, p: 'Inspiring and mobilizing advocates;'}, 
  { n: number4, p: 'Inspiring and mobilizing advocates;'}, 
  { n: number5, p: 'Infusing innovation into the social sector.'}, 
]

const about = () => {
  return (
    <Layout pageInfo={{ pageName: "about" }} id="about-page">
      <SEO title="about" />

      <Hero activePageId={pages.ABOUT.id}>
        <div className="page-title-section">
          <div className="title">Our Mission</div>
          <div className="subtitle">
            The Child Poverty Action Lab exists to reduce child poverty in Dallas by half within a generation.
          </div>
        </div>
      </Hero>

      <Row noGutters id="#page" className=""><Col>
        <Col
          className="cpal-defined"
          xs={{ offset: 1, span: 10 }}
          md={{ offset: 1, span: 7 }}
          xl={{ offset: 1, span: 5 }}
        >
          <p className="title">Who we are</p>
          <p className="text">CPAL is a nonprofit organization that seeks systems-level change for the good of Dallas kids and their families. We do this by:</p>
        </Col>
        <Row
          className="numbered-points"
          // xs={{ offset: 0, span: 12 }}
          // md={{ offset: 0, span: 12 }}
          // xl={{ offset: 0, span: 12 }}
        >
          {numberedPoints.map((numPoint, idx) => {
            
            return (
              <Col
                key={idx}
                className={`numbered-point n-${idx+1}`}
                xs={{ offset: 1, span: 8 }}
                md={{ offset: 0, span: 4 }}
                xl={{ offset: 0, span: 3 }}
              >
                <img className="number" src={numPoint.n} />
                <p className="point">{numPoint.p}</p>
              </Col>
            )
          })}
        </Row>
        <Col
          className="where-we-work"
          xs={{ offset: 1, span: 10 }}
          md={{ offset: 1, span: 7 }}
          xl={{ offset: 1, span: 5 }}
        >
          <p className="text">We primarily work across six areas: service delivery, women’s health, housing, childcare, incarceration, and trauma prevention and care.</p>
        </Col>
        <Col
          className="explorer-why"
          xs={{ offset: 0, span: 12 }}
          md={{ offset: 0, span: 10 }}
          xl={{ offset: 0, span: 7 }}
        >
          explorer-why
          <div className="title">Why we built the explorer</div>
          <p className="text">
            CPAL built the Community Resource Explorer to ensure that all Dallas neighborhoods are places of great opportunity for children and their families. Dallas neighborhoods are unique, each with their own stories to tell, people to celebrate, and places to love. Our neighborhoods are a tremendous asset to our city. However, some neighborhoods are well-appointed with resources, like grocery stores and doctor’s offices and park space, but many others are not. 
            <br/>
            The CRE is a diagnostic tool that illustrates how resources are allocated across five categories and 30+ indicators in neighborhoods around Dallas ISD schools. The intent of the tool is to help frontline institutions act on relevant, specific data so that investment decisions and resource allocation can have the greatest impact. Our hope is that the CRE can help right the wrongs of the past by bringing new programs and services, economic development opportunities, and public amenities to communities that have been under-resourced for far too long.
            <CustomLink>Go to the explorer</CustomLink>
          </p>
        </Col>
      </Col></Row>
    </Layout>
  )
}

export default about
