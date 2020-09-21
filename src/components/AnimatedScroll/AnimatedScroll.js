import React, { useState, useEffect } from "react"
import { Row } from "react-bootstrap"
import clsx from "clsx"
import Anime from "react-anime"

import ScrollFeatureSVG from "./assets/ScrollFeatureSVG"

// Define each of your svgs here.
const Viz01 = ({ ...props }) => {
  return (
    <Anime
      easing="easeOutElastic"
      autoplay={true}
      loop={false}
      duration={2400}
      direction="alternate"
      transformOrigin={[424, 277]}
      delay={(el, index) => {
        // console.log(el)
        return index * 240
      }}
      opacity={[0, 1]}
      svg={true}
      scale={[0.8, 1]}
    >
      <ScrollFeatureSVG />
    </Anime>
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
      easing="spring(1, 80, 10, 0)"
      autoplay={true}
      loop={false}
      duration={2400}
      direction="alternate"
      transformOrigin={[500, 500]}
      delay={(el, index) => {
        // console.log(el)
        return index * 240
      }}
      delay={(el, index) => {
        console.log(el)
        if (el.childNodes[0].classList.contains("dots02")) {
          console.log("has the class for delay")
          return index * 30
        } else {
          return 1
        }
      }}
      opacity={(el, index) => {
        console.log(el)
        if (el.childNodes[0].classList.contains("dots02")) {
          console.log("has the class")
          return [0, 1]
        } else {
          return 1
        }
      }}
      scale={(el, index) => {
        console.log(el)
        if (el.childNodes[0].classList.contains("dots02")) {
          console.log("has the class")
          return [0.8, 1]
        } else {
          return [1, 1]
        }
      }}
      svg={true}
    >
      <ScrollFeatureSVG />
    </Anime>
  )
}

const Viz03 = ({ ...props }) => {
  // Example with selective delay.
  return (
    <Anime
      easing="easeInOutElastic"
      autoplay={true}
      loop={false}
      duration={1600}
      direction="alternate"
      delay={0}
      opacity={1}
      transformOrigin={[0, 0]}
      scale={1}
      svg={true}
    >
      <ScrollFeatureSVG />
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
      delay={0}
      opacity={1}
      transformOrigin={[0, 0]}
      scale={1}
      svg={true}
    >
      <ScrollFeatureSVG />
    </Anime>
  )
}

const Viz05 = ({ ...props }) => {
  return (
    <Anime
      easing="easeInOutElastic"
      autoplay={true}
      loop={false}
      duration={1600}
      direction="alternate"
      delay={0}
      opacity={1}
      transformOrigin={[0, 0]}
      scale={1}
      svg={true}
    >
      <ScrollFeatureSVG />
    </Anime>
  )
}

const AnimatedScroll = ({ ...props }) => {
  const itemHeight = 500 // Adjust viz height here.
  const items = [
    {
      id: "01",
      text:
        "Each community is represented by a two-mile radius around a school.",
      viz: Viz01,
    },
    {
      id: "02",
      text:
        "The Explorer visualizes data for each school community across these categories.",
      viz: Viz02,
    },
    {
      id: "03",
      text:
        "The color scale illustrates how well school communities are resourced.",
      viz: Viz03,
    },
    {
      id: "04",
      text: "Learn more about your community's assets and needs",
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
              <svg width="800" height="500" viewBox="0 0 800 500">
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
