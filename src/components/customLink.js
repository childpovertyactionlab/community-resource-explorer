import React from "react"
import InlineSvg from "./inlineSvg"
import { navigate } from "gatsby"
import { a11yClick } from "../utils/a11yClick"

const CustomLink = ({
  children,
  onClick,
  linkTo,
  underlined = true,
  type = "right-arrow",
}) => {
  let classes = "custom-link "
  if (underlined) {
    classes += " underlined"
  }

  const handleClick = e => {
    if (!a11yClick(e)) {
      return
    }
    
    if (onClick) {
      onClick()
    }

    if (linkTo) {
      navigate(linkTo)
    }
  }

  return (
    <div
      className={classes}
      onClick={handleClick}
      onKeyDown={handleClick}
      role="button"
      tabIndex="0"
    >
      {children}
      <InlineSvg type={type} classes="right-arrow"></InlineSvg>
    </div>
  )
}

export default CustomLink
