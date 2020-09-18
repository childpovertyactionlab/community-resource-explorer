import React, { useState, useEffect } from "react"
import { Row } from "react-bootstrap"
import clsx from "clsx"
import Anime from "react-anime"

// Define each of your svgs here.
const Viz01 = ({ ...props }) => {
  return (
    <svg width="500" height="500">
      <rect
        width="500"
        height="500"
        style={{
          fill: "red",
          strokeWidth: 10,
          stroke: "black",
        }}
      />
    </svg>
  )
}

const Viz02 = ({ ...props }) => {
  // James, use this viz as your template.
  // Replace the svgs in the other vizs with <Anime> components.
  // Documentation is here:
  // https://github.com/hyperfuse/react-anime/blob/HEAD/documentation.md
  // Let me know if any questions.
  return (
    <Anime
      easing="easeOutElastic"
      autoplay={true}
      loop={false}
      duration={600}
      direction="alternate"
      delay={(el, index) => {
        // console.log(el)
        return index * 240
      }}
      translateX="130px"
      scale={[0.75, 0.9]}
      svg={true}
    >
      <circle cx="30" cy="30" r="15" fill="blue" className="01" />
      <circle cx="30" cy="60" r="15" fill="green" className="02" />
      <circle cx="30" cy="90" r="15" fill="red" className="03" />
    </Anime>
  )
}

const Viz03 = ({ ...props }) => {
  return (
    <Anime
      easing="easeInOutElastic"
      autoplay={true}
      loop={false}
      duration={1600}
      direction="alternate"
      delay={(el, index) => {
        // console.log(el)
        return index * 240
      }}
      opacity={[0, 1]}
      svg={true}
    >
      <circle cx="30" cy="30" r="15" fill="blue" className="01" />
      <circle cx="30" cy="60" r="15" fill="green" className="02" />
      <circle cx="30" cy="90" r="15" fill="red" className="03" />
    </Anime>
  )
}

const Viz04 = ({ ...props }) => {
  // Example with selective delay.
  return (
    <Anime
      easing="easeInOutElastic"
      autoplay={true}
      loop={false}
      duration={1600}
      direction="alternate"
      delay={(el, index) => {
        console.log(el)
        if (el.childNodes[0].classList.contains("03")) {
          console.log("has the class")
          return 2000
        } else {
          return index * 240
        }
      }}
      opacity={[0, 1]}
      svg={true}
    >
      <circle cx="30" cy="30" r="15" fill="blue" className="01" />
      <circle cx="30" cy="60" r="15" fill="green" className="02" />
      <circle cx="30" cy="90" r="15" fill="red" className="03" />
    </Anime>
  )
}

const Viz05 = ({ ...props }) => {
  return (
    <rect
      width="500"
      height="500"
      style={{
        fill: "purple",
        strokeWidth: 10,
        stroke: "black",
      }}
    />
  )
}

const AnimatedScroll = ({ ...props }) => {
  const itemHeight = 500 // Adjust viz height here.
  const items = [
    {
      id: "01",
      text:
        "01 Occaecat irure eiusmod proident velit ex id minim. Anim deserunt nulla et cillum do ut occaecat.",
      viz: Viz01,
    },
    {
      id: "02",
      text:
        "02 Occaecat irure eiusmod proident velit ex id minim. Anim deserunt nulla et cillum do ut occaecat.",
      viz: Viz02,
    },
    {
      id: "03",
      text:
        "03 Occaecat irure eiusmod proident velit ex id minim. Anim deserunt nulla et cillum do ut occaecat.",
      viz: Viz03,
    },
    {
      id: "04",
      text:
        "04 Occaecat irure eiusmod proident velit ex id minim. Anim deserunt nulla et cillum do ut occaecat.",
      viz: Viz04,
    },
    {
      id: "05",
      text:
        "05 Occaecat irure eiusmod proident velit ex id minim. Anim deserunt nulla et cillum do ut occaecat.",
      viz: Viz05,
    },
  ]

  const getSVG = () => {
    const target = items[activeItemIndex].viz
    return target()
  }

  const [activeItemIndex, setActiveItemIndex] = useState(0)

  const updateVisible = () => {
    // console.log("updateVisible()")
    const el = document.querySelector(".animated-scroll-text")
    // console.log(el.scrollTop)
    const item = Math.round(el.scrollTop / itemHeight) // Math.modulus(el.scrollTip / itemHeight)
    // console.log(item)
    setActiveItemIndex(item)
  }

  useEffect(() => {
    console.log("useEffect")
    const scrollPane = document.querySelector(".animated-scroll-text")
    scrollPane.addEventListener("scroll", updateVisible)
  })

  return (
    <Row className="animated-scroll">
      <div className="animated-scroll-text">
        <div
          className={clsx(
            "animated-scroll-text-items",
            `active-${items[activeItemIndex].id}`
          )}
        >
          {items.map(el => {
            return (
              <div
                className={clsx(
                  "animated-scroll-text-item",
                  items[activeItemIndex].id === el.id ? "active" : ""
                )}
                key={`text_${el.id}`}
                id={`viz_${el.id}`}
              >
                <span>{el.text}</span>
              </div>
            )
          })}
        </div>
      </div>
      <div className="animated-scroll-viz">
        {items.map(el => {
          return (
            <div
              className={clsx(
                "animated-scroll-viz-item",
                items[activeItemIndex].id === el.id ? "active" : ""
              )}
              key={`text_${el.id}`}
              id={`viz_${el.id}`}
            >
              <svg width="500" height="500">
                {getSVG()}
              </svg>
            </div>
          )
        })}
      </div>
    </Row>
  )
}

export default AnimatedScroll
