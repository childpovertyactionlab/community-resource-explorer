import React from "react"
import totalJobs from "./images/school-faq-example.jpg"
import mapView from "./images/faq-map-view.jpg"
import mapLayers from "./images/faq-map-layers.jpg"
import mapScale from "./images/faq-scale.jpg"
import { Link } from "gatsby"

import _ from "lodash"

const HOME = {
  id: "home",
  path: "/",
  name: "Home",
  meta: { // if empty, will default to the values in gatsby-config.js
    description: '',
    image: '',
    keywords: [],
  },
}
const EXPLORER = {
  id: "explorer",
  path: "/explorer/",
  name: "Explorer",
  meta: {
    description: '',
    image: '',
    keywords: [],
  },
}
const ABOUT = {
  id: "about",
  path: "/about",
  name: "About",
  meta: {
    description: '',
    image: '',
    keywords: [],
  },
}
const ACTION = {
  id: "action",
  path: "/in-action/",
  name: "Explorer in Action",
  meta: {
    description: '',
    image: '',
    keywords: [],
  },
}
const FAQ = {
  id: "faq",
  path: "/faq",
  name: "FAQ & Methods",
  meta: {
    description: '',
    image: '',
    keywords: [],
  },
}

const DATA = {
  id: "data",
  path: "/get-the-data",
  name: "Get the data",
  meta: {
    description: '',
    image: '',
    keywords: [],
  },
  footerOnly: true,
}

const CONTACT = {
  id: "contact",
  path: "/contact",
  name: "Contact us",
  meta: {
    description: '',
    image: '',
    keywords: [],
  },
}

// _________ non-menu pages ___

// TODOcms
const ISD = {
  id: "isd",
  path: ACTION.path + "dallas-isd",
  name: "Dallas ISD",
  meta: {
    description: '',
    image: '',
    keywords: [],
  },
}

const OPERATION = {
  id: "operation",
  path: ACTION.path + "operation-connectivity",
  name: "Operation Connectivity",
  meta: {
    description: '',
    image: '',
    keywords: [],
  },
}

const SIGNUP = {
  id: "signup",
  path: "/signup",
  name: "Sign up",
  meta: {
    description: '',
    image: '',
    keywords: [],
  },
}

const THANKS = {
  id: "thanks",
  path: "/thank-you",
  name: "Thank you",
  meta: {
    description: '',
    image: '',
    keywords: [],
  },
}

const pages = { HOME, EXPLORER, ABOUT, ACTION, FAQ, CONTACT, OPERATION, ISD, DATA, SIGNUP, THANKS }
const menuPages = [HOME, EXPLORER, ABOUT, ACTION, FAQ, DATA, CONTACT]

// FAQs

const whatIs = {
  text: "What is the Community Resource Explorer and why was it created?",
  body:
    "The Community Resource Explorer, or CRE, is a data tool that illustrates how resources are allocated in neighborhoods around Dallas ISD schools. The tool was created to help individuals and institutions see and act on relevant, specific data at the neighborhood level. Reliable, current, and neighborhood-specific data has been hard to come by, but the CRE ensures that communities have the information they need to thrive.",
}

const whoBuilt = {
  text: "Who built the Community Resource Explorer?",
  body:
    "The Child Poverty Action Lab (CPAL) developed the concept for the CRE, with input and support from several other local organizations. CPAL was also responsible for initial data collection and analysis and will continue to maintain and upgrade the tool as needed. Hyperobjekt was the web developer that created the container site and elevated the user experience.",
}

const whoUse = {
  text: "Who should use the Community Resource Explorer?",
  body: (
    <p>
      The CRE is for use by <i>individuals</i>, like residents of a
      neighborhood included in the CRE, and also <i>institutions</i>, like
      nonprofits, public agencies, and neighborhood associations.
    </p>
  ),
}

const howFunded = {
  text: "How was the Community Resource Explorer funded?",
  body: "The CRE was funded with generous support from Comerica Bank.",
}


const backgroundSection = {
  id: "background",
  title: "Background",
  questions: [
    whatIs,
    whoBuilt,
    whoUse,
    howFunded
  ],
}

const whySchools = {
  text: "Why is the Community Resource Explorer oriented around schools?",
  body:
    "The data is organized around schools because Dallas ISD initially requested neighborhood-level data from CPAL in support of the Equity in Bond Planning project. Dallas ISD wanted to understand how resources were allocated in the immediate vicinity around its schools, so mapping available data within a two-mile radius around each neighborhood school reveals what is/is not available to students and their families. Additionally, schools are often the anchor public institution for a community, and they exist all over the city, making them a relevant centerpoint for the data. In the future, CPAL is interested in further developing the tool so that a user can put in any address (such as a home, community center, faith-based institution, etc.) and see the data for the two-mile radius around that address.",
}

const whichSchools = {
  text: "Which schools are included in the Community Resource Explorer?",
  body:
    "The 189 neighborhood schools in Dallas ISD are currently included in the CRE. Magnet schools, transformation and innovation schools, and alternative schools are not included.",
}

const differenceCri = {
  text: "What is the difference between the Community Resource Explorer and the Community Resource Index?",
  body: (
    <p>
      The Community Resource <i>Explorer</i> (CRE) is this newly-built website to house neighborhood-level data related to resource allocation and quality of life in Dallas. The Community Resource <i>Index</i> (CRI) is a statistical approach that summarizes a collection of data—in this case, neighborhood indicators—into one value for comparison. Every school included in the Explorer has six different index values: one each for Economics, Education, Family, Community, and Health, and one overall index value that represents a combination of all five categories.
    </p>
  ),
}

const dataSource = {
  text: "Where did the data come from for the Community Resource Explorer?",
  body: (
    <p>
      Data featured in the CRE from from a variety of public sources, such as the U.S. Census Bureau, the Dallas Independent School District, and the Centers for Disease Control & Prevention. A few data points were acquired from third-party data vendors (spending on fresh fruits and vegetables) or collected by CPAL (e.g., supermarkets and grocery stores, community health clinics). To learn more about the data used for this project, visit the {" "}<a href="/get-the-data">Get the Data page</a>.
    </p>
  ),
}

const indicatorChoice = {
  text: "How did you decide on these indicators?",
  body: (
    <p>
      {" "}
      To determine which indicators to include, we looked for (1) indicators that have an impact on the quality of life for kids and their families, (2) indicators that have reliable, current data that can be mapped within a two-mile radius, and (3) indicators that can be acted upon by individuals and institutions. We also studied similar data projects, such as the{" "}
      <a
        target="_blank"
        rel="noreferrer"
        href="https://dallascityhall.com/departments/office-of-equity/DCH%20Documents/equality-indicators-booklet-2019.pdf"
      >
        Dallas Equity Indicators
          </a>
          , in consideration of what to cover in the CRE.
    </p>
  ),
}

const dataCalculation = {
  text: "How was the Community Resource Index calculated?",
  body: (
    <p>
      The CRI was calculated by aggregating or summarizing data related to five key categories (Community, Economics, Education, Family, and Health) for the geography within two miles of every neighborhood elementary, middle, and high school campus in Dallas ISD. Data related to each of the five categories were analyzed separately and combined into indices to help identify relative differences in resource allocation - i.e., where there are an abundance of resources and where there fewer resources that are related to student outcomes and community-level quality of life. The five scores were then combined into an overall CRI score. If you want to learn more about how we calculated the CRI, you can read the{" "}
      <a href="https://docs.google.com/document/d/16fytZ3X0ubGWUc3Zm_BC8ovOjJ0ro4tJUQfhhGY5WgI/edit?usp=drivesdk" target="_blank">read our Methodology paper</a>.
    </p>
  ),
}

const whyRadius = {
  text:
    "Why is the data calculated within a two-mile radius of each school?",
  body:
    "We used a two-mile area around each campus to calculate the Community Resource Index so that we could capture the broader dynamics of households and families living in each community. Many of the resources that we include serve relatively large geographies, such as city-operated libraries or recreation centers, and a large number of campuses would not have one of those features located within one mile, making the Index much harder to interpret. Similarly, if we had used a larger area, such as three or five miles, we would not be able to see the nuance/difference between campus communities since the geography of one campus community would overlap significantly with several others.",
}

const mapOrganization = {
  text: "How is the data organized in the map view?",
  body:
    <span>
    <p>The map view shows all 189 school communities included in the Explorer, color-coded to illustrate each community’s overall Community Resource Index (CRI) value.</p>
    <img alt="Dallas ISD map" src={mapView} />
    <p>Communities in green have CRI values that are well above average, communities in purple/blue have CRI values that are well below average, and communities in aqua have CRI values that are about average. CRI values range from 0 to 100; values closer to 100 indicate more resources than values closer to 0.</p> 
    <img alt="example CRI scale" src={mapScale} />
    <p>You can zoom in on the map to see a smaller geographic footprint. You can also turn on layers to see the historical redlining map, feeder pattern attendance boundaries, and the racial and ethnic demographics across the city.
    <img alt="map layers" src={mapLayers} /> 
      <br />In the map view, you can see data for each sub-index category (Economics, Education, Family, Community, Health) and individual indicators as well—turn these on by clicking on the “Metrics” button on the left-hand side of the window. For each sub-index category and each indicator, the color-coding pattern is the same: communities in green always represent the above average condition, and communities in purple/blue always represent the below average condition. If you’re interested in analyzing a smaller subset of campuses, you can adjust the map display by selecting a category or indicator and selecting a piece of the distribution to display. For example, for Median Household Income, you can select the far right (dark green) square on the distribution, and only the campus communities with well above average Median Household Income will appear on the map.</p>
    </span>,
}

const profileOrganization = {
  text: "How is the data organized on the school profile? How should I interpret the visualizations of each indicator?",
  body:
    <span>Each profile includes information about the school’s address and feeder pattern as well as the demographics, assets, and needs of the community surrounding the school. It’s important to keep in mind that the data reflect the geography of the two-mile radius around the school, not the school itself. For example, the racial and ethnic make-up of the community reflects all residents in the surrounding neighborhood, not just the students at the school.<br />
      <br />Every profile also includes the community’s overall Community Resource Index (CRI) value, representing all the indicators taken together and illustrating how well-resourced the community is relative to the other campus communities, as well as five sub-index categories, one each for Economics, Education, Family, Community, and Health. Each category includes (1) an index value, representing all the indicators included in the category and illustrating how well-resourced the community is relative to the other campus communities in that particular category and (2) a series of indicators that provide both raw data about the community as well as where the community falls in the distribution of all communities on each indicator. For example, the sample indicator below, Total Jobs, tells us:
        <img alt="total jobs scale" src={totalJobs} />
      <ul><li>The <b>range</b> of Total Jobs across all campus communities. The minimum (lowest) is 1,468. The maximum (highest) is 209,962.</li>
        <li>The <b>mean</b>, or average, of Total Jobs across all campus communities. Marked by a tick mark (vertical line), the mean number of jobs is 27,096. For most indicators, the tick mark for the mean will be about halfway between the min and the max (i.e., near the centerpoint of the line). For some indicators, like Total Jobs, the tick mark might be further left or right, indicating skew in the data. In this case, Total Jobs skews left—209,962 is an outlier.</li>
        <li>The <b>actual number</b> of Total Jobs for this particular school community. Marked by a red dot, the actual number of jobs within the two-mile radius around this school is 53,614.</li>
        <li><b>Where this school community falls in the distribution</b> of all school communities in Total Jobs. This is represented by the rectangular bar beneath the thin line. Highlighted in light green, this school community is slightly above average in the number of jobs. If the bar were highlighted dark green on the far right end of the distribution, the school community would be well above average in the number of jobs. If the bar were highlighted aqua blue in the center of the distribution, the school community would be about average in the number of jobs. If the bar were highlighted light purple/blue to the left of center, the school community would be slightly below average. If the bar were highlighted dark purple/blue to the far left of center, the school community would be well below average. The distribution approximates a normal distribution, meaning a bell curve where most school communities fall in the center/about average and fewer are slightly or well above/below average.</li></ul>
    </span>
}

const newVersion = {
  text: "How is this new version of the Community Resource Index different from earlier versions?",
  body:
    <span>As we transitioned to the new version of the CRI, we made improvements to the underlying data and platform to make the tool easier to use and understand. We listened to advice from our peers and community members to add new data points, change the way we measure others, and remove some that we felt were not the best representation of our local communities. A few high-level changes to be aware of include:
        <ul><li>We added new data, such as the percentage of households that have access to broadband services and the number of community health clinics within each two-mile area. Check the {" "}<a href="/get-the-data">Get the Data page</a> to learn more about all of the data that is featured in the Community Resource Explorer.</li>
        <li>The calculations for each of the five subindices (Community, Economics, Education, Family, and Health) as well as the overall Community Resource Index were improved to help overcounting indicators that are highly related (such as percentage of low-wage jobs and median household income). We did this by using Principal Components Analysis to group and weight subsets of data for each subindex, as well as by removing indicators like doctor’s offices that made it harder to produce meaningful data for each two-mile area. We also adjusted for population density.</li>
        <li>The Community Resource Explorer makes it easier to understand the data that drives the CRI. We worked to make an interface that is easier to navigate, that allows for more interaction with the different datasets, and that hopefully doesn’t have too many glitches.</li>
        <li>You can now export PDF reports that include the data for all elements of the CRI for any one campus community in Dallas ISD. To do so, click on a school within the Explorer to view its full report, then click “Export PDF” to download.</li></ul>
        Learn more about the changes we made to the data and <a href="https://docs.google.com/document/d/16fytZ3X0ubGWUc3Zm_BC8ovOjJ0ro4tJUQfhhGY5WgI/edit?usp=drivesdk">Read the Methods paper</a>.
        </span>
}

const myNeighborhood = {
  text:
    "The data for my neighborhood doesn’t match my personal experience. Why might that be?",
  body: (
    <div>
      <p>
      The data associated with a particular neighborhood covers a two-mile radius (or four-mile diameter, with the school at the center), which is a pretty big geographic footprint. When people think of their neighborhood, they might think quite small - perhaps just the homes and school nearest to them. Other people might think quite large—perhaps all of Oak Cliff or East Dallas. How you imagine the boundary lines of your neighborhood will shape how you perceive the data. Additionally, schools that sit on the edge of Downtown Dallas/other major business hubs or on the edge of the Medical District/other major healthcare hubs will capture a volume of data that might far surpass what a resident notices and can access in his/her immediate vicinity. For example, the two-mile radius around a school in South Dallas/Fair Park will capture some parts of Downtown Dallas, including businesses and jobs that are not necessarily representative of what exists right around the feeder pattern schools. Finally, the majority of data included in the CRE come from publicly-available databases. Sometimes, those databases might code certain data elements (like a health clinic) differently than we would. We are continuing to work to “clean” the data to ensure that it reflects the lived experiences of residents as closely as possible.
          </p>
    </div>
  ),
}

const aboutSection = {
  id: "about",
  title: "About the Data",
  questions: [
    whySchools,
    whichSchools,
    differenceCri,
    dataSource,
    indicatorChoice,
    dataCalculation,
    whyRadius,
    mapOrganization,
    profileOrganization,
    newVersion,
    myNeighborhood,
  ],
}

const howUsed = {
  text: "How is the Community Resource Explorer currently being used?",
  body: (
    <span>
      The CRE is currently being used by Dallas ISD as part of the Equity in Bond Planning project, a commitment to build Student and Family Resource Centers in four neighborhoods that were historically redlined and shut-out of economic development opportunities. The CRE was one data tool among several that Dallas ISD administrators used to identify where the need exists for more equitable resource allocation. The CRE data has also been part of community engagement efforts to co-create a vision for the resource centers: residents, parents and students, and community leaders have shared their own experiences in the neighborhood and have identified assets and needs aligned to the five CRE categories. <Link to="/in-action/dallas-isd">Learn more about the project here.</Link>
      </span>
  ),
}

const whatRedlining = {
  text: "What is redlining?",
  body: (
    <span>
      Redlining was a practice by the Home Owners Loan Corporation in the 1930s that “arrayed neighborhoods by risk, determined by housing age and density as well as racial composition . . . Neighborhoods that contained black and brown populations were literally highlighted in red and residents were deemed less credit-worthy of a long-term, fixed rate mortgage” (
      <a
        href="https://www.localhousingsolutions.org/plan/addressing-neighborhood-disparities-overview/addressing-neighborhood-disparities/"
        target="_blank"
        rel="noreferrer"
      >
        NYU Furman Center
          </a>
          ). In redlining maps, you’ll see four colors:
      <ul>
        <li>
          Residential areas highlighted in red (labeled “hazardous”) were
          typically home to Black residents, older housing, and poorer
          households;
            </li>
        <li>
          Areas in yellow (labeled “definitely declining”) were also usually
          home to majority people of color;
            </li>
        <li>
          Areas in blue (labeled “still desirable”) were usually home to
          majority working-class white residents;
            </li>
        <li>
          Areas in green (labeled “best”) were usually home to professional
          class white residents.
            </li>
      </ul>
          In short, the practice of redlining meant that people of color were
          denied homeownership opportunities. Neighborhoods that were redlined
          were also often excluded from economic development opportunities. The
          long-term impact of redlining is still very much felt today, as
          illustrated within the Community Resource Explorer.
    </span>
  ),
}

const useSection = {
  id: "use",
  title: "Use of the CRE",
  questions: [
    howUsed,
    whatRedlining,
  ],
}

const neighborhoodInsight = {
  text:
    "I have insight about my neighborhood that I would like to share. How can I do that?",
  body: (
    <p>
      We plan to continue adding to the CRE over time and are eager to list
      the many assets of Dallas neighborhoods that might not be currently
      reflected. To that end, please share insight about your neighborhood
          by completing the form <a href="/contact">here</a>.
    </p>
  ),
}

const expandCre = {
  text:
    "I am interested in the Community Resource Explorer for schools outside of Dallas ISD. Whom should I talk to?",
  body: (
    <p>
      Feel free to email Ashley Flores, Senior Director at the Child Poverty
          Action Lab, at{" "}
      <a href="mailto:ashley@childpovertyactionlab.org">
        ashley@childpovertyactionlab.org
          </a>
          .
    </p>
  ),
}

const stayInformed = {
  text: "How can I stay informed about updates to the Community Resource Explorer?",
  body: (
    <p>
      Sign up using the form <a href="#sign-up-bar">here</a> to
          receive future news about the CRE.
    </p>
  ),
}

const nextStepsSection = {
  id: "next-steps",
  title: "Next Steps",
  questions: [
    neighborhoodInsight,
    expandCre,
    stayInformed,
  ],
}

const faqSections = [backgroundSection, aboutSection, useSection, nextStepsSection]

const faqSectionMap = {
  backgroundSection,
  aboutSection,
  useSection,
  nextStepsSection,
}

const faqQuestionMap = {
  whatIs,
  whoBuilt,
  whoUse,
  howFunded,
  whichSchools,
  differenceCri,
  dataSource,
  indicatorChoice,
  dataCalculation,
  whyRadius,
  mapOrganization,
  profileOrganization,
  newVersion,
  myNeighborhood,
  howUsed,
  whatRedlining,
  neighborhoodInsight,
  expandCre,
  stayInformed,
}

// keep in sync with $sticky-header-height in _variables.scss
const stickyHeaderHeight = 64

const salesForceUrl = "https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"

export { pages, menuPages, stickyHeaderHeight, salesForceUrl, faqSections, faqQuestionMap, faqSectionMap }
