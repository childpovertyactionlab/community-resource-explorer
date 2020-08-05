import React from "react"
import { graphql } from "gatsby"
import StaticMap, { Marker, Source, Layer } from "react-map-gl"
import circle from "@turf/circle"

import { Col, Row } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MAP_STYLE from "./../data/map/cpalStyle"
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
  const defaultMapStyle = MAP_STYLE
  // Shorten reference to school node.
  const school = props.pageContext.schoolNode
  // Set up viewport for static map.
  const viewport = {
    width: 400,
    height: 400,
    latitude: school.POINT_Y,
    longitude: school.POINT_X,
    zoom: 11.5,
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

  return (
    <Layout className="school-page" activePageId={school.SLN}>
      <SEO title={school.SCHOOLNAME} />
      <Row>
        <h2>{school.SCHOOLNAME}</h2>
      </Row>
      <Row noGutters className="">
        <Col>
          <p>
            Qui sunt qui dolore eiusmod sunt reprehenderit nostrud aliqua.
            Ullamco dolore amet tempor anim cillum dolore consequat ut id
            laborum Lorem nisi. Elit deserunt voluptate do ad velit aliquip sit
            ad in.
          </p>
          <p>
            Sit mollit sint ex voluptate laborum consequat qui eiusmod
            incididunt aute Lorem elit nisi tempor veniam. Adipisicing esse
            culpa enim aute officia duis exercitation nostrud tempor ea Lorem
            anim. Pariatur laboris Lorem ut velit eu veniam et commodo do enim.
            Tempor eu laborum cupidatat nulla anim consequat consectetur in
            voluptate irure.
          </p>
        </Col>
        <Col>
          <div
            className="map-parent"
            style={{
              position: "absolute",
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
                    backgroundColor: "purple",
                  }}
                ></div>
              </Marker>
              <Source id="my-data" type="geojson" data={zoneJson}>
                <Layer
                  id="point"
                  type="fill"
                  paint={{
                    "fill-color": "purple",
                    "fill-opacity": 0.2,
                  }}
                />
              </Source>
            </StaticMap>
          </div>
        </Col>
      </Row>
    </Layout>
  )
}

export default SchoolPage
