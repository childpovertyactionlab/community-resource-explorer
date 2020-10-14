import React from "react"
import { Col } from "react-bootstrap"
import { Link } from "gatsby"
import clsx from "clsx"
import Img from "gatsby-image"

import CustomLink from "./customLink"

const PostTeaser = ({ ...props }) => {
  // console.log("PostTeaser, ", props)
  return (
    <Col
      className={clsx("post-section", "p-0", props.indx === 1 ? "second" : "")}
      key={props.path}
      xs={{ span: 10, offset: 1 }}
      md={{ span: 5, offset: props.indx === 0 ? 1 : 0 }}
    >
      {!!props.frontmatter.heroImage && (
        <Img
          alt={props.frontmatter.heroImageAlt}
          fluid={props.frontmatter.heroImage.childImageSharp.fluid}
          className="post-image p-0"
        />
      )}

      <div className="post-details p-0">
        <div className="post-title">
          <Link to={`/in-action/${props.frontmatter.path}`}>
            {props.frontmatter.title}
          </Link>
        </div>

        <div className="post-contents">{props.excerpt}</div>

        <CustomLink linkTo={`/in-action/${props.frontmatter.path}`}>
          Read post
        </CustomLink>
      </div>
    </Col>
  )
}

export default PostTeaser
