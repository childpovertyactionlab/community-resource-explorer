import React from "react"
import { Col } from "react-bootstrap"

let quoteStyleTypes = ["light", "dark"]

const MdxQuote = ({ ...props }) => {
  // console.log("MdxQuote, ", props)
  let styleType
  if (!props.styleType) {
    styleType = quoteStyleTypes.shift()
    quoteStyleTypes.push(styleType)
  }

  const attributionDiv = <div className="attribution">{props.attribution}</div>
  return (
    <Col
      xs={{ offset: 0, span: 12 }}
      md={{ offset: 4, span: 8 }}
      className={"quote " + styleType}
      key={props.attribution}
    >
      <div className="text">
        “{props.content}”{styleType === "dark" ? attributionDiv : null}
      </div>
      {styleType === "light" ? attributionDiv : null}
    </Col>
  )
}

export default MdxQuote
