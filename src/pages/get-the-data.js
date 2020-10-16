import React from "react"
import { graphql } from "gatsby"
import { Col, Row, Table } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { pages } from "../consts"
import { Link } from "gatsby"

const headers = ["Dataset", "Description", "Geography", "Link"]

export const query = graphql`
  query PageQuery {
    datapageYaml {
      subtitle
      intro
    }
  }
`

const data = [
  {
    Dataset: "Community Resource Index",
    Description:
      "A dataset containing the values, ranks, and weights for the CRI and each of the five subindices.",
    Geography: "2 - mile Campus Communities",
    Link:
      "https://www.dropbox.com/s/u8vvk15ebrno7k7/CRI_IndexValues_FullFinal.csv?dl=0",
    LinkLabel: "CSV",
  },
  {
    Dataset: "Community Indicators",
    Description:
      "This dataset contains the indicator values for all components of the Community Subindex.",
    Geography: "2 - mile Campus Communities",
    Link:
      "https://www.dropbox.com/s/807pp5jl3htpklr/CRI_Community_Variables_StDevs.csv?dl=0",
    LinkLabel: "CSV",
  },
  {
    Dataset: "Economic Indicators",
    Description:
      "This dataset contains the indicator values for all components of the Economic Subindex.",
    Geography: "2 - mile Campus Communities",
    Link:
      "https://www.dropbox.com/s/m2ehgqk8zycz3ws/CRI_Economics_Variables_StDevs.csv?dl=0",
    LinkLabel: "CSV",
  },
  {
    Dataset: "Education Indicators",
    Description:
      "This dataset contains the indicator values for all components of the Education Subindex.",
    Geography: "2 - mile Campus Communities",
    Link:
      "https://www.dropbox.com/s/kan3spc9jlwbigw/CRI_Education_Variables_StDevs.csv?dl=0",
    LinkLabel: "CSV",
  },
  {
    Dataset: "Family Indicators",
    Description:
      "This dataset contains the indicator values for all components of the Family Subindex.",
    Geography: "2 - mile Campus Communities",
    Link:
      "https://www.dropbox.com/s/kps8ircrg4tpnry/CRI_Family_Variables_StDevs.csv?dl=0",
    LinkLabel: "CSV",
  },
  {
    Dataset: "Health Indicators",
    Description:
      "This dataset contains the indicator values for all components of the Health Subindex.",
    Geography: "2 - mile Campus Communities",
    Link:
      "https://www.dropbox.com/s/b8h78idysugd8ny/CRI_Health_Variables_StDevs.csv?dl=0",
    LinkLabel: "CSV",
  },
  {
    Dataset: "Demographic Data",
    Description:
      "This dataset includes a variety of demographic and socioeconomic variables related to each campus area that were not used to calculate the CRI.",
    Geography: "2 - mile Campus Communities",
    Link:
      "https://www.dropbox.com/s/rnjvqqxe1zmul8r/CRI_Demographics_Variables_StDevs.csv?dl=0",
    LinkLabel: "CSV",
  },
  {
    Dataset: "CRI Full Dataset",
    Description:
      "This is the full dataset, including all input, indicator, and normalized data used to build the CRI.This is a large file and includes a data dictionary.",
    Geography: "2 - mile Campus Communities",
    LinkLabel: "Coming soon!",
  },
  {
    Dataset: "CRI Source Data",
    Description:
      "The following are the raw data used to calculate the CRI, compiled from a variety of sources.These are not the indicator values used for the CRI.Individual CSV’s are included for different components of the source data.",
    Geography: "Census tract",
    LinkLabel: "Coming soon!",
  },
  {
    Dataset: "Data Dictionary",
    Description:
      "A spreadsheet that includes all of the variable names, descriptions, and sources for every aspect of the CRI.",
    Geography: "N/A",
    Link:
      "https://docs.google.com/spreadsheets/d/1zIBYO7LeEcinnfJLcgXV4zWm7JOUjSQfKifl5S76qgQ/edit?usp=sharing",
    LinkLabel: "CSV",
  },
]

const Data = ({ location }) => {
  const { keywords, image, description } = pages.DATA.meta
  const { name } = pages.DATA

  const trackGetData = (type, label) => {
    // console.log("trackGetData, ", type)
    let trackingData = {
      event_category: "Get Data",
    }
    if (type === "csv") {
      trackingData.event_action = "Download CSV"
      trackingData.event_label = label
    }
    if (type === "github") {
      trackingData.event_action = "Navigate to Github"
      trackingData.event_label = label
    }
    if (type === "methods") {
      trackingData.event_action = "Navigate to Methodology Paper"
      trackingData.event_label = label
    }
    if (window) {
      window.gtag("event", "getdata", { ...trackingData })
    }
  }

  const trackGithub = () => {
    let hash = ""
    if (window) {
      hash = window.location.pathname
    }
    trackGetData("github", hash)
  }

  const trackMethods = () => {
    let hash = ""
    if (window) {
      hash = window.location.pathname
    }
    trackGetData("methods", hash)
  }

  const trackDataDownloads = e => {
    trackGetData("csv", e.currentTarget.id)
  }

  return (
    <Layout id="data-page">
      <SEO
        url={location.href}
        title={name}
        keywords={keywords}
        image={image}
        description={description}
      />
      <Row className="ancillary-page-heading">
        <Col
          className=""
          xs={{ offset: 1, span: 10 }}
          md={{ offset: 1, span: 8 }}
          lg={{ offset: 1, span: 7 }}
          xl={{ offset: 2, span: 7 }}
        >
          <div className="content">
            <div className="page-title-section">
              <div className="subtitle">Get the data</div>
            </div>
          </div>
        </Col>
      </Row>
      <Row noGutters>
        <Col
          className="text-blocks"
          xs={{ offset: 1, span: 10 }}
          md={{ offset: 1, span: 8 }}
          lg={{ offset: 1, span: 7 }}
          xl={{ offset: 2, span: 7 }}
        >
          {data.dataageYaml.intro}
          <p className="citation">
            Owen Wilson-Chavez, Michael Lopez, and Ashley Flores. Dallas ISD
            Community Resource Index. Child Poverty Action Lab, 2020.{" "}
            {`https://dallasisd.resourceexplorer.org`}.
          </p>
        </Col>
      </Row>
      <Row>
        <Col
          className=""
          xs={{ offset: 1, span: 10 }}
          md={{ offset: 1, span: 10 }}
          xl={{ offset: 2, span: 8 }}
        >
          <Table striped bordered responsive="md">
            <thead>
              <tr>
                {headers.map(h => (
                  <th key={h}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((r, i) => (
                <tr key={r.Dataset}>
                  <td key={r.Dataset + "-" + i} className="dataset">
                    {r.Dataset}
                  </td>
                  <td key={r.Description + "-" + i} className="description">
                    {r.Description}
                  </td>
                  <td key={r.Geography + "-" + i} className="geo">
                    {r.Geography}
                  </td>
                  <td key={"get-data-link-" + i} className="link">
                    {!!r.Link ? (
                      <a
                        id={String(r.Dataset)
                          .replace(/ /g, "_")
                          .toLowerCase()}
                        href={r.Link}
                        target="_blank"
                        rel="noreferrer"
                        className="get-data-link"
                        onClick={trackDataDownloads}
                      >
                        {r.LinkLabel}
                      </a>
                    ) : (
                      <span>{r.LinkLabel}</span>
                    )}
                  </td>
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
