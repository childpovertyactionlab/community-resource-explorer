import React from "react"

import { Row, Col } from "react-bootstrap"
import Menu from "./menu"
import GatsbyImage from "./GatsbyImage"

const Hero = ({
  children,
  activePageId,
  imgSrc,
  wide = false,
  insertedContent,
  ...props
}) => {
  const getHero = () => {
    if (wide) {
      // TODO: simplify by removing appendage from hero
      const colorId = insertedContent ? "hero-appendage" : ""
      return (
        <Col xs={12} className="hero-wide">
          <Row>
            <Col className="menu-section p-0" xs={12}>
              <a className="logo-link" href="/">
                <span className="branding-mobile svg-base"></span>
              </a>

              <div className="branding-md-up">
                <a className="logo-link" href="/">
                  <span className="site-logo svg-base"></span>
                  <span className="site-title">
                    Community Resource Explorer
                  </span>
                </a>
              </div>

              <Menu activePageId={activePageId} />
            </Col>
          </Row>
          <Row className="inserted-section">{insertedContent}</Row>

          <Row id={colorId}>
            <Col className="color-section" xs={12}>
              <Row>
                <Col className="dallas-isd" xs={1} md={1}>
                  {/* <span className="text">DALLAS ISD</span> */}
                </Col>
                <Col className="p-0">
                  <div className="content">{children}</div>
                </Col>
              </Row>

              <Row>
                <Col xs={12} className="p-0">
                  <div className="image-section">
                    {!!imgSrc && (
                      <img alt="todo draw from props" src={imgSrc} />
                    )}
                    {!!props.gatsbyImgSrc && (
                      <GatsbyImage
                        filename={props.gatsbyImgSrc}
                        alt={props.heroImageAlt}
                      />
                    )}
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      )
    }
    return (
      <Col xs={12} className="hero-square p-0">
        <div className="color-section">
          <div className="branding">
            <a className="logo-link" href="/">
              <span className="site-logo svg-base"></span>
              <span className="site-title">Community Resource Explorer</span>
            </a>
          </div>

          <div className="content">{children}</div>
        </div>

        <div className="image-section">
          <div className="menu-section">
            <span className="site-logo-mobile svg-base"></span>
            <Menu activePageId={activePageId} />
          </div>

          {!!imgSrc && (
            <img
              alt="todo draw from props"
              src={imgSrc}
              className="hero-image"
            />
          )}
          {!!props.gatsbyImgSrc && (
            <GatsbyImage
              filename={props.gatsbyImgSrc}
              alt={props.heroImageAlt}
              className="hero-image"
            />
          )}
        </div>
      </Col>
    )
  }

  // console.log("Hero, ", props)

  return <Row id="hero">{getHero()}</Row>
}

export default Hero
