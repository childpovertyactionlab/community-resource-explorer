import React from "react"
import InlineSvg from "./inlineSvg"

const Link = ({ children, underlined=true }) => {
  let classes = "link "
  if (underlined) {
    classes += " underlined"
  }
  
  return (
    <div className={classes}>
      {children}
      <InlineSvg type="right-arrow" classes="right-arrow"></InlineSvg>
    </div>
  )
}

export default Link
