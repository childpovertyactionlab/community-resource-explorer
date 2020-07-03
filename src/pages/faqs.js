import React, { useState } from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import { Accordion, Button, Card, Col, Row, Collapse } from "react-bootstrap"
import SEO from "../components/seo"
import { Link } from "react-scroll"

const how = {
  id: 'how',
  title: ['How we', 'made it'], // break between lines
  questions: [
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
  ]
}
const purpose = {
  id: 'purpose',
  title: ['Purpose'],
  questions: how.questions
}
const methods = {
  id: 'methods',
  title: ['Methods'],
  questions: how.questions
}
const lorem1 = {
  id: 'lorem1',
  title: ['Lorem'],
  questions: how.questions
}
const lorem2 = {
  id: 'lorem2',
  title: ['Lorem'],
  questions: how.questions
}
const sections = [how, purpose, methods, lorem1, lorem2]

const Faqs = () => {
  const [expandedMap, setState] = useState({})

  const toggleExpansion = (uid, expand) => {
    setState({
      ...expandedMap,
      [uid]: expand
    })
  }

  const [hidden, setHidden] = useState(false)
  const toggleHidden = () => setHidden(!hidden)

  return (
    <Layout pageInfo={{ pageName: "faqs" }} id="faqs-page">
      <SEO title="FAQs" />
      {/* <h1>FAQS</h1> */}
      {!hidden && <Row noGutters onClick={toggleHidden} className='rb text-center'>
        <Col xs={1} className='rb-1'><em>click</em><div><em>to hide</em></div></Col>
        <Col xs={1} className='rb-2'>these each</Col>
        <Col xs={1} className='rb-3'>fill 1 col.</Col>
        <Col xs={1} className='rb-4'>altogether</Col>
        <Col xs={1} className='rb-5'>they can</Col>
        <Col xs={1} className='rb-6'>grow to</Col>
        <Col xs={1} className='rb-7'>[1060px]</Col>
        <Col xs={1} className='rb-8'>(if wider,</Col>
        <Col xs={1} className='rb-9'>the rest is</Col>
        <Col xs={1} className='rb-10'>consumed</Col>
        <Col xs={1} className='rb-11'>by side</Col>
        <Col xs={1} className='rb-12'>padding)</Col>
      </Row>}

      <Row noGutters className='hero'>
        <Col xs={12} className="site-title-section">
          <span className="site-title">
            Community Resource Explorer
          </span>
          <span className="menu-section">
            Menu
          </span>
        </Col>

        <Col xs={8} className="page-title-section">
          <div className="title">Frequently Asked Questions</div>
          <div className="subtitle">Have questions about our data or the explorer?</div>
        </Col>
        <Col className="header-image">
          {/* <Image></Image> */}
          <img href='/src/images/faq-portrait.png'></img>
        </Col>
      </Row>

      {/* <div className="faqs"> */}
        <div className="side-menu">
          <span className="jump">Jump to</span>
          <br/ >
          {sections.map(s => (
            <>
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              to={s.id+'-title'}
              offset={10}
              // containerId="faqs-page"
              className="menu-title"
            >
                {s.title.join(' ')}
            </Link>
            <br/>
            </>
          ))}
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              to="methods"
              offset={10}
              // containerId="faqs-page"
              className="menu-title"
            >
              Methods Paper
            </Link>
        </div>
      {sections.map((s, idx) => {
        return (
          <Row noGutters 
            className={`faq-section ${s.id}-section ${(idx%2) ? 'even' : ''}`}
            key={s.id}>
            <Col xs={3} className="gutter">
              {idx > 0 ? null : (
                <div></div>
              )}
            </Col>
            <Col xs={3} className="title" id={`${s.id}-title`}>
              {/* line break between each text string of the title */}
              {s.title.map(t => <div key={t}>{t}</div>)}
            </Col>
            <Col xs={5} className="questions">

                {s.questions.map((q, idx) => {
                  const uid = `${s.id}-${idx}`
                  const expanded = expandedMap[uid]
                  let classes = 'question'
                  classes += expanded ? ' expanded' : ''
                  return (
                    <div className={classes} id={uid} key={uid}>
                      <div
                        className="question-text"
                        onClick={toggleExpansion.bind(this, uid, !expanded)}
                        // aria-controls="example-collapse-text"
                        // aria-expanded={expanded}
                      >
                        <span className="text">{q.text}</span>
                        <span className="expander-icon"></span>
                      </div>
                      <Collapse in={expanded}>
                        <div className="question-body">
                          {q.body}
                        </div>
                      </Collapse>
                    </div>
                  )
                })}
              
            </Col>
          </Row>
        )
      })}
      {/* </div> */}


      <Row noGutters className="methods-paper-section">
        {/* <Col xs={2} className="gutter"></Col> */}
        <Col xs={{ offset: 2, span: 11}} className="methods-paper" id="methods">
          <Row noGutters>
            <Col xs={{ offset: 1, span: 4}} className="title">
              <div>Methods</div><div>Paper</div>
            </Col>
            <Col xs={5} className="description">
              <div className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </div>
              <div className="link">
                Download paper
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      {/* <Link to="/">Go back to the homepage</Link> */}
      {!hidden && <Row noGutters className='rb'>
        <Col xs={1} className='rb-1'></Col>
        <Col xs={1} className='rb-2'></Col>
        <Col xs={1} className='rb-3'></Col>
        <Col xs={1} className='rb-4'></Col>
        <Col xs={1} className='rb-5'></Col>
        <Col xs={1} className='rb-6'></Col>
        <Col xs={1} className='rb-7'></Col>
        <Col xs={1} className='rb-8'></Col>
        <Col xs={1} className='rb-9'></Col>
        <Col xs={1} className='rb-10'></Col>
        <Col xs={1} className='rb-11'></Col>
        <Col xs={1} className='rb-12'></Col>
      </Row>}
    </Layout>
  )
}

export default Faqs
