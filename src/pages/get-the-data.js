import React from "react"

import { Col, Row, Collapse, Table } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import { pages } from "../consts"

const headers = ['Dataset','Description','Geography','Link',]

const data = [
  {
    Dataset: 'Community Resource Index',
    Description: 'A dataset containing the values, ranks, and weights for the CRI and each of the five subindices.',
    Geography: '2 - mile Campus Communities',
    Link: 'CSV | R Script',
  },
  {
    Dataset: 'Community Indicators',
    Description: 'This dataset contains the indicator values for all components of the Community Subindex.',
    Geography: '2 - mile Campus Communities',
    Link: 'CSV | R Script',
  },
  {
    Dataset: 'Economic Indicators',
    Description: 'This dataset contains the indicator values for all components of the Economic Subindex.',
    Geography: '2 - mile Campus Communities',
    Link: 'CSV | R Script',
  },
  {
    Dataset: 'Education Indicators',
    Description: 'This dataset contains the indicator values for all components of the Education Subindex.',
    Geography: '2 - mile Campus Communities',
    Link: 'CSV | R Script',
  },
  {
    Dataset: 'Family Indicators',
    Description: 'This dataset contains the indicator values for all components of the Family Subindex.',
    Geography: '2 - mile Campus Communities',
    Link: 'CSV | R Script',
  },
  {
    Dataset: 'Health Indicators',
    Description: 'This dataset contains the indicator values for all components of the Health Subindex.',
    Geography: '2 - mile Campus Communities',
    Link: 'CSV | R Script',
  },
  {
    Dataset: 'Overview Data',
    Description: 'This dataset includes a variety of demographic and socioeconomic variables related to each campus area that were not used to calculate the CRI.',
    Geography: '2 - mile Campus Communities',
    Link: 'CSV | R Script',
  },
  {
    Dataset: 'CRI Full Dataset',
    Description: 'This is the full dataset, including all input, indicator, and normalized data used to build the CRI.This is a large file and includes a data dictionary.',
    Geography: '2 - mile Campus Communities',
    Link: 'Download ZIP File',
  },
  {
    Dataset: 'Community Features',
    Description: 'This is a spatial file that includes features used to calculate and measure the CRI that we are able to share.',
    Geography: 'Individual locations',
    Link: 'GEOJSON, Geopackage, Shapefile',
  },
  {
    Dataset: 'CRI Source Data',
    Description: 'The following are the raw data used to calculate the CRI, compiled from a variety of sources.These are not the indicator values used for the CRI.Individual CSV’s are included for different components of the source data.',
    Geography: 'Census tract',
    Link: 'Download ZIP File',
  },
]

const Data = () => {
  return (
    <Layout pageInfo={{ pageName: "data" }} id="data-page">
      <SEO title="FAQs" />

      <Row noGutters className="">
        <Col
          className="title"
          xs={{ offset: 1, span: 10 }}
        >Get the data</Col>
        <Col
          className="text-blocks"
          xs={{ offset: 1, span: 10 }}
        >
          <p>
            The Community Resource Index was calculated primarily from publicly available data, either from state and federal agencies or local to the Dallas area. The CRI, and the Community Resource Explorer, is only one way that the data can support organizations working to improve our communities. We believe it is critical that we make the data we used to calculate the CRI available for use in additional capacities. You can download the data, R scripts, and ArcGIS tools CPAL created to calculate the CRI from the links below or by visiting our Github.
          </p>
          <p>
            To learn more about how the CRI was calculated, visit the Methodology or FAQ.
          </p>
          <p>
            If you do, please cite or attribute our work in the following ways: 
          </p>
          <p className='citation'>
            Owen Wilson-Chavez, Michael Lopez, and Ashley Flores. Dallas ISD Community Resource Index. Child Poverty Action Lab, 2020. {`website url`}.
          </p>
        </Col>
      </Row>
      <Row>
        <Col
          xs={{ offset: 1, span: 10 }}
        >
          <Table striped bordered responsive="md">
            <thead>
              {headers.map(h => (<th key={h}>{h}</th>))}
            </thead>
            <tbody>
              {data.map(r => (
                <tr key={r.Dataset}>
                  {headers.map(h => (
                    <td key={r.Dataset+h}>
                      {r[h]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Layout>
  )
}

export default Data
