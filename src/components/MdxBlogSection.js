import React from "react"
import { Col, Row } from "react-bootstrap"
import { MDXRenderer } from "gatsby-plugin-mdx"

const MdxBlogSection = ({ ...props }) => {
  console.log("MdxBlogSection, ", props)
  // {paragraphs.map((par, i) => {
  //   return <p key={i}>{par}</p>
  // })}
  return (
    <Col className="section " key={props.header} xs={12}>
      <Row>
        <Col
          xs={{ offset: 1, span: 10 }}
          md={{ offset: 1, span: 3 }}
          xl={{ offset: 1, span: 3 }}
          className="title p-0"
        >
          <h2>{props.header}</h2>
        </Col>
        <Col
          xs={{ offset: 1, span: 10 }}
          md={{ offset: 1, span: 6 }}
          xl={{ offset: 1, span: 4 }}
          className="paragraphs p-0"
        >
          {props.children.map((el, i) => {
            if (!el.props) {
              return <p key={`child_p_${i}`}>{el}</p>
            }
            if (!!el.props.mdxType && el.props.mdxType === "p") {
              return <p key={`child_p_${i}`}>{el.props.children}</p>
            }
            return null
          })}
        </Col>
      </Row>
    </Col>
  )
}

export default MdxBlogSection
