import React from "react"

import { Col, Row } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroWide from "../components/heroWide"
import { pages } from "../consts"
import isdHero from "../images/isd-hero.png"

const content = [
  {
    type: "section",
    title: "Equity in Bond Planning Project Overview",
    paragraphs: [
      `In January 2020, the Dallas ISD Administration and Board of Trustees boldly committed to using 2020 Bond funding to make investments in historically redlined neighborhoods, neighborhoods where residents were shut - out of viable homeownership and economic development opportunities for decades. Dallas ISD has courageously recognized that “intentional decisions . . .have led to racial and economic segregation that produced major inequities that persist to this day” and is determined to right the wrongs of the past.`,
      `Beginning with $40M + in Bond funding, Dallas ISD plans to develop Student and Family Resource Centers in four feeder patterns - Lincoln, Spruce, Pinkston, and Roosevelt - that exist in once red - or yellow - lined neighborhoods. The goal of the Resource Centers is to significantly improve academic achievement for Dallas students through an intentional and concerted effort to impact the quality of life for students and their families. By addressing local challenges as they relate to health, education, economics, family, and community, students will come to school better prepared to learn and thrive.`,
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
    title: "Applying the Community Resource Explorer",
    paragraphs: [
      `Dallas ISD used the index within the Community Resource Explorer as part of the decision - making process to identify four feeder patterns for the Equity in Bond Planning project. Although need exists in many neighborhoods across Dallas, the index revealed the neighborhoods where resource inequities are the greatest. For example, within the two - mile radius around Lincoln High School, there is one public library available to the community, whereas the school community with the most number of public libraries within its two - mile radius has eight.`,
      `The data within the Explorer was analyzed in conjunction with Dallas ISD’s Facility Condition Index, Intensity of Poverty Index, and campus utilization to make final decisions about the four feeder patterns.`,
      `The Explorer was also used in conversations with community stakeholders during interviews, focus groups, and workshops. Stakeholders reviewed and considered the data for their neighborhood and then brought the data to life by sharing their own lived experiences.`,

    ]
  },
  {
    type: "quote",
    text: `When I see individuals, all of their money is going to pay rent - people having to pay for medicine and paying for housing. Where do poor working class people go? Financial cushion doesn’t exist anymore.`,
    attribution: "South Dallas community member",
  },
  {
    type: "section",
    title: "Engaging Neighborhoods",
    paragraphs: [
      `Dallas ISD’s Racial Equity Office(REO), with support from the Child Poverty Action Lab(CPAL), ran a community engagement process with the Lincoln and Spruce feeder patterns throughout Summer 2020. REO and CPAL had originally planned for extensive face - to - face engagement, but COVID - 19 necessitated a pivot to online engagement. To spread the word about opportunities to provide input, REO leveraged social media, postcard mailers, robo - calls, and flyers distributed during weekly meal pick - up. Other public agencies and nonprofits also promoted engagement opportunities with their constituents to help drive participation.`,
      `Engagement began with a series of interviews and focus groups with 40 school administrators and staff, elected officials, and community leaders. In these conversations, stakeholders shared assets and needs within their community and began to envision how a resource center could bring greater equity to the neighborhood.`,
      `Following interviews and focus groups, REO and CPAL designed and facilitated a workshop series for each feeder pattern. During the workshops, participants also shared their understanding of assets and needs, brainstormed how the resource centers might address those needs and build on assets, and ultimately prioritized potential programmatic activities for the resource centers. `,

    ]
  },
  {
    type: "quote",
    text: `We have so many amazing immigrants coming in from other countries, and we want to celebrate that.`,
    attribution: "Pleasant Grove teacher",
  },
  {
    type: "section",
    title: "Envisioning Student and Family Resource Centers",
    paragraphs: [
      `Dallas ISD’s Racial Equity Office(REO), with support from the Child Poverty Action Lab(CPAL), ran a community engagement process with the Lincoln and Spruce feeder patterns throughout Summer 2020. REO and CPAL had originally planned for extensive face - to - face engagement, but COVID - 19 necessitated a pivot to online engagement. To spread the word about opportunities to provide input, REO leveraged social media, postcard mailers, robo - calls, and flyers distributed during weekly meal pick - up. Other public agencies and nonprofits also promoted engagement opportunities with their constituents to help drive participation.`,
      `Engagement began with a series of interviews and focus groups with 40 school administrators and staff, elected officials, and community leaders. In these conversations, stakeholders shared assets and needs within their community and began to envision how a resource center could bring greater equity to the neighborhood.`,
      `Following interviews and focus groups, REO and CPAL designed and facilitated a workshop series for each feeder pattern. During the workshops, participants also shared their understanding of assets and needs, brainstormed how the resource centers might address those needs and build on assets, and ultimately prioritized potential programmatic activities for the resource centers. `,

    ]
  },
  {
    type: "quote",
    text: `In our area, there isn’t a whole lot. One of the issues is lack of facilities for exercise or even trees and sidewalks to make it possible to do that outside safely.`,
    attribution: "Pleasant Grove community member",
  },
  {
    type: "section",
    title: "Taking Next Steps",
    paragraphs: [
      `Community engagement with the Pinkston and Roosevelt process is now underway, and concepts for all four Student and Family Resource Centers will be finalized and presented to the Dallas ISD Board of Trustees in early fall 2020. Other local public agencies, including the City of Dallas, have expressed interest in the project and are eager to use their own resources to advance and accelerate the work that Dallas ISD has begun.`,
      `The Equity in Bond Planning project is the first tangible example of how data within the Community Resource Explorer, coupled with meaningful community engagement, can be a tool for informed, place - based investment.`,
    ]
  },
]

let quoteStyleTypes = ['light', 'dark']

const isd = () => {

  const getSection = ({ title, paragraphs }) => {

    return (
      <Col className="section p-0" key={title} xs={12}>
        <Row>
          <Col
            xs={{ offset: 1, span: 3 }}
            className="title p-0"
            >
            {title}
          </Col>
          <Col
            xs={{ offset: 1, span: 4 }}
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
        xs={{ offset: 4 }}
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
    <Layout pageInfo={{ pageName: "isd" }} id="isd-page">
      <SEO title="isd" />

      <HeroWide activePageId={pages.ISD.id} imgSrc={isdHero}>
        <div className="page-title-section">
          <div className="subtitle px-0">
            How we’re informing policy and community understanding in Dallas
          </div>
        </div>
      </HeroWide>

      <Row noGutters id="page">
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
