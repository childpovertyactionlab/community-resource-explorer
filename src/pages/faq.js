import React from "react"

import Layout from "../components/layout"
import { Col, Row, Collapse } from "react-bootstrap"
import SEO from "../components/seo"
import { Link, animateScroll, Element } from "react-scroll"
import CustomLink from "../components/customLink"
import Hero from "../components/hero"
import { pages, stickyHeaderHeight, faqSections } from "../consts"

import portrait from "../images/map-stylized2.jpg"
import minus from "../images/minus.svg"
import plus from "../images/plus.svg"
import InlineSvg from "../components/inlineSvg"

import _ from "lodash"

// Current as of 7/29, 2:53pm

class Faq extends React.Component {
  constructor() {
    super()

    this.state = {
      expandedMap: {},
      mobileMenuActive: false,
    }

    this.toggleExpansion = this.toggleExpansion.bind(this)
    this.toggleMenu = this.toggleMenu.bind(this)
    this.handleCloseMenu = this.handleCloseMenu.bind(this)
  }

  componentDidMount() {
    const hash = _.get(this.props, "location.hash", null)
    const uid = hash.slice(1)

    if (uid) {
      this.toggleExpansion(uid, true)

      // wants hash (w/#) though docs don't include. doesn't seem to respond to extra options
      animateScroll.scrollTo(hash, {
        containerId: "faq-page",
        // duration: 1500,
        // delay: 1000,
        // offset: 50, // Scrolls to element + 50 pixels down the page
      })
    }
  }

  toggleExpansion(uid, expand, updateHash) {
    if (updateHash) {
      const hash = expand ? "#" + uid : ""
      // window.location.hash = hash

      // doesn't cause a "jump" where browser scrolls to #id
      window.history.replaceState(
        null,
        null,
        this.props.location.pathname + hash
      )
    }

    this.setState({
      expandedMap: {
        ...this.state.expandedMap,
        [uid]: expand,
      },
    })
  }

  toggleMenu() {
    this.setState({ mobileMenuActive: !this.state.mobileMenuActive })
  }

  // close menu
  handleCloseMenu(uid) {
    this.setState({ mobileMenuActive: false })

    setTimeout(() => {
      this.toggleExpansion(uid, true, true)
    }, 900)
  }

  // returns 2 menus - one seen on mobile, another for tablet+
  // if react-scroll doesn't fit the bill, see https://css-tricks.com/sticky-smooth-active-nav/
  // TODO: fix key in sections map
  getSideMenus() {
    const sectionTitles = (
      <>
        {faqSections.map(s => (
          <>
            <div className="menu-title" key={"side-menu-title-" + s.id}>
              <Link
                onClick={this.handleCloseMenu.bind(this, `${s.id}-1`)}
                activeClass="active"
                smooth={true}
                spy={true}
                to={s.id + "-section"}
                offset={-stickyHeaderHeight}
                // containerId="faq-page"
              >
                {s.title}
              </Link>
            </div>
            <br />
          </>
        ))}
        <div className="menu-title" key={"side-menu-title-methods-paper"}>
          <Link
            onClick={this.handleCloseMenu.bind(this, `methods-paper`)}
            activeClass="active"
            spy={true}
            smooth={true}
            to="methods-paper"
            offset={-stickyHeaderHeight}
            // containerId="faq-page"
          >
            Methods Paper
          </Link>
        </div>
      </>
    )

    let mobileClasses = "side-menu mobile"
    if (this.state.mobileMenuActive) {
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
          <span
            tabindex="0"
            role="button"
            onClick={this.toggleMenu}
            onKeyDown={this.toggleMenu}
            className="jump"
          >
            Jump to
            <InlineSvg type="down-chevron" />
          </span>
          <div className="sections">{sectionTitles}</div>
        </div>
      </>
    )
  }

  getFAQSections() {
    return (
      <>
        {faqSections.map((s, idx) => {
          let classes = `faq-section ${s.id}-section`
          if (idx % 2) {
            // even in *human* counting, odd in JS zero-based numbering
            classes += " even"
          }
          if (idx === 0) {
            classes += " first"
          }
          if (idx === faqSections.length - 1) {
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
                  {s.title}
                </div>

                {s.questions.map((q, idx) => {
                  const uid = `${s.id}-${idx + 1}` // add 1 so human-readable
                  const expanded = this.state.expandedMap[uid]
                  let classes = "question"
                  classes += expanded ? " expanded" : ""
                  const icon = expanded ? minus : plus
                  return (
                    <Element name={uid} className={classes} id={uid} key={uid}>
                      <div
                        className="question-text"
                        onClick={this.toggleExpansion.bind(
                          this,
                          uid,
                          !expanded,
                          true
                        )}
                        onKeyDown={this.toggleExpansion.bind(
                          this,
                          uid,
                          !expanded,
                          true
                        )}
                        role="button"
                        tabindex="0"
                        // aria-controls="example-collapse-text"
                        // aria-expanded={expanded}
                      >
                        <span className="text">
                          {q.text}
                          <img
                            alt="expand"
                            src={icon}
                            className="svg-base expander-icon"
                          />
                        </span>
                      </div>
                      <Collapse in={expanded}>
                        <div className="question-body">{q.body}</div>
                      </Collapse>
                    </Element>
                  )
                })}
              </Col>
            </Row>
          )
        })}
      </>
    )
  }

  render() {
    const { keywords, image, description } = pages.FAQ.meta
    const { name } = pages.FAQ

    return (
      <Layout id="faq-page" activePageId={pages.FAQ.id}>
        <SEO
          url={this.props.location.href}
          title={name}
          keywords={keywords}
          image={image}
          description={description}
        />

        <Hero activePageId={pages.FAQ.id} imgSrc={portrait}>
          <div className="page-title-section">
            <div className="title">Frequently Asked Questions</div>
            <div className="subtitle">
              Have questions about our data or the Explorer?
            </div>
          </div>
        </Hero>

        <div>
          {/* wrap side-menus in div w/o methods so that sticky side-menu stops scrolling when its *top* hits div's end
          (necessary bc side-menu is height=0 and translated, so can't rely on scroll stopping when its *bottom* hits
          a div's end. if there are still overflow problems, may need to remove height & translate styles, put it in its
        own Col and offset top with padding) */}
          {this.getSideMenus()}
          {this.getFAQSections()}
        </div>

        <Row className="methods-paper-section">
          <Col
            className="methods-paper"
            xs={{ offset: 0, span: 12 }}
            md={{ offset: 5, span: 7 }}
          >
            <Element name="methods-paper" id="methods-paper">
              <Row className="content">
                <Col
                  xs={12}
                  className="section-title" // visible only for mobile
                >
                  Methods Paper
                </Col>

                <Col xs={12} className="description">
                  <div className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </div>
                  <CustomLink>Download paper</CustomLink>
                </Col>
              </Row>
            </Element>
          </Col>
        </Row>
        {/* <Link to="/">Go back to the homepage</Link> */}
      </Layout>
    )
  }
}

export default Faq
