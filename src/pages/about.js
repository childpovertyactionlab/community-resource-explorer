import React from "react"

import { Col, Row } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import { pages } from "../consts"
import CustomLink from "../components/customLink"
import comerica from "../images/comericabank-logo.svg"
import jumpImg from "../images/about-jump.jpg"
import soccerImg from "../images/about-soccer.jpg"
import number1 from "../images/number-1.svg"
import number2 from "../images/number-2.svg"
import number3 from "../images/number-3.svg"
import number4 from "../images/number-4.svg"
import number5 from "../images/number-5.svg"

const numberedPoints = [
  {
    n: number1,
    p:
      "Generating data insights to break big problems into small, actionable ones;",
  },
  {
    n: number2,
    p: "Facilitating cross-sector, collective action based on data insights;",
  },
  { n: number3, p: "Inspiring and mobilizing advocates;" },
  { n: number4, p: "Optimizing local, state, and federal resources;" },
  { n: number5, p: "Infusing innovation into the social sector." },
]

const about = ({ location }) => {
  const { keywords, image, description } = pages.ABOUT.meta
  const { name } = pages.ABOUT

  const insertedContent = (
    <Col
      className="explorer-why p-0"
      xs={{ offset: 0, span: 12 }}
      md={{ offset: 0, span: 10 }}
      lg={{ offset: 0, span: 7 }}
    >
      <div className="jumper-wrapper">
        <div className="image" alt="child jumping" style={{ backgroundImage: `url(${jumpImg})` }} />
      </div>

      <div className="content">
        <p className="title">Why we built the explorer</p>
        <div className="text-blocks">
          <p>
            CPAL built the Community Resource Explorer to ensure that
            all Dallas neighborhoods are places of great opportunity for
            children and their families. Dallas neighborhoods are
            unique, each with their own stories to tell, people to
            celebrate, and places to love. Our neighborhoods are a
            tremendous asset to our city. However, some neighborhoods
            are well-appointed with resources, like grocery stores and
            doctor’s offices and park space, but many others are not.
          </p>
          <p>
            The CRE is a diagnostic tool that illustrates how resources
            are allocated across five categories and 30+ indicators in
            neighborhoods around Dallas ISD schools. The intent of the
            tool is to help frontline institutions act on relevant,
            specific data so that investment decisions and resource
            allocation can have the greatest impact. Our hope is that
            the CRE can help right the wrongs of the past by bringing
            new programs and services, economic development
            opportunities, and public amenities to communities that have
            been under-resourced for far too long.
          </p>
        </div>

        <CustomLink>Go to the explorer</CustomLink>
      </div>
    </Col>
  )
  
  return (
    <Layout id="about-page" activePageId={pages.ABOUT.id}>
      <SEO
        url={location.href}
        title={name}
        keywords={keywords}
        image={image}
        description={description}
      />

      <Hero wide={true} activePageId={pages.ABOUT.id} imgSrc={soccerImg} insertedContent={insertedContent}>
        <div className="page-title-section">
          <div className="title">Our Mission</div>
          <div className="subtitle">
            The Child Poverty Action Lab exists to reduce child poverty in
            Dallas by half within a generation.
          </div>
        </div>
      </Hero>

      <Row id="page" className="">
        <Col
          className="cpal-defined p-0"
          xs={{ offset: 1, span: 10 }}
          md={{ offset: 1, span: 7 }}
          xl={{ offset: 1, span: 5 }}
        >
          <p className="title">Who we are</p>
          <p className="text">
            CPAL is a nonprofit organization that seeks systems-level change for
            the good of Dallas kids and their families. We do this by:
          </p>
        </Col>

        <Col className="numbered-points" xs={12}>
          {numberedPoints.map((numPoint, idx) => (
            <div key={idx} className={`numbered-point n-${idx + 1}`}>
              {/* TODO - use Morganite Bold text rather than svgs */}
              <img
                alt="TODO fetch from data"
                className="number"
                src={numPoint.n}
              />
              <p className="point">{numPoint.p}</p>
            </div>
          ))}
        </Col>

        <Col
          className="where-we-work p-0"
          xs={{ offset: 1, span: 10 }}
          md={{ offset: 1, span: 7 }}
          xl={{ offset: 1, span: 5 }}
        >
          <p className="text">
            We primarily work across six areas: service delivery, women’s
            health, housing, childcare, incarceration, and trauma prevention and
            care.
          </p>
        </Col>

        {/* <Col className="explorer-why-wrapper" xs={12}>
          <div className="jumper-wrapper-xl">
            <img alt="child jumping" src={jumpImg} />

            <div className="funder-wrapper xl">
              <div className="funder xl">
                <a
                  href="https://www.comerica.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img alt="Comerica Bank logo" src={comerica} />
                </a>
                <p className="text">
                  Comerica generously funded the development of the Community
                  Resource Explorer
                </p>
              </div>
            </div>
          </div>
        </Col>

        <Col className="funder-wrapper md-down" xs={12}>
          <div className="funder md-down">
            <a
              href="https://www.comerica.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img alt="Comerica Bank logo" src={comerica} />
            </a>
            <p className="text">
              Comerica generously funded the development of the Community
              Resource Explorer
            </p>
          </div>
        </Col> */}
      </Row>
    </Layout>
  )
}

export default about
