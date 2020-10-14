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
import { Helmet } from "react-helmet"
import { a11yClick } from "../utils/a11yClick"

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
      setTimeout(() => {
        this.toggleExpansion(uid, true)
        
        const target = document.getElementById(uid)
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
      }, 600);

      // doesn't respect offset (so question text is obscured) and doesn't animate
      // wants hash (w/#) though docs don't include. doesn't seem to respond to extra options
      // animateScroll.scrollTo(hash, {
      //   containerId: "faq-page",
      //   offset: -stickyHeader,
      // })
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

  toggleMenu(e) {
    if (a11yClick(e)) {
      this.setState({ mobileMenuActive: !this.state.mobileMenuActive })
    }
  }

  // close menu
  handleCloseMenu(uid, e) {
    if (!a11yClick(e)) {
      return
    }

    if (e.type !== 'click') {
      const target = document.getElementById(uid)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
      // doesn't scroll
      // animateScroll.scrollTo(`#${uid}`, {
      //   containerId: "faq-page",
      // })
    }

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
            <div
              className="menu-title"key={"side-menu-title-" + s.id}
              tabIndex="0"
              role="button"
              onKeyDown={this.handleCloseMenu.bind(this, `${s.id}-1`)}
            >
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
        <div
          className="menu-title"key={"side-menu-title-methods-paper"}
          tabIndex="0"
          role="button"
          onKeyDown={this.handleCloseMenu.bind(this, 'methods-paper')}
        >
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
            tabIndex="0"
            role="button"
            onClick={this.toggleMenu}
            onKeyDown={this.toggleMenu}
            className="jump"
          >
            Jump to
            <InlineSvg type="down-chevron" tabIndexed={false} />
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
                xl={{ span: 5, offset: 5 }}
              >
                <h3 className="sr-only">{s.title}</h3>
                <div
                  className="section-title" // visible only for mobile
                >
                  {s.title}
                </div>

                <QuestionGroup
                  questions={s.questions}
                  groupId={s.id}
                  toggleExpansion={this.toggleExpansion}
                  expandedMap={this.state.expandedMap}
                />
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
        <Helmet>
          <meta HTTP-EQUIV="Content-type" CONTENT="text/html; charset=UTF-8" />
        </Helmet>

        <Hero activePageId={pages.FAQ.id} imgSrc={portrait}>
          <div className="page-title-section">
            <h2 className="title">Frequently Asked Questions</h2>
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
                <h3 className="sr-only">Methods Paper</h3>
                <Col
                  xs={12}
                  className="section-title" // visible only for mobile
                >
                  Methods Paper
                </Col>

                <Col xs={12} className="description">
                  <div className="text">
                  If you’re interested in getting the data and learning about how it was analyzed for the Community Resource Explorer, follow the links below:
                  </div>
                  <CustomLink linkTo="https://docs.google.com/document/d/16fytZ3X0ubGWUc3Zm_BC8ovOjJ0ro4tJUQfhhGY5WgI/edit?usp=drivesdk">Read the Methods paper</CustomLink><CustomLink linkTo="/get-the-data">Get the Data</CustomLink>
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

const QuestionGroup = ({
  questions,
  groupId,
  toggleExpansion,
  expandedMap,
  invertExpansionMap,
}) => {
  const handleClick = (uid, expand, updateHash, e) => {
    if (a11yClick(e)) {
      toggleExpansion(uid, expand, updateHash)
    }
  }
  return (
    <div>
      {questions.map((q, idx) => {
        const uid = `${groupId}-${idx + 1}` // add 1 so human-readable
        const expandedValue = expandedMap[uid]
        const expanded = invertExpansionMap ? !expandedValue : expandedValue

        let classes = "question"
        classes += expanded ? " expanded" : ""
        const icon = expanded ? minus : plus
        return (
          <Element name={uid} className={classes} id={uid} key={uid}>
            <div
              className="question-text"
              onClick={handleClick.bind(this, uid, !expandedValue, true)}
              onKeyDown={handleClick.bind(this, uid, !expandedValue, true)}
              role="button"
              tabIndex="0"
              // aria-controls="example-collapse-text"
              aria-expanded={expanded}
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
    </div>
  )
}

export default Faq
export { QuestionGroup }
