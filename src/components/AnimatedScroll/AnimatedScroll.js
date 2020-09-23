import React, { useState, useEffect } from "react"
import { Row } from "react-bootstrap"
import clsx from "clsx"

import ScrollFeatureSVG from "./assets/ScrollFeatureSVG"

const AnimatedScroll = ({ ...props }) => {
  const itemHeight = 500 // Adjust viz height here.
  const items = [
    {
      id: "01",
      text:
        "Each community is represented by a two-mile radius around a school.",
    },
    {
      id: "02",
      text:
        "The Explorer visualizes data for each school community across these categories.",
    },
    {
      id: "03",
      text:
        "The color scale illustrates how well school communities are resourced.",
    },
    {
      id: "04",
      text: "Learn more about your community's assets and needs",
    },
    {
      id: "05",
      text:
        "05 Occaecat irure eiusmod proident velit ex id minim. Anim deserunt nulla et cillum do ut occaecat.",
    },
  ]

  const [activeItemIndex, setActiveItemIndex] = useState(0)

  const updateVisible = () => {
    // console.log("updateVisible()")
    const el = document.querySelector(".animated-scroll-text")
    // console.log(el.scrollTop)
    const item = Math.round(el.scrollTop / itemHeight)
    // console.log(item)
    setActiveItemIndex(item)
  }

  useEffect(() => {
    // console.log("useEffect")
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
              <svg width="800" height="500" viewBox="0 0 760 475">
                <ScrollFeatureSVG index={activeItemIndex} />
              </svg>
            </div>
          )
        })}
      </div>
    </Row>
  )
}

export default AnimatedScroll
