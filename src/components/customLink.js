import React from "react"
import InlineSvg from "./inlineSvg"

const CustomLink = ({ children, underlined = true, onClick }) => {
  let classes = "custom-link "
  if (underlined) {
    classes += " underlined"
  }

  const handleClick = () => {
    if (onClick) {
      onClick()
    }
  }

  return (
    <div className={classes} onClick={handleClick}>
      {children}
      <InlineSvg type="right-arrow" classes="right-arrow"></InlineSvg>
    </div>
  )
}

export default CustomLink
