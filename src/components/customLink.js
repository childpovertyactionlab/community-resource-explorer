import React from "react"
import InlineSvg from "./inlineSvg"

const CustomLink = ({ children, underlined = true, onClick, type ="right-arrow" }) => {
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
      <InlineSvg type={type} classes="right-arrow"></InlineSvg>
    </div>
  )
}

export default CustomLink
