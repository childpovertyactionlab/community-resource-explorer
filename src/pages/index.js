import React from "react"

import { Col, Row } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import InlineSvg from "../components/inlineSvg";
import { pages } from "../consts"
import goalie from "../images/goalie.png"
import escapes from "../images/fire-escapes.png"
import kids from "../images/kids-playing.png"
import bank from "../images/bank.png"
import couching from "../images/couching.png"
import running from "../images/running.png"
import hugging from "../images/hugging.png"
import swinging from "../images/swinging.png"
import reading from "../images/reading.png"
import forest from "../images/forest-wide.png"
import field from "../images/field-wide.png"
// import mapRect from "../images/map-rect.png"
import computer from "../images/student-computer2.jpg"
import portrait from "../images/child-portrait-3:4.png"
import CustomCarousel from "../components/customCarousel"
import { navigate } from "gatsby"
import CustomLink from "../components/customLink"

const caroItems = [
  { 
    src: couching,
    alt: 's1',
    stat1num: 81,
    stat2num: 76,
    stat1text: 'Lorem ipsum dolor sit amet, consectetur adipiscing 1',
    stat2text: 'Lorem ipsum dolor sit amet, consectetur adipiscing 1',
  },
  { 
    src: running,
    alt: 's2',
    stat1num: 82,
    stat2num: 75,
    stat1text: 'Lorem ipsum dolor sit amet, consectetur adipiscing 2',
    stat2text: 'Lorem ipsum dolor sit amet, consectetur adipiscing 2',
  },
  { 
    src: hugging,
    alt: 's3',
    stat1num: 83,
    stat2num: 74,
    stat1text: 'Lorem ipsum dolor sit amet, consectetur adipiscing 3',
    stat2text: 'Lorem ipsum dolor sit amet, consectetur adipiscing 3',
  },
  { 
    src: swinging,
    alt: 's4',
    stat1num: 84,
    stat2num: 73,
    stat1text: 'Lorem ipsum dolor sit amet, consectetur adipiscing 4',
    stat2text: 'Lorem ipsum dolor sit amet, consectetur adipiscing 4',
  },
  { 
    src: reading,
    alt: 's5',
    stat1num: 85,
    stat2num: 72,
    stat1text: 'Lorem ipsum dolor sit amet, consectetur adipiscing 5',
    stat2text: 'Lorem ipsum dolor sit amet, consectetur adipiscing 5',
  },
  { 
    src: goalie,
    alt: 's6',
    stat1num: 85,
    stat2num: 71,
    stat1text: 'Lorem ipsum dolor sit amet, consectetur adipiscing 6',
    stat2text: 'Lorem ipsum dolor sit amet, consectetur adipiscing 6',
  },
]

const q1 = {
  superhead: `Voices from the Community`,
  text: `Affordable housing is one of [our] greatest needs. Other economic hardships stem from that. If my housing isn't affordable, everything else is less affordable.`,
  attribution: "Pleasant Grove assistant principal",
}
const q2 = {
  superhead: `Voices from the Community`,
  text: `There is no safe place for students just to be young people in the community.`,
  attribution: "Dallas ISD Trustee",
}
const q3 = {
  superhead: `Voices from the Community`,
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
            All Dallas neighborhoods should have what they need to <span className="">thrive.</span>
          </p>
        </div>
        <p className="caption">The Community Resource Explorer is <span className="p-emphasis">a data tool that reveals where assets and needs exist</span> so individuals and institutions can have the greatest impact.</p>
        <InlineSvg type="down-arrow" />
      </Hero>

      <Row id="page">

        <Col
          className="p-0 image-by-quote"
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
          className="quote-by-image quote light no-bg p-0"
        >
          <div className="superheading">
            {q1.superhead}
          </div>
          <div className="text">
            “{q1.text}”
          </div>
          <div className="attribution">
            {q1.attribution}
          </div>
        </Col>

        <Col
          className="carousel-section p-0"
          xs={{ offset: 0, span: 12 }}
        >
          <CustomCarousel items={caroItems} />
        </Col>

        <Col
          className="p-0 image-over-quote"
          xs={{ offset: 1, span: 10 }}
          md={{ offset: 4, span: 7 }}
          xl={{ offset: 5, span: 5 }}
        >
          <img src={kids} />
        </Col>

        <Col
          xs={{ offset: 1, span: 10 }}
          md={{ offset: 4, span: 7 }}
          xl={{ offset: 5, span: 5 }}
          className="quote-under-image quote dark no-bg no-border p-0"
        >
          <div className="superheading">
            {q1.superhead}
          </div>
          <div className="text">
            “{q2.text}”
            <div className="attribution">
              {q2.attribution}
            </div>
          </div>
        </Col>

        <Col
          xs={{ offset: 0, span: 12 }}
          // md={{ offset: 1, span: 4 }}
          // md={{ offset: 5, span: 5 }}
          className="cre-rect p-0"
        >
          <div className="bg-image">
            {/* <img src={mapRect} /> */}
          </div>
          <div className="content">
            <div className="text">
            <p className="description description-medium">
              Learn more about your community's assets and needs <br></br>by using the
              </p>
              <h1 className="">
                Community Resource Explorer
              </h1>
              <p className="description">
                Get data on schools and their surrounding communities, download reports, and more.
              </p>
              <div className="go-to" onClick={() => navigate(pages.EXPLORER.path)}>
                <button>Go to the explorer <InlineSvg type="right-arrow" /></button>
              </div>
            </div>
          </div>

        </Col>

        <Col
          xs={{ offset: 0, span: 12 }}
          md={{ offset: 1, span: 10 }}
          xl={{ offset: 1, span: 9 }}
          // md={{ offset: 5, span: 5 }}
          className="p-0"
        >
          <div className="quote-with-image">

            <div className="quote dark">
            
              <div className="text">
              <div className="superheading">
                {q1.superhead}
              </div>
                “{q3.text}”
                <div className="attribution">
                  {q3.attribution}
                </div>
              </div>
            </div>

            <div className="image-wrapper">
              <img src={bank} />
            </div>
          </div>
        </Col>


        <Col xs={{ span: 11, offset: 1 }} className="recent p-0">
          <span className="custom-underline">Recent blog</span> posts
        </Col>

        {/* TODOcms: pinned blog post here, dynamically create below */}

        <Col
          className="post-section p-0"
          xs={{ span: 10, offset: 1 }}
          md={{ span: 5, offset: 1 }}
        >
          <figure
            className="post-image p-0"
            >
            <img src={forest} />
          </figure>

          <div className="post-details p-0">
            <div className="post-title">
              How we’re informing policy and community understanding in Dallas.
            </div>

            <div className="post-contents">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna
              vitae nulla pretium, cras tellus, at morbi tristique. Ac
                ipsum, egestas ligula duis ipsum pellentesque{" "}
            </div>

            <CustomLink linkTo={pages.ISD.path}>Read post</CustomLink>
          </div>
        </Col>
        <Col
          className="post-section second p-0"
          xs={{ span: 10, offset: 1 }}
          md={{ span: 5, offset: 0 }}
        >
          <figure
            className="post-image p-0"
            >
            <img src={computer} />
          </figure>

          <div className="post-details p-0">
            <div className="post-title">
              More than ever, Dallas students need reliable broadband. Here's how the CRE is helping.
            </div>

            <div className="post-contents">
              In 2020, access to the internet is a must-have utility. But despite the internet's apparent ubiquity, 42% of Dallas households lack fixed internet access, according to Census data.
              {" "}
            </div>

            <CustomLink linkTo={pages.OPERATION.path}>Read post</CustomLink>
          </div>
        </Col>

      </Row>
    </Layout>
  )
}

export default home
