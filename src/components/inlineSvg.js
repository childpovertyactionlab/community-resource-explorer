import React from "react"
import _ from "lodash"

const InlineSvg = ({ type, onClick=_.noop, classes="" }) => {
  const getSvg = type => {
    switch (type) {
      // declare stroke color in CSS, as defining here cannot be overridden
      case "right-arrow":
        return (
          <svg
            width="11"
            height="7"
            viewBox="0 0 11 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.4747 2.96005L10.4747 3.48131L0.633169 3.48131L0.633169 2.96005L5.55395 2.96005L7.14432 2.96005L8.84694 3.05313L8.84694 2.99728L8.5397 2.81167C8.05179 2.51692 7.63343 2.12011 7.31331 1.64846L7.1448 1.40018C6.93351 1.08888 6.76776 0.748994 6.65257 0.390824L6.52688 -1.71703e-07L7.93015 -1.10671e-07C7.93015 -1.10671e-07 8.03744 0.611831 8.22951 1.0053C8.30036 1.15044 8.38514 1.31314 8.47412 1.47836C8.8862 2.2435 9.62674 2.7699 10.4747 2.96005Z" />
            <path d="M10.4747 4.05372L10.4747 3.46333L0.633169 3.46333L0.633169 4.05372L5.55395 4.05372L7.14432 4.05372L8.84694 3.96105L8.84694 4.01665L8.54041 4.201C8.05203 4.49471 7.63296 4.89057 7.31194 5.36144L7.14667 5.60385C6.93415 5.91556 6.76736 6.2561 6.65138 6.6151L6.52688 7.00049L7.93015 7.00049C7.93015 7.00049 8.03744 6.3914 8.22951 5.9997C8.29982 5.85632 8.38384 5.69573 8.47207 5.53255C8.88539 4.76818 9.62664 4.24303 10.4747 4.05372Z" />
          </svg>
        )
      case "right-arrow-md":
        return (
          <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0.648437" y1="8.69194" x2="23.9991" y2="8.69194" stroke-width="1.33488" />
            <path d="M15.2896 0V0C15.2896 4.79202 19.1742 8.67671 23.9663 8.67671V8.67671" stroke-width="1.33488" />
            <path d="M15.2896 17.3545V17.3545C15.2896 12.5625 19.1742 8.67778 23.9663 8.67778V8.67778" stroke-width="1.33488" />
          </svg>
        )
      case "left-arrow-md":
        return (
          <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="23.3516" y1="8.66353" x2="0.000913562" y2="8.66353" stroke-width="1.33488" />
            <path d="M8.71045 17.3555V17.3555C8.71045 12.5635 4.82575 8.67876 0.0337378 8.67876V8.67876" stroke-width="1.33488" />
            <path d="M8.71045 0.000976562V0.000976562C8.71045 4.79299 4.82575 8.67769 0.0337362 8.67769V8.67769" stroke-width="1.33488" />
          </svg>
        )
      case "down-arrow":
        return (
          <svg width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="8.66304" y1="-7.95913e-09" x2="8.66304" y2="23.3506" stroke-width="1.33488" />
            <path d="M17.355 14.6416V14.6416C12.563 14.6416 8.67827 18.5263 8.67827 23.3183V23.3183" stroke-width="1.33488" />
            <path d="M0 14.6416V14.6416C4.79202 14.6416 8.67671 18.5263 8.67671 23.3183V23.3183" stroke-width="1.33488" />
          </svg>

        )
      case "eclipse":
        return (
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="5" cy="5" r="5" />
          </svg>
        )
      case "down-chevron":
        return (
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="0.354774"
              y1="5.88546"
              x2="6.59531"
              y2="12.126"
              stroke="#181818"
            />
            <line
              x1="5.88644"
              y1="12.1272"
              x2="12.127"
              y2="5.88662"
              stroke="#181818"
            />
          </svg>
        )
      case "x":
        return (
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.707031"
              width="15"
              height="1"
              transform="rotate(45 0.707031 0)"
            />
            <rect
              y="10.6064"
              width="15"
              height="1"
              transform="rotate(-45 0 10.6064)"
            />
          </svg>
        )

      default:
        break
    }
  }

  classes += " inline-svg " + type
  return <div onClick={onClick} className={classes}>{getSvg(type)}</div>
}

export default InlineSvg
