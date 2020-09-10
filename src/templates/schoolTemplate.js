import React from "react"
import { graphql } from "gatsby"
import StaticMap, { Marker, Source, Layer } from "react-map-gl"
import circle from "@turf/circle"
import i18n from "@pureartisan/simple-i18n"
import { Col, Row, Button } from "react-bootstrap"
import clsx from "clsx"
import { FaPrint } from "react-icons/fa"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"

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

  // Initialize translantion plugin
  i18n.init({
    locale: "en_US",
    languages: {
      en_US: en_US,
    },
  })
  const defaultMapStyle = MAP_STYLE
  // Shorten reference to school node.
  const school = props.pageContext.schoolNode
  // Set up viewport for static map.
  const viewport = {
    width: "100%",
    height: 411,
    latitude: school.POINT_Y,
    longitude: school.POINT_X,
    zoom: 12,
    preserveDrawingBuffer: true,
  }
  // Build the json for the school zone source
  const zoneJson = {
    type: "FeatureCollection",
    features: [],
  }
  const center = [school.POINT_X, school.POINT_Y]
  var radius = 2
  var options = {
    steps: 64,
    units: "miles",
  }
  const cir = circle(center, radius, options)
  cir.id = school.SLN
  // Insert into new json object.
  zoneJson.features.push(cir)

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
      return el.tab === id && el.tab_level === level
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
   * @param  {[type]} sln [description]
   * @return {[type]}     [description]
   */
  const getSchoolMetricList = topOrBottom => {
    // console.log("getSchoolMetricList")
    let metricArray = []
    if (topOrBottom === "top") {
      // console.log("top")
      for (let i = 0; i < CPAL_METRICS.length; i++) {
        // console.log("top, ", CPAL_METRICS[i].id)
        if (metricArray.length >= 3) break
        if (CPAL_METRICS[i].tab_level > 0) {
          if (school[CPAL_METRICS[i].id + "_sd"] === 4) {
            metricArray.push(i18n.translate(CPAL_METRICS[i].title))
          }
        }
      }
      return i18n.translate("SCHOOL_PROSE_TOP", {
        quintiles: metricArray.join("; ").toLowerCase(),
      })
    } else {
      for (let i = 0; i < CPAL_METRICS.length; i++) {
        if (metricArray.length >= 3) break
        if (CPAL_METRICS[i].tab_level > 0) {
          if (school[CPAL_METRICS[i].id + "_sd"] === 0) {
            metricArray.push(i18n.translate(CPAL_METRICS[i].title))
          }
        }
      }
      return i18n.translate("SCHOOL_PROSE_BOTTOM", {
        quintiles: metricArray.join("; ").toLowerCase(),
      })
    }
  }

  const printPage = () => {
    if (window) {
      window.print()
    }
    trackCustomEvent({
      // string - required - The object that was interacted with (e.g.video)
      category: "Print School View",
      // string - required - Type of interaction (e.g. 'play')
      action: "click",
      // string - optional - Useful for categorizing events (e.g. 'Spring Campaign')
      label: school.SCHOOLNAME,
      // number - optional - Numeric value associated with the event. (e.g. A product ID)
      value: school.SLN,
    })
  }

  const keywords = [
    school.SCHOOLNAME,
    i18n.translate("UI_MAP_TOOLTIP_FEEDER", { name: school.Feeder }),
  ]

  return (
    <Layout
      className="school-page"
      activePageId={school.SLN}
      disableFooter={false}
    >
      {/* James, modify the SEO data here. */}
      <SEO
        url={props.location.href}
        title={
          data.site.siteMetadata.title +
          ": " +
          school.SCHOOLNAME +
          ", " +
          i18n.translate("UI_MAP_TOOLTIP_FEEDER", { name: school.Feeder })
        }
        keywords={keywords}
        image={""}
        description={""}
      />
      <SchoolHero wide={true}></SchoolHero>
      {/** Row with map and heading */}
      <Row className="school-metadata custom-feeder-prose">
        <Col xs={{ span: 10, offset: 1 }} md={{ span: 5, offset: 1 }}>
          <h2>{school.SCHOOLNAME}</h2>
          <h4>
            {school.ADDRESS}
            <br />
            {school.CITY}, TX {school.ZIP}
          </h4>
          <h3>
            {i18n.translate("UI_MAP_TOOLTIP_FEEDER", { name: school.Feeder })}
          </h3>
          <Button
            aria-label={i18n.translate("SCHOOL_BUTTON_PRINT")}
            color="none"
            onClick={printPage}
            className="print-school-page"
          >
            <FaPrint /> {i18n.translate("SCHOOL_BUTTON_PRINT")}
            <span className="sr-only">
              {i18n.translate("SCHOOL_BUTTON_PRINT")}
            </span>
          </Button>
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
              mapboxApiAccessToken={data.site.siteMetadata.mapboxApiKey}
              mapStyle={defaultMapStyle}
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
                    backgroundColor: CRI_COLORS[school.cri_weight_sd],
                  }}
                ></div>
              </Marker>
              <Source id="my-data" type="geojson" data={zoneJson}>
                <Layer
                  id="point"
                  type="fill"
                  paint={{
                    "fill-color": CRI_COLORS[2],
                    "fill-opacity": 0.2,
                  }}
                />
              </Source>
            </StaticMap>
          </div>
        </Col>
      </Row>

      {/** Intro row */}
      <Row className="school-metadata custom-feeder-prose">
        <Col xs={{ span: 10, offset: 1 }} lg={{ span: 4, offset: 1 }}>
          <h2>{school.SCHOOLNAME}</h2>
          <h4>
            {school.ADDRESS}
            <br />
            {school.CITY}, TX {school.ZIP}
          </h4>
          <h3>
            {i18n.translate("UI_MAP_TOOLTIP_FEEDER", { name: school.Feeder })}
          </h3>
          <Button
            aria-label={i18n.translate("SCHOOL_BUTTON_PRINT")}
            color="none"
            onClick={printPage}
            className="print-school-page"
          >
            <FaPrint /> {i18n.translate("SCHOOL_BUTTON_PRINT")}
            <span className="sr-only">
              {i18n.translate("SCHOOL_BUTTON_PRINT")}
            </span>
          </Button>
        </Col>
        <Col
          xs={{ span: 10, offset: 1 }}
          lg={{ span: 4, offset: 1 }}
          className="custom-feeder"
        >
          <div className="demo-callout">
            <div className="parent-label">
              {i18n.translate("SCHOOL_PROSE_DEMO_LABEL")}
              <hr></hr>
            </div>
            <div className="demographics">
              <div className="demo demo-bl">
                <span className="percent">
                  {getRoundedValue(
                    getPercent(school.dem_popbl, school.dem_totp),
                    1
                  ) + "%"}
                </span>
                {i18n.translate("UI_MAP_METRIC_DEM_POPBL")}
              </div>
              <div className="demo demo-hi">
                <span className="percent">
                  {getRoundedValue(
                    getPercent(school.dem_pophi, school.dem_totp),
                    1
                  ) + "%"}
                </span>
                {i18n.translate("UI_MAP_METRIC_DEM_POPHI")}
              </div>
              <div className="demo demo-as">
                <span className="percent">
                  {getRoundedValue(
                    getPercent(school.dem_popas, school.dem_totp),
                    1
                  ) + "%"}
                </span>
                {i18n.translate("UI_MAP_METRIC_DEM_POPAS")}
              </div>
              <div className="demo demo-wh">
                <span className="percent">
                  {getRoundedValue(
                    getPercent(school.dem_popwh, school.dem_totp),
                    1
                  ) + "%"}
                </span>
                {i18n.translate("UI_MAP_METRIC_DEM_POPWH")}
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="metric-row">
        <Col
          xs={{ span: 10, offset: 1 }}
          md={{ span: 4, offset: 1 }}
          className={clsx("metric-collection-cri_weight", "metric-collection")}
        >
          <div className="metric-group">
            <h4>{i18n.translate("SCHOOL_PROSE_CRI_SCORE")}</h4>
            <NonInteractiveScale
              className="metric-group"
              metric="cri_weight"
              quintiles={constructQuintiles(school.cri_weight_sd, 1)}
              colors={CRI_COLORS}
              showHash={true}
              hashLeft={getRoundedValue(
                getHashLeft(school.cri_weight, 0, 100),
                0
              )}
              hashValue={school.cri_weight}
              showMean={true}
              meanLeft={getHashLeft(
                getMetric("cri_weight", CPAL_METRICS).mean,
                0,
                100
              )}
              meanValue={getRoundedValue(
                getMetric("cri_weight", CPAL_METRICS).mean,
                0
              )}
              showMinMax={true}
            />
          </div>
        </Col>
      </Row>

      <Row className="custom-feeder-prose">
        <Col
          xs={{ span: 10, offset: 1 }}
          md={{ span: 4, offset: 1 }}
          className={clsx("metric-collection-cri_weight", "metric-collection")}
        >
          <div dangerouslySetInnerHTML={getCustomFeederProse(school.Feeder)} />
        </Col>
        <Col xs={{ span: 10, offset: 1 }} md={{ span: 4, offset: 1 }}>
          <div
            className="quintile-prose"
            dangerouslySetInnerHTML={{
              __html: getQuintileRobotext(
                school.SCHOOLNAME,
                school.cri_weight_sd
              ),
            }}
          ></div>
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
              {getMetricCollection(el.id, 0).map(el => {
                // console.log(
                //   "in metric collection, element = ",
                //   el,
                //   school[el.id]
                // )
                return (
                  <div
                    className="metric-group"
                    id={"metric_" + el.id}
                    key={"metric_" + el.id}
                  >
                    <h6>{i18n.translate(el.title)}</h6>
                    <NonInteractiveScale
                      className={"scale-" + el.id}
                      id={"scale_" + el.id}
                      key={"scale_" + el.id}
                      metric={el.id}
                      quintiles={constructQuintiles(
                        school[el.id + "_sd"],
                        el.high_is_good
                      )}
                      colors={el.colors}
                      showHash={true}
                      hashLeft={getHashLeft(
                        school[el.id],
                        el.range[0],
                        el.range[1],
                        el.high_is_good
                      )}
                      hashValue={getRoundedValue(
                        school[el.id],
                        el.decimals,
                        false,
                        el.is_currency ? el.is_currency : 0
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
                        el.is_currency ? el.is_currency : 0
                      )}
                      showMinMax={true}
                    />
                  </div>
                )
              })}
            </Col>
            <Col
              xs={{ span: 10, offset: 1 }}
              className={clsx(
                "metric-collection-" + el.id,
                "metric-collection"
              )}
            >
              {getMetricCollection(el.id, 1).map(el => {
                // Metric collection level 1, sub-metrics
                // console.log(
                //   "in secondary metric collection, el = ",
                //   el,
                //   school["econ_totjobs"]
                // )
                return (
                  <div
                    className="metric-group"
                    id={"metric_" + el.id}
                    key={"metric_" + el.id}
                  >
                    <h6>{i18n.translate(el.title)}</h6>
                    <NonInteractiveScale
                      className={"scale-" + el.id}
                      id={"scale_" + el.id}
                      key={"scale_" + el.id}
                      metric={el.id}
                      quintiles={constructQuintiles(
                        school[el.id + "_sd"],
                        el.high_is_good
                      )}
                      colors={el.colors}
                      showHash={true}
                      hashLeft={getHashLeft(
                        school[el.id],
                        el.range[0],
                        el.range[1],
                        el.high_is_good
                      )}
                      hashValue={getRoundedValue(
                        school[el.id],
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
                  </div>
                )
              })}
            </Col>
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
