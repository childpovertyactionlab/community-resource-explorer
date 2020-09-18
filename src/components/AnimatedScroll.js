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
      delay={(el, index) => index * 240}
      translateX="130px"
      scale={[0.75, 0.9]}
    >
      <div className="blue" />
      <div className="green" />
      <div className="red" />
    </Anime>
  )
}

const Viz03 = ({ ...props }) => {
  return (
    <Anime
      easing="easeOutElastic"
      autoplay={true}
      loop={true}
      duration={600}
      direction="alternate"
      delay={(el, index) => index * 240}
      translateX="130px"
      scale={[0.75, 0.9]}
    >
      <svg width="500" height="500">
    
          <circle id="King" cx="200" cy="200" r="32" fill="#86A0D2"/>
         
   
      </svg>

      <svg width="500" height="500">
     
          <circle id="Deep green 1" cx="300" cy="300" r="32" fill="#5DBF7F"/>
   
      </svg>
      <svg width="500" height="500">
     
          <circle id="Deep green 2" cx="250" cy="250" r="32" fill="#5DBF7F"/>
   
      </svg>
      
    </Anime>
  )
}

const Viz04 = ({ ...props }) => {
  return (
    <svg width="500" height="500">
      <rect
        width="500"
        height="500"
        style={{
          fill: "green",
          strokeWidth: 10,
          stroke: "black",
        }}
      />
    </svg>
  )
}

const Viz05 = ({ ...props }) => {
  return (
    <svg width="500" height="500">
      <rect
        width="500"
        height="500"
        style={{
          fill: "purple",
          strokeWidth: 10,
          stroke: "black",
        }}
      />
    </svg>
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
    console.log("updateVisible()")
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
              {getSVG()}
            </div>
          )
        })}
      </div>
    </Row>
  )
}

export default AnimatedScroll
