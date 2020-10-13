import React, { useState } from "react"
import { Col, Row } from "react-bootstrap"
import { MDXRenderer } from "gatsby-plugin-mdx"

const MdxBlogSection = ({ ...props }) => {
  // console.log("MdxBlogSection, ", props)

  const pArr = []
  if (typeof props.children === "object") {
    // console.log("It is an object.")
    pArr.push(props.children)
  } else {
    // console.log("It is an array.")
    props.children.forEach(el => {
      // console.log("el, ", el)
      pArr.push(el)
    })
  }

  const random = Math.floor(Math.random() * 100 + 1)

  return (
    <Col className="section " key={`section_${random}`} xs={12}>
      <Row>
        <Col
          xs={{ offset: 1, span: 10 }}
          md={{ offset: 1, span: 3 }}
          xl={{ offset: 1, span: 3 }}
          className="title p-0"
        >
          {!!props.header && <h2>{props.header}</h2>}
        </Col>
        <Col
          xs={{ offset: 1, span: 10 }}
          md={{ offset: 1, span: 6 }}
          xl={{ offset: 1, span: 4 }}
          className="paragraphs p-0"
        >
          {/** If it's an array, more than one node, render as a list of paragraphs. */}
          {pArr.length > 0 &&
            pArr.map((el, i) => {
              console.log(el)
              if (!el.props) {
                console.log("bare element")
                return <p key={`child_p_${i}`}>{el}</p>
              }
              if (!!el.props.mdxType && el.props.mdxType === "p") {
                console.log("its a paragraph")
                return <p key={`child_p_${i}`}>{el.props.children}</p>
              }
              return ""
            })}
        </Col>
      </Row>
    </Col>
  )
}

export default MdxBlogSection
