import React, { useState } from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import { Col, Row, Collapse } from "react-bootstrap"
import SEO from "../components/seo"
import { Link } from "react-scroll"
import CustomLink from "../components/customLink"
import Hero from "../components/hero"
import { pages, stickyHeaderHeight } from "../consts"

import portrait from "../images/faq-portrait.png"
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
        "The Child Poverty Action Lab (CPAL) developed the concept for the CRE, with input and support from several other local organizations. CPAL was also responsible for initial data collection and analysis and will continue to maintain and upgrade the tool as needed. Hyperobjekt was the web developer that created the container site and elevated the user experience.",
    },
    {
      text: "Who should use the CRE?",
      body:
        <p>The CRE is for use by <i>individuals</i>, like residents of a neighborhood included in the CRE, and also <i>institutions</i>, like nonprofits, public agencies, and neighborhood associations.</p>
    },
    {
      text: "How was the CRE funded?",
      body:
        "The CRE was funded with generous support from Comerica Bank.",
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
        "TThe 189 neighborhood schools in Dallas ISD are currently included in the CRE. Magnet schools, transformation and innovation schools, and alternative schools are not included.",
    },
    {
      text: "What is the difference between the CRE and the CRI?",
      body:
        <p>The Community Resource Explorer (CRE) is this newly-built website to house neighborhood-level data related to resource allocation and quality of life in Dallas. The Community Resource Index (CRI) is a statistical approach that summarizes a collection of data -- in this case, neighborhood indicators -- into one value for comparison. Every school included in the Explorer has six different index values: one each for Economics, Education, Family, Community, and Health, and one overall index value that represents a combination of all five categories.</p>
    },
    {
      text: "Where did the data come from for the CRE?",
      body:
        <p>Data featured in the CRE from from a variety of public sources, such as the U.S. Census Bureau, the Dallas Independent School District, and the Centers for Disease Control & Prevention. A few data points were acquired from third-party data vendors (spending on fresh fruits and vegetables) or collected by CPAL (e.g., supermarkets and grocery stores, community health clinics). To learn more about the data used for this project, visit the <a href="/get-the-data">Get the Data page</a>.</p>
    },
    {
      text: "How did you decide on these indicators?",
      body:
        <p> To determine which indicators to include, we looked for (1) indicators that have an impact on the quality of life for kids and their families, (2) indicators that have reliable, current data that can be mapped within a two-mile radius, and (3) indicators that can be acted upon by individuals and institutions. We also studied similar data projects, such as the <a target="_blank" href="https://dallascityhall.com/departments/office-of-equity/DCH%20Documents/equality-indicators-booklet-2019.pdf">Dallas Equity Indicators</a>, in consideration of what to cover in the CRE.</p>
    },
    {
      text: "How were data in the CRE calculated?",
      body:
        <p>The CRI was calculated by aggregating or summarizing data related to five key categories (Community, Economics, Education, Family, and Health) for the geography within two miles of every neighborhood elementary, middle, and high school campus in Dallas ISD. Data related to each of the five categories were analyzed separately and combined into indices to help identify relative differences in resource allocation - i.e., where there are an abundance of resources and where there fewer resources that are related to student outcomes and community-level quality of life. The five scores were then combined into an overall CRI score. If you want to learn more about how we calculated the CRI, <mark>you can read the full methodology or visit the Methodology page here</mark>.</p>
    },
    {
      text: "Why is the data calculated within a two-mile radius of each school?",
      body:
        "We used a two-mile area around each campus to calculate the Community Resource Index so that we could capture the broader dynamics of households and families living in each community. Many of the resources that we include serve relatively large geographies, such as city-operated libraries or recreation centers, and a large number of campuses would not have one of those features located within one mile, making the Index much harder to interpret. Similarly, if we had used a larger area, such as three or five miles, we would not be able to see the nuance/difference between campus communities since the geography of one campus community would overlap significantly with several others.",
    },
    {
      text: "How is this new version of the CRE different from earlier versions?",
      body:
        <p>As we transitioned to the new version of the CRI, we made improvements to the underlying data and platform to make the tool easier to use and understand. We listened to advice from our peers and community members to add new data points, change the way we measure others, and remove some that we felt were not the best representation of our local communities. A few high-level changes to be aware of include:
        <ul><li>We added new data, such as the percentage of households that have access to broadband services and the number of community health clinics within each two-mile area. Check the Data page to learn more about all of the data that is featured in the Community Resource Explorer.</li> 
        <li>The calculations for each of the five subindices (Community, Economics, Education, Family, and Health) as well as the overall Community Resource Index were improved to help overcounting indicators that are highly related (such as percentage of low-wage jobs and median household income). We did this by using Principal Components Analysis to group and weight subsets of data for each subindex, as well as by removing indicators like doctor’s offices that made it harder to produce meaningful data for each two-mile area. We also adjusted for population density.</li>
        <li>The Community Resource Explorer makes it easier to understand the data that drives the CRI. We worked to make an interface that is easier to navigate, that allows for more interaction with the different datasets, and that hopefully doesn’t have too many glitches.</li> 
        <li>You can now export PDF reports that include the data for all elements of the CRI for any one campus community in Dallas ISD. To do so, click on a school within the Explorer to view its full report, then click “Export PDF” to download.</li></ul>
        Learn more about the changes we made to the data and methodology here.</p>
    },
    {
      text: "The data for my neighborhood doesn’t match my personal experience. Why might that be?",
      body:
        <div><p>The data associated with a particular neighborhood covers a two-mile radius (or four-mile diameter, with the school at the center), which is a pretty big geographic footprint. When people think of their neighborhood, they might think quite small - perhaps just the homes and school nearest to them. Other people might think quite large - perhaps all of Oak Cliff or East Dallas. How you imagine the boundary lines of your neighborhood will shape how you perceive the data. Additionally, schools that sit on the edge of Downtown Dallas/other major business hubs or on the edge of the Medical District/other major healthcare hubs will capture a volume of data that might far surpass what a resident notices and can access in his/her immediate vicinity. For example, the two-mile radius around a school in South Dallas/Fair Park will capture some parts of Downtown Dallas, including businesses and jobs that are not necessarily representative of what exists right around the feeder pattern schools. Finally, the majority of data included in the CRE come from publicly-available databases. Sometimes, those databases might code certain data elements (like a health clinic) differently than we would. We are continuing to work to “clean” the data to ensure that it reflects the lived experiences of residents as closely as possible.</p></div>
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
        <p>Redlining was a practice by the Home Owners Loan Corporation in the 1930s that “arrayed neighborhoods by risk, determined by housing age and density as well as racial composition . . . Neighborhoods that contained black and brown populations were literally highlighted in red and residents were deemed less credit-worthy of a long-term, fixed rate mortgage” (<a href="https://www.localhousingsolutions.org/plan/addressing-neighborhood-disparities-overview/addressing-neighborhood-disparities/" target="_blank">NYU Furman Center</a>). In redlining maps, you’ll see four colors: 
        <ul>
          <li>Residential areas highlighted in red (labeled “hazardous”) were typically home to Black residents, older housing, and poorer households;</li>
          <li>Areas in yellow (labeled “definitely declining”) were also usually home to majority people of color;</li>
          <li>Areas in blue (labeled “still desirable”) were usually home to majority working-class white residents;</li>
          <li>Areas in green (labeled “best”) were usually home to professional class white residents.</li>
          </ul>
          In short, the practice of redlining meant that people of color were denied homeownership opportunities. Neighborhoods that were redlined were also often excluded from economic development opportunities. The long-term impact of redlining is still very much felt today, as illustrated within the Community Resource Explorer.</p>,
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

const Faq = () => {
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

  // if react-scroll doesn't fit the bill, see https://css-tricks.com/sticky-smooth-active-nav/
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
                offset={-stickyHeaderHeight}
                // containerId="faq-page"
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
            offset={-stickyHeaderHeight}
            // containerId="faq-page"
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
    <Layout id="faq-page" activePageId={pages.FAQ.id}>
      <SEO title="FAQ" />

      <Hero activePageId={pages.FAQ.id} imgSrc={portrait}>
        <div className="page-title-section">
          <div className="title">Frequently Asked Questions</div>
          <div className="subtitle">
            Have questions about our data or the explorer?
          </div>
        </div>
      </Hero>

      {getSideMenus()}
      {getFAQSections()}

      <Row className="methods-paper-section">
        <Col
          className="methods-paper"
          id="methods"
          xs={{ offset: 0, span: 12 }}
          md={{ offset: 5, span: 7 }}
        >
          <Row className="content">
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

export default Faq
