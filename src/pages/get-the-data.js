import React from "react"

import { Col, Row, Table } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { pages } from "../consts"

const headers = ['Dataset','Description','Geography','Link',]

const data = [
  {
    Dataset: 'Community Resource Index',
    Description: 'A dataset containing the values, ranks, and weights for the CRI and each of the five subindices.',
    Geography: '2 - mile Campus Communities',
    Link: <a target="_blank" href="https://www.dropbox.com/s/u8vvk15ebrno7k7/CRI_IndexValues_FullFinal.csv?dl=0">CSV</a>,
  },
  {
    Dataset: 'Community Indicators',
    Description: 'This dataset contains the indicator values for all components of the Community Subindex.',
    Geography: '2 - mile Campus Communities',
    Link: <a target="_blank" href="https://www.dropbox.com/s/807pp5jl3htpklr/CRI_Community_Variables_StDevs.csv?dl=0">CSV</a>,
  },
  {
    Dataset: 'Economic Indicators',
    Description: 'This dataset contains the indicator values for all components of the Economic Subindex.',
    Geography: '2 - mile Campus Communities',
    Link: <a target="_blank" href="https://www.dropbox.com/s/m2ehgqk8zycz3ws/CRI_Economics_Variables_StDevs.csv?dl=0">CSV</a>,
  },
  {
    Dataset: 'Education Indicators',
    Description: 'This dataset contains the indicator values for all components of the Education Subindex.',
    Geography: '2 - mile Campus Communities',
    Link: <a target="_blank" href="https://www.dropbox.com/s/kan3spc9jlwbigw/CRI_Education_Variables_StDevs.csv?dl=0">CSV</a>,
  },
  {
    Dataset: 'Family Indicators',
    Description: 'This dataset contains the indicator values for all components of the Family Subindex.',
    Geography: '2 - mile Campus Communities',
    Link: <a target="_blank" href="https://www.dropbox.com/s/kps8ircrg4tpnry/CRI_Family_Variables_StDevs.csv?dl=0">CSV</a>,
  },
  {
    Dataset: 'Health Indicators',
    Description: 'This dataset contains the indicator values for all components of the Health Subindex.',
    Geography: '2 - mile Campus Communities',
    Link: <a target="_blank" href="https://www.dropbox.com/s/b8h78idysugd8ny/CRI_Health_Variables_StDevs.csv?dl=0">CSV</a>,
  },
  {
    Dataset: 'Demographic Data',
    Description: 'This dataset includes a variety of demographic and socioeconomic variables related to each campus area that were not used to calculate the CRI.',
    Geography: '2 - mile Campus Communities',
    Link: <a target="_blank" href="https://www.dropbox.com/s/rnjvqqxe1zmul8r/CRI_Demographics_Variables_StDevs.csv?dl=0">CSV</a>,
  },
  {
    Dataset: 'CRI Full Dataset',
    Description: 'This is the full dataset, including all input, indicator, and normalized data used to build the CRI.This is a large file and includes a data dictionary.',
    Geography: '2 - mile Campus Communities',
    Link: 'Coming soon!',
  },
  {
    Dataset: 'CRI Source Data',
    Description: 'The following are the raw data used to calculate the CRI, compiled from a variety of sources.These are not the indicator values used for the CRI.Individual CSV’s are included for different components of the source data.',
    Geography: 'Census tract',
    Link: 'Coming soon!',
  },
  {
    Dataset: 'Data Dictionary',
    Description: 'A spreadsheet that includes all of the variable names, descriptions, and sources for every aspect of the CRI.',
    Geography: 'N/A',
    Link: <a target="_blank" href="https://docs.google.com/spreadsheets/d/1zIBYO7LeEcinnfJLcgXV4zWm7JOUjSQfKifl5S76qgQ/edit?usp=sharing">CSV</a>,
  },
]

const Data = ({ location }) => {

  const { keywords, image, description } = pages.DATA.meta
  const { name } = pages.DATA

  return (
    <Layout id="data-page">
      <SEO
        url={location.href}
        title={name}
        keywords={keywords}
        image={image}
        description={description}
      />
      <Row noGutters className="">
        <Col
          className="title mx-md-auto"
          xs={{ offset: 1, span: 10 }}
          md={{ offset: 0, span: 7 }}
        >Get the data</Col>
        <Col
          className="text-blocks mx-md-auto"
          xs={{ offset: 1, span: 10 }}
          md={{ offset: 0, span: 7 }}
        >
          <p>
            The Community Resource Index was calculated primarily from publicly available data, either from state and federal agencies or local to the Dallas area. The CRI, and the Community Resource Explorer, is only one way that the data can support organizations working to improve our communities. We believe it is critical that we make the data we used to calculate the CRI available for use in additional capacities. You can download the data, R scripts, and ArcGIS tools CPAL created to calculate the CRI from the links below or by visiting our Github.
          </p>
          <p>
            To learn more about how the CRI was calculated, visit the Methodology or FAQ.
          </p>
          <p>
            If you do, please cite or attribute our work in the following way: 
          </p>
          <p className='citation'>
            Owen Wilson-Chavez, Michael Lopez, and Ashley Flores. Dallas ISD Community Resource Index. Child Poverty Action Lab, 2020. {`https://dallasisd.resourceexplorer.org`}.
          </p>
        </Col>
      </Row>
      <Row>
        <Col
          className="mx-md-auto"
          xs={{ offset: 1, span: 10 }}
          md={{ offset: 0, span: 10 }}
          xl={{ offset: 0, span: 7 }}
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
