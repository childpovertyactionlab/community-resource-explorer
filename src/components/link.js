import React from "react"
import InlineSvg from "./inlineSvg"

const Link = ({ children }) => {
  return (
    <div className="link">
      {children}
      <InlineSvg type="right-arrow" classes="right-arrow"></InlineSvg>
    </div>
  )
}

export default Link
