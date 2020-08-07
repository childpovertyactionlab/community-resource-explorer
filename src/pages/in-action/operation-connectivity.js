import React from "react"

import { Col, Row } from "react-bootstrap"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Hero from "../../components/hero"
import { pages } from "../../consts"
import isdHero from "../../images/student-computer2.jpg"

// TODOcms collapse into isd template

const content = [
  {
    type: "section",
    title: "Operation Connectivity",
    paragraphs: [
      `In 2020, access to the internet is a must-have utility. Students require the internet to do homework and participate in distance learning; parents require the internet to work, to apply for jobs, to pay bills; and families require the internet for telehealth appointments, communication with friends and extended family, and entertainment. Despite the internet's apparent ubiquity, 42% of Dallas households lack fixed internet access, according to Census data. Poor communities of color disproportionately lack internet access, growing and deepening existing inequities. The ten zip codes with the greatest number of households that do not have a broadband subscription are almost entirely located in Southern Dallas.`,
    ]
  },
  {
    type: "quote",
    text: `When the district had to shut down, a lot of kids went home with tablets but they have no wifi. If we are going to make the community whole, we need to bring forth more wifi access. This is the driving force of our workforce.`,
    attribution: "South Dallas resident",
    // styleType: 'light' or 'dark' - otherwise alternates
  },
  {
    type: "section",
    title: "",
    paragraphs: [
      `In the wake of COVID-19, Operation Connectivity was born in collaboration between The Commit Partnership and eleven chief technology officers at area school districts committed to ensuring all students can access the internet. To better understand the nature of the challenge, the Operation Connectivity team used data on access to broadband found in the Community Resource Explorer (CRE). This data illustrated disparities in broadband access at the neighborhood level and identified where efforts to expand connectivity might have the greatest impact. Beyond helping to define the problem, the CRE also supported Operation Connectivity to move quickly to data-informed solutions. The team pulled data on public libraries and overlaid library locations with broadband access to identify possible locations for “point-to-multipoint” hotspots. Hotspots could be installed at public libraries in neighborhoods that lack connectivity to provide internet to families nearby. Healthcare and employment data were also considered in tandem with broadband and libraries, as telehealth appointments and applying for jobs are dependent on the internet. Communities with greater health and employment disparities stand to benefit from improved internet connectivity.`,
      `Operation Connectivity illustrates the interdependencies among CRE data and also how CRE data can be used to scope a problem and move quickly to solutions. Reliable internet is a necessary component of a thriving neighborhood, and Operation Connectivity, informed by the CRE, is working to ensure that all Dallas neighborhoods have access.`
    ]
  },
  
]

let quoteStyleTypes = ['light', 'dark']

const isd = () => {

  const getSection = ({ title, paragraphs }) => {

    return (
      <Col className="section" key={title} xs={12}>
        <Row>
          <Col
            xs={{ offset: 1, span: 10 }}
            md={{ offset: 1, span: 3 }}
            xl={{ offset: 1, span: 3 }}
            className="title p-0"
            >
            {title}
          </Col>
          <Col
            xs={{ offset: 1, span: 10 }}
            md={{ offset: 1, span: 6 }}
            xl={{ offset: 1, span: 4 }}
            className="paragraphs p-0"
            >
            {paragraphs.map((par, i) => {
              return <p key={i}>{par}</p>
            })}
          </Col>
        </Row>
      </Col>
    )
  }

  const getQuote = ({ attribution, text, styleType }) => {
    if (!styleType) {
      styleType = quoteStyleTypes.shift()
      quoteStyleTypes.push(styleType)
    }

    const attributionDiv = (
      <div className="attribution">
        {attribution}
      </div>
    )
    return (
      <Col
        xs={{ offset: 0, span: 12 }}
        md={{ offset: 4, span: 8 }}
        className={"quote " + styleType}
        key={attribution}
      >
        <div className="text">
          “{text}”
          {styleType === "dark" ? attributionDiv : null}
        </div>
        {styleType === "light" ? attributionDiv : null}
      </Col>
    )
  }
  
  return (
    <Layout id="isd-page" activePageId={pages.ISD.id}>
      <SEO title="Operation Connectivity" />

      <Hero wide={true} activePageId={pages.ISD.id} imgSrc={isdHero}>
        <div className="page-title-section">
          <div className="subtitle px-0">
            More than ever, Dallas students need reliable broadband. Here's how the CRE is helping.
          </div>
        </div>
      </Hero>

      <Row id="page">
        {content.map(el => {
          switch (el.type) {
            case 'section':
              return getSection(el)

            case 'quote':
              return getQuote(el)
          
            default:
              console.warn('Unrecognized type: ' + el)
              return null;
          }
        })}
      </Row>
    </Layout>
  )
}

export default isd
