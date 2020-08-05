import React, { useState } from "react"

import { Col, Row, Carousel } from "react-bootstrap"
// import portrait from "../images
import InlineSvg from "./inlineSvg";

import _ from "lodash"

const CustomCarousel = ({ items }) => {
  const [index, setIndex] = useState(0);

  const goBack = () => {
    setIndex((index + items.length - 1) % items.length);
  };
  const goForward = () => {
    setIndex((index + 1) % items.length);
  };

  const getCarousel = () => {

    return (
      <Carousel indicators={false} controls={false} activeIndex={index}>
        
        {items.map(({ src, alt }) => (
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={src}
              alt={alt}
            />
            <div className="shadow">other stuff</div>
          </Carousel.Item>
        ))}
        {/* <div className="shadow2">mo-other stuff</div> */}
      </Carousel>
    )
  }

  const { stat1num, stat2num, stat1text, stat2text } = items[index]

  return (
    <Col
      className="p-0 custom-carousel"
      xs={12}
      // md={{ offset: 5, span: 7 }}
    >
      <Carousel slide={true} indicators={false} controls={false} activeIndex={index}>
        {items.map(({ src, alt }, i) => (
          <Carousel.Item key={alt}>
            <img
              src={src}
              alt={alt}
            />
          </Carousel.Item>
        ))}
      </Carousel>

      <div className="caro-text-panel">

        <div className="statistics">
          <div className="statistic stat-1">
            <span className="number">{stat1num}</span>
            <span className="percent">%</span>
            <span className="text">{stat1text}</span>
          </div>

          <div className="statistic stat-2">
            <span className="number">{stat2num}</span>
            <span className="percent">%</span>
            <span className="text">{stat2text}</span>
          </div>
        </div>

        <div className="controls">
          <div className="eclipses">
            {items.map((itm, idx) => {
              const classes = (index === idx) ? "active" : ""
              const onClick = setIndex.bind(this, idx)
              return <InlineSvg onClick={onClick} classes={classes} type="eclipse" />
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
