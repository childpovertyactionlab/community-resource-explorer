import React, { useState } from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import { Col, Row, Collapse } from "react-bootstrap"
import SEO from "../components/seo"
import { Link } from "react-scroll"
import CustomLink from "../components/customLink"
import Hero from "../components/hero"
import { pages } from "../consts"

import minus from "../images/minus.svg"
import plus from "../images/plus.svg"
import InlineSvg from "../components/inlineSvg"

// Current as of 7/29, 2:53pm
const how = {
  id: "how",
  title: ["Background"], // break between lines
  questions: [
    {
      text: "What is the Community Resource Explorer and why was it created?",
      body:
        "The Community Resource Explorer, or CRE, is a data tool that illustrates how resources are allocated in neighborhoods around Dallas ISD schools. The tool was created to help individuals and institutions see and act on relevant, specific data at the neighborhood level. Reliable, current, and neighborhood-specific data has been hard to come by, but the CRE ensures that communities have the information they need to thrive.",
    },
    {
      text: "Who built the CRE?",
      body:
        "The Child Poverty Action Lab developed the concept for the CRE, with input and support from several other local organizations. CPAL was also responsible for initial data collection and analysis and will continue to maintain and upgrade the tool as needed. Hyperobjekt was the web developer that created the container site and elevated the user experience.",
    },
    {
      text: "Who should use the CRE?",
      body:
        <p>The CRE is for use by <i>individuals</i>, like residents of a neighborhood included in the CRE, and also <i>institutions</i>, like nonprofits, public agencies, and neighborhood associations.</p>
    },
    {
      text: "How was the CRE funded?",
      body:
        "The CRE was funded with generous support from Comerica.",
    },
  ],
}
const purpose = {
  id: "purpose",
  title: ["About the Data"],
  questions: [
    {
      text: "Which schools are included in the CRE?",
      body:
        "The 196 neighborhood schools in Dallas ISD are currently included in the CRE. Magnet schools, transformation and innovation schools, and alternative schools are not included.",
    },
    {
      text: "Where did the data come from for the CRE?",
      body:
        "Needs answer text.",
    },
    {
      text: "How did you decide on these indicators?",
      body:
        <p>To determine what to include in the CRE, we looked for (1) indicators that have an impact on the quality of life for kids and their families, (2) indicators that have reliable, current data that can be mapped within a two-mile radius, and (3) indicators that can be acted upon by individuals and institutions. We also studied similar data projects, such as the <a target="_blank" href="https://dallascityhall.com/departments/office-of-equity/DCH%20Documents/equality-indicators-booklet-2019.pdf">Dallas Equity Indicators</a>, in consideration of what to cover in the CRE.</p>
    },
    {
      text: "How were data in the CRE calculated?",
      body:
        "Needs answer text.",
    },
    {
      text: "Why is the data calculated within a two-mile radius of each school?",
      body:
        "Needs answer text.",
    },
    {
      text: "How is this new version of the CRE different from earlier versions?",
      body:
        "Needs answer text.",
    },
    {
      text: "The data for my neighborhood doesn’t match my personal experience. Why might that be?",
      body:
        <div><p>The data associated with a particular neighborhood covers a two-mile radius (or four-mile diameter, with the school at the center), which is a pretty big geographic footprint. When people think of their neighborhood, they might think quite small - perhaps just the homes and school nearest to them. Other people might think quite large - perhaps all of Oak Cliff or East Dallas. How you imagine the boundary lines of your neighborhood will shape how you perceive the data.</p> <p>Additionally, schools that sit on the edge of Downtown Dallas/other major business hubs or on the edge of the Medical District/other major healthcare hubs will capture a volume of data that might far surpass what a resident notices and can access in his/her immediate vicinity. For example, the two-mile radius around a school in South Dallas/Fair Park will capture some parts of Downtown Dallas, including businesses and jobs that are not necessarily representative of what exists right in the neighborhood. Finally, the majority of data included in the CRE come from publicly-available databases. Sometimes, those databases might code certain data elements (like a health clinic) differently than we would. We are continuing to work to “clean” the data to ensure that it reflects the lived experiences of residents as closely as possible.</p></div>
    },
  ],
}
const methods = {
  id: "methods",
  title: ["Use of the CRE"],
  questions: [
    {
      text: "How is the CRE currently being used?",
      body:
        "The CRE is currently being used by Dallas ISD as part of the Equity in Bond Planning project, a commitment to build Student and Family Resource Centers in four neighborhoods that were historically redlined and shut-out of economic development opportunities. The CRE was one data tool among several that Dallas ISD administrators used to identify where the need exists for more equitable resource allocation. The CRE data has also been part of community engagement efforts to co-create a vision for the resource centers: residents, parents and students, and community leaders have shared their own experiences in the neighborhood and have identified assets and needs aligned to the five CRE categories. Learn more about the project here <mark>(NEED LINK)</mark>.",
    },
    {
      text: "What is redlining?",
      body:
        "Needs answer text.",
    },
  ],
}
const lorem1 = {
  id: "lorem1",
  title: ["Next Steps"],
  questions: [
    {
      text: "I have insight about my neighborhood that I would like to share. How can I do that?",
      body:
        <p>We plan to continue adding to the CRE over time and are eager to list the many assets of Dallas neighborhoods that might not be currently reflected. To that end, please share insight about your neighborhood by completing the form <a href="/contact">here</a>.</p>
    },
    {
      text: "I am interested in the CRE for schools outside of Dallas ISD. Who should I talk to?",
      body:
        <p>Feel free to email Ashley Flores, Senior Director at the Child Poverty Action Lab, at <a href="mailto:ashley@childpovertyactionlab.org">ashley@childpovertyactionlab.org</a>.</p>
    },
    {
      text: "How can I stay informed about updates to the CRE?",
      body:
        <p>Sign up using the form below <mark>(ADD LINK TO FORM)</mark> to receive future news about the CRE.</p>
    },
  ],
}

const sections = [how, purpose, methods, lorem1]

const Faqs = () => {
  const [expandedMap, setState] = useState({})

  const toggleExpansion = (uid, expand) => {
    setState({
      ...expandedMap,
      [uid]: expand,
    })
  }

  const [mobileMenuActive, setMenuActive] = useState(false)
  const toggleMenu = () => setMenuActive(!mobileMenuActive)
  const closeMenu = () => setMenuActive(false)

  // TODO: fix key in sections map
  const getSideMenus = () => {
    const sectionTitles = (
      <>
        {sections.map(s => (
          <>
            <div className="menu-title" key={"side-menu-title-" + s.id}>
              <Link
                onClick={closeMenu}
                activeClass="active"
                smooth={true}
                spy={true}
                to={s.id + "-section"}
                offset={0}
                // containerId="faqs-page"
              >
                {s.title.join(" ")}
              </Link>
            </div>
            <br />
          </>
        ))}
        <div className="menu-title" key={"side-menu-title-methods-paper"}>
          <Link
            onClick={closeMenu}
            activeClass="active"
            spy={true}
            smooth={true}
            to="methods"
            offset={0}
            // containerId="faqs-page"
          >
            Methods Paper
          </Link>
        </div>
      </>
    )

    let mobileClasses = "side-menu mobile"
    if (mobileMenuActive) {
      mobileClasses += " active"
    }

    return (
      <>
        <div key="side-menu-normal" className="side-menu normal">
          <span className="jump">Jump to</span>
          <br />
          {sectionTitles}
        </div>
        <div key="side-menu-mobile" className={mobileClasses}>
          <span onClick={toggleMenu} className="jump">
            Jump to
            <InlineSvg type="down-chevron" />
          </span>
          <div className="sections">{sectionTitles}</div>
        </div>
      </>
    )
  }

  const getFAQSections = () => {
    return (
      <>
        {sections.map((s, idx) => {
          let classes = `faq-section ${s.id}-section`
          if (idx % 2) {
            // even in *human* counting, odd in JS zero-based numbering
            classes += " even"
          }
          if (idx === 0) {
            classes += " first"
          }
          if (idx === sections.length - 1) {
            classes += " last"
          }
          return (
            <Row className={classes} key={s.id}>
              <Col
                className="questions"
                id={`${s.id}-section`} // target for the side menu to scroll to
                xs={{ span: 10, offset: 1 }}
                md={{ span: 6, offset: 5 }}
                xl={{ span: 4, offset: 5 }}
              >
                <div
                  className="section-title" // visible only for mobile
                >
                  {s.title.join(" ")}
                </div>

                {s.questions.map((q, idx) => {
                  const uid = `${s.id}-${idx}`
                  const expanded = expandedMap[uid]
                  let classes = "question"
                  classes += expanded ? " expanded" : ""
                  const icon = expanded ? minus : plus
                  return (
                    <div className={classes} id={uid} key={uid}>
                      <div
                        className="question-text"
                        onClick={toggleExpansion.bind(this, uid, !expanded)}
                        // aria-controls="example-collapse-text"
                        // aria-expanded={expanded}
                      >
                        <span className="text">
                          {q.text}
                          <img src={icon} className="svg-base expander-icon" />
                        </span>
                      </div>
                      <Collapse in={expanded}>
                        <div className="question-body">{q.body}</div>
                      </Collapse>
                    </div>
                  )
                })}
              </Col>
            </Row>
          )
        })}
      </>
    )
  }

  return (
    <Layout pageInfo={{ pageName: "faqs" }} id="faqs-page">
      <SEO title="FAQs" />

      <Hero activePageId={pages.FAQ.id}>
        <div className="page-title-section">
          <div className="title">Frequently Asked Questions</div>
          <div className="subtitle">
            Have questions about our data or the explorer?
          </div>
        </div>
      </Hero>

      {getSideMenus()}
      {getFAQSections()}

      <Row noGutters className="methods-paper-section">
        <Col
          className="methods-paper"
          id="methods"
          xs={{ offset: 0, span: 12 }}
          md={{ offset: 5, span: 7 }}
        >
          <Row className="content" noGutters>
            <Col
              xs={12}
              className="section-title" // visible only for mobile
            >
              Methods Paper
            </Col>

            <Col xs={12} className="description">
              <div className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </div>
              <CustomLink>Download paper</CustomLink>
            </Col>
          </Row>
        </Col>
      </Row>
      {/* <Link to="/">Go back to the homepage</Link> */}
    </Layout>
  )
}

export default Faqs
