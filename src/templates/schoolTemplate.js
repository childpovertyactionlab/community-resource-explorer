import React from "react"
import { graphql, Link } from "gatsby"
import StaticMap, { Marker, Source, Layer } from "react-map-gl"
import circle from "@turf/circle"
import i18n from "@pureartisan/simple-i18n"
import { Col, Row, Button } from "react-bootstrap"
import clsx from "clsx"
import { FaInfoCircle } from "react-icons/fa"

// import { logger } from "./../utils/logger"
import Layout from "../components/layout"
import SchoolHero from "../components/SchoolHero"
import NonInteractiveScale from "./../components/NonInteractiveScale"
import SEO from "../components/seo"
import MAP_STYLE from "./../data/map/cpalStyle"
import en_US from "./../data/map/en_US"
import {
  getRoundedValue,
  getHashLeft,
  getPercent,
  getMetric,
  getQuintile,
} from "./utils/utils"
import { CRI_COLORS } from "./../data/map/colors"
import { CPAL_FILTER_TABS, CPAL_METRICS } from "./../data/map/metrics"
import comerica from "../images/comericabank-logo.svg"

export const query = graphql`
  query SchoolPageQuery {
    site(siteMetadata: {}) {
      siteMetadata {
        mapboxApiKey
        title
      }
    }
  }
`

const SchoolPage = ({ data, ...props }) => {
  // console.log("SchoolPage, ", props)

  // Initialize translation plugin
  i18n.init({
    locale: "en_US",
    languages: {
      en_US: en_US,
    },
  })
  const defaultMapStyle = MAP_STYLE
  // Shorten reference to school node.
  const school = props.pageContext.schoolNode
  // Optionally, get all schools for feeder lookup if passed in context
  const allSchools = props.pageContext.allSchools || []
  // Set up viewport for static map.
  const viewport = {
    width: "100%",
    height: 411,
    latitude: school.point_y,
    longitude: school.point_x,
    zoom: 12,
    preserveDrawingBuffer: true,
  }
  // Build the json for the school zone source
  const zoneJson = {
    type: "FeatureCollection",
    features: [],
  }
  const center = [school.point_x, school.point_y]
  var radius = 2
  var options = {
    steps: 64,
    units: "miles",
  }
  const cir = circle(center, radius, options)
  cir.id = school.sln
  // Insert into new json object.
  zoneJson.features.push(cir)

  // Helper to get metric value and z-score
  const getMetricValue = (metric) => {
    // INDEX and scaled fields don't have _estimate suffix
    const fieldName = (metric.includes('INDEX') || metric.includes('/scaled'))
      ? metric.replace(/\//g, "_")
      : metric.replace(/\//g, "_") + "_estimate";
    const value = school[fieldName];
    return typeof value === "string" ? parseFloat(value) : value;
  }
  const getMetricZ = (metric) => {
    const value = school[metric.replace(/\//g, "_") + "_z"];
    return typeof value === "string" ? parseFloat(value) : value;
  }

  // Format citations for display
  const formatCitations = (citations) => {
    if (!citations || citations.length === 0) return null
    return citations.map(c => `${c.citation}, ${c.date}`).join('; ')
  }

  // Helper to get feeder high school name(s)
  const getFeederHSName = () => {
    if (!school.hs || school.hs === "NA" || !allSchools.length) return ""

    // Handle multiple feeder schools (comma-separated IDs like "9,32")
    const hsIds = school.hs.toString().split(',').map(id => id.trim())

    const hsNames = hsIds
      .map(hsId => {
        const hsSchool = allSchools.find(s => s.OBJECTID?.toString() === hsId)
        return hsSchool ? hsSchool.campus : null
      })
      .filter(name => name !== null)

    if (hsNames.length === 0) return ""
    if (hsNames.length === 1) return hsNames[0]
    if (hsNames.length === 2) return hsNames.join(" & ")
    return hsNames.slice(0, -1).join(", ") + " & " + hsNames[hsNames.length - 1]
  }

  // Strip first item from tabs for generating categories
  let categories = CPAL_FILTER_TABS.slice()
  categories.shift()
  // console.log("categories, ", categories)

  /**
   * Constructs a 5-item quintile array from
   * client-supplied quintile 0-4 value.
   * @param  {Number} index
   * @return Array
   */
  const constructQuintiles = (index, high_is_good) => {
    // logger("constructQuintiles, " + index + ", high_is_good = " + high_is_good)
    const quintiles = [0, 0, 0, 0, 0]
    quintiles[index] = 1
    // if (!high_is_good) {
    //   // Reverse the quintile if high is not good.
    //   quintiles.reverse()
    // }
    return quintiles
  }

  const getCustomFeederProse = feeder => {
    // console.log("getCustomFeederProse", feeder, String(feeder).toLowerCase)
    const obj = { __html: "" }
    if (feeder.toLowerCase() === "spruce") {
      obj.__html = i18n.translate("SCHOOL_PROSE_FEEDER_SPRUCE")
    } else if (feeder.toLowerCase() === "lincoln") {
      obj.__html = i18n.translate("SCHOOL_PROSE_FEEDER_LINCOLN")
    } else {
      obj.__html = i18n.translate("SCHOOL_PROSE_FEEDER_GENERIC")
    }
    return obj
  }

  const getMetricCollection = (id, level) => {
    return CPAL_METRICS.filter(el => {
      // Only show scaled metrics (0-100 range) on school pages
      return el.tab === id && el.tab_level === level && el.id.includes('/scaled')
    }).sort((a, b) => {
      return a.order - b.order
    })
  }

  /**
   * Gets quintile robotext about which quintile school is in.
   * @param  String schoolname
   * @param  Number quintile
   * @return String
   */
  const getQuintileRobotext = (schoolname, quintile) => {
    let rankString = ""
    switch (true) {
      case quintile === 0:
        rankString = "UI_SD_B_AVG"
        break
      case quintile === 1:
        rankString = "UI_SD_SB_AVG"
        break
      case quintile === 2:
        rankString = "UI_SD_AVG"
        break
      case quintile === 3:
        rankString = "UI_SD_SA_AVG"
        break
      case quintile === 4:
        rankString = "UI_SD_A_AVG"
        break
      default:
        rankString = "UI_SD_AVG"
    }
    return i18n.translate("SCHOOL_PROSE_AVG", {
      schoolname: schoolname,
      rank: i18n.translate(rankString),
    })
  }

  /**
   * Returns a string list of good or bad metrics for the school.
   * Uses 0-100 scaled values with thresholds: >=75 for top, <=25 for bottom
   * @param  {String} topOrBottom - "top" or "bottom"
   * @return {String}
   */
  const getSchoolMetricList = topOrBottom => {
    let metricArray = []
    for (let i = 0; i < CPAL_METRICS.length; i++) {
      if (metricArray.length >= 3) break
      if (CPAL_METRICS[i].tab_level > 0) {
        // Use scaled values (0-100) 
        const key = CPAL_METRICS[i].id.replace(/\//g, "_") + "_scaled";
        const scaledValue = school[key];
        console.log("Checking metric (scaled):", key, "Value:", scaledValue);
        // Thresholds: top 25% (>=75) or bottom 25% (<=25)
        if ((topOrBottom === "top" && scaledValue >= 75) || (topOrBottom !== "top" && scaledValue <= 25)) {
          metricArray.push(i18n.translate(CPAL_METRICS[i].title))
        }
      }
    }

    // Format the list with "and" before the last item if there are 2 or more
    let formattedList = "";
    if (metricArray.length === 1) {
      formattedList = metricArray[0];
    } else if (metricArray.length === 2) {
      formattedList = metricArray.join(" and ");
    } else if (metricArray.length === 3) {
      formattedList = `${metricArray[0]}; ${metricArray[1]}; and ${metricArray[2]}`;
    }

    if (!formattedList) {
      return topOrBottom === "top"
        ? "No clear strengths identified for this school community."
        : "No clear needs identified for this school community.";
    }

    return i18n.translate(
      topOrBottom === "top" ? "SCHOOL_PROSE_TOP" : "SCHOOL_PROSE_BOTTOM",
      { quintiles: formattedList }
    );
  }

  const printPage = () => {
    if (window) {
      const trackingData = {
        event_category: "School View",
        event_action: "Print school view",
        event_label: school.campus,
        value: school.sln,
      }
      if (typeof window !== "undefined") {
        window.print()
        window.gtag("event", "print", { ...trackingData })
      }
    }
  }

  const keywords = [
    school.campus,
    getFeederHSName(),
  ]

  const getCatDesc = catID => {
    // console.log("getCatDesc(el.default_metric)", catID)
    return CPAL_METRICS.filter(metric => {
      return metric.id === catID
    })[0]
      ? CPAL_METRICS.filter(metric => {
          return metric.id === catID
        })[0].desc
      : false
  }

  console.log("CPAL_METRICS", CPAL_METRICS);
  console.log("school", school);
  console.log("getMetric cri/INDEX/scaled", getMetric("cri/INDEX/scaled", CPAL_METRICS));

  // For CRI index, use the scaled 0-100 value:
  const criValue = Number(school.cri_INDEX_scaled);
  const criMetric = getMetric("cri/INDEX/scaled", CPAL_METRICS);
  console.log("school.cri_INDEX_scaled:", school.cri_INDEX_scaled, typeof school.cri_INDEX_scaled);
  console.log("criValue (as number):", criValue, typeof criValue);
  console.log("criMetric.decimals:", criMetric.decimals);

  return (
    <Layout
      className="school-page"
      activePageId={school.sln}
      disableFooter={false}
    >
      {/* James, modify the SEO data here. */}
      <SEO
        url={props.location.href}
        title={
          data.site.siteMetadata.title +
          ": " +
          school.campus +
          (getFeederHSName() ? ", " + getFeederHSName() : "")
        }
        keywords={keywords}
        image={""}
        description={""}
      />
      <SchoolHero wide={true} className="school-metadata custom-feeder-prose">
        <div className="row-replacement-hack row">
          {/** ^Necessary to mimic row behavior because the navbar and hero row are packaged together. */}
          <Col
            xs={{ span: 10, offset: 1 }}
            md={{ span: 4, offset: 1 }}
            className="school-intro"
          >
            <div className="center-me">
              <h2>{school.campus}</h2>
              <h4>
                {school.address}
                {/* <br />
                {school.CITY}, TX {school.ZIP} */}
                <br />
                {i18n.translate("UI_MAP_TOOLTIP_FEEDER", {
                  name: getFeederHSName() || (school.hs && school.hs !== "NA" ? school.hs : "Various"),
                })}
              </h4>
              <Button
                aria-label={i18n.translate("SCHOOL_BUTTON_PRINT")}
                color="none"
                onClick={printPage}
                className="print-school-page"
              >
                {i18n.translate("SCHOOL_BUTTON_PRINT")}
                <span className="sr-only">
                  {i18n.translate("SCHOOL_BUTTON_PRINT")}
                </span>
              </Button>
            </div>
          </Col>
          <Col
            className="map-section"
            xs={{ span: 12, offset: 0 }}
            md={{ span: 6, offset: 0 }}
          >
            <div
              className="map-parent"
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              <StaticMap
                {...viewport}
                mapboxAccessToken={data.site.siteMetadata.mapboxApiKey}
                mapStyle={defaultMapStyle}
                aria-describedby="map_descriptor"
              >
                <Marker
                  latitude={viewport.latitude}
                  longitude={viewport.longitude}
                >
                  <div
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "5px",
                      border: "1px solid #fff",
                      backgroundColor: CRI_COLORS[
                        getQuintile(
                          criValue,
                          criMetric.range[0],
                          criMetric.range[1],
                          criMetric.high_is_good
                        )
                      ],
                    }}
                  ></div>
                </Marker>
                <Source id="my-data" type="geojson" data={zoneJson}>
                  <Layer
                    id="point"
                    type="fill"
                    paint={{
                      "fill-color": CRI_COLORS[
                        getQuintile(
                          criValue,
                          criMetric.range[0],
                          criMetric.range[1],
                          criMetric.high_is_good
                        )
                      ],
                      "fill-opacity": 0.2,
                    }}
                  />
                </Source>
              </StaticMap>
            </div>
          </Col>
          <Col
            className="map-descriptor"
            xs={{ span: 10, offset: 1 }}
            md={{ span: 3, offset: 5 }}
          >
            <p id="map_descriptor">{i18n.translate("SCHOOL_MAP_DESCRIPTOR")}</p>
          </Col>
        </div>
      </SchoolHero>
      {/** Demographics row*/}
      <Row className="demographics">
        <Col
          className="demo-title"
          xs={{ span: 10, offset: 1 }}
          md={{ span: 4, offset: 1 }}
        >
          <div className="parent-label">
            {i18n.translate("SCHOOL_PROSE_DEMO_LABEL")}
          </div>
        </Col>
        <Col
          className="demo-first"
          xs={{ span: 10, offset: 1 }}
          md={{ span: 3, offset: 0 }}
        >
          <div className="center-me">
            <div className="demo demo-bl">
              <span className="percent">
                {getRoundedValue(school["dem_poptot_estimate"], 0)}
              </span>
              {i18n.translate("UI_MAP_METRIC_DEM_TOTP")}
            </div>
            <div className="demo demo-bl">
              <span className="percent">
                {getRoundedValue(school["dem_undr18_estimate"], 0)}
              </span>
              {i18n.translate("UI_MAP_METRIC_DEM_POPCH")}
            </div>
            <div className="demo demo-bl">
              <span className="percent">
                {getRoundedValue(
                  getPercent(school["dem_black_estimate"], school["dem_poptot_estimate"]),
                  1
                ) + "%"}
              </span>
              {i18n.translate("UI_MAP_METRIC_DEM_POPBL")}
            </div>
          </div>
        </Col>
        <Col
          className="demo-second"
          xs={{ span: 10, offset: 1 }}
          md={{ span: 3, offset: 0 }}
        >
          <div className="center-me">
            <div className="demo demo-hi">
              <span className="percent">
                {getRoundedValue(
                  getPercent(school["dem_hispan_estimate"], school["dem_poptot_estimate"]),
                  1
                ) + "%"}
              </span>
              {i18n.translate("UI_MAP_METRIC_DEM_POPHI")}
            </div>
            <div className="demo demo-as">
              <span className="percent">
                {getRoundedValue(
                  getPercent(school["dem_asian_estimate"], school["dem_poptot_estimate"]),
                  1
                ) + "%"}
              </span>
              {i18n.translate("UI_MAP_METRIC_DEM_POPAS")}
            </div>
            <div className="demo demo-wh">
              <span className="percent">
                {getRoundedValue(
                  getPercent(school["dem_white_estimate"], school["dem_poptot_estimate"]),
                  1
                ) + "%"}
              </span>
              {i18n.translate("UI_MAP_METRIC_DEM_POPWH")}
            </div>
          </div>
        </Col>
      </Row>
      {/** End demographics row*/}
      {/** Intro row */}
      <Row className="school-metadata custom-feeder-prose">
        <Col xs={{ span: 10, offset: 1 }} className="section-heading">
          <h4>{i18n.translate("SCHOOL_PROSE_CRI_SCORE")}</h4>
        </Col>
        <Col
          xs={{ span: 10, offset: 1 }}
          md={{ span: 5, offset: 1 }}
          xl={{ span: 4, offset: 1 }}
          className={clsx("metric-collection-cri_weight", "metric-collection")}
        >
          <p>{i18n.translate(`SCHOOL_CRI_DESCRIPTOR`)}</p>
          <Link
            to="/faq/#about-9"
            className="link-mean-info-button d-none d-md-flex"
          >
            <FaInfoCircle />
            <span className="mean-info-button">
              Why is the mean not always in the middle of the scale?
            </span>
          </Link>
        </Col>
        <Col
          xs={{ span: 10, offset: 1 }}
          md={{ span: 5, offset: 0 }}
          xl={{ span: 4, offset: 0 }}
          className={clsx("metric-collection-cri_weight", "metric-collection")}
        >
          <div className="metric-group">
            <NonInteractiveScale
              className="metric-group"
              metric="cri/INDEX/scaled"
              quintiles={constructQuintiles(
                getQuintile(
                  criValue,
                  criMetric.range[0],
                  criMetric.range[1],
                  criMetric.high_is_good
                ),
                1
              )}
              colors={CRI_COLORS}
              showHash={true}
              hashLeft={getHashLeft(
                criValue,
                criMetric.range[0],
                criMetric.range[1],
                criMetric.high_is_good
              )}
              hashValue={getRoundedValue(
                criValue,
                criMetric.decimals,
                false,
                criMetric.is_currency ? criMetric.is_currency : 0,
                criMetric.as_percent ? criMetric.as_percent : 0
              )}
              showMean={true}
              meanLeft={getHashLeft(
                criMetric.mean,
                criMetric.range[0],
                criMetric.range[1],
                criMetric.high_is_good
              )}
              meanValue={getRoundedValue(
                criMetric.mean,
                criMetric.decimals,
                false,
                criMetric.is_currency ? criMetric.is_currency : 0,
                criMetric.as_percent ? criMetric.as_percent : 0
              )}
              showMinMax={true}
              showLegend={true}
            />
          </div>
          <Link
            to="/faq/#about-8"
            className="link-mean-info-button d-md-none d-lg-none d-xl-none"
          >
            <FaInfoCircle />
            <span className="mean-info-button">
              Why is the mean not always in the middle of the scale?
            </span>
          </Link>
        </Col>
        <Col
          xs={{ span: 10, offset: 1 }}
          md={{ span: 5, offset: 1 }}
          xl={{ span: 4, offset: 1 }}
        >
          <p
            className="quintile-prose"
            dangerouslySetInnerHTML={{
              __html: getQuintileRobotext(
                school.campus,
                getQuintile(
                  criValue,
                  criMetric.range[0],
                  criMetric.range[1],
                  criMetric.high_is_good
                )
              ),
            }}
          ></p>
          <p
            className="school-prose-top"
            dangerouslySetInnerHTML={{
              __html: getSchoolMetricList("top"),
            }}
          ></p>
          <p
            className="school-prose-bottom"
            dangerouslySetInnerHTML={{
              __html: getSchoolMetricList("bottom"),
            }}
          ></p>
        </Col>
        <Col
          xs={{ span: 10, offset: 1 }}
          md={{ span: 5, offset: 0 }}
          xl={{ span: 4, offset: 0 }}
          className={clsx("metric-collection-cri_weight", "metric-collection")}
        >
          <div dangerouslySetInnerHTML={getCustomFeederProse(getFeederHSName())} />
        </Col>
      </Row>
      {/** Iterate through other categories */}
      {categories.map(el => {
        return (
          <Row
            className={clsx("row-metric-" + el.id, "row-metric-group")}
            key={"row_metric_" + el.id}
          >
            <Col
              xs={{ span: 10, offset: 1 }}
              className={clsx(
                "metric-collection-" + el.id,
                "metric-collection",
                "metric-collection-header"
              )}
            >
              <h5>{i18n.translate(el.title)}</h5>
            </Col>
            {!!getCatDesc(el.default_metric) && (
              <Col
                xs={{ span: 10, offset: 1 }}
                md={{ span: 5, offset: 1 }}
                xl={{ span: 4, offset: 1 }}
                className="metric-group cat-intro"
                dangerouslySetInnerHTML={{
                  __html: i18n.translate(getCatDesc(el.default_metric)),
                }}
              ></Col>
            )}
            {getMetricCollection(el.id, 0).map(el => {
              return (
                <Col
                  xs={{ span: 10, offset: 1 }}
                  md={{ span: 9, offset: 0 }}
                  xl={{ span: 8, offset: 0 }}
                  className="metric-group level-0"
                  id={"metric_" + el.id}
                  key={"metric_" + el.id}
                >
                  <h6>{i18n.translate(el.title)}</h6>
                  {el.citations && el.citations.length > 0 && (
                    <p className="metric-citation">{formatCitations(el.citations)}</p>
                  )}
                  <NonInteractiveScale
                    className={"scale-" + el.id}
                    id={"scale_" + el.id}
                    key={"scale_" + el.id}
                    metric={el.id}
                    quintiles={constructQuintiles(
                      getQuintile(
                        getMetricValue(el.id),
                        el.range[0],
                        el.range[1],
                        el.high_is_good
                      ),
                      el.high_is_good
                    )}
                    colors={el.colors}
                    showHash={true}
                    hashLeft={getHashLeft(
                      getMetricValue(el.id),
                      el.range[0],
                      el.range[1],
                      el.high_is_good
                    )}
                    hashValue={getRoundedValue(
                      getMetricValue(el.id),
                      el.decimals,
                      false,
                      el.is_currency ? el.is_currency : 0,
                      el.as_percent ? el.as_percent : 0
                    )}
                    showMean={true}
                    meanLeft={getHashLeft(
                      el.mean,
                      el.range[0],
                      el.range[1],
                      el.high_is_good
                    )}
                    meanValue={getRoundedValue(
                      el.mean,
                      el.decimals,
                      false,
                      el.is_currency ? el.is_currency : 0,
                      el.as_percent ? el.as_percent : 0
                    )}
                    showMinMax={true}
                  />
                </Col>
              )
            })}
            {getMetricCollection(el.id, 1).map((el, i) => {
              return (
                <Col
                  xs={{ span: 10, offset: 1 }}
                  md={{ span: 9, offset: 0 }}
                  xl={{ span: 8, offset: 0 }}
                  id={"metric_" + el.id}
                  key={"metric_" + el.id}
                  className={clsx(
                    "metric-collection-" + el.id,
                    "metric-collection",
                    "metric-group",
                    "level-1"
                  )}
                >
                  <h6>{i18n.translate(el.title)}</h6>
                  {el.citations && el.citations.length > 0 && (
                    <p className="metric-citation">{formatCitations(el.citations)}</p>
                  )}
                  <NonInteractiveScale
                    className={"scale-" + el.id}
                    id={"scale_" + el.id}
                    key={"scale_" + el.id}
                    metric={el.id}
                    quintiles={constructQuintiles(
                      getQuintile(
                        getMetricValue(el.id),
                        el.range[0],
                        el.range[1],
                        el.high_is_good
                      ),
                      el.high_is_good
                    )}
                    colors={el.colors}
                    showHash={true}
                    hashLeft={getHashLeft(
                      getMetricValue(el.id),
                      el.range[0],
                      el.range[1],
                      el.high_is_good
                    )}
                    hashValue={getRoundedValue(
                      getMetricValue(el.id),
                      el.decimals,
                      false,
                      el.is_currency ? el.is_currency : 0,
                      el.as_percent ? el.as_percent : 0
                    )}
                    showMean={true}
                    meanLeft={getHashLeft(
                      el.mean,
                      el.range[0],
                      el.range[1],
                      el.high_is_good
                    )}
                    meanValue={getRoundedValue(
                      el.mean,
                      el.decimals,
                      false,
                      el.is_currency ? el.is_currency : 0,
                      el.as_percent ? el.as_percent : 0
                    )}
                    showMinMax={true}
                  />
                </Col>
              )
            })}
          </Row>
        )
      })}
      <Row className="row-print-only">
        <Col
          xs={{ span: 10, offset: 1 }}
          md={{ span: 4, offset: 1 }}
          className="vcenter"
        >
          <span className="cpal-logo"></span>
        </Col>
        <Col xs={{ span: 10, offset: 1 }} md={{ span: 4, offset: 1 }}>
          <div className="funder-wrapper">
            <a
              href="https://www.comerica.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img alt="Comerica" src={comerica} />
            </a>
            <p className="text">
              Comerica generously funded the development of the Community
              Resource Explorer
            </p>
          </div>
        </Col>
      </Row>
    </Layout>
  )
}

export default SchoolPage
