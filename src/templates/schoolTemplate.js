import React from "react"
import { graphql } from "gatsby"
import StaticMap, { Marker, Source, Layer } from "react-map-gl"
import circle from "@turf/circle"
import i18n from "@pureartisan/simple-i18n"
import { Col, Row } from "react-bootstrap"
import clsx from "clsx"

import Layout from "../components/layout"
import SchoolHero from "../components/SchoolHero"
import NonInteractiveScale from "./../components/NonInteractiveScale"
import SEO from "../components/seo"
import MAP_STYLE from "./../data/map/cpalStyle"
import en_US from "./../data/map/en_US"
import { getRoundedValue, getHashLeft } from "./utils/utils"
import {
  CRI_COLORS,
  ECON_COLORS,
  EDU_COLORS,
  COMM_COLORS,
  HEL_COLORS,
  FAM_COLORS,
} from "./../data/map/colors"
import { CPAL_FILTER_TABS, CPAL_METRICS } from "./../data/map/metrics"
// import { pages } from "../consts"

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
  // console.log('SchoolPage, ', props)
  // console.log("pages, ", pages)
  // console.log("data, ", data)
  //
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
    height: 300,
    latitude: school.POINT_Y,
    longitude: school.POINT_X,
    zoom: 11,
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
  console.log("categories, ", categories)

  /**
   * Constructs a 5-item quintile array from
   * client-supplied quintile 0-4 value.
   * @param  {Number} index
   * @return Array
   */
  const constructQuintiles = index => {
    console.log("constructQuintiles,", index)
    const quintiles = [0, 0, 0, 0, 0]
    quintiles[index] = 1
    return quintiles
  }

  const getCustomFeederProse = feeder => {
    const obj = { __html: "" }
    if (feeder.toLowerCase === "spruce") {
      obj.__html = i18n.translate("SCHOOL_PROSE_FEEDER_SPRUCE")
    } else if (feeder.toLowerCase === "lincoln") {
      obj.__html = i18n.translate("SCHOOL_PROSE_FEEDER_LINCOLN")
    } else {
      obj.__html = i18n.translate("SCHOOL_PROSE_FEEDER_GENERIC")
    }
    return obj
  }

  const getMetricCollection = id => {
    return CPAL_METRICS.filter(el => {
      return el.tab === id
    }).sort((a, b) => {
      return a.tab_level - b.tab_level
    })
  }

  // This school is in the top quintile for [measure 1], [measure 2], [measure 3], etc.
  // This school is in the bottom quintile for [measure 1], [measure 2], [measure 3], etc.

  return (
    <Layout
      className="school-page"
      activePageId={school.SLN}
      disableFooter={false}
    >
      <SEO title={school.SCHOOLNAME} />
      <SchoolHero wide={true}>
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
            <Marker latitude={viewport.latitude} longitude={viewport.longitude}>
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "5px",
                  border: "1px solid #fff",
                  backgroundColor: CRI_COLORS[0],
                }}
              ></div>
            </Marker>
            <Source id="my-data" type="geojson" data={zoneJson}>
              <Layer
                id="point"
                type="fill"
                paint={{
                  "fill-color": CRI_COLORS[4],
                  "fill-opacity": 0.2,
                }}
              />
            </Source>
          </StaticMap>
        </div>
      </SchoolHero>
      {/** Intro row */}
      <Row className="school-metadata">
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
        </Col>
        <Col
          xs={{ span: 10, offset: 1 }}
          md={{ span: 5, offset: 0 }}
          className={clsx(
            "metric-collection-" + "cri_weight",
            "metric-collection"
          )}
        >
          <h4>
            {i18n.translate("SCHOOL_PROSE_CRI_SCORE") +
              ": " +
              getRoundedValue(school.cri_weight, 0)}
          </h4>
          <NonInteractiveScale
            className="metric-group"
            metric="cri_weight"
            quintiles={constructQuintiles(school.cri_weight_quintile)}
            colors={CRI_COLORS}
            showHash={true}
            hashLeft={getRoundedValue(
              getHashLeft(school.cri_weight, 0, 100),
              0
            )}
            showMinMax={true}
          />
        </Col>
      </Row>
      <Row className="custom-feeder-prose">
        <Col xs={{ span: 10, offset: 1 }} md={{ span: 7, offset: 1 }}>
          <div dangerouslySetInnerHTML={getCustomFeederProse(school.Feeder)} />
        </Col>
      </Row>
      {/** Iterate through other categories */}
      {categories.map(el => {
        return (
          <Row className="row-metric-econ row-metric-group">
            <Col
              xs={{ span: 10, offset: 1 }}
              className={clsx(
                "metric-collection-" + el.id,
                "metric-collection"
              )}
            >
              <h5>{i18n.translate(el.title)}</h5>
              {getMetricCollection(el.id).map(el => {
                return (
                  <div
                    className="metric-group"
                    id={"metric_" + el.id}
                    key={"metric_" + el.id}
                  >
                    <h6>
                      {i18n.translate(el.title) +
                        ": " +
                        getRoundedValue(
                          school[el.id],
                          el.decimals,
                          false,
                          el.is_currency ? el.is_currency : 0
                        )}
                    </h6>
                    <NonInteractiveScale
                      className={"scale-" + el.id}
                      id={"scale_" + el.id}
                      key={"scale_" + el.id}
                      metric={el.id}
                      quintiles={constructQuintiles(
                        school[el.id + "_quintile"]
                      )}
                      colors={el.colors}
                      showHash={true}
                      hashLeft={getHashLeft(
                        school[el.id],
                        el.range[0],
                        el.range[1],
                        el.high_is_good
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
    </Layout>
  )
}

export default SchoolPage
