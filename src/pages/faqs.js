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

const how = {
  id: "how",
  title: ["How we made it"], // break between lines
  questions: [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      body:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      body:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      body:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      body:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ],
}
const purpose = {
  id: "purpose",
  title: ["Purpose"],
  questions: how.questions,
}
const methods = {
  id: "methods",
  title: ["Methods"],
  questions: how.questions,
}
const lorem1 = {
  id: "lorem1",
  title: ["Lorem"],
  questions: how.questions,
}
const lorem2 = {
  id: "lorem2",
  title: ["Lorem"],
  questions: how.questions,
}
const sections = [how, purpose, methods, lorem1, lorem2]

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
