import React from "react"

import { Row, Col } from "react-bootstrap"
import Menu from "./menu"
import Img from "gatsby-image"

const Hero = ({
  children,
  activePageId,
  imgSrc = false,
  wide = false,
  insertedContent,
  ...props
}) => {
  const getHero = () => {
    if (wide) {
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

          <Row>
            <Col className="color-section" xs={12}>
              <Row>
                <Col className="dallas-isd" xs={2} md={1}>
                  {/* <span className="text">DALLAS ISD</span> */}
                </Col>
                <Col className="p-0">
                  <div className="content">{children}</div>
                </Col>
              </Row>
              <Row>
                <Col className="p-0" xs={12}>
                  {!!imgSrc && (
                    <img
                      alt="todo draw from props"
                      src={imgSrc}
                      className="hero-image"
                    />
                  )}
                  {!!props.gatsbyImgSrc && (
                    <Img
                      alt={props.heroImageAlt}
                      fluid={props.gatsbyImgSrc.childImageSharp.fluid}
                      className={`image-section`}
                    />
                  )}
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
            <Img
              alt={props.heroImageAlt}
              fluid={props.gatsbyImgSrc.childImageSharp.fluid}
              className={`image-section`}
            />
          )}
        </div>
      </Col>
    )
  }
  // console.log("Hero no img, ", props)
  return <Row id="hero">{getHero()}</Row>
}

export default Hero
