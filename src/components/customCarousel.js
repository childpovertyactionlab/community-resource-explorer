import React, { useState } from "react"

import { Col, Carousel } from "react-bootstrap"
import InlineSvg from "./inlineSvg"

const CustomCarousel = ({ items }) => {
  // console.log("CustomCarousel, ", items)

  const [index, setIndex] = useState(0)

  const goBack = () => {
    setIndex((index + items.length - 1) % items.length)
  }
  const goForward = () => {
    setIndex((index + 1) % items.length)
  }

  const {
    indexName,
    character1,
    character2,
    stat1num,
    stat2num,
    stat1text,
    stat2text,
  } = items[index]

  return (
    <Col
      className="p-0 custom-carousel"
      xs={12}
      // md={{ offset: 5, span: 7 }}
    >
      <Carousel
        slide={true}
        indicators={false}
        controls={false}
        activeIndex={index}
      >
        {items.map((el, i) => {
          const styles = {
            background: `url(${el.src.childImageSharp.fluid.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }
          return (
            <Carousel.Item
              key={`carousel_item_` + i}
              className="carousel-image"
              alt={el.alt}
              style={{ ...styles }}
            ></Carousel.Item>
          )
        })}
      </Carousel>

      <div className="caro-text-panel">
        <div className="statistics">
          <div
            className="index-name"
            dangerouslySetInnerHTML={{ __html: indexName }}
          ></div>
          <div className="underbar"></div>
          <div className="statistic stat-1">
            <span className="character1">{character1}</span>
            <span className="number">{Number(stat1num).toLocaleString()}</span>
            <span className="character2">{character2}</span>
            <span className="text">{stat1text}</span>
          </div>

          <div className="statistic stat-2">
            <span className="character1">{character1}</span>
            <span className="number">{Number(stat2num).toLocaleString()}</span>
            <span className="character2">{character2}</span>
            <span className="text">{stat2text}</span>
          </div>
        </div>

        <div className="controls">
          <div className="eclipses">
            {items.map((itm, idx) => {
              const classes = index === idx ? "active" : ""
              const onClick = setIndex.bind(this, idx)
              return (
                <InlineSvg
                  key={idx}
                  onClick={onClick}
                  classes={classes}
                  type="eclipse"
                />
              )
            })}
          </div>

          <div className="arrows">
            <InlineSvg onClick={goBack} type="left-arrow-md" />
            <InlineSvg onClick={goForward} type="right-arrow-md" />
          </div>
        </div>
      </div>
    </Col>
  )
}

export default CustomCarousel
