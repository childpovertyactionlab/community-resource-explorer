import React from "react"
import InlineSvg from "./inlineSvg"
import { navigate } from "gatsby"

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

  const handleClick = () => {
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
      tabindex="0"
    >
      {children}
      <InlineSvg type={type} classes="right-arrow"></InlineSvg>
    </div>
  )
}

export default CustomLink
