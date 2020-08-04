import React, { useState } from "react"

import { Col, Row, Carousel } from "react-bootstrap"
// import portrait from "../images

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

  return (
    <Col
      className="p-0 custom-carousel"
      xs={12}
      // md={{ offset: 5, span: 7 }}
    >
      <Carousel indicators={false} controls={false} activeIndex={index}>

        {items.map(({ src, alt, stat1num, stat2num, stat1text, stat2text, }, i) => (
          <Carousel.Item key={alt} className={"caro-slide slide-"+i}>
            <div className="caro-img-panel">
              <img
                src={src}
                alt={alt}
              />
            </div>
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
            </div>
          </Carousel.Item>
        ))}
        {/* <div className="shadow2">mo-other stuff</div> */}
      </Carousel>
    {/* <Col
      className="p-0 caro-slide-text"
      xs={6}
      // md={{ offset: 5, span: 7 }}
      >
      <div>{items[index].stat1num}</div>
      <div>{items[index].stat1text}</div>
      <div>{items[index].stat2num}</div>
      <div>{items[index].stat2text}</div>
      <div onClick={goBack}>L</div>
      <div onClick={goForward}>N</div>
    </Col> */}
    </Col>
  )
}

export default CustomCarousel
